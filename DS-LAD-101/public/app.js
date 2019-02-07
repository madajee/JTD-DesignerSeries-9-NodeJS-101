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

    .when('/test', {
        templateUrl: 'pages/test.htm',
        controller: 'testController'
    })
    
});

// CONTROLLERS

dslad101.controller('testController', ['$scope', '$http', function($scope, $http) {
    $scope.testapi = function() {
    	var getApiPath = '/api/test';
    	$http.get(getApiPath)
    	.success(function (response) {
            console.log(response);
            $scope.response = response;
    	})
    	.error(function (data, status) {
			console.log(data);

		}); 
    };
}]);

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