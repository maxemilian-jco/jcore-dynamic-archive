<?php
/**
 * Plugin Name: JCORE Dynamic Archive
 * Plugin URI: https://github.com/jco-digital/jcore-dynamic-archive
 * Description: JCORE Dynamic Archive module.
 * Version: 0.1.0
 * Author: JCO Digital
 * Author URI: https://jco.fi
 * Text Domain: jcore-dynamic-archive
 * Domain Path: /languages
 *
 * @package Jcore\DynamicArchive
 */

use Jcore\DynamicArchive\Bootstrap;

if ( is_file( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

Bootstrap::init();
