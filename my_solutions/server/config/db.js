'use strict';

module.exports = () =>{
  var Sequelize = require("sequelize");
  let sequelize = new Sequelize('lhenrique', 'lhenrique', '', {
    host: 'localhost',
    dialect: 'postgres',
  });
  sequelize.authenticate().then((err) => {
    console.log('Connection has been established successfully.');
  }).catch((err) =>{
    console.log('Unable to connect to the database:', err);
  });
  return sequelize;
};
