const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Geo extends Model { }
Geo.init({

    lat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la lat no puede ser nulo"
            },
        }
    },
    log: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la log no puede ser nulo"
            },
        }
    },
    geo_fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW

    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la ubicacion no puede ser nulo"
            },
        }
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "la ubicacion no puede ser nulo"
            },
        }
    },
 
}, {
    sequelize,
    modelName: "geo",
    timestamps: true
});

module.exports = Geo;