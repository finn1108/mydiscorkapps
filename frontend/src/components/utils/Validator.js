

export const validatorLogin = (email, password) => {
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password)
    return isMailValid && isPasswordValid
}

export const validatorRegister = (email, password, username) => {
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password)
    const isUsernameValid = validateUsername(username)
    return isMailValid && isPasswordValid && isUsernameValid
}

export const validateEmail = (email) => {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return reg.test(String(email))
}
const validatePassword = (password) => {
    return password.length > 5 && password.length < 18
}
const validateUsername = (username) => {
    return username.length > 5 && username.length < 15
}