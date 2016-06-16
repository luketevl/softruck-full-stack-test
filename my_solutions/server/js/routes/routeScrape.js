'use strict';

// ROUTE for API
module.exports = (app) => {
  // To request
  const request = require('request');
  // Controller scraper
  const scrapeCtr = require('../controllers/scrapeController')();

  const url = "http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp";

  // ROUTE to API STATE
  app.get('/api/v1/state', (req, res) => {
    // Create REQUEST FOR SITE
    request(url, function(error, response, body) {
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
    request(url, function(error, response, body) {
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
};
