<?php
session_start();
if (!isset($_SESSION['auth']) || $_SESSION['auth'] !== true) {
    header('Location: Login.php');
    exit();
}
?>

<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin Management</title>
    <link href="assets/vendor/fontawesome/css/fontawesome.min.css" rel="stylesheet">
    <link href="assets/vendor/fontawesome/css/solid.min.css" rel="stylesheet">
    <link href="assets/vendor/fontawesome/css/brands.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/DataTables/datatables.min.css" rel="stylesheet">
    <link href="assets/css/master.css" rel="stylesheet">
</head>

<body>
    <div class="wrapper">
        <!-- sidebar navigation component -->
        <?php include ('PHPcomponent/SideBar.php') ?>

        <div id="body" class="active">
            <!-- navbar navigation component -->
            <?php include('PHPcomponent/Navbar.php') ?>
            <!-- Role Table component -->
            <?php include('PHPcomponent/Roles.php') ?>
        </div>

        <!-- message alert -->
        <?php include('PHPcomponent/Welcome.php') ?>

        <?php if(isset($_SESSION['message'])): ?>
            <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 10; right: 0; bottom: 0;">
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="3000">
                    <div class="toast-header">
                        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#007aff"></rect>
                        </svg>
                        <strong class="me-auto">Notification</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        <?php echo $_SESSION['message']; ?>
                    </div>
                </div>
            </div>
            <?php unset($_SESSION['message']); unset($_SESSION['status']); ?>
        <?php endif; ?>

        <?php if(!isset($_SESSION['status']) || $_SESSION['status'] != "success"): ?>
            <!-- message alert -->
            <?php include('PHPcomponent/Welcome.php') ?>
        <?php endif; ?>

    </div>

    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/initiate-toast.js"></script>
    <script src="assets/vendor/datatables/datatables.min.js"></script>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/EditRoles.js"></script>
    
</body>

</html>