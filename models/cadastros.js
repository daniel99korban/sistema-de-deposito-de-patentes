const Sequelize = require("sequelize");
const database = require("./db");

const Cadastro =  database.define('cadastro', {
    codPesquisador:{
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
    },
    email:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING(10),
        allowNull: false
    }
})
module.exports = Cadastro; 