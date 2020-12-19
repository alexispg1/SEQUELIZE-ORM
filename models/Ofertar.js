const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Ofertar extends Model { }
Ofertar.init({
    monto_oferta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
         
    },
    estado_oferta: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            max: {
                args: 1,
                msg: "el estado_oferta no puede ser mas grande que 1 caracter"
            },

        }
    },
    fecha_oferta: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:DataTypes.NOW,
    },
 
}, {
    sequelize,
    modelName: "ofertar",
    timestamps: true
});

module.exports = Ofertar;