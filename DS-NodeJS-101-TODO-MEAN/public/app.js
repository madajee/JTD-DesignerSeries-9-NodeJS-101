// MODULE
var angularApp = angular.module('angularApp',[]);
// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {

	//$scope.name = "John Doe";

    $http.get('/api/todos/test')
        .success(function (result) {

            $scope.todos = result;

        })
        .error(function (data, status) {

            console.log(data);

        });

}]);