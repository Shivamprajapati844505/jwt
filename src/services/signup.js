const User = require("../models/user");
const bcrypt = require("bcrypt");



async function createUser(userData){
   const {name, email ,password} = useData;
   const hashedPassword = await bcrypt.hash(password,10);
   const createdUser = new User({
    name,
    eamil,
    hashedPassword,
    role:"customer"
   })
   const savedUser = await createdUser.save();
   return savedUser;
}

module.exports = { createdUser };