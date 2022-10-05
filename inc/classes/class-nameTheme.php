<?php

/**
 * 
 * Main file in classes
 * 
 * @package nameTheme
 * 
 */

namespace nameTheme\Inc;

use nameTheme\Inc\Traits\Singleton;

class NAMETHEME
{

    use Singleton;

    protected function __construct()
    {
        Admin::get_instance();
        Assets::get_instance();
        Blocks::get_instance();
        RestApi::get_instance();
        Getters::get_instance();

        $this->set_hooks();
    }

    protected function set_hooks()
    {
    }
}
