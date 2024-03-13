const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
const connect = require('../config/index.js')

const Animateur = sequelize.define('Animateur', {
  name: {
    type:DataTypes.STRING,
    allowNull: true},
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {type:DataTypes.STRING,
        allowNull:true        
},
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telNumb: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cinNum: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Anim_location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 
});

module.exports = Animateur;