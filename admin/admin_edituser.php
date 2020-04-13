<?php 
    require_once '../load.php';
    confirm_logged_in();

    $id = $_SESSION['user_id'];
    $user = getSingleUser($id);

    if(is_string($user)){
        $message = $user;
    }

    if(isset($_POST['submit'])){
        $fname = trim($_POST['fname']);
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        $email = trim($_POST['email']);

        $message = editUser($id, $fname, $username, $password, $email);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<section class="container-xl" id="loginPage">
            <div class="row text-center ">
                <div class="col-12 mt-5 p-5 bg-light rounded">
                    <h2>Edit User</h2>
                    <form class="p-3 w-75 mx-auto" action="admin_edituser.php" method="post">
                    <?php while($info = $user->fetch(PDO::FETCH_ASSOC)): ?>
                        <div class="form-group">
                        <label class="font-weight-bold" for="fname">First Name:</label>
                        <input type="text" class="form-control" name="fname" value="<?php echo $info['user_fname'];?>">
                        </div>

                        <div class="form-group">
                        <label class="font-weight-bold" for="username">Username:</label>
                        <input type="text" class="form-control" name="username" value="<?php echo $info['user_name'];?>">
                        </div>

                        <div class="form-group">
                        <label class="font-weight-bold" for="password">Password:</label>
                        <input type="text" class="form-control" name="password" value="<?php echo $info['user_pass'];?>">
                        </div>

                        <div class="form-group">
                        <label class="font-weight-bold" for="email">Email:</label>
                        <input type="text" class="form-control" name="email" value="<?php echo $info['user_email'];?>">
                        </div>
                    <?php endwhile;?>
                    <button type="submit" class="btn btn-outline-info" name="submit">Edit Account</button>
                </form>
                <a class="btn btn-outline-info" href="index.php">Back to dashboard</a>
                </div>
            </div>
        </section>  
</body>
</html>
