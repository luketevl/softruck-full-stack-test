// ROUTE for API
module.exports = (app) => {

  app.get('/api/v1/people', (req, res) => {
    const peoples = require('../../models/Peoples')();
    // How we are using JSON the response use the function json
    res.status(202).json(peoples);
  });
};
