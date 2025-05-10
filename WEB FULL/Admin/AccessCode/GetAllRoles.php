<?php
    include('Config/dbconnection.php');

    function GetAllRoles($table) {
        global $conn;
        $query = "SELECT * FROM $table";
        $result = mysqli_query($conn, $query);
        return $result;
    }
?>