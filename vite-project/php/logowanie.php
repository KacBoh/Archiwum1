<?php
    //header('Access-Control-Allow-Origin: http://localhost:5173');
    session_start();

    //////// Variables from Form //////////////////////////
    $login = $_POST['loginInput'];
    $passwd = $_POST['passwdInput'];

    /////// User Directory and Login //////////////////////
    //setting target directory
    $target_dir =  dirname(__DIR__,1) . "\\pliki\\" . $login;

    // checking if the directory connected with login exists
    if(file_exists($target_dir)){
        echo "login git";
        // setting correct directory for this user
        $_SESSION['userFolder'] = $target_dir;
    }else{
        echo "not git";
        exit();
    }
    
    ////////// Password ////////////////////////////

    //opening file with password
    $file = fopen(($_SESSION['userFolder'] . "\\password.txt"),"r") or die("Nie można otworzyć pliku");

    //reading password
    $passwdFromFile = fread($file,filesize($target_dir . "\\password.txt"));
    
    // password check
    if($passwd === $passwdFromFile){
        echo "password git";
    }else{
        echo "chuj ci w dupe";
    }



    $hash = password_hash($passwd,PASSWORD_DEFAULT);








    //$_SESSION['hash'] = $hash;
    

?>