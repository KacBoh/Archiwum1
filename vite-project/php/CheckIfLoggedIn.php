<?php
session_id('chuj');
session_start();

header('Access-Control-Allow-Origin: *');

//echo ini_get('session.save_path');
//echo " " . session_name();


//if( isset( $_SESSION['counter'] ) ) {
//
//    $_SESSION['counter'] += 1;
//
//}else {
//
//    $_SESSION['counter'] = 1;
//
//}
//echo $_SESSION['counter'];

//$_SESSION['chuj'] = "chuj123";
//if (isset($_SESSION['username'])){
//    echo true;
//
//}else echo "chuj1";

if (isset($_SESSION['loginStatus'])){
    if ($_SESSION['loginStatus'] === true){
        echo true;
    }else echo "chuj2";
}else echo "chuj1";


exit();

//if($_SESSION['loginStatus'] != true){
//    echo false;
//}else{
//    echo true;
//}
//exit();

