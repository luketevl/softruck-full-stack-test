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
