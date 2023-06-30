<?php
namespace Nabacore\page_template;



if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}



class Module extends Base_Module
{
    private static $templates = [
        'Nabcore_Home_Page' => [
            'title' => 'Nabcore Home Page Template',
            'options' => []
        ]
    ];

    public function init()
    {
        $pagetmplman = Page_Template_Manager::get_instance();
        $templates = $this->get_templates();
        foreach ($templates as $key => $cnf) {
            $pagetmplman->add_page_template($key, $cnf['title'], $cnf['path'], $cnf['options']);
        }
    }

    public function get_templates(): array
    {
        $result = [];
        foreach (self::$templates as $key => $args) {
            $result[$key] = [
                'title' => $args['title'] ?? $key,
                'path' => NABCORE_COMPONENTS_DIR . "/page-templates/{$key}.php",
                'options' => $args['options'] ?? [],
            ];
        }
        return $result;
    }
}
