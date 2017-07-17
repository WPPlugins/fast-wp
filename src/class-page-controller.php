<?php

namespace GeorgGriesser\WordPress\Velocious\Fast_WP;

use GeorgGriesser\WordPress\Velocious\Fast_WP\Pages\Main_Page;

class Page_Controller
{

    public function init()
    {
        $main_page = new Main_Page();
        $main_page->init();
    }
}