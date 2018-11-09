   $(document).ready(function(){

    $('#userform').on('submit', (function (e) {
        e.preventDefault();
        $('#nameError').html('');
        $('#mailerror').html('');
        $('#numbererror').html('');
        $('#password_error').html('');
        $.ajax({
            url: "php/register.php",
            type: "POST",//request type can either be post,get,put,putch,delete
            contentType: false,
            data: new FormData(this),
            cache: false,
            processData: false,
            success: function (res) {
                console.log(res);
                //  alert(res.success);
                if (res.name) {
                    $('#nameError').html(res.name);

                }
                if (res.email) {
                    $('#mailerror').html(res.email);

                }
                if (res.number) {
                    $('#numbererror').html(res.age);

                }
                if (res.password) {
                    $('#passerror').html(res.password);

                }
            
                if (res.success) {
                    swal({
                        title: "Registered!",
                        // text: `${res.userDetails}`,
                        icon: "success",
                        button: "Go to Login!",
                    }).then(() => {
                        // swal(`redirecting!!`);
                        redirecting();
                    });
                }

            }
        });

    }));

   });
   $('#loginform').on('submit',(function (e) {
        e.preventDefault();
        $('#mailerror').html('');
        $('#passerror').html('');

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
       
