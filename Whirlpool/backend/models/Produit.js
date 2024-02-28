const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');



const Produit = sequelize.define('Produit', {
    Nom_Produit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Categorie: {
      type: DataTypes.STRING,
    }, 
    prix : {
        type :  DataTypes.FLOAT, 
        allowNull : true 
    }, 
    Images :{
        type: DataTypes.STRING, 
        allowNull : true 
    }
})
module.exports=Produit