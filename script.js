var divLogin = document.getElementById('login-div');
var divSignup = document.getElementById('signup-div');
var buttonLeft = document.getElementById('btnLogin');
var buttonRight = document.getElementById('btnSignUp');
var iconAmmount = document.getElementById('i_ammount');
var iconTransaction = document.getElementById('i_transaction');
var iconHistory = document.getElementById('i_history');
var iconLoan = document.getElementById('i_loan');
var pAmmount = document.getElementById('p_ammount');
var pTransaction = document.getElementById('p_transaction');
var pHistory = document.getElementById('p_history');
var pLoan = document.getElementById('p_loan');
var divAmmount = document.getElementById('div_ammount');
var divTransaction = document.getElementById('div_transaction');
var divHistory = document.getElementById('div_history');
var divLoan = document.getElementById('div_loan');
var ammountDiv = document.getElementById('ammount_div');
var transactionDiv = document.getElementById('transaction_div');
var historyDiv = document.getElementById('history_div');
var loanDiv = document.getElementById('loan_div');

var check = true;
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
document.getElementById('main-logout').addEventListener('click', function(){
    window.close();
});
document.getElementById('drop-logout').addEventListener('click', function(){
    window.close();
});
document.getElementById('side_menu').addEventListener('click', function(){
    if(check){
        document.getElementById('drop_down_menu').style.display = "block";
        check = false;
    }else{
        document.getElementById('drop_down_menu').style.display = "none";
        check = true;
    }
    
});
iconAmmount.addEventListener('click', function(){
    pAmmount.style.display = "inline-block";
    pTransaction.style.display = "none";
    pHistory.style.display = "none";
    pLoan.style.display = "none";
    divAmmount.style.backgroundColor = "#ff6347";
    divLoan.style.backgroundColor = "#FFFFFF";
    divTransaction.style.backgroundColor = "#FFFFFF";
    divHistory.style.backgroundColor = "#FFFFFF";
    ammountDiv.style.display = "block";
    transactionDiv.style.display = "none";
    historyDiv.style.display = "none";
    loanDiv.style.display = "none";
});
iconTransaction.addEventListener('click', function(){
    pAmmount.style.display = "none";
    pHistory.style.display = "none";
    pLoan.style.display = "none";
    pTransaction.style.display = "inline-block";
    divTransaction.style.backgroundColor = "#ff6347";
    divAmmount.style.backgroundColor = "#FFFFFF";
    divLoan.style.backgroundColor = "#FFFFFF";
    divHistory.style.backgroundColor = "#FFFFFF";
    ammountDiv.style.display = "none";
    transactionDiv.style.display = "block";
    historyDiv.style.display = "none";
    loanDiv.style.display = "none";
});
iconHistory.addEventListener('click', function(){
    pAmmount.style.display = "none";
    pTransaction.style.display = "none";
    pHistory.style.display = "inline-block";
    pLoan.style.display = "none";
    divHistory.style.backgroundColor = "#ff6347";
    divAmmount.style.backgroundColor = "#FFFFFF";
    divLoan.style.backgroundColor = "#FFFFFF";
    divTransaction.style.backgroundColor = "#FFFFFF";
    ammountDiv.style.display = "none";
    transactionDiv.style.display = "none";
    historyDiv.style.display = "block";
    loanDiv.style.display = "none";
});
iconLoan.addEventListener('click', function(){
    pAmmount.style.display = "none";
    pTransaction.style.display = "none";
    pHistory.style.display = "none";
    pLoan.style.display = "inline-block";
    divLoan.style.backgroundColor = "#ff6347";
    divHistory.style.backgroundColor = "#FFFFFF";
    divAmmount.style.backgroundColor = "#FFFFFF";
    divTransaction.style.backgroundColor = "#FFFFFF";
    ammountDiv.style.display = "none";
    transactionDiv.style.display = "none";
    historyDiv.style.display = "none";
    loanDiv.style.display = "block";
});
