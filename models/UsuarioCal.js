const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class UsuarioCal extends Model {}
UsuarioCal.init({  
}, {
    sequelize,
    modelName: "usuario_cal",
    timestamps: true
});

module.exports = UsuarioCal;