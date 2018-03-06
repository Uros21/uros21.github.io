var username = document.getElementById('username');
var password = document.getElementById('password');
var logoDiv = document.getElementById('logo');
var logoImg = document.getElementById('logoImg');
var btn = document.getElementById('loginBtn');
var ok = true;
var userLogo = document.getElementById('userLogo');
var passwordLogo = document.getElementById('passwordLogo');

window.onload = function () {
    btn.addEventListener('click', provera);

}

function provera() {
    //Checking username field 
    if (username.value == "" || username.value === null) {
        username.style.borderBottomColor = 'orangered';
        userLogo.style.color = 'orangered';
        alert('Morate uneti username!');
        ok = false;
    } else
        ok = true;

    //Checking password field 
    if (password.value == "" || password.value == null) {
        password.style.borderBottomColor = 'orangered';
        passwordLogo.style.color = 'orangered';
        alert('Morate uneti password!');
        ok = false;
    } else
        ok = true;

    //Checking if everything is ok field 
    if (ok) {
        alert('Username: ' + username.value + '\n' + ' ' + 'Password: ' + password.value);
    } else {
        alert('Ima gresaka');
    }
};

//Referenca 
// logoImg.style.display='none';

//else{
// username.style.borderBottomColor='#303841';
// }

//alert('Username: ' +username.value + '\n' + ' ' + 'Password: ' +password.value);