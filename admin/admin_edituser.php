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
</head>
<body>
    <h2>Edit User</h2>
    <?php echo !empty($message)? $message : '';?>
    <form action="admin_edituser.php" method="post">
        <?php while($info = $user->fetch(PDO::FETCH_ASSOC)): ?>
            <label>First Name:</label>
            <input type="text" name="fname" value="<?php echo $info['user_fname'];?>"><br><br>

            <label>Username:</label>
            <input type="text" name="username" value="<?php echo $info['user_name'];?>"><br><br>

            <label>Password:</label>
            <input type="text" name="password" value="<?php echo $info['user_pass'];?>"><br><br>

            <label>Email:</label>
            <input type="text" name="email" value="<?php echo $info['user_email'];?>"><br><br>
        <?php endwhile;?>
        <button type="submit" name="submit">Edit Account</button>
    </form>
</body>
</html>
