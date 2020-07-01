var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/main.html"
  })
  .when("/red", {
    templateUrl : "templates/red.html"
  })
  .when("/blue", {
    templateUrl : "templates/blue.html"
  })
  .when("/green", {
    templateUrl : "templates/green.html"
  });
});