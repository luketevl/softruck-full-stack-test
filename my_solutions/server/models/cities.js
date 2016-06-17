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
      sequelize.sync().then(() => {
        console.log(dados);
        let dadosTransf = {};
        dadosTransf.selEstado                       = dados.selEstado;
        dadosTransf.selCombustivel                  = dados.selCombustivel;
        dadosTransf.selSemana                       = dados.selSemana;

        dados.forEach(el => {
          dadosTransf.priceConsumer_priceMed          =  el.priceConsumer.priceMed.replace(',','.');
          dadosTransf.priceConsumer_desvioPadrao      =  el.priceConsumer.desvioPadrao.replace(',','.');
          dadosTransf.priceConsumer_priceMin          =  el.priceConsumer.priceMin.replace(',','.');
          dadosTransf.priceConsumer_priceMax          =  el.priceConsumer.priceMax.replace(',','.');
          dadosTransf.priceConsumer_margemMed         =  el.priceConsumer.margemMed.replace(',','.');
          dadosTransf.distributionPrice_priceMed      =  el.distributionPrice.priceMed .replace(',','.');
          dadosTransf.distributionPrice_desvioPadrao  =  el.distributionPrice.desvioPadrao.replace(',','.');
          dadosTransf.distributionPrice_priceMin      =  el.distributionPrice.priceMin.replace(',','.');
          dadosTransf.distributionPrice_priceMax      =  el.distributionPrice.priceMax.replace(',','.');
          return anpData.create(dadosTransf);
        });
      });
    }
  }

};
