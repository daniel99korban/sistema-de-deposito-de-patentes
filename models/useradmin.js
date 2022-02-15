const userAdmin =  (sequelize, DataTypes) =>{
    const UserAdmin = sequelize.define('UserAdmin', {// criando uma tabela
        idAdmin:{
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
    return UserAdmin;
}
module.exports = userAdmin;