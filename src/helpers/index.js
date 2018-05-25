const validate = (data) => {
    let textReg = /^[а-яА-Яa-zA-Z\s]{2,20}$/;
    let birthdayReg = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
    let phoneReg = /^\+\d\d?\((\d){3}\)(\d){3}-(\d){2}-(\d){2}$/;
    let emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w+$/;
    let skypeReg = /^[a-zA-Z\s\d]{2,20}$/;

    const { name, surname, birthday, town, phone, phoneGroup, email, skype } = data;
    let error = '';

    if (!name) {
        error = 'empty name field';
        return error;
    } else if (!textReg.test(name)) {
        error = 'incorrect name format - from 2 to 20 chars (only letters)';
        return error;
    }

    if (!surname) {
        error = 'empty surname field';
        return error;
    } else if (!textReg.test(surname)) {
        error = 'incorrect surname format - from 2 to 20 chars (only letters)';
        return error;
    }

    if (!birthday) {
        error = 'empty birthday field';
        return error;
    } else if (!birthdayReg.test(birthday)) {
        error = 'incorrect birthday format - DD-MM-YYYY';
        return error;
    }

    if (!town) {
        error = 'empty town field';
        return error;
    } else if (!textReg.test(town)) {
        error = 'incorrect town format - from 2 to 20 chars (only letters)';
        return error;
    }

    if (!phone) {
        error = 'empty phone field';
        return error;
    } else if (!phoneReg.test(phone)) {
        error = 'incorrect phone format - +XX(XXX)XXX-XX-XX';
        return error;
    }

    if (!phoneGroup) {
        error = 'empty group field';
        return error;
    } else if (!textReg.test(phoneGroup)) {
        error = 'incorrect group format - from 2 to 20 chars (only letters)';
        return error;
    }

    if (!email) {
        error = 'empty email field';
        return error;
    } else if (!emailReg.test(email)) {
        error = 'incorrect email format - xxxxxxx@xxxxx.xxxxxx';
        return error;
    }

    if (!skype) {
        error = 'empty skype field';
        return error;
    } else if (!skypeReg.test(skype)) {
        error = 'incorrect skype format - from 2 to 20 chars (numbers and letters)';
        return error;
    }

    return error;
};

export { validate };