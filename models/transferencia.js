const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Transferencia extends Model { }
Transferencia.init({
    rut_transferencia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "rut_transferencia no puede ser nulo"
            },
        },
    },
    numero_cuenta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "numero_cuentano puede ser nulo"
            },
        },
    },
    banco: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,   
    },
    tipo_cuenta: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,   
    },
    correo_transferencia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "correo_transferencia no puede ser nulo"
            },
        },
    },      
}, {
    sequelize,
    modelName: "transferencia",
    timestamps: true
});

module.exports = Transferencia;