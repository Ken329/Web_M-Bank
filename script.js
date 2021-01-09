var divLogin = document.getElementById('login-div');
var divSignup = document.getElementById('signup-div');
var myBtn = document.getElementById('loginToggle');
function signUp(){
    myBtn.style.right = "220px";
    divSignup.style.left = "150px";
    divLogin.style.left = "-450px";
    divLogin.style.display = "none";
    divSignup.style.display = "block";
}
function login(){
    myBtn.style.left = "219px";
    divSignup.style.left = "600px";
    divLogin.style.left = "150px";
    divSignup.style.display = "none";
    divLogin.style.display = "block";
}