<?php
    require_once '../load.php';

    if(isset($_GET['allusers'])) {
        $users = getAllUsers();
        echo $users;
    }