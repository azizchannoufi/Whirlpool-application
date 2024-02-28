const Produit = require("./Produit.js");
const Animateur = require("./Animateur.js");
const ChiffreAff = require("./ChifreAff.js");
const DispoProduit = require("./DispoProduit.js");
const Magasin = require("./Magasin.js");
const ObjVente = require("./ObjVente.js");
const RapportMensuel = require("./RapporM.js");
const Vente = require("./Vente.js");
const sequelize = require("../config/config.js");



// Set up associations between tables
Magasin.hasMany(Vente);
Produit.hasMany(Vente, { foreignKey: 'ID_Produit' });
Magasin.hasMany(ObjVente, { foreignKey: 'ID_Magasin' });
Magasin.hasMany(ChiffreAff, { foreignKey: 'ID_Magasin' });
Magasin.hasMany(DispoProduit, { foreignKey: 'ID_Magasin' });
Animateur.hasMany(RapportMensuel, { foreignKey: 'ID_Animateur' });

// Sync the models with the database
// sequelize.sync({ force: true }).then(() => {
//   console.log('Tables created successfully.');
// });
// Define Relationships
// Vente.hasMany(Magasin); 
// Product.belongsTo(Category);

// Product.belongsToMany(User, { through: Cart });
// User.belongsToMany(Product, { through: Cart });

// Product.belongsToMany(User, { through: Wishlist });
// Wishlist.belongsTo(User);
// Wishlist.belongsTo(Product);
// Product.hasMany(Wishlist);
// User.hasMany(Wishlist);


// // User.belongsToMany(Product, { through: Wishlist });
// // Product.belongsTo(User, { foreignKey: "sellerProduct" });

sequelize
  .sync()
  .then(() => {
    console.log("Database tables synchronized successfully.");
    // Start your application or perform any other actions here
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

// Export Models
module.exports = {
    Produit ,
     Animateur ,ChiffreAff , DispoProduit , Magasin , ObjVente , RapportMensuel , Vente
};