<?php
include('../Config/dbconnection.php');

if (isset($_POST['EditAdminButton'])) {
    $adminId = $_POST['AdminId'];
    $role = $_POST['Role'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];
    $badge = $_POST['Badge'];

    $query = "UPDATE admins SET Role = ?, Email = ?, Password = ?, Badge = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssi", $role, $email, $password, $badge, $adminId);

    if ($stmt->execute()) {
        $_SESSION['message'] = "Admin updated successfully!";
        $_SESSION['msg_type'] = "success";
    } else {
        $_SESSION['message'] = "Error updating admin.";
        $_SESSION['msg_type'] = "danger";
    }

    header("Location: ../roles.php");
    exit();
}
?>
