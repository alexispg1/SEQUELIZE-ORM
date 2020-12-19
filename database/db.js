const { Sequelize } = require('sequelize');
const { database, username } = require('../config/database');

const sequelize = new Sequelize(
    'fastask',
    'root',
    '', {
        host:'127.0.0.1',
        dialect: "mysql"
    }
);

/*const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host:'127.0.0.1',
        dialect: "mysql"
    }
);*/



module.exports = sequelize;


