angular.module('app', ['ngMaterial']);

(function(){
  'use strict';

  // Locate the module
  angular.module('app').controller('AppCtrl', AppCtrl);

  // Injection modules
  AppCtrl.$inject = ['$scope', 'api'];

  // controller
  function AppCtrl($scope, api){

    // Control de results area
    $scope.showResult = false;

    // PRomisse result request
    api.getStates().then(function(res) {
      // Check de httpcode
      if(res.status == 202){
          $scope.states = res.data;
      }
    }, function(error) {
          console.log('error');
        });

    // PRomisse result request
    api.getFuels().then(function(res) {
      // Check de httpcode
      if(res.status == 202){
          $scope.fuels = res.data;
      }
    }, function(error){
        console.log('error');
    });

    // Function post the content
    $scope.postListData = function () {
      // mounting the data
      let data = {
        selCombustivel: $scope.selCombustivel.value,
        selEstado: $scope.selEstado.value,
        selSemana: "886*De 05/06/2016 a 11/06/2016",
      };
      api.postListData(data).then(function(res){
          if(res.status == 202){
            console.log(res);
            $scope.title      = res.data.title;
            $scope.summary    = res.data.summary;
            $scope.period     = res.data.period;
            $scope.list_data  = res.data.list;
            $scope.showResult = true;
          }
      }, function(error){
        console.log(error);
        $scope.showResult = false;
      });
    }

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
    /**
      * POST STATE and FUEL
      * @author lukete
      * @since 16/06/16
      * @return $http response
    **/
    var _postListData = function(data){
      console.log(data);
      return $http.post(config.REST_URL + config.REST_URL_LISTDATA, data);
    };
    return {
      getStates     : _getStates,
      getFuels      : _getFuels,
      postListData  : _postListData,
    };
  }
})();

angular.module('app').value("config", {

  REST_URL          : 'http://localhost:595/api/v1/',
  REST_URL_STATE    : 'state',
  REST_URL_FUEL     : 'fuel',
  REST_URL_LISTDATA : 'list_data',
});
