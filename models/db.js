//site da modelagem do banco: https://app.brmodeloweb.com/
const Sequelize = require("sequelize");    
// Conexão com banco de dados MySql
const sequelize = new Sequelize('ddpl9r657m9acs', 'eoleblwcvpmczt', '2ac1ad064327e3d09986bcb6331e118c93e6ffbf292df61c0ae43f5f9bc7614e', {// bd, user, passwrd
    host: 'ec2-34-230-110-100.compute-1.amazonaws.com',
    dialect: 'postgres'
});
/*const sequelize = new Sequelize('sistemadepatentes', 'root', 'm1p2e3d4h5', {// bd, user, passwrd
    host: "localhost",
    dialect: 'mysql'
});*/
// exportar modulo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}