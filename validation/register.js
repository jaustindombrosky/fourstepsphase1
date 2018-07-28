const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validationRegisterInput(data){
    let errors = {};

    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validator.isLength(data.firstname, {min: 2, max: 30})) {
        errors.firstname = 'First name must be between 2 and 30 characters';
    }

    if(!Validator.isLength(data.lastname, {min: 2, max: 30})) {
        errors.lastname = 'Last Name must be between 2 and 30 characters';
    }

    if(!Validator.isLength(data.phone, {min: 2, max: 30})) {
        errors.phone = 'Phone must be between 2 and 30 characters';
    }

    
    if(Validator.isEmpty(data.firstname)) {
        errors.firstname = "First Name field is required"
    }

        
    if(Validator.isEmpty(data.lastname)) {
        errors.lastname = "Last Name field is required"
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }


    if(Validator.isEmpty(data.phone)) {
        errors.phone = "Phone field is required"
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be at least 6 characters"
    }


    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required"
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match"
    }

    return  {
        errors,
        isValid: isEmpty(errors)
    };
};