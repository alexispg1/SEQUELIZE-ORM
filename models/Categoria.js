const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Categoria extends Model {}
Categoria.init({ 
    nombre_categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { 
            notNull: {
                msg: "El campo no puede ser nulo"
            },
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },

        },
    },
    estado_categoria: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {  
            isAlpha: {
                args: true,
                msg: "El estado_categoria solo puede contener  una letra"
            },

        },
    },
     
}, {
    sequelize,
    modelName: "categoria",
    timestamps: true
});

module.exports = Categoria;
