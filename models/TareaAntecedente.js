const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class TareaAntecedente extends Model {}
TareaAntecedente.init({ 
    antecedente: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "antecedente no puede ser nulo"
            },
        }
         
    },
    fecha_ant: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "fecha_ant no puede ser nulo"
            },
        }
    }, 
    tipo_ant: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            max: {
                args: 1,
                msg: "el tipo_ant no puede ser mas grande que 1 caracter"
            },

        }
    },
    tipo_usuario_antecedente: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    }, 
},

     {
    sequelize,
    modelName: "tarea_antecedente",
    timestamps: true
});

module.exports = TareaAntecedente;
