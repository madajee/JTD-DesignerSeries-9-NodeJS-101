// MODULE
var angularApp = angular.module('angularApp',[]);
// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$http', 
	function ($scope, $http) {

	//$scope.name = "John Doe";

    /*$http.get('/api/todos/test')
        .success(function (result) {

            $scope.todos = result;

        })
        .error(function (data, status) {

            console.log(data);

        });*/
	//$scope.newTodo = ''
	$scope.todo = {newtodo: '', username: ''};
	$scope.todos = '';

	$scope.getTodo = function() {
		console.log("In get: " +  $scope.username); 
		var uname = $scope.username;
		if (uname)
		{
			var getApiPath = '/api/todos/' + uname;
			$http.get(getApiPath)
	        .success(function (result) {

	            $scope.todos = result;

	        })
	        .error(function (data, status) {

	            console.log(data);

	        });
	    }
	};

	$scope.addedTodo = '';
	$scope.addTodo = function() {
		console.log($scope.username, $scope.todo);
		$http.post('/api/todo', {"username": $scope.username, "todo": $scope.newTodo, 
			"isDone": false, "hasAttachment": false})
		.success(function(result){
			console.log(result);
			$scope.newTodo = '';
			//$scope.username = '';
			$scope.addedTodo = result.todo;
		})
		.error(function (data, status) {
            console.log(data);
		})
	};

}]);