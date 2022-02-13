const Sequelize = require("sequelize");
const database = require("./db");

const DepositoPatente =  database.define('depositopatentes', {
    numpatente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nompatente:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    tipopatente:{
        type: Sequelize.ENUM("Patente de criação", "Modelo de utilização", "Desenho Industrial"),
        defaultValue: "Patente de criação",
        allowNull = false
    },
    tipopesquisa:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    emailpatente:{
        type: Sequelize.STRING(40),
        allowNull: false
    },
    docPatente:{
        type: Sequelize.BLOB('long')
    }
});

module.exports = DepositoPatente;