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


    //End points for getting all the users 
    app.get('/getUsers',async (req, res) => {
        try{
          const users=await User.find({});
          res.send(users);
        }catch(err){
          res.status(500).send("Can't find your friends here , Mah boy");
        }
      })

    //End point for getting a single user by emailID
    app.get('/getUser',async (req, res) => {
        const userEmail=req.body.emailID;
      
        try{
          const user=await User.findOne({emailID:userEmail});
          /*if(user.lenght===0){
            return res.status(404).send("User not found");  //this two approaches are same I just add for now only
          }*/
          if(!user){
            return res.status(404).send("User not found",);
          }
      
          res.send(user);
        }catch(err){
          res.status(404).send("User not found");
        }
      })


      //Once the authentication add to this it is very usefull to have get user by _id ,
      app.get('/getUserById/:id',async (req, res) => {
        const userId=req.body._id;
      
        try{
          const user=await User.findById({_id:userId});
          if(!user){
            return res.status(404).send("User not found");
          }
      
          res.send(user);
        }catch(err){
          res.status(500).send("Can't find your friend here, Mah boy");
        }
      })
      



    connectToDB().then(() => {
        console.log("Database connected");
        app.listen(5555, () => {
          console.log(`Example app listening on port 5555`);
          
        })  
      }).catch(err => console.error(err));