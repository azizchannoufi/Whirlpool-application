const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'whirlpool',
});

// Define models
const PDV = sequelize.define('PDV', {
  idPDV: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pdvname: DataTypes.STRING,
  location: DataTypes.STRING
});

const Users = sequelize.define('Users', {
  idusers: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
});

const Marque = sequelize.define('Marque', {
  idMarque: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  marquename: DataTypes.STRING
});

const Category = sequelize.define('Category', {
  idCategory: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Categoryname: DataTypes.STRING
});

const Reference = sequelize.define('Reference', {
  idReference: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Referencename: DataTypes.STRING
});

const Article = sequelize.define('Article', {
  idArticle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  coloeur: DataTypes.STRING,
  typeC: DataTypes.STRING,
  capacite: DataTypes.FLOAT,
  prix: DataTypes.INTEGER
});

const Exposition = sequelize.define('Exposition', {
  idExpo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dateCr: DataTypes.DATE
});

const PriceM = sequelize.define('PriceM', {
  idPriceM: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dateC: DataTypes.DATE
});

const Sellout = sequelize.define('Sellout', {
  idSellout: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dateCr: DataTypes.STRING,
  nbrV: DataTypes.INTEGER,
  objectif: DataTypes.STRING
});

const Presence = sequelize.define('Presence', {
  idPresence: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  datePr: DataTypes.DATE,
  checkin: DataTypes.STRING,
  checkout: DataTypes.STRING,
  position: DataTypes.STRING
});

const Log = sequelize.define('Log', {
  idLog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  messageAc: DataTypes.STRING,
  dateAc: DataTypes.STRING,
  TimeAc: DataTypes.STRING
});

const PriceM_Category = sequelize.define('PriceM_Category', {
  idPriceM: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idCategory: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

const Reference_has_Sellout = sequelize.define('Reference_has_Sellout', {
  Reference_idReference: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  Sellout_idSellout: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
});

// Define associations
PDV.hasMany(Users, { foreignKey: 'PDV_idPDV' });
Users.belongsTo(PDV, { foreignKey: 'PDV_idPDV' });

Marque.hasMany(Reference, { foreignKey: 'Marque_idMarque' });
Reference.belongsTo(Marque, { foreignKey: 'Marque_idMarque' });

Category.hasMany(Reference, { foreignKey: 'Category_idCategory' });
Reference.belongsTo(Category, { foreignKey: 'Category_idCategory' });

Reference.hasMany(Article, { foreignKey: 'Reference_idReference' });
Article.belongsTo(Reference, { foreignKey: 'Reference_idReference' });

Article.hasMany(Exposition, { foreignKey: 'Article_idArticle' });
Exposition.belongsTo(Article, { foreignKey: 'Article_idArticle' });

PDV.hasMany(Exposition, { foreignKey: 'PDV_idPDV' });
Exposition.belongsTo(PDV, { foreignKey: 'PDV_idPDV' });

PDV.hasMany(PriceM, { foreignKey: 'PDV_idPDV' });
PriceM.belongsTo(PDV, { foreignKey: 'PDV_idPDV' });

Users.hasMany(Presence, { foreignKey: 'Users_idusers' });
Presence.belongsTo(Users, { foreignKey: 'Users_idusers' });

PDV.hasMany(Presence, { foreignKey: 'PDV_idPDV' });
Presence.belongsTo(PDV, { foreignKey: 'PDV_idPDV' });

Presence.hasMany(Log, { foreignKey: 'Presence_idPresence' });
Log.belongsTo(Presence, { foreignKey: 'Presence_idPresence' });

PriceM.belongsToMany(Category, { through: 'PriceM_Category', foreignKey: 'idPriceM' });
Category.belongsToMany(PriceM, { through: 'PriceM_Category', foreignKey: 'idCategory' });

Reference.belongsToMany(Sellout, { through: 'Reference_has_Sellout', foreignKey: 'Reference_idReference' });
Sellout.belongsToMany(Reference, { through: 'Reference_has_Sellout', foreignKey: 'Sellout_idSellout' });

// Sync models with database
(async () => {
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
})();
