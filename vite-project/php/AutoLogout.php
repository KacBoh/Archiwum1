<?php
session_start();
// deleting session if last request was more than 30 minutes ago
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 1800)) {
    session_destroy();
    session_unset();
    $_SESSION = array();
}


