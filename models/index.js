const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

// iportando models
const Cadastro = require('./cadastros');
const LoginUsuario = require('./login-usuario');
const DepositoPatente = require('./depositopatentes');

// criando models
const cadastro = Cadastro(sequelize, Sequelize.DataTypes); 
const loginUsuario = LoginUsuario(sequelize, Sequelize.DataTypes); 
const depositoPatente = DepositoPatente(sequelize, Sequelize.DataTypes); 

// exportando bd
const db = {
    loginUsuario,
    depositoPatente,
    cadastro,
    sequelize
}

module.exports = db;