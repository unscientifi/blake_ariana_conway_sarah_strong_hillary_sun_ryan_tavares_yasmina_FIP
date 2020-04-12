<?php
define('ABSPATH', __DIR__);
define('ADMIN_PATH', ABSPATH . '/admin');
define('ADMIN_SCRIPT_PATH', ADMIN_PATH . '/scripts');

ini_set('display_errors', 1);
session_start();
require_once ABSPATH.'/config/database.php';
require_once ADMIN_SCRIPT_PATH.'/read.php';
require_once ADMIN_SCRIPT_PATH.'/login.php';
require_once ADMIN_SCRIPT_PATH.'/functions.php';
require_once ADMIN_SCRIPT_PATH.'/user.php';
