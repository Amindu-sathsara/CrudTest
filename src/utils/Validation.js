const validator=require('validator');


const validateCreateUserData=(req) => {
    const {firstName, lastName,emailID,password,age,skills}=req.body;
    if(!firstName || !lastName){
        throw new Error("Both First name and last name are required");
    }
     if(!validator.isEmail(emailID)){
        throw new Error("Please enter a valid email");
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Password should be strpong one ");
    }
    const ageInIntegr=Number.parseInt(age);
   if (ageInIntegr<18 || !Number.isInteger(ageInIntegr)){
        throw new Error("Age should be greater than 18 and it should be integer");
    }
    
   


}

module.exports={
    validateCreateUserData,
}