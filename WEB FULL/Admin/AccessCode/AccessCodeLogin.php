<?php
session_start();
include("../Config/dbconnection.php");

if(isset($_POST["LoginButton"])){
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $Password = mysqli_real_escape_string($conn, $_POST['password']);

    $Login_query = "SELECT * FROM admins WHERE Email='$email' AND Password='$Password'";
    $Login_query_run = mysqli_query($conn, $Login_query);

    if(!$Login_query_run) {
        die("Query Failed: " . mysqli_error($conn));
    }

    if(mysqli_num_rows($Login_query_run) > 0){
        $_SESSION['auth'] = true;

        $userData = mysqli_fetch_array($Login_query_run);
        $Username = $userData['name'];
        $UserBadge = $userData['Badge']; // Has An error
        $Useremail = $userData['email'];

        $_SESSION['auth_user'] = [
            'name' => $Username,
            'Badge' => $UserBadge, // Has An error
            'email' => $Useremail
        ];

        $_SESSION['message'] = "Login Successfully";
        header('Location: ../AdminIndex.php');
        exit();
    } else {
        $_SESSION['message'] = "Invalid Credentials";
        header('Location: ../Login.php');
        exit();
    }
}
?>
