const Sequelize = require('sequelize');
const db = require('../config/database');

const test = db.define('testusers',{
    
    username:{
        type:Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING,
    },
   
     
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = test;