<?php
include('Config/dbconnection.php');

if (isset($_GET['id'])) {
    $productId = $_GET['id'];
    $sql = "SELECT * FROM Products WHERE id='$productId'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $product = mysqli_fetch_assoc($result);
        echo json_encode($product);
    } else {
        echo json_encode(['error' => 'Product not found']);
    }
}
?>
