'use strict';

// DCL for project
module.exports = (sequelize) => {
  const DataTypes = require('sequelize');

  const anpData = sequelize.define('anp_data', {
    selEstado:                        DataTypes.STRING,
    selCombustivel:                   DataTypes.STRING,
    selSemana:                        DataTypes.STRING,

    priceConsumer_priceMed:           DataTypes.DOUBLE,
    priceConsumer_desvioPadrao:       DataTypes.DOUBLE,
    priceConsumer_priceMin:           DataTypes.DOUBLE,
    priceConsumer_priceMax:           DataTypes.DOUBLE,
    priceConsumer_margemMed:          DataTypes.DOUBLE,

    distributionPrice_priceMed:       DataTypes.DOUBLE,
    distributionPrice_desvioPadrao:   DataTypes.DOUBLE,
    distributionPrice_priceMin:       DataTypes.DOUBLE,
    distributionPrice_priceMax:       DataTypes.DOUBLE,

  });

  return {
    addNew: (dados) => {
      sequelize.sync().then(function() {
        return User.create(dados);
      }).then(function(item) {
        console.log(item.get({
          plain: true
        }));
      });
    }
  }

};
