const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class BoletaTarea extends Model {}
BoletaTarea.init({ 
}, {
    sequelize,
    modelName: "boleta_tarea",
    timestamps: true
});

module.exports = BoletaTarea;