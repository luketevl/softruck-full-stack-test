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
