document.getElementById('click_btn').addEventListener('click', function () {
    // email
    const emailField = document.getElementById('email_field');
    const email = emailField.value;
    // password
    const passField = document.getElementById('pass_field');
    const password = passField.value;


    if (email === 'abc@gmail.com' && password === 'bristy') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Not valid user')
    }

})