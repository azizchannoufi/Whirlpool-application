const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');



const ChiffreAff=sequelize.define('ChiffreAff',{
    mois : {
        type : DataTypes.STRING ,
        allowNull : true 
    }, 
    chiffreAff : {
        type : DataTypes.FLOAT,
        allowNull  : true 
    }
})

module.exports = ChiffreAff; 