export const validationRegExp = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    numbersOnly: /^[0-9]{8}/,
    phoneNumberAM: /^\+?[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/,// For Armenian phone numbers only. Please use +374-11-11-11-11 or 374-11-11-11-11 syntax ;)
    fixedPhoneNumberAM: /^[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/, // For Armenian phone numbers only. Please use 010-11-11-11 syntax ;)
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,// Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number (without symbols ;)
}
export const isValidate = (type, value) => {
    switch ( type ) {
        case 'numbersOnly':
            return validationRegExp.numbersOnly.test(value)
        case 'email':
            return validationRegExp.email.test(value)
        default:
            return false
    }
}
