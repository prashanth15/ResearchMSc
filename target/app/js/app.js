var app=angular.module("app",["ngRoute","controllers"]);
app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"partials/home.html",controller:"HomeController"}).otherwise({redirectTo:"/"})
}]);