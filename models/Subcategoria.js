const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Subcategoria extends Model {}
Subcategoria.init({ 
    nombre_subcategoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la nombre_subcategoria no puede ser nulo"
            },
        }
         
    },
    estado_subcategoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la nombre_subcategoria no puede ser nulo"
            },
        }
    },
    doc_requeridos: {
        type: DataTypes.ENUM('domicilio', 'general','profesional'  ),
        allowNull: true,
        defaultValue:null,
        validate: {
            isAlpha: {
                args: true,
                msg: "El doc_requeridos no es de los disponibles"
            }, 
        },
     
    },
    icono_subcategoria: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    },
    fondo_subcategoria: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    }, 
},

     {
    sequelize,
    modelName: "subcategoria",
    timestamps: true
});

module.exports = Subcategoria;
