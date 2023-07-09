$(document).ready(function() {

    $('#login').click(function() {

        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/api/login',
            data: {
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(data)
            {
                $('#loginError').css("display", "none");
                sessionStorage.setItem("isLogin", true);
                window.location.replace('./search.html');

            },
            error: function (request, status, error) {
                $('#loginError').css("display", "inline");
            }
        });

    });

});