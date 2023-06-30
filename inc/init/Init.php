<?php
namespace Nabacore\init;

Class Init{

   function __construct(){
       add_action( 'wp_enqueue_scripts', [$this,'register_script_front_end'], 999 );
       add_action('wp_head',array( $this, 'add_script_to_fe' ));
   }

    function register_script_front_end() {
        wp_register_script('shri_frontend', NABCORE_COMPONENTS_URL.'dist/bundle.js', array(), false, true);
        wp_enqueue_script('shri_frontend');
    }

    function add_script_to_fe(){
       $template = get_page_template_slug();
       if($template === "Nabcore_Home_Page"){

           $array_init = [
               'masthead' => [
                   'heading' => get_field('heading_masthead'),
                   'description' => get_field('description_masthead'),
                   'image' => get_field('image_masthead'),
                   'button' => get_field('button_masthead'),
               ],
               'introducing' => [
                   'sub_heading' => get_field('sub_heading_introducing'),
                   'heading' => get_field('heading_introducing'),
                   'description' => get_field('description_introducing'),
                   'button' => get_field('button_introducing'),
               ],
               'slider_text' => get_field('slide'),
               'our_services' => get_field('accordion'),
               'business_outcome' => [
                   'image' => get_field('image_outcome'),
                   'testimonials' => get_field('testimonials'),
               ],
               'number_section' => [
                   'testimonials' => get_field('number_section'),
               ],
               'asia_brand_protect_system' => [
                   'heading' => get_field('heading_system'),
                   'sub_text_system' => get_field('sub_text_system'),
                   'image_system' => get_field('image_system'),
                   'bullet' => [
                       get_field('bullet_1'),
                       get_field('bullet_2'),
                       get_field('bullet_3'),
                   ],
                   'button' => get_field('button'),
                   'image_fixed' => get_field('image_fixed'),
                   'accordion_list' => get_field('accordion_list')
               ],
               'markets_we_serve' => get_field('markets_we_serve'),
               'award' => get_field('award'),

           ];
           $script = ' var apiObject = ' . wp_json_encode(
                   $array_init) . ';';
           if ( ! empty( $data ) ) {
               $script = "$data\n$script";
           }
           echo "\n<script type=\"text/javascript\">\n $script; \n</script>\n";
       }
        $pluginDir = NABCORE_COMPONENTS_URL;
        echo "\n<script type=\"text/javascript\">\n var pluginDir = '$pluginDir'; \n</script>\n";
    }
}
