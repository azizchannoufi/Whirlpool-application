const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');



const Vente = sequelize.define('Vente', {
    Date_Vente: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Quantite_Vendue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Montant_Vente: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    }
  });
  module.exports = Vente