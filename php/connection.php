<?php
    define('HS', 'localhost');
    define('US', 'root');
    define('PS', '');
    define('DB', 'ussd');

    $dbc = mysqli_connect(HS, US, PS, DB) or die('Did not connect because of: '.mysqli_connect_error());
?>