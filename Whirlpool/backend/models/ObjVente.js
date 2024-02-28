const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');



const ObjVente = sequelize.define ('ObjVente',{
    annee : {
        type: DataTypes.INTEGER , 
        allowNull: true 
    }, 
    objectif_Mensuel : {
        type : DataTypes.DECIMAL(10,2),
        allowNull: true 
    },
    objectif_Annuel : {
        type : DataTypes.DECIMAL(10,2),
        allowNull: true 
    }
})

module.exports = ObjVente