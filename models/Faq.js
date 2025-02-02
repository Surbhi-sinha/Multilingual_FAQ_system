const {DataTypes} = require('sequelize');
const sequelize = require("../config/db");

const faq = sequelize.define('Faq',{
   question : {type : DataTypes.TEXT , allowNull:false},
   answer : {type:DataTypes.TEXT , allowNull:false},
   language:{type:DataTypes.STRING , defaultValue:'en'},
   translation : {type: DataTypes.JSON},
})

module.exports = faq;