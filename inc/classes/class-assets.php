<?php

/**
 * 
 * File in which connect file's styles
 * 
 * @package nameTheme
 * 
 */

namespace nameTheme\Inc;

use nameTheme\Inc\Traits\Singleton;

class Assets
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
