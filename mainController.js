angular.module( 'TheLoudAndProudAppOfPatrioticSedition' ).controller( 'mainController', function ( $scope, mainService ) {

  $scope.username = mainService.getUsername();





});
