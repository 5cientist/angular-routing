var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.html"
  })
  .when("/red", {
    templateUrl : "red.html"
  })
  .when("/blue", {
    templateUrl : "blue.html"
  })
  .when("/green", {
    templateUrl : "green.htm"
  });
});