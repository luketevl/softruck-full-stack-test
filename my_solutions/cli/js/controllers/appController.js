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
    api.getStates().then((res) => {
      // Check de httpcode
      if(res.status == 202){
          $scope.states = res.data;
      }
    }, (error) => {
          console.log('error');
        });

    // PRomisse result request
    api.getFuels().then((res) => {
      // Check de httpcode
      if(res.status == 202){
          $scope.fuels = res.data;
      }
    }, (error) =>{
        console.log('error');
    });

    // Function post the content
    $scope.postListData = () => {
      // mounting the data
      let data = {
        selCombustivel: $scope.selCombustivel.value,
        selEstado: $scope.selEstado.value,
        selSemana: "886*De 05/06/2016 a 11/06/2016",
      };
      api.postListData(data).then((res) =>{
          if(res.status == 202){
            console.log(res);
            $scope.title      = res.data.title;
            $scope.summary    = res.data.summary;
            $scope.period     = res.data.period;
            $scope.list_data  = res.data.list;
            $scope.showResult = true;
          }
      }, (error) =>{
        console.log(error);
        $scope.showResult = false;
      });
    }

  }
})();
