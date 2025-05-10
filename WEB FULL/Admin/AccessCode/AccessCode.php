<?php

include("../Config/dbconnection.php");
if(isset($_POST["RegisterButton"])){
    $Role =mysqli_real_escape_string($conn,$_POST['Role']);
    $email =mysqli_real_escape_string($conn,$_POST['email']);
    $Badge =mysqli_real_escape_string($conn,$_POST['Badge']);
    $Password =mysqli_real_escape_string($conn,$_POST['Password']);
    $ConfirmPassword =mysqli_real_escape_string($conn,$_POST['ConfirmPassword']);


    if($Password == $ConfirmPassword){
        $insert_quary = "INSERT INTO admins (Role,Email,Badge,Password) VALUES ('$Role', '$email', '$Badge', '$Password')";
        $insert_quary_run = mysqli_query($conn,$insert_quary);

        if($insert_quary_run){
            $_SESSION['message'] = "REGISTRATION IS SUCCESSFUL";
            $_SESSION['status'] = "success";
            header('Location: ../roles.php');
        }
        else{
            $_SESSION['message'] = "REGISTRATION IS NOT SUCCESSFUL";
            $_SESSION['status'] = "error";
            header('Location: ../500.php');
        }
    }
    else{
        $_SESSION['Message'] = "Error";
        $_SESSION['status'] = "error";
        header("Location : ../roles.php");
    }

}   

?>