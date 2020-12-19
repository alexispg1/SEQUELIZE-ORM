const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class CategoriaUsuario extends Model {}
CategoriaUsuario.init({ 
    estado_tarea : {
        type: DataTypes.ENUM('true', 'false' ),
        allowNull: false,
        defaultValue:'false',
        validate: {
            isAlpha: {
                args: true,
                msg: "El estado_tarea es de tipo string y acepta true o false"
            }, 
        },
    },
     
}, {
    sequelize,
    modelName: "categoria_usuario",
    timestamps: true
});

module.exports = CategoriaUsuario;
