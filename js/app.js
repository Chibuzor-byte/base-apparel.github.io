const email = document.getElementById('email');
const button = document.getElementById('btn--cta');
const error = document.getElementById('error-para');
const errorMessage = document.getElementById('error');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    


    if (email.value === '' || email.value == null) {
        error.textContent = 'Please provide a valid email';
        errorMessage.style.display = 'block';


    } else {
        error.textContent = '';
        errorMessage.style.display = 'none';
    }


})