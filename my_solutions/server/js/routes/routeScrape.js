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

  app.get('/api/v1/state', (req, res) => {
    request(url, function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
      res.status(500).send();
    }
    console.log(body);
    const $ = cheerio.load(body);

    $('select[name=selEstado]').each( (index) => {
      console.log(this);
    });
    res.status(202).json(body);
    });
  });

};
