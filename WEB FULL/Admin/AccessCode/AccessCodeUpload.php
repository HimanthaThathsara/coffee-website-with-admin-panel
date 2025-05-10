<?php

session_start();
include('../Config/dbconnection.php');

if(isset($_POST["AddProductButton"])) {

    $ProductName = $_POST["ProductName"];
    $ProductDescription = $_POST["ProductDescription"];
    $ProductCategory = $_POST["ProductCategory"];
    $Badge = $_POST["Badge"];
    $Price = $_POST["Price"];
    $OfferPrice = $_POST["OfferPrice"];
    
    $Image = $_FILES["Image"]["name"];
    $Uploadpath = '../UploadProduct';

    $Image_ext = pathinfo($Image, PATHINFO_EXTENSION);
    $Image_name = time().'.'. $Image_ext;
}

$cate_quary = "INSERT INTO Products (ProductName,ProductDescription,ProductCategory,Badge,Price,OfferPrice,	Image) VALUES ('$ProductName','$ProductDescription','$ProductCategory','$Badge','$Price','$OfferPrice','$Image_name')";

$cate_quary_run = mysqli_query($conn, $cate_quary);

if($cate_quary_run) {
    move_uploaded_file($_FILES['Image']['tmp_name'],$Uploadpath.'/'.$Image_name)  ;
    $_SESSION['message'] = 'Product Add Successfully';
    $_SESSION['status'] = "success";
    header('Location:../Product.php');
}
else{
    $_SESSION['message'] = 'Product Not Add To The System';
    $_SESSION['status'] = "error";
    header('Location:../500.php');
}

?>