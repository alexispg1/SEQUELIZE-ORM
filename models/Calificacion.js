const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Calificacion extends Model {}
Calificacion.init({ 
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
         
    },
    fecha_cal: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
        }
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { 
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },

        },
    },
    
}, {
    sequelize,
    modelName: "calificacion",
    timestamps: true
});

module.exports = Calificacion;
