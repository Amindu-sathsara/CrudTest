const express= require('express');
const app = express();
const  connectToDB  = require('./configs/Database')
const User = require("./models/User");
const bcrypt = require("bcrypt");
const {validateCreateUserData}=require("./utils/Validation")

app.use(express.json());  //I use this middleware to all the routes 
app.post("/createUser", async (req, res)=> {
    try {
        const { firstName, lastName, emailID, password, age, gender } = req.body;
        validateCreateUserData(req);
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const user = new User({
          firstName,
          lastName,
          emailID,
          password: hashedPassword,
          age,
          gender,
        });
    
        await user.save();
        res.status(201).json({ message: "User created successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
      }
    });


    connectToDB().then(() => {
        console.log("Database connected");
        app.listen(5555, () => {
          console.log(`Example app listening on port 5555`);
          
        })  
      }).catch(err => console.error(err));