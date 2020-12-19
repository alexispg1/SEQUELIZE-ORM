const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Tarea extends Model {}
Tarea.init({ 
    nombre_tarea: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la nombre_tarea no puede ser nulo"
            },
        }
         
    },
    costo_tarea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,   
    },

 
    nombre_largo_tarea: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    }, 
    icono_tarea: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    }, 
    fondo_tarea : {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    }, 
    descripcion_tarea: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
         
    }, 
    estado_tarea: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            max: {
                args: 1,
                msg: "el estado_tarea no puede ser mas grande que 1"
            },

        }
    },
},

     {
    sequelize,
    modelName: "tarea",
    timestamps: true
});

module.exports = Tarea;
