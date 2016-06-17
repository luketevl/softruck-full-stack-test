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

    scrapeListData: (body) => {
      // Using the DOM navigator
      const $ = cheerio.load(body);
      let informations = {
        cities :[],
      };

      // Loop in elements target
      $('tr').each( (index, el) => {
        if(index > 2){
          // Scape the headers
          let childrens = $(el).children();

          // Variable for mounting the state datas
          informations.cities.push({
            name: $(childrens).eq(0).children().eq(0).text(),
            fuel: '',
            priceConsumer: {
              priceMed:     $(childrens).eq(2).text(),
              desvioPadrao: $(childrens).eq(3).text(),
              priceMin:     $(childrens).eq(4).text(),
              priceMax:     $(childrens).eq(5).text(),
              margemMed:    $(childrens).eq(6).text(),
            },
            distributionPrice: {
              priceMed:     $(childrens).eq(7).text(),
              desvioPadrao: $(childrens).eq(8).text(),
              priceMin:     $(childrens).eq(9).text(),
              priceMax:     $(childrens).eq(10).text(),
            },
          });
        }
        });
      return informations;
    },

    getTitle: (body) => {
      // Using the DOM navigator
      const $ = cheerio.load(body);
      return $('.tabela3 > div h3').eq(0).text();
    },
    getSummary: (body) => {
      // Using the DOM navigator
      const $ = cheerio.load(body);
      return $('.tabela3 > div h3').eq(1).text();
    },
    getPeriod: (body) => {
      // Using the DOM navigator
      const $ = cheerio.load(body);
      return $('.tabela3 > div h3').eq(-1).text();
    },

  }

};
