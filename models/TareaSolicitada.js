const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class TareaSolicitada extends Model {}
TareaSolicitada.init({ 

    lat_c: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    lon_c: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'',
        validate: {
            notNull: {
                msg: "estado no puede ser nulo"
            },
            max: {
                args: 1,
                msg: "el estado_prof no puede ser mas grande que 1 caracter"
            },

        }
    },
    estado_tasker: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null ,
    },

    fecha_s: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "fecha_s no puede ser nulo"
            },
        }
    },
    fecha_p: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    fecha_a: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    }, 
    fecha_a_1: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    }, 
    fecha_a_2: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    }, 
    fecha_c: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    fecha_e: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null ,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null ,
    },
    esp: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null ,
    },
    esp2: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null ,
    },
    tipo_solicitud: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null ,
    },
    monto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,   
    },
    horas: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,   
    },
    codigo_p: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,   
    },

},

     {
    sequelize,
    modelName: "tarea_solicitada",
    timestamps: true
});

module.exports = TareaSolicitada;
