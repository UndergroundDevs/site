function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    if(!email.checkValidity()) {
        email.style.borderColor = "crimson"
        error.innerHTML = 'Email invalido';
    }
}

function redefinirMsg() {
    var error = document.querySelector('#error-email');
    var email = document.querySelector('#email').style.borderColor = "";
    if(error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}