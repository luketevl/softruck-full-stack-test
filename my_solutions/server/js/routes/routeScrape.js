'use strict';

// ROUTE for API
module.exports = (app) => {
  // To request
  const request = require('request');
  // Controller scraper
  const scrapeCtr = require('../controllers/scrapeController')();
  const querystring = require('querystring');

  const url         = "http://www.anp.gov.br/preco/prc/";
  const urlIndex    = url+"Resumo_Por_Estado_Index.asp";
  const urlMunicipio  = url+"Resumo_Por_Estado_Municipio.asp";


  // ROUTE to API STATE
  app.get('/api/v1/state', (req, res) => {
    // Create REQUEST FOR SITE
    request(urlIndex, (error, response, body) =>{
    // CHECKING ERROR
    if(error) {
      console.log("Error: " + error);
      // SEND resp
      res.status(500).send();
    }
    let list = scrapeCtr.scrapeStates(body);
    res.status(202).json(list);
    });
  });

  // ROUTE to API FUEL
  app.get('/api/v1/fuel', (req, res) => {
    // Create REQUEST FOR SITE
    request(urlIndex, (error, response, body) => {
    // CHECKING ERROR
    if(error) {
      console.log("Error: " + error);
      // SEND resp
      res.status(500).send();
    }
    let list = scrapeCtr.scrapeFuels(body);
    res.status(202).json(list);
    });
  });

  // ROUTE to API FUEL
  app.post('/api/v1/list_data', (req, res) => {
    const sequelize = require('../../config/db')();

    const citiesData = require('../../models/cities')(sequelize);

    let informations = req.body;

    // Mounting form post
    let request_options = {
      url: urlMunicipio,
      form: querystring.stringify(informations),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Content-Length': querystring.stringify(informations).length,
      }
    };
    // Create REQUEST FOR SITE
    request.post(request_options, (error, response, body) => {
    // CHECKING ERROR
    if(error) {
      console.log("Error: " + error);
      // SEND resp
      res.status(500).send();
    }
    let dataGeral = {
      title: scrapeCtr.getTitle(body),
      summary: scrapeCtr.getSummary(body),
      period: scrapeCtr.getPeriod(body),
      list: scrapeCtr.scrapeListData(body),
    };

  //  citiesData.addNew(dataGeral.list);

    res.status(202).json(dataGeral);
    });
  });
};
