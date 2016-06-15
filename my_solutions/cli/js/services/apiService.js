(function(){
  'use strict';

  angular.module('app').factory('api', api);

  api.$inject = ['$http', 'config'];

  function api($http, config){

    /**
      * GET PEOPPLES
      * @author lukete
      * @since 14/06/16
      * @return $http response
    **/
    var _getPeoples = function(){
      return $http.get(config.REST_URL + config.REST_URL_PEOPLES);
    };
    return {
      getPeoples : _getPeoples
    };
  }
})();
