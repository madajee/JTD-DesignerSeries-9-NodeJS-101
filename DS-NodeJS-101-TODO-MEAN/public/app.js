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
    $scope.newTodo = ''
	$scope.addedTodo = ''
	$scope.addTodo = function() {
		$http.post('/api/todo', {"username": "test", "todo": $scope.newTodo, 
			"isDone": false, "hasAttachment": false})
		.success(function(result){
			console.log(result);
			$scope.newTodo = ''
			$scope.addedTodo = result.todo;
		})
		.error(function (data, status) {
            console.log(data);
		})
		console.log($scope.newTodo);
	};

}]);