<?php
    error_reporting(0);
include('connection.php');

     $email= $_POST['email'];
     $password= $_POST['password'];

    if(filter_var($email,FILTER_VALIDATE_EMAIL)==False){
        $array['email'].="That is not a valid email.";
    }

   if(empty($email)==true){
        $array['email'].="Type your email please.";
    }
    
    if(strlen($password)<6 || strlen($password)>10){
        $array['passwordlen'].="The password should be between 6 to 10 characters";
 }
    if(empty($password)==true){
  
        $array['password'].="Type password please.";
    }
    
    if($array==null){
        if(login($email)){
            $row= userdetails($email);
            // die($row);
            if(password_verify($password,$row['password'])==true){
                session_start();
                $_SESSION['email']=$row['id'];
                $_SESSION['pass']=password_hash($row['password'],PASSWORD_DEFAULT);
              $array['userDetails'].="logged in successfully as ".$row['fname'];
          }else{
              $array['customerror'].="incorrect credentials";
          }
             }else{
                    $array['customerror'].="user not found with email: $email";   
                }
        }
    header('Content-type: application/json');
    echo json_encode($array,JSON_PRETTY_PRINT);
     ?>
    
       