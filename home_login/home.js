let signup = document.querySelector(".signup span").addEventListener("click", function() {
    window.location.href = "/signup/signup.html"
})

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitButton = document.querySelector('button[type="submit"]');

function checkInput() {
    if (username.value && password.value.length >= 8) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
}

username.addEventListener('input', checkInput);
password.addEventListener('input', checkInput);