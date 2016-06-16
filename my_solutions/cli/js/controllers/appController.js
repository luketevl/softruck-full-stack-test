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
