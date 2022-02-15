/*const db = require("../db");
const Login = require("../login-usuario");
const DepPatente = require("../depositopatentes");*/

const cadastro =  (sequelize, DataTypes) =>{
    const Cadastro = sequelize.define('Cadastro', {// criando uma tabela
        iduser:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        endereco:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        contato:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        cpfcnpj:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        instituicao:{
            type: DataTypes.STRING(40)
        },
        ocupacao:{
            type: DataTypes.STRING(40)
        }
    })
    return Cadastro;
}
module.exports = cadastro;
   
    

// Cadastro.belongsTo(Login, {
//     constraint: true,
//     foreignKy: 'idlogin'
// });
// 
// Cadastro.belongsTo(DepPatente, {
//     constraint: true,
//     foreignKy: 'numpatente'
// });
// 
// Cadastro.sync({force: true}); // com este comando recria-se a tabela novamente
// module.exports = Cadastro;*/