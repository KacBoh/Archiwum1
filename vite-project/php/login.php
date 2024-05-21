<?php
    header('Access-Control-Allow-Origin: http://localhost:5173');
    session_start();

    //////// Variables from Form //////////////////////////
    $login = $_POST['loginInput'];
    $passwd = $_POST['passwdInput'];

    /////// User Directory and Login //////////////////////
    $target_dir =  dirname(__DIR__,1) . "\\pliki\\" . $login;


    // checking if the directory connected with login exists
    if(file_exists($target_dir)){
        // setting correct directory for this user
        $_SESSION['userFolder'] = $target_dir;
    }else{
        echo "Błędny login";
        exit();
    }
    
    ////////// Password ////////////////////////////

    $passwdFile = "";
    //opening file with password
    if (file_exists($_SESSION['userFolder'] . "\\password.txt")){
        $passwdFile = fopen(($_SESSION['userFolder'] . "\\password.txt"),"r") or die("Nie można otworzyć pliku");
    }else{
        echo "Prosze skontaktować się z administatorem (Błąd nr.1)";
        exit();
    }


    //reading password
    $passwdFromFile = fread($passwdFile,filesize($target_dir . "\\password.txt"));
    
    // password check
    if($passwd === $passwdFromFile){
        $_SESSION['LogInStatus'] = true;
        $_SESSION['username'] = $login;
        echo true;
        exit();
    }else{
        echo "Błędne hasło";
        exit();
    }












    //$_SESSION['hash'] = $hash;
    

?>