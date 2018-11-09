   $(document).ready(function () {
    
    $('#loginform').on('submit', (function (e) {
        e.preventDefault();
        $('#email_error').html('');
        $('#password_error').html('');

        $.ajax({
            url: "php/login.php",
            type: "POST",
            contentType: false,
            data: new FormData(this),
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


    }));
});
