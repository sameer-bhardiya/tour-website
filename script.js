const bar = document.getElementById('bar');
const nav = document.getElementById('navbar01');
const close = document.getElementById('close');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


function validation() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    var usercheck = /^[A-Za-z]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,6}$/;
    var numbercheck = /^[6789]{1}[0-9]{9}$/;

    if (usercheck.test(username)) {
        document.getElementById('errorname').innerHTML = " ";
    }
    else {
        document.getElementById('errorname').innerHTML = "invalid name";
        return false;
        
    }
    if (emailcheck.test(email)) {
        document.getElementById('erroremail').innerHTML = " ";
    }
    else {
        document.getElementById('erroremail').innerHTML = "invalid email";
        return false;
        
    }
    if (numbercheck.test(number)) {
        document.getElementById('errornumber').innerHTML = " ";
    }
    else {
        document.getElementById('errornumber').innerHTML = "invalid number";
        return false;
        
    }
}

