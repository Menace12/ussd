function login(){

   

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    swal(email+'  '+password);

    var formData = {
        "email":email,
        "password":password
    };

    $.ajax({
        url: "php/login.php",
        type: "POST",
        contentType: false,
        data: formData,
        cache: false,
        processData: false,
        success: function (res) {
            console.log(res);
            // alert(res.success);
            if (res.email) {
                $('#email_error').html(res.email);

            }
            if (res.password) {
                $('#password_error').html(res.password);
            }
            if (res.passwordlen) {
                $('#length_error').html(res.passwordlen);

            }
            if (res.customerror) {

                swal({
                    title: "Login Error!",
                    text: `${res.customerror}`,
                    icon: "error",
                    button: "Ok.",
                })
            }
            if (res.userDetails) {
                swal({
                    title: "Login!",
                    text: `${res.userDetails}`,
                    icon: "success",
                    button: "Go to Profile!",
                }).then((value) => {
                    // swal(`redirecting!!`);
                    redirecting();
                });
            }
        }
    });
}