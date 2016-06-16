angular.module('app', ['ngMaterial']);

(function(){
  'use strict';

  // Locate the module
  angular.module('app').controller('AppCtrl', AppCtrl);

  // Injection modules
  AppCtrl.$inject = ['$scope', 'api'];

  // controller
  function AppCtrl($scope, api){

    // PRomisse result request
    api.getStates().then(function(res) {
      // Check de httpcode
      if(res.status == 202){
          $scope.states = res.data;
      }
      console.log(res);
    }, function(error){ console.log('error')});

    // PRomisse result request
    api.getFuels().then(function(res) {
      // Check de httpcode
      if(res.status == 202){
          $scope.fuels = res.data;
      }
      console.log(res);
    }, function(error){ console.log('error')});


  }
})();

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

angular.module('app').value("config", {

  REST_URL          : 'http://localhost:595/api/v1/',
  REST_URL_STATE    : 'state',
  REST_URL_FUEL     : 'fuel',
});
