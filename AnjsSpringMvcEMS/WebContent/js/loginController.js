(function() {

	var app = angular.module("EMS");

	var loginController = function($scope, $log, $http, $location) {
		$scope.greet = "Welcome To Ems";
        
		var onUser = function(response) {
			$scope.user = response.data;
			$log.info("Name Received:" + $scope.user.name);
			$log.info("Password Received:" + $scope.user.password);
			if ($scope.user) {
				$location.path("/user");
			} else{
				$scope.error = "Invalid Id Or Password";
				$location.path("/main");
			}
		};
		var onError = function(reason) {
			$scope.error = reason;
			$location.path("/main");
		};

		$scope.loginSubmit = function(name, password) {
			var url = "login.spring";
			$scope.user = {
				name : name,
				password : password
			};
			$http.post(url, angular.toJson($scope.user)).then(onUser, onError);
		};
	};

	app.controller("loginController", loginController);
}());