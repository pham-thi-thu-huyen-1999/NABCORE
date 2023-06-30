<?php
namespace Nabacore\page_template;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class Page_Template_Manager
{
    private static $instance = false;

    private $templates = [];

    private $post_type_templates = [];

    /**
     * If an instance exists, this returns it.  If not, it creates one and
     * retuns it.
     *
     * @return bool|Page_Template_Manager|Plugin
     */
    public static function get_instance()
    {
        if (!self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * constructor
     */
    public function __construct()
    {
        add_action('init', [$this, 'init_callback'], PHP_INT_MAX); // to be the last, so users can still use add_page_template in their own init callback
    }

    /**
     * Add a page template
     * (should call before or during 'init')
     */
    public function add_page_template($key, $title, $path, $options = [])
    {
        $this->templates[$key] = [
            'key' => $key,
            'title' => $title,
            'path' => $path,
            'options' => array_merge([
                'post_types' => ['page'],
                'elementor' => false,
            ], $options),
        ];
    }

    /**
     * Do adding template hooks.
     * Triggered by 'init'.
     */
    public function init_callback()
    {
        // add templates to the select, for each post type
        foreach ($this->templates as $key => $v) {
            $options = $v['options'];
            $post_types = $options['post_types'];
            if ($options['elementor']) {
                $el_post_types = get_post_types_by_support('elementor');
                $post_types = array_merge($post_types, $el_post_types);
            }

            foreach ($post_types as $idx => $post_type) {
                $this->post_type_templates[$post_type] = $this->post_type_templates[$post_type] ?? [];
                array_push($this->post_type_templates[$post_type], $key);
            }
        }

        foreach ($this->post_type_templates as $post_type => $template_key) {
            add_filter("theme_{$post_type}_templates", $this->create_theme_templates_callback($post_type), 11, 1); // after elementor
        }

        // redirect custom template to specified file
        add_filter('template_include', [$this, 'template_include_callback'], 12); // after elementor
    }

    /**
     * create_theme_templates_callback
     * Return an anonymous function to be the callback function for 'theme_*_templates' hook.
     */
    private function create_theme_templates_callback($post_type)
    {
        return function ($templates) use ($post_type) {
            $template_keys = $this->post_type_templates[$post_type] ?? [];
            foreach ($template_keys as $k) {
                $key = $this->templates[$k]['key'];
                $title = $this->templates[$k]['title'];
                $templates[$key] = $title;
            }
            return $templates;
        };
    }

    /**
     * For unittest only
     */
    public function unittest_create_theme_templates_callback($post_type)
    {
        return $this->create_theme_templates_callback($post_type);
    }

    /**
     * Redirect custom page template to specified path
     */
    public function template_include_callback($template)
    {
        if (is_singular()) {
            $template_file = get_post_meta(get_the_ID(), '_wp_page_template', true);
            $found = $this->templates[$template_file] ?? null;
            if ($found) {
                $template = $found['path'];
            }
        }
        return $template;
    }
}
