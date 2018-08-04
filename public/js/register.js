
let errorColor = '#FA403C';

const firstNameIDs = {
    inputField: document.getElementById('firstname_inline'),
    label: document.getElementById('firstname-label'),
    helpertext: document.getElementById('firstname-helper-text')
}

const lastNameIDs = {
    inputField: document.getElementById('lastname_inline'),
    label: document.getElementById('lastname-label'),
    helpertext: document.getElementById('lastname-helper-text')
}


const emailIDs = {
    inputField: document.getElementById('emailaddress_inline'),
    label: document.getElementById('emailaddress-label'),
    helpertext: document.getElementById('emailaddress-helper-text')
}


const phoneIDs = {
    inputField: document.getElementById('phonenumber_inline'),
    label: document.getElementById('phonenumber-label'),
    helpertext: document.getElementById('phonenumber-helper-text')
}

const passwordIDs = {
    inputField: document.getElementById('password_inline'),
    label: document.getElementById('password-label'),
    helpertext: document.getElementById('password-helper-text')
}

const password2IDs = {
    inputField: document.getElementById('confirmpassword_inline'),
    label: document.getElementById('confirmpassword-label'),
    helpertext: document.getElementById('confirmpassword-helper-text')
}


let errors = {}

let newUser = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: ''
}

firstNameIDs.inputField.onkeyup = function() {onChange("firstname_inline")};
lastNameIDs.inputField.onkeyup = function() {onChange("lastname_inline")};
emailIDs.inputField.onkeyup = function() {onChange("emailaddress_inline")};
phoneIDs.inputField.onkeyup = function() {onChange("phonenumber_inline")};
passwordIDs.inputField.onkeyup = function() {onChange("password_inline")};
password2IDs.inputField.onkeyup = function() {onChange("confirmpassword_inline")};


function showErrors(object, error){
    let { inputField, label, helpertext } = object;
    inputField.style.borderBottom = `1px solid ${errorColor}`;
    inputField.style.boxShadow = `0 1px 0 0 ${errorColor}`
    label.style.color = errorColor;
    helpertext.style.color = errorColor;
    helpertext.innerHTML = error;
    errors[error] = error;
    console.log(errors)
}


function onChange(id) {
    let e = document.getElementById(id);
    let name = e.name;
    let value = e.value;
    newUser[name] = value
    console.log(newUser)
}

function onSubmit(){
 axios.post(`api/users/register`, newUser)
    .then(res => {
         window.location.href = '/discover'
    })
    .catch(err => {
        let { firstname, lastname, phone, email, password, password2 } = err.response.data;
        if(firstname){
            showErrors(firstNameIDs, firstname)
        }
        if(lastname){
            showErrors(lastNameIDs, lastname)
        }
        if(email){
            showErrors(emailIDs, email)
        }
        if(phone){
            showErrors(phoneIDs, phone)
        }
        if(password){
            showErrors(passwordIDs, password)
        }
        if(password2){
            showErrors(password2IDs, password2)
        }
    });
}