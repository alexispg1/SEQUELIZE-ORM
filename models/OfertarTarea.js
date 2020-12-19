
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class OfertarTarea extends Model { }
OfertarTarea.init({
 
 
}, {
    sequelize,
    modelName: "ofertar_tarea",
    timestamps: true
});

module.exports = OfertarTarea;