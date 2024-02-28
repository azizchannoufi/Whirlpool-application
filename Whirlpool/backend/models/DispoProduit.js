const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');



const DispoProduit = sequelize.define('DispoProduit', {
    stock_dispo : {
        type : DataTypes.INTEGER, 
        allowNull : true 
    }
})

module.exports= DispoProduit