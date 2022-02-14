const db = require("./db");

const DepositoPatente = db.sequelize.define('depositopatentes', {
    numpatente:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nompatente:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    tipopatente:{
        type: db.Sequelize.ENUM("Patente de criação", "Modelo de utilização", "Desenho Industrial"),
        defaultValue: "Patente de criação"
    },
    tipopesquisa:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    emailpatente:{
        type: db.Sequelize.STRING(40),
        allowNull: false
    },
    docPatente:{
        type: db.Sequelize.BLOB('long')
    }
});
DepositoPatente.sync({force: true});
module.exports = DepositoPatente;