const mongoose= require('mongoose');

const userSchema= new mongoose.Schema(
    {
        firstName:{
            type: String
        },
        lastName:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        emailID:{
            type:String,
            unique: true,
            lowercase: true,
            required: true
        },
        password:{
            type: String
        },
        age:{
            type: Number
        },
        gender:{
            type: String,
            enum: {
                values: ["Male", "Female", "Other"],
                message: "You should enter Male, Female, or Other only in your gender."
            }
            }
    },{timestamps: true}
)

const userModel=mongoose.model('User',userSchema);

module.exports=userModel;