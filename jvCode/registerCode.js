

$().ready(function () {

    $("form[name='registration']").validate({
        rules: {
            fullname: {
                pattern: '^([a-zA-Z]+\\s)*[a-zA-Z]+$',
                required: true,
                checkFullName: true,
                //wordCount: 2,
            },
            username: {
                pattern: '^[a-zA-Z0-9]*$',
                required: true,
                minlength: 2
            },
            password: {
                pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{8,200}$',
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            dt: {
                date: true,
                required: true,
            },
        },
        messages: {
            fullname: {
                pattern: "Your name must be contains only letters",
                required: "Please enter your first and last name",
                checkFullName: "Please enter at least 2 words"
                //wordCount: "Please enter at least 2 words"
            },
            username: {
                pattern: "Your user name must be contains only letters and numbers",
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                pattern: "You have to insert both numbers and letters",
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            email: {
                required: "Please enter a valid email address",
                email: "Wrong email format",
            },
        },

        
        //just if submitted without errors keep to create an account
        submitHandler: function(form) {
            form.submit();
            if(saveUser()==true){
                //functionHide('gameSection');
                LoginPage();
            }
            else{
                alert("This username is already exist") 
            }
            //document.getElementById("dataRegister").style.display = "none";
            //document.getElementById("dataLogin").style.display = "block";
            //var element = document.getElementById("myDIV");
            //element.classList.toggle("mystyle");
        }

    });
});

 /*valid full name*/
/// jQuery.validator.addMethod("checkFullName", function (value, element) {
 //   return /^[^0-9]+$/.test(value);
 // }),

function saveUser() {
    let userName = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;
    //const userFullName = document.getElementById("fullname").value;
    //const userMail = document.getElementById("email").value;
    //const userBirthDay = document.getElementById("dt").value;
    
    let user={userName,userPassword};
    addUser(user);
    return true;
}