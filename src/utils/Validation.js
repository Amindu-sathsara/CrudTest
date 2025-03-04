const validator = require('validator');

const validateCreateUserData = (req) => {
    const { firstName, lastName, emailID, password, age } = req.body;

    if (!firstName || !lastName) {
        throw new Error("Both First name and last name are required");
    }
    if (!validator.isEmail(emailID)) {
        throw new Error("Please enter a valid email");
    }
    if (!validator.isStrongPassword(password, { minLength: 8, minNumbers: 1, minSymbols: 1 })) {
        throw new Error("Password must be at least 8 characters long and contain at least 1 number and 1 symbol.");
    }
    const ageInInteger = Number.parseInt(age);
    if (ageInInteger < 18 || !Number.isInteger(ageInInteger)) {
        throw new Error("Age should be greater than 18 and it should be an integer");
    }
};

module.exports = {
    validateCreateUserData,
};
