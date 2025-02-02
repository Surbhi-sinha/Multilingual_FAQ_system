const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const sequelize =  require('./config/db');
const faqRoutes = require('./routes/faqRoutes');
const authRoutes = require('./routes/authRoutes');
const app  = express();

app.use(cors());
app.use(express.json());

app.use("/api/faqs" , faqRoutes);
app.use("/api/auth" , authRoutes);

app.use("/" , (req , res)=>{
   res.send({message : "Hello from the server!"})
})


const PORT = process.env.PORT || 5000;

app.listen(PORT , async()=>{
   await sequelize.sync({force:true}).then(
      console.log("Successfully connected to DB")
   ).catch((err) =>{
      console.log("Error connecting to DB , " , err);
   });
   console.log(`Server running on port http://localhost:${PORT}`);
});