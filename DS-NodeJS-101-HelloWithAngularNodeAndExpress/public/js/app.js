angular.module('TestApp', []);

angular.module('TestApp')
	.controller('MainController', ctrlFunc);
	
function ctrlFunc() {
	console.log(clientMessage);
	this.message = clientMessage;
}