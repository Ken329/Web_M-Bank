var divLogin = document.getElementById('login-div');
var divSignup = document.getElementById('signup-div');
var buttonLeft = document.getElementById('btnLogin');
var buttonRight = document.getElementById('btnSignUp');
function switchSignUp(){
    buttonRight.style.backgroundColor = "#ED4325";
    buttonLeft.style.backgroundColor = "#FDFBFB";
    divSignup.style.left = "150px";
    divLogin.style.left = "-450px";
    divLogin.style.display = "none";
    divSignup.style.display = "block";
}
function switchLogin(){
    buttonLeft.style.backgroundColor = "#ED4325";
    buttonRight.style.backgroundColor = "#FDFBFB";
    divSignup.style.left = "600px";
    divLogin.style.left = "150px";
    divSignup.style.display = "none";
    divLogin.style.display = "block";
}
function login(){
    var user = document.getElementById('login_username').value;
    var pass = document.getElementById('login_password').value;

    if(user == "" || pass == ""){
        alert("Do not leave any field empty");
    }else{
        if(user == "admin" && pass == "admin"){
            window.open("main.html", "null");
        }else{
            alert("Wrong username or password");
        }
    }
}
function signUp(){
    var user = document.getElementById('signup_username').value;
    var pass = document.getElementById('signup_password').value;

    if(user == "" || pass == ""){
        alert("Do not leave any field empty");
    }else{
        if(user == "newuser" && pass == "newuser"){
            window.open("main.html", "null");
        }else{
            alert("Wrong username or password");
        }
    }
}