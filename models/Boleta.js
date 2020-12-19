const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Boleta extends Model {}
Boleta.init({
    monto_boleta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
         
    },
    estado_boleta: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
            isAlpha: {
                args: true,
                msg: "El estado_boleta solo puede contener letras"
            },

        }
    },
    //fecha app
    fecha_boleta_s: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.DATE,
    },
    
    fecha_boleta_i: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    fecha_boleta_p: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: { 
            isAlpha: {
                args: true,
                msg: "El documento solo puede contener letras"
            }, 
        },
    },
    mensaje_boleta: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: { 
            isAlpha: {
                args: true,
                msg: "El mensaje_boleta solo puede contener letras"
            }, 
        },
    },

 
}, {
    sequelize,
    modelName: "boleta",
    timestamps: true
});

module.exports = Boleta;