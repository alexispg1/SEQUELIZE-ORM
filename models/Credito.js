const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Credito extends Model {}
Credito.init({ 
    monto_credito: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
         
    },
}, {
    sequelize,
    modelName: "credito",
    timestamps: true
});

module.exports = Credito;