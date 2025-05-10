<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['productName'];
    $price = $_POST['productPrice'];
    $offerPrice = $_POST['productOfferPrice'];
    $badge = $_POST['productBadge'];

    $uploadDir = 'C:/Users/himan/Downloads/bootstrap-simple-admin-template-main/bootstrap-simple-admin-template-main/assets/img/';
    $uploadFile = $uploadDir . basename($_FILES['productImage']['name']);

    if (move_uploaded_file($_FILES['productImage']['tmp_name'], $uploadFile)) {
        $imagePath = 'assets/img/' . basename($_FILES['productImage']['name']);

        $productsFile = 'products.json';
        if (!file_exists($productsFile)) {
            file_put_contents($productsFile, json_encode([]));
        }

        $products = json_decode(file_get_contents($productsFile), true);
        $products[] = [
            'name' => $name,
            'price' => $price,
            'offerPrice' => $offerPrice,
            'badge' => $badge,
            'imagePath' => $imagePath
        ];

        file_put_contents($productsFile, json_encode($products, JSON_PRETTY_PRINT));

        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
