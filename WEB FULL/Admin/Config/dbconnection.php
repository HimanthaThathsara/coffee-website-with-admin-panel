<?php

$host = "localhost";
$Username = "root";
$password = "";
$database = "loginadmin";

$conn = mysqli_connect($host,$Username,$password,$database);

if(!$conn){
    $_SESSION["message"] = "something wrong";
    header("Location:../404.php");
}
// else{
//     echo("CONNECTION IS GOOD");
// }

?>