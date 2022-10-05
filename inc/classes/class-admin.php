<?php

/**
 * 
 * File include settings admin part
 * 
 * @package nameTheme
 * 
 */

namespace nameTheme\Inc;

use nameTheme\Inc\Traits\Singleton;

class Admin
{

    use Singleton;

    protected function __construct()
    {
        $this->set_hooks();
    }

    protected function set_hooks()
    {
    }
}
