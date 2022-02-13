//site da modelagem do banco: https://app.brmodeloweb.com/
const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistemadepatentes', 'root', 'm1p2e3d4h5',{
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize;