const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://sp1172389:shivam@cluster0.b2ntvws.mongodb.net/JWT");

mongoose.connection.on("connected",()=>{
    console.log("Connectted to MongoDB");
    
});
mongoose.connection.on("error",(error)=>{
    console.log(`MongoDB connection error: ${error}`);
    
});

module.exports = mongoose;