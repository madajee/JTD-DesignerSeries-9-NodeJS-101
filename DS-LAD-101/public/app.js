// MODULE
var dslad101 = angular.module('dslad101', ['ngRoute', 'ngResource']);

// ROUTES
dslad101.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/register', {
        templateUrl: 'pages/register.htm',
        controller: 'registerController'
    })
    
});

// CONTROLLERS
dslad101.controller('homeController', ['$scope', function($scope) {
    
}]);

dslad101.controller('registerController', ['$scope', function($scope) {

    $scope.cancelform = function() {
        console.log("Cancel Form");
    };

    $scope.saveform = function() {
        console.log("Save Form");
    };

}]);