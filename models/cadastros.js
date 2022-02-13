const Sequelize = require("sequelize");
const database = require("./db");
const Login = require("./login-usuario");
const DepPatente = require("./depositopatentes");

const Cadastro =  database.define('cadastro', {
    iduser:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    endereco:{
        type: Sequelize.TEXT
    },
    contato:{
        type: Sequelize.STRING(15)
    },
    cpfcnpj:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    instituicao:{
        type: Sequelize.STRING(40)
    },
    ocupacao:{
        type: Sequelize.STRING(40)
    }
})

Cadastro.belongsTo(Login, {
    constraint: true,
    foreignKy: 'idlogin'
});
Cadastro.belongsTo(DepPatente, {
    constraint: true,
    foreignKy: 'numpatente'
});

module.exports = Cadastro; 