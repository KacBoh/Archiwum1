<?php
    header('Access-Control-Allow-Origin: http://localhost:5173');
    session_id('chuj');
    session_start();

    if (!isset($_SESSION['last_activity'])){
        echo "błąd";
        exit();
    }
    $_SESSION['last_activity'] = time();

    $filesDir = dirname(__DIR__). "\\php\\files\\". $_SESSION['username'];
    $files = scandir($filesDir);

    echo "Pliki Urzytkownika: " . $_SESSION['username'] . "<br/>";
    foreach ($files as $file){

        if (is_file(/*$_SESSION['userFolder'] . "/" .*/ $file)){
            echo basename($file) . "  ";
            //echo $file . " ";
        }elseif (basename($file) != "." | basename($file) != ".."){
            echo basename($file) . "(folder) ";
        }
    }
    exit();


