const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    const fname = form['FirstName'].value;
    const lname = form['LastName'].value;
    const mail = form['Email'].value;
    const pass = form['Password'].value;

    if (fname === '') {
        addErrorTo('FirstName', "First Name cannot be empty")
    } else {
        notError('FirstName')
    }
    
    if (lname === '') {
        addErrorTo('LastName', "Last Name cannot be empty")
    } else {
        notError('LastName')
    }

    if (mail === '') {
        addErrorTo('Email', "Email cannot be empty")
    } else {
        notError('Email')
    }

    if (pass === '') {
        addErrorTo('Password', "Password cannot be empty")
    } else {
        notError('Password')
    }



})

function addErrorTo (field, message) {
    const small = form[field].parentNode.querySelector('small')
    const targetform = form[field].parentNode
    small.innerText = message
    small.style.opacity = 1;
    targetform.classList.add('error')

}

function notError (field) {
    const small = form[field].parentNode.querySelector('small')
    const targetform = form[field].parentNode
    targetform.classList.remove('error')
    small.innerText = "";
}

// testing regEx (copy จาก stack)
// function checkEmail (email) {
//     const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//     return re.test(String(email).toLowerCase());
// }