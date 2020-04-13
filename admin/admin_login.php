<?php 
    require_once '../load.php';

    $ip = $_SERVER['REMOTE_ADDR'];

    if(isset($_POST['submit'])){
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Log user in
            $message = login($username, $password, $ip);
        }else{
            $message = 'Please fill out the required field';
        }

        echo $message;
    }
?>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Page</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://use.typekit.net/ftx6gip.css">
</head>
<body>
    <section class="container-xl" id="loginPage">
        <div class="row text-center ">
            <div class="col-12 mt-5 p-5 bg-light rounded">
                <h2>projectplay admin login</h2>
                <?php echo !empty($message)? $message: ''; ?>
                <form class="p-3 w-75 mx-auto" id="loginForm" action="admin_login.php" method="post">
                    <div class="form-group">
                    <label class="font-weight-bold" for="username">Username</label>
                    <input type="text" class="form-control" name="username" id="username" value="">
                    </div>

                    <div class="form-group">
                    <label class="font-weight-bold" for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" value="">
                    </div>

                    <button name="submit" class="btn btn-outline-info">Log In</button>
                </form>

                <a href="../" class="btn btn-outline-info">Back to site</a>
            </div>
        </div>
    </section>
</body>

</html>
