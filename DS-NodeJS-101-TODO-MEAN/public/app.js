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
	//$scope.todo = {newtodo: '', username: ''};
	$scope.todos = '';
	$scope.username = "test";
	$scope.addedTodo = '';
	$scope.getTodo = function() {
		console.log("In get: " +  $scope.username);
		$scope.addedTodo = ''; 
		var uname = $scope.username;
		if (uname)
		{
			var getApiPath = '/api/todos/' + uname;
			$http.get(getApiPath)
	        .success(function (result) {

	            $scope.todos = result;
	            //$scope.username = uname;

	        })
	        .error(function (data, status) {

	            console.log(data);

	        });
	    }
	    else
	    {
	    	$scope.todos = '';
	    }
	};

	$scope.newTodo = '';
	$scope.addedTodo = '';
	$scope.addTodo = function() {
		console.log("In post: " + $scope.username, $scope.newTodo);
		var uname = $scope.username;
		var newTodo = $scope.newTodo;
		if (newTodo) {
			$http.post('/api/todo', {"username": $scope.username, "todo": $scope.newTodo, 
				"isDone": false, "hasAttachment": false})
			.success(function(result){
				console.log("Post Data Output: " + result.username + " " + result.todo );
				$scope.newTodo = '';
				$scope.addedTodo = uname + " added " + result.todo;
			})
			.error(function (data, status) {
	            console.log(data);
			})
		}
	};

}]);