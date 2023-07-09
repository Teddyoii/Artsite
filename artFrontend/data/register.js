$(document).ready(function() {

    $('#register').click(function() {

        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/api/registerUser',
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(data)
            {
                $('#registerError').css("display", "none");
                sessionStorage.setItem("isLogin", true);
                window.location.replace('./search.html');

            },
            error: function (request, status, error) {
                $('#registerError').css("display", "inline");
            }
        });

    });

});