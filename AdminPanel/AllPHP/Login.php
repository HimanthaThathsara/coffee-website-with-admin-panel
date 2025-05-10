<?php
session_start();

$users = [
    [
        'email' => 'admin@example.com',
        'password' => 'password123' 
    ]
];

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';


function verify_credentials($email, $password, $users) {
    foreach ($users as $user) {
        if ($user['email'] === $email && $user['password'] === $password) {
            return true;
        }
    }
    return false;
}

if (verify_credentials($email, $password, $users)) {
    $_SESSION['loggedin'] = true;
    $_SESSION['email'] = $email;


    header('Location: ../admin_panel.php');
    exit;
} else {

    header('Location: ../dashboard.html');
    exit;
}
?>
