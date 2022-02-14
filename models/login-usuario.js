const db = require("./db");

const LoginUsuario =  db.sequelize.define('loginusuario', {
    idlogin:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    senha:{
        type: db.Sequelize.STRING(10),
        allowNull: false
    },
    logado:{
        type: db.Sequelize.BOOLEAN,
        defaultValue: false,   
        allowNull: false
    }
});
LoginUsuario.sync({force: true});
module.exports = LoginUsuario;