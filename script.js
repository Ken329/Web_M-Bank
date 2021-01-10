var divLogin = document.getElementById('login-div');
var divSignup = document.getElementById('signup-div');
var buttonLeft = document.getElementById('btnLogin');
var buttonRight = document.getElementById('btnSignUp');
function signUp(){
    buttonRight.style.backgroundColor = "#ED4325";
    buttonLeft.style.backgroundColor = "#FDFBFB";
    divSignup.style.left = "150px";
    divLogin.style.left = "-450px";
    divLogin.style.display = "none";
    divSignup.style.display = "block";
}
function login(){
    buttonLeft.style.backgroundColor = "#ED4325";
    buttonRight.style.backgroundColor = "#FDFBFB";
    divSignup.style.left = "600px";
    divLogin.style.left = "150px";
    divSignup.style.display = "none";
    divLogin.style.display = "block";
}