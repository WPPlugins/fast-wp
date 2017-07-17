<?php

namespace GeorgGriesser\WordPress\Velocious\Fast_WP;

use GeorgGriesser\WordPress\Velocious\Fast_WP\Assets\Script;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Detectors\Script_Detector;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Detectors\Style_Detector;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Loaders\Script_Loader;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Loaders\Style_Loader;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Repositories\Repository;

class Api_Controller
{
    const CPT_NAME_ASSETS = 'fast-wp-assets';
    const CPT_NAME_STYLES = 'fast-wp-styles';
    const CPT_NAME_SCRIPTS = 'fast-wp-scripts';
    const TRANSIENT_NAME_ASSETS = 'fast-wp-assets-repository-transient';
    const TRANSIENT_NAME_STYLES = 'fast-wp-styles-repository-transient';
    const TRANSIENT_NAME_SCRIPTS = 'fast-wp-scripts-repository-transient';
    const ASSET_META_PREFIX = 'fast_wp_assets_meta_';

    public function __construct()
    {

    }

    public function init()
    {
        add_action('init', array($this, 'registerCustomPostTypes'));


        $this->startRepositories();

        add_action('plugins_loaded', array($this, 'startDetectors'));

        $this->startLoaders();

        add_action('wp_enqueue_scripts', array($this, 'register_load_css'));
    }

    public function registerCustomPostTypes()
    {
        $this->registerCustomPostType(self::CPT_NAME_ASSETS);
        $this->registerCustomPostType(self::CPT_NAME_STYLES);
        $this->registerCustomPostType(self::CPT_NAME_SCRIPTS);
    }

    private function registerCustomPostType($cpt_name)
    {
        $labels = array(
            'name' => _x($cpt_name, 'Post Type General Name', 'text_domain'),
            'singular_name' => _x($cpt_name, 'Post Type Singular Name', 'text_domain'),
            'menu_name' => __($cpt_name, 'text_domain'),
        );
        $args = array(
            'labels' => $labels,
            'supports' => array('title',),
            'hierarchical' => false,
            'public' => false,
            'show_ui' => false,
            'show_in_menu' => false,
            'menu_position' => 5,
            'show_in_admin_bar' => false,
            'show_in_nav_menus' => false,
            'can_export' => true,
            'has_archive' => false,
            'exclude_from_search' => true,
            'publicly_queryable' => false,
            'capability_type' => 'page',
        );
        register_post_type($cpt_name, $args);
    }

    private function startRepositories()
    {
        if (is_admin()) {

            // We need repositories to delete transients on post transitions
            $script_repository = new Repository(Api_Controller::CPT_NAME_SCRIPTS, Api_Controller::TRANSIENT_NAME_SCRIPTS);
            $script_repository->init();

            $style_repository = new Repository(Api_Controller::CPT_NAME_STYLES, Api_Controller::TRANSIENT_NAME_STYLES);
            $style_repository->init();
        }
    }

    public function startDetectors()
    {
        if (!is_admin() && !is_user_logged_in()) {
            $script_detector = new Script_Detector();
            $script_detector->init();

            $style_detector = new Style_Detector();
            $style_detector->init();
        }
    }

    private function startLoaders()
    {
        if (!is_admin()) {
            $script_loader = new Script_Loader();
            $script_loader->init();

            $style_loader = new Style_Loader();
            $style_loader->init();
        }
    }

    public function register_load_css() {
        $this->add_load_css();
    }

    private function add_load_css()
    {
        $style_repository = new Repository(Api_Controller::CPT_NAME_STYLES, Api_Controller::TRANSIENT_NAME_STYLES);
        $style_repository->init();

        $style_repository->load_assets();

        $async_styles = $style_repository->get_assets('load_async');

        if (!empty($async_styles)) {
            wp_register_script('loadCSS', get_velocious_assets_plugin_script_url('loadCSS.js'));
            wp_register_script('cssRelPreload', get_velocious_assets_plugin_script_url('cssrelpreload.js'), array('loadCSS'));
            wp_enqueue_script('cssRelPreload');
            $this->set_load_css_async();
        }
    }

    private function set_load_css_async()
    {
        $repository = new Repository(Api_Controller::CPT_NAME_SCRIPTS, Api_Controller::TRANSIENT_NAME_SCRIPTS);
        $repository->load_assets();

        $script = new Script('loadCSS');

        $repository->add_asset($script);
        $repository->get_asset('loadCSS')->set_load_inline(1);

        $script = new Script('cssRelPreload');

        $repository->add_asset($script);
        $repository->get_asset('cssRelPreload')->set_load_inline(1);
    }
}