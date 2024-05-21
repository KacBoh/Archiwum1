<?php
session_id('chuj');
session_start();
header('Access-Control-Allow-Origin: *');

//echo session_save_path();
//session_regenerate_id(true);
//echo session_name();



//////// Variables from Form ////////////////////////
$login = $_POST['loginInput'];
$passwd = $_POST['passwdInput'];

//////////////////////////////////// Connection to database ///////////////////////////////////

$servername = 'localhost';

// catching error with connection
try {
    $connection  = new mysqli($servername, "root","","archiwum");
}catch (Exception $e){
    echo "Błąd łączenia z bazą " . $e;
    exit();
}

/////////////////////////////////// Checking data from form with data from database //////////////////

// catching errors with query execution or wrong login
try {
    $result = $connection->execute_query("SELECT * from users WHERE login = ?",[$login]);
    if ($result->num_rows !== 1){
        throw new Exception("Nieprawidołowe hasło");
    }
}catch(Exception $e){
    echo $e;
    exit();
}

// setting result from database to usable array
$result = $result->fetch_array();


// checking password
if ($result['password'] == $passwd){
    // setting session parameters after successful logIn

    $_SESSION['loginStatus'] = true;
    $_SESSION['username'] = strval($result['login']);
    $_SESSION['access_level'] = strval($result['access_level']);
    $_SESSION['last_activity'] = time();
    session_regenerate_id();
    session_write_close();

    // sending true value to pass the user to next page
    echo true;
    exit();
}else{
    echo "Błędne hasło";
    exit;
}

exit();


