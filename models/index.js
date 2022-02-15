const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

// iportando models
const Cadastro = require('./cadastros');
const DepositoPatente = require('./depositopatentes');
const UserNit = require('./usernit');
const UserAdmin = require('./useradmin');

// criando models
const cadastro = Cadastro(sequelize, Sequelize.DataTypes); 
const depositoPatente = DepositoPatente(sequelize, Sequelize.DataTypes);
// usuarios privilegiados 
const userNit = UserNit(sequelize, Sequelize.DataTypes); 
const userAdmin = UserAdmin(sequelize, Sequelize.DataTypes); 
// exportando bd
const db = {
    depositoPatente,
    cadastro,
    userNit,
    userAdmin,
    sequelize
}
module.exports = db;