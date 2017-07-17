<?php
/*
Plugin Name: Fast WordPress
Plugin URI:  https://www.velocious.io/plugins/fast-wp/
Description: Speed Up your WordPress page the easy way and optimize your site's assets.
Version:     1.0.3
Author:      Georg Griesser
Author URI:  https://www.georggriesser.com
License:     GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
*/

if (!defined('ABSPATH')) {
    exit;
}

// Create a helper function for easy SDK access.
function fw_fs() {
    global $fw_fs;

    if ( ! isset( $fw_fs ) ) {
        // Include Freemius SDK.
        require_once dirname(__FILE__) . '/freemius/start.php';

        $fw_fs = fs_dynamic_init( array(
            'id'                  => '1204',
            'slug'                => 'fast-wp',
            'type'                => 'plugin',
            'public_key'          => 'pk_76e41b1a72725b3520397402886b3',
            'is_premium'          => false,
            'has_addons'          => false,
            'has_paid_plans'      => false,
            'menu'                => array(
                'slug'           => 'fast-wp',
                'support'        => false,
            ),
        ) );
    }

    return $fw_fs;
}

// Init Freemius.
fw_fs();
// Signal that SDK was initiated.
do_action( 'fw_fs_loaded' );

use GeorgGriesser\WordPress\Velocious\Fast_WP;

require_once "autoloader.php";

$plugin = new Fast_WP\Api_Controller();
$plugin->init();

$pages = new Fast_WP\Page_Controller();
$pages->init();

$rest_api = new Fast_WP\Rest_Api_Controller();
$rest_api->init();


function get_velocious_assets_plugin_url()
{
    return plugins_url('', __FILE__);
}

function get_velocious_assets_plugin_dir_url($path = '')
{
    return plugins_url($path, __FILE__);
}

function get_velocious_assets_plugin_style_url($path = '') {
    return plugins_url('css/' . $path, __FILE__);
}

function get_velocious_assets_plugin_script_url($path = '') {
    return plugins_url('js/' . $path, __FILE__);
}

function get_fast_wp_version() {
    return get_plugin_data(__FILE__, false, false)['Version'];
}