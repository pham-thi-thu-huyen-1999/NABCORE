<?php
/**
 * Plugin Name:       Pineapple Nabcore Components
 * Description:       Plugin extend graphic for nabcore.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pineapple-nabcore-components
 */

define('NABCORE_COMPONENTS_URL',plugin_dir_url( __FILE__ ) );
define('NABCORE_COMPONENTS_DIR',plugin_dir_path( __FILE__ ) );

ob_start();
require __DIR__ . '/vendor/autoload.php';
ob_end_clean();

use Nabacore\init\Init;


new Init();


add_action('init', function() {
    require_once( __DIR__ . '/inc/page_template/Page_Tempplate.php' );
});
