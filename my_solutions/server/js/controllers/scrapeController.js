'use strict';

module.exports = () =>{

  // To navigate in DOM
  const cheerio = require('cheerio');
  // Create list of states and your values
  let list = [];

  return {

    scrapeStates: (body) => {
      // Using the DOM navigator
      const $ = cheerio.load(body);
      list = [];
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

      return list;
    },

    scrapeFuels: (body) => {
      // Using the DOM navigator
      const $ = cheerio.load(body);
      list = [];
      
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

      return list;
    },


  }

};
