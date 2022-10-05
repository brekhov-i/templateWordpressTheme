<?php

/**
 * 
 * File include all getters themes
 * 
 * @package nameTheme
 * 
 */

namespace nameTheme\Inc;

use nameTheme\Inc\Traits\Singleton;

class Getters
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
