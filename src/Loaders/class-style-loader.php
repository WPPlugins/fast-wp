<?php

namespace GeorgGriesser\WordPress\Velocious\Fast_WP\Loaders;

use GeorgGriesser\WordPress\Velocious\Fast_WP\Api_Controller;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Assets\Asset;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Assets\Script;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Repositories\Repository;

class Style_Loader extends Asset_Loader
{

    /**
     * Post Type used by asset
     *
     * @var string $post_type
     */
    protected $post_type = Api_Controller::CPT_NAME_STYLES;

    /**
     * Name for fitting repositories transient
     *
     * @var string $transient_name
     */
    protected $transient_name = Api_Controller::TRANSIENT_NAME_STYLES;


    public function init()
    {
        add_action('wp_enqueue_scripts', array($this, 'load_inline'), PHP_INT_MAX - 1); // we need the registered style, which load_remove will deque
        add_action('wp_enqueue_scripts', array($this, 'load_async'), PHP_INT_MAX - 1); // we need the registered style, which load_remove will deque
        add_action('wp_enqueue_scripts', array($this, 'load_remove'), PHP_INT_MAX);
    }


    public function load_inline()
    {
        $asset_slugs = $this->get_asset_slugs('load_inline');

        foreach ($asset_slugs as $asset_slug) {

            $src = wp_styles()->query($asset_slug)->src;

            if (empty($src)) {
                return;
            }

            $this->render_inline($src);
        }
    }

    private function render_inline($src)
    {
        echo sprintf('<style>%1$s</style>', file_get_contents($src)) . "\n";
    }


    public function load_async()
    {
        $asset_slugs = $this->get_asset_slugs('load_async');

        foreach ($asset_slugs as $asset_slug) {

            $src = wp_styles()->query($asset_slug)->src;

            echo sprintf('<link rel="preload" href="%1$s" as="style" onload="this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="%1$s"></noscript>',
                $src
            );
        }
    }

    public function load_remove()
    {
        // Include the others, as we want them to be removed too
        $asset_slugs = array_merge(
            $this->get_asset_slugs('load_inline'),
            $this->get_asset_slugs('load_async'),
            $this->get_asset_slugs('load_remove')
        );

        foreach ($asset_slugs as $asset_slug) {
            wp_deregister_style($asset_slug);
        }
    }
}