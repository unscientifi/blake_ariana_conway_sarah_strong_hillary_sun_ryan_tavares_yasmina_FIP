<?php
    require_once '../load.php';
    confirm_logged_in();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<section class="container-xl">
        <div class="row">
            <div class="col-12 mt-5 p-5 bg-light rounded">
                <h2>Welcome <?php echo $_SESSION['user_name'];?>!</h2>
                    <a class="btn btn-outline-info" href="admin_createuser.php">Create User</a>
                    <a class="btn btn-outline-info" href="admin_edituser.php">Edit User</a></li>
                    <a class="btn btn-outline-info" href="admin_deleteuser.php">Delete User</a>
                    <a class="btn btn-outline-info" href="admin_logout.php">Sign Out</a>
            </div>
        </div>
    </section>
</body>
</html>