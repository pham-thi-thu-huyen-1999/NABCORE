<?php

namespace Nabacore\page_templates;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

abstract class Template_Base
{
    public static function load_and_render()
    {
        $instance = new static();
        $instance->register_control();
        $instance->render();
    }

    abstract public function register_control();

    abstract public function render();
}
