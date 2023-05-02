

export const validatorLogin = (email, password) => {
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password)
    return isMailValid && isPasswordValid
}

const validateEmail = (email) => {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return reg.test(String(email))
}
const validatePassword = (password) => {
    return password.length > 5 && password.length < 18
}