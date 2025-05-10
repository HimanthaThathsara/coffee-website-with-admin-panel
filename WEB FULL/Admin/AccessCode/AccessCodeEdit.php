<?php
include('../Config/dbconnection.php');

if (isset($_POST['EditProductButton'])) {
    $productId = $_POST['ProductId'];
    $productName = $_POST['ProductName'];
    $productDescription = $_POST['ProductDescription'];
    $productCategory = $_POST['ProductCategory'];
    $badge = $_POST['Badge'];
    $price = $_POST['Price'];
    $offerPrice = $_POST['OfferPrice'];


    if (!empty($_FILES['Image']['name'])) {
        $image = $_FILES['Image']['name'];
        $target = "../UploadProduct/" . basename($image);
        move_uploaded_file($_FILES['Image']['tmp_name'], $target);
        $imageSql = ", Image='$image'";
    } else {
        $imageSql = "";
    }


    $sql = "UPDATE Products SET ProductName='$productName', ProductDescription='$productDescription', ProductCategory='$productCategory', Badge='$badge', Price='$price', OfferPrice='$offerPrice' $imageSql WHERE id='$productId'";
    if (mysqli_query($conn, $sql)) {
        header('Location: ../Product.php');
        exit();
    } else {
        echo "Error updating product: " . mysqli_error($conn);
    }
}
?>
