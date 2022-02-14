const db = require("./db");
const Login = require("./login-usuario");
const DepPatente = require("./depositopatentes");

const Cadastro =  db.sequelize.define('cadastro', {
    iduser:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    endereco:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    contato:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    cpfcnpj:{
        type: db.Sequelize.STRING(30),
        allowNull: false
    },
    instituicao:{
        type: db.Sequelize.STRING(40)
    },
    ocupacao:{
        type: db.Sequelize.STRING(40)
    }
});

Cadastro.belongsTo(Login, {
    constraint: true,
    foreignKy: 'idlogin'
});

Cadastro.belongsTo(DepPatente, {
    constraint: true,
    foreignKy: 'numpatente'
});

Cadastro.sync({force: true}); // com este comando recria-se a tabela novamente
module.exports = Cadastro;