<?php
    $username = $_POST['signUpUsername'];
    $password = $_POST['signUpPassword'];

    $conn = new mysqli('localhost', 'root', '', 'bank');
    if($conn->connect_error){
        die('Connection failed: ' .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into user(username, password)values(?,?)");
        $stmt->bind_param("ss", $username,  $password);
        $stmt->execute();
        echo "Successful adding new user";
        
    }
?>