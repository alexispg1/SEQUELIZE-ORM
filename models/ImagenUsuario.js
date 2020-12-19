const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class ImagenUsuario extends Model { }
ImagenUsuario.init({

    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la url no puede ser nulo"
            },
        }
    },
    fecha_imagen: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
 
}, {
    sequelize,
    modelName: "imagen_usuario",
    timestamps: true
});

module.exports = ImagenUsuario;