<?php 
    require_once '../load.php';
    confirm_logged_in();

    $users = getAllUsers();
    if(!$users){
        $message = 'Failed to get user list';
    }

    if(isset($_GET['id'])){
        $user_id = $_GET['id'];
        $delete_result = deleteUser($user_id);

        if(!$delete_result){
            $message = 'Failed to delete user';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete User</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <section class="container-xl" id="loginPage">
            <div class="row text-center">
                <div class="col-12 mt-5 p-5 bg-light rounded">
                <h2>Delete User</h2>
                <?php echo !empty($message)?$message:'';?>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php while($user = $users->fetch(PDO::FETCH_ASSOC)):?>
                        <tr>
                            <td><?php echo $user['user_id'];?></td>
                            <td><?php echo $user['user_name'];?></td>
                            <td><?php echo $user['user_email'];?></td>
                            <td><a  class="btn btn-outline-danger" href="admin_deleteuser.php?id=<?php echo $user['user_id'];?>">Delete</a></td>
                        </tr>
                    <?php endwhile;?>
                    </tbody>
                </table>
                <a class="btn btn-outline-info" href="index.php">Back to dashboard</a>

            </div>
        </div>
    </section>
</body>
</html>