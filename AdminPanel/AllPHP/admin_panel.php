<?php
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: index.html');
    exit;
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Admin Panel</title>
</head>

<body>
    <h1>Welcome to the Admin Panel</h1>
    <p>You are logged in as <?php echo $_SESSION['email']; ?></p>
    <a href="logout.php">Logout</a>
</body>

</html>
