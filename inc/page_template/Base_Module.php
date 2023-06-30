<?php
namespace Nabacore\page_template;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

abstract class Base_Module
{
    abstract public function init();
}
