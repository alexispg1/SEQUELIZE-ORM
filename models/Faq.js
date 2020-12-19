const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Faq extends Model {}
Faq.init({ 

    pregunta: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },

    respuesta: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },
    estado_faq: {
        type: DataTypes.ENUM('0', '1' ),
        allowNull: false,
        defaultValue:'0',
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_faq es de tipo int y acepta 0 o 1"
            }, 
        },
    },
}, {
    sequelize,
    modelName: "faq",
    timestamps: true
});

module.exports = Faq;