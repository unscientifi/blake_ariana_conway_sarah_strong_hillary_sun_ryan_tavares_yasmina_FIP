<?php 
require_once '../load.php';
confirm_logged_in();

if(isset($_POST['submit'])){
    $fname = trim($_POST['fname']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $email = trim($_POST['email']);

    if(empty($email) || empty($password) || empty($username) || empty($fname)){
        $message = 'Please fill the required fields';
    }else{
        $message = createUser($fname, $username, $password, $email);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create User</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <section class="container-xl" id="loginPage">
            <div class="row text-center ">
                <div class="col-12 mt-5 p-5 bg-light rounded">
                    <h2>Create a new user</h2>
                    <?php echo !empty($message)? $message: ''; ?>
                    <form class="p-3 w-75 mx-auto" action="admin_createuser.php" method="post">
                        <div class="form-group">
                            <label class="font-weight-bold" for="fname">First Name</label>
                            <input type="text" class="form-control" name="fname" value="">
                        </div>

                        <div class="form-group">
                            <label class="font-weight-bold" for="username">Username</label>
                            <input type="text" class="form-control" name="username" id="username" value="">
                        </div>

                        <div class="form-group">
                            <label class="font-weight-bold" for="password">Password</label>
                            <input type="password" class="form-control" name="password" id="password" value="">
                        </div>

                        <div class="form-group">
                            <label class="font-weight-bold" for="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" value="">
                        </div>

                        <button name="submit" class="btn btn-outline-info">Create User</button>
                    </form>

                    <a class="btn btn-outline-info" href="index.php">Back to dashboard</a>
                </div>
            </div>
        </section>    
</body>
</html>