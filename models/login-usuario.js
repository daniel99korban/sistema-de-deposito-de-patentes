/*const loginUsuario = (sequelize, DataTypes) =>{
    const LoginUsuario = sequelize.define('LoginUsuario', {
        idlogin:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        senha:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        logado:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,   
            allowNull: false
        }
    })
    return LoginUsuario;
}
module.exports = loginUsuario;*/
// LoginUsuario.sync({force: true});// forca a recriação de tabelas