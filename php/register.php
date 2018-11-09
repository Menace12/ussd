<?php
    error_reporting(0);
     include('connection.php');

    $name=$_POST['name'];
    $email=$_POST['email'];
    $number=$_POST['number'];
    $password=$_POST['pass'];
    $activation=$_POST['active'];
    $array=[];
  
    if(empty($name)==true){
       $array['name'].="Type something please";
        }
    if(empty($email)==true){
        $array['email'].="Type your email please";
    }
    if(empty($password)==true){
        $array['password'].="Type password please.";
    }
    
   if($array==null){
        $sql= ("INSERT INTO `users` (`name`, `email`,`phone`, `password`,`activeUser`) VALUES ( '$name','$email','$number', '$password','$activation')");
        $q= mysqli_query($dbc,$sql);
        if($q){
         $array['success'].="user created successfully";
        }else{
            $array['Query_error'].="Error is: ".mysqli_error($dbc);
        }
 
        $array['empty'].="there is no error";


       }
       else{$array['image_error'].="Please try again!";
     

       }
      
   header('Content-type: application/json');
   echo json_encode($array,JSON_PRETTY_PRINT);
?>