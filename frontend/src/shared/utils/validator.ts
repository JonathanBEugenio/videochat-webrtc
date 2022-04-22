const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

const validateUsername = (username: string) => {
    return username.length > 2 && username.length < 13;
};

const validatePassword = (password: string) => {
    return password.length > 5 && password.length < 13;
}

export const validateLoginForm = (email: string, password: string) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = (email: string, username: string, password: string) => {
    const isEmailValid = validateEmail(email);
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isUsernameValid && isPasswordValid;
};