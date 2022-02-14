//site da modelagem do banco: https://app.brmodeloweb.com/
const Sequelize = require("sequelize");    
// Conexão com banco de dados MySql
const sequelize = new Sequelize('sistemadepatentes', 'root', 'm1p2e3d4h5', {// bd, user, passwrd
    host: "localhost",
    dialect: 'mysql'
});
// exportar modulo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}