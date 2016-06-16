'use strict';

// ROUTE for API
module.exports = (app) => {
  // To request
  const request = require('request');

  // To navigate in DOM
  const cheerio = require('cheerio');

  const url = "http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp";

  app.get('/api/v1/people', (req, res) => {
    const peoples = require('../../models/Peoples')();
    // How we are using JSON the response use the function json
    res.status(202).json(peoples);
  });

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
    // Create list of states and your values
    let list = [];

    // Using the DOM navigator
    const $ = cheerio.load(body);

    // Loop in elements target
    $('select[name=selEstado] option').each( (index, el) => {
      // Variable for mounting the state data
      let state = {
        value: el.attribs.value,
        name:  el.children.map((el) => el.data).join('') // Item by item after concact the index and trasnform in string
      };
      // Add in list
      list.push(state);
    });
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
    // Create list of states and your values
    let list = [];

    // Using the DOM navigator
    const $ = cheerio.load(body);

    // Loop in elements target
    $('select[name=selCombustivel] option').each( (index, el) => {
      // Variable for mounting the state data
      let fuel = {
        value: el.attribs.value,
        name:  el.children.map((el) => el.data).join('') // Item by item after concact the index and trasnform in string
      };
      // Add in list
      list.push(fuel);
    });
    res.status(202).json(list);
    });
  });
};
