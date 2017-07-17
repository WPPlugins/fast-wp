<?php

namespace GeorgGriesser\WordPress\Velocious\Fast_WP\Loaders;

use GeorgGriesser\WordPress\Velocious\Fast_WP\Api_Controller;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Assets\Asset;
use GeorgGriesser\WordPress\Velocious\Fast_WP\Repositories\Repository;

abstract class Asset_Loader {

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


    protected function get_asset_slugs($type = '')
    {
        $repository = new Repository($this->post_type, $this->transient_name);
        $repository->init();
        $repository->load_assets();

        $assets = $repository->get_assets($type);

        $asset_slugs = array();

        foreach ($assets as $asset) {
            $asset_slugs[] = $asset->get_slug();
        }

        return $asset_slugs;
    }
}