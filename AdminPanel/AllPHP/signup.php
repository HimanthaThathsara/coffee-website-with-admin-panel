<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sign up</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/auth.css" rel="stylesheet">
</head>

<body>
    <div class="wrapper">
        <div class="auth-content">
            <div class="card">
                <div class="card-body text-center">

                    <h2 class="mb-4 text-muted">ADD AN ADMIN</h2>
                    <form name="registerForm" action="AllPHP/Register.php" method="post" onsubmit="return validateForm()">
                        <div class="mb-3 text-start">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name="name" class="form-control" placeholder="Enter Name" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" name="email" class="form-control" placeholder="Enter Email" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Password" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="confirm_password" class="form-label">Confirm password</label>
                            <input type="password" name="confirm_password" class="form-control" placeholder="Confirm password" required>
                        </div>
                        <div class="mb-3 text-start">
                            <div class="form-check">
                                <input class="form-check-input" name="confirm" type="checkbox" id="check1" required>
                                <label class="form-check-label" for="check1">
                                    I agree to the <a href="#" tabindex="-1">terms and policy</a>.
                                </label>
                            </div>
                        </div>
                        <button class="btn btn-primary shadow-2 mb-4" type="submit">Register</button>
                    </form>
                    <p class="mb-0 text-muted">Already have an account? <a href="login.html">Log in</a></p>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="AdminJS/Register.js"></script>

</body>


</html>