const submitBtn = document.querySelector('#contact-section');
const resetBtn = document.querySelector('#contact-section');
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

submitBtn.addEventListener('submit', (e)=> {
    e.preventDefault();
    let getData = {
        fullName: fullName.value,
        email: email.value,
        message: message.value
    }
    console.log(getData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email Sent');
            fullName.value = '';
            email.value = '';
            message.value = '';
        } else {
            alert('Something Went Wrong');
        }
    }

    xhr.send(JSON.stringify(getData));
});

resetBtn.addEventListener('reset', (e)=> {
    e.preventDefault();
    let resetData = {
        fullName: '',
        email: '',
        message: ''
    }
    console.log(resetData);
});