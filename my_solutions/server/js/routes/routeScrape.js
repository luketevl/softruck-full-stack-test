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
    let informations = req.body;

    // Mounting form post
    let request_options = {
      url: urlMunicipio,
      form: querystring.stringify(informations),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    console.log(request_options);
    // Create REQUEST FOR SITE
    request.post(request_options, (error, response, body) => {
    // CHECKING ERROR
    if(error) {
      console.log("Error: " + error);
      // SEND resp
      res.status(500).send();
    }
    console.log(body);
    let dataGeral = {
      title: scrapeCtr._getTitle(body),
      summary: scrapeCtr._getSummary(body),
      period: scrapeCtr._getPeriod(body),
      list: [],
    }
    console.log(dataGeral);
    dataGeral.list = scrapeCtr.scrapeFuels(body);
    res.status(202).json(request_options);
    });
  });
};
