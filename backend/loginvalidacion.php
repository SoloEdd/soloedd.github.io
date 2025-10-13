<?php
$validemail = "admin@gmail.com";
$validpassword = "admin1234"; 

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST['email'];
    $password = $_POST['password'];

    if($email === $validemail && $password === $validpassword){
        echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso."]);
    } else {
        echo json_encode(["success" => false, "message" => "Credenciales inválidas."]);
    }
}


    