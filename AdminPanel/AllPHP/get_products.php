<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$productsFile = 'products.json';
if (file_exists($productsFile)) {
    $products = json_decode(file_get_contents($productsFile), true);
    echo json_encode(['products' => $products]);
} else {
    echo json_encode(['products' => []]);
}
?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
