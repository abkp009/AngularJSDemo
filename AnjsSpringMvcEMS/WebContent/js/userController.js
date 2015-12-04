(function() {

	var app = angular.module("EMS");

	var userController = function($scope, $log, $http) {

		var onUser = function(response) {
			$scope.user = response.data;
		};
		var onError = function(reason) {
			$scope.error = reason;
		};
		$scope.name = "Abhishek";
		var url = "getUserDetail.spring";
		var queryString = "?name=" + $scope.name;
		$http.get(url + queryString).then(onUser, onError);
	};

	app.controller("userController", userController);
}());