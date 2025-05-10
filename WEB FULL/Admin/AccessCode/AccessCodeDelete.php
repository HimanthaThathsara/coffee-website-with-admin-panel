<?php
include('../Config/dbconnection.php');

if (isset($_POST['DeleteProductButton'])) {
    $productId = $_POST['ProductId'];


    $query = "DELETE FROM Products WHERE id=?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $productId);

    if ($stmt->execute()) {
        $_SESSION['message'] = "Product deleted successfully.";
        $_SESSION['msg_type'] = "success";
    } else {
        $_SESSION['message'] = "Failed to delete product.";
        $_SESSION['msg_type'] = "danger";
    }

    $stmt->close();
    $conn->close();

    header("Location: ../Product.php");
    exit();
}



if (isset($_POST['DeleteAdminButton'])) {
    $adminId = $_POST['AdminId'];

    $query = "DELETE FROM admins WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $adminId);
    if ($stmt->execute()) {
        $_SESSION['message'] = "Admin deleted successfully!";
        $_SESSION['msg_type'] = "success";
    } else {
        $_SESSION['message'] = "Error deleting admin.";
        $_SESSION['msg_type'] = "danger";
    }

    header("Location: ../roles.php");
    exit();
}

?>
