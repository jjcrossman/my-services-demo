angular.module( 'TheLoudAndProudAppOfPatrioticSedition' ).service( 'mainService', function() {

  //Variables
  var username = "donutfailwhale";

  //FUNCy Town
  this.getUsername = function () {
    return username;
  }

  this.changeUsername = function ( newUsername ) {
    username = newUsername;
  }

});
