const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');


 const Magasin = sequelize.define('Magasin', {
nom_Mag: {
    type : DataTypes.STRING  , 
    allowNull: true 
},
Mag_Localisation : {
    type: DataTypes.STRING , 
    allowNull: true 
}
 })
 module.exports = Magasin