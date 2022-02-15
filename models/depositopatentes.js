
const depositopatentes = (sequelize, DataTypes) =>{
    const DepositoPatente = sequelize.define('Depositopatentes', {
        numpatente:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nompatente:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        tipopatente:{
            type: DataTypes.ENUM("Patente de criação", "Modelo de utilização", "Desenho Industrial"),
            defaultValue: "Patente de criação"
        },
        tipopesquisa:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        emailpatente:{
            type: DataTypes.STRING(40),
            allowNull: false
        },
        docPatente:{
            type: DataTypes.BLOB('long')
        }
    })
    return DepositoPatente;
}
module.exports = depositopatentes;
//DepositoPatente.sync({force: true});
