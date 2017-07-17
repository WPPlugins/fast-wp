<?php

namespace GeorgGriesser\WordPress\Velocious\Fast_WP\Pages;

class Main_Page
{

    public function init()
    {
        add_action('admin_menu', array($this, 'add_page'));
    }

    public function add_page()
    {
        $page_hook = add_menu_page('Fast WordPress', 'Fast WordPress', 'manage_options', 'fast-wp', array($this, 'render'));

        add_action('load-' . $page_hook, array($this, 'add_remaining_callbacks'));

        /*
        $page_hook = add_menu_page('Feedback Suite', 'Feedback Suite', 'manage_options', 'feedback-suite', array($this, 'render'), get_feedback_suite_plugin_dir_url('img/icon-color-16.png'));

        add_action('load-' . $page_hook, array($this, 'add_remaining_callbacks'));
        */
    }

    public function add_remaining_callbacks()
    {
        add_action('admin_head', array($this, 'add_js_variables'));

        add_action('admin_enqueue_scripts', array($this, 'add_styles'));
        add_action('admin_enqueue_scripts', array($this, 'add_scripts'));
    }

    public function add_styles()
    {
        wp_enqueue_style('fast-wp', get_velocious_assets_plugin_style_url('styles.css'));
    }

    public function add_js_variables()
    {
        printf(
            '
            <script type="text/javascript">
                var fastWPRestURL = %1$s;
                var fastWPNonce = %2$s;
            </script>
            ',
            json_encode( str_replace( parse_url( get_rest_url(), PHP_URL_SCHEME ) . ':', '',  get_rest_url() ), JSON_UNESCAPED_SLASHES),
            json_encode(wp_create_nonce('wp_rest'))
        );
    }

    public function add_scripts()
    {
        $angular_path = get_velocious_assets_plugin_dir_url('/angular/backend/dist/');

        //wp_register_script('fast_wp_systemjs.config.js', $angular_path . 'wp.systemjs.config.js', array(), get_fast_wp_version());
        //wp_localize_script('fast_wp_systemjs.config.js', 'fastWPAngularPath', $angular_path);

        $scripts = array(
            'inline.bundle.js',
            'polyfills.bundle.js',
            'styles.bundle.js',
            'vendor.bundle.js',
            'main.bundle.js',
            //'scripts.bundle.js'
        );

        foreach ($scripts as $script) {
            wp_enqueue_script($script, $angular_path . $script, array(), get_fast_wp_version(), true);
        }
    }

    public function render()
    {
        $template = '
            <app-root></app-root>
        ';

        printf($template
        );
    }
}