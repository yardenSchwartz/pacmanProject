
$().ready(function () {

    $("form[name='loginForm']").validate({
        rules: {
            loginUserName: {
                pattern: '^[a-zA-Z0-9]*$',
                required: true,
                minlength: 2
            },
            loginPassword: {
                pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{8,200}$',
                required: true,
                minlength: 6,
            },
        },
        messages: {
            loginUserName: {
                pattern: "Your user name must be contains only letters and numbers",
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            loginPassword: {
                pattern: "You have to insert both numbers and letters",
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
        },

        
        //just if submitted without errors keep to create an account
        submitHandler: function(form) {
            form.submit();
            let userName = document.getElementById("loginUserName").value;
            let userPassword = document.getElementById("loginPassword").value;
            let user={userName,userPassword};
            
            if(containUser(user)){//succsess login
                //move to game page
                moveTo("gameSection");
            }
            else{
                alert("wrong details, try again or first register")      
            }
        }

    });
});
