const userNit =  (sequelize, DataTypes) =>{
    const UserNit = sequelize.define('UserNit', {// criando uma tabela
        idNit:{
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
        }
    })
    return UserNit;
}
module.exports = userNit;