const Mongoose =require('mongoose')
const url="mongodb+srv://amindusathsara121:GdZx3smBs0T3DrZa@cluster0.qusve.mongodb.net/myTestCrud";

const connectToDB=async ()=>{
    await Mongoose.connect(url);
}

module.exports=connectToDB;
