var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/main.htm"
  })
  .when("/red", {
    templateUrl : "red.htm"
  })
  .when("/blue", {
    templateUrl : "green.htm"
  })
  .when("/green", {
    templateUrl : "blue.htm"
  });
});