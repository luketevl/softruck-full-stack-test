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
    /* api.getPeoples().then((res) => {
      // Check de httpcode
      if(res.status == 202){
          $scope.peoples = res.data;
      }
    }, (error) => console.log('error')); */
  }
})();

(function(){
  'use strict';

  // Searching module
  angular.module('app').directive('uiCard', uiCard);

  // Creating the directive
  function uiCard(){
    let directive = {
      restrict: 'E', // Element directive
      templateUrl: 'views/card.html',
      replace: true,
      scope: {
        "people":               '=peopleData',
      },
    };

    return directive;
  }
})();

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

angular.module('app').value("config", {

  REST_URL          : 'http://localhost:595/api/v1/',
  REST_URL_PEOPLES  : 'people'
});
