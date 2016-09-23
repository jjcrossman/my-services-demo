angular.module( 'TheLoudAndProudAppOfPatrioticSedition' ).controller( 'roflcopterController', function ( $scope, mainService ) {
  //$scope.name = ng-model;
  $scope.username = mainService.getUsername();
  $scope.changeUsername = mainService.changeUsername;

  $scope.$watch( 'trigger', function() {
    $scope.username = mainService.getUsername();
    $scope.name = "";
  });


});
