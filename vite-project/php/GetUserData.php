<?php

session_id('chuj');
session_start();
header('Access-Control-Allow-Origin: *');



$user = $_SESSION['username'];

echo $user;

exit();