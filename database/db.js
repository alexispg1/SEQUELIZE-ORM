const { Sequelize } = require('sequelize');
const { database, username } = require('../config/database');

/*onst sequelize = new Sequelize(
    'developerfastask_mvp',
    'developerfastask_paula',
    'Belloto2020',{
        host:'fastask.app',
        dialect: "mysql"
    }
);*/


const sequelize = new Sequelize(
    'fastask',
    'root',
    '',{
        host:'127.0.0.1',
        dialect: "mysql"
    }
);


module.exports = sequelize;


