const {DataTypes} = require('sequelize')
const sequelize = require('../config/config.js');



const RapportMensuel = sequelize.define('RapportMensuel', {

    Mois: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Presence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
    module.exports = RapportMensuel