const DepPatente = require("./depositopatentes");
const bcrypt = require('bcryptjs');// recurso para criptografar senha

const cadastro =  (sequelize, DataTypes) =>{
    const Cadastro = sequelize.define('Cadastro', {// criando uma tabela
        iduser:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
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
        },
        email:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        senha:{
            type: DataTypes.STRING(10),
            allowNull: false
        }
        // numpatente: {
        //     type: DataTypes.INTEGER,
        //     references: { model: 'DepPatente', key: 'numpatente'},
        //     onDelete: 'CASCADE',
        //     allowNull: false
        // }
    })// resolver questão de chave estrangeira
    /*Cadastro.addHook('beforeCreate', (cadastro, options) => {
        return bcrypt.hash(cadastro.senha, 8).then(hash => {
            cadastro.senha = hash;
        }).catch(err => {           //antes de cadastrar o usuario essa função criptografa a senha digitada
            throw new Error();
        })
    })*/
    return Cadastro;
}
module.exports = cadastro;






/*Cadastro.belongsTo(DepPatente, {
    constraint: true,
    foreignKy: 'numpatente'
});*/



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