<?php
session_id('chuj');
session_start();
header('Access-Control-Allow-Origin: *');

session_unset();
session_destroy();

include 'CheckIfLoggedIn.php';
exit();