const validate = (data) => {
    const errors = {};
    const { name, surname, birthday, town, phone, phoneGroup, email, skype } = data;

    let textReg = /^[а-яА-Яa-zA-Z\s]{2,20}$/;
    let birthdayReg = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
    let phoneReg = /^\+\d\d?\((\d){3}\)(\d){3}-(\d){2}-(\d){2}$/;
    let emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w+$/;
    let skypeReg = /^[a-zA-Z\s\d]{2,20}$/;

    if (!name) {
        errors.name = 'empty name field';
    } else if (!textReg.test(name)) {
        errors.name = 'incorrect name format - from 2 to 20 chars (only letters)';
    }

    if (!surname) {
        errors.surname = 'empty surname field';
    } else if (!textReg.test(surname)) {
        errors.surname = 'incorrect surname format - from 2 to 20 chars (only letters)';
    }

    if (birthday && !birthdayReg.test(birthday)) {
        errors.birthday = 'incorrect birthday format - DD-MM-YYYY';
    }

    if (town && !textReg.test(town)) {
        errors.town = 'incorrect town format - from 2 to 20 chars (only letters)';
    }

    if (!phone) {
        errors.phone = 'empty phone field';
    } else if (!phoneReg.test(phone)) {
        errors.phone = 'incorrect phone format - +XX(XXX)XXX-XX-XX';
    }

    if (phoneGroup && !textReg.test(phoneGroup)) {
        errors.phoneGroup = 'incorrect group format - from 2 to 20 chars (only letters)';
    }

    if (email && !emailReg.test(email)) {
        errors.email = 'incorrect email format - xxxxxxx@xxxxx.xxxxxx';
    }

    if (skype && !skypeReg.test(skype)) {
        errors.skype = 'incorrect skype format - from 2 to 20 chars (numbers and letters)';
    }
    return errors;
};

export { validate };