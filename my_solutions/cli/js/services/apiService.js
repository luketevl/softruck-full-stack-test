(function(){
  'use strict';

  angular.module('app').factory('api', api);

  api.$inject = ['$http', 'config'];

  function api($http, config){

    /**
      * GET STATES
      * @author lukete
      * @since 15/06/16
      * @return $http response
    **/
    var _getStates = function(){
      return $http.get(config.REST_URL + config.REST_URL_STATE);
    };
    /**
      * GET STATES
      * @author lukete
      * @since 16/06/16
      * @return $http response
    **/
    var _getFuels = function(){
      return $http.get(config.REST_URL + config.REST_URL_FUEL);
    };
    return {
      getStates : _getStates,
      getFuels : _getFuels
    };
  }
})();
