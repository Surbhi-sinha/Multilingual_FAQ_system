const express = require("express");
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/register" , async (req , res)=>{
   const {username, email , password , role} = req.body;
   const hashedPassword = await bcrypt.hash(password , 10);
   const user = await User.create({username ,email, password : hashedPassword , role});

   res.status(201).json(user);
});

router.post("/login", async(req,res) =>{
   const {username , password} = req.body;
   const user = await User.findOne({where : {username}});
   if(!user || !(await bcrypt.compare(password , user.password))){
      return res.status(400).json({message : "Invalid Credentials"});
   }
   const token = jwt.sign({id:user.id , role : user.role} , process.env.JWT_SECRET);
   res.json({token});
})

module.exports = router;