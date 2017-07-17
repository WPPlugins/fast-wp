<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

use GeorgGriesser\WordPress\Velocious\Fast_WP;

require_once "autoloader.php";

$rest_api_controller = new Fast_WP\Rest_Api_Controller();
$rest_api_controller->delete_assets_rest();