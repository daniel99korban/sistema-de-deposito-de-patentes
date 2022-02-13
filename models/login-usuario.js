const Sequelize = require("sequelize");
const database = require("./db");

const LoginUsuario =  database.define('loginusuario', {
    idlogin:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING(10),
        allowNull: false
    },
    logado:{
        type: Sequelize.BOOLEAN,
        defaultValue: true,   
        allowNull: false
    }
});
module.exports = LoginUsuario;