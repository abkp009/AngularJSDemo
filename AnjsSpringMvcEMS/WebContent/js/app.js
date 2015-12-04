(function() {

	var app = angular.module("EMS", [ "ngRoute" ]);

	app.config(function($routeProvider) {
		$routeProvider.when("/main", {
			templateUrl : "login.html",
			controller : "loginController"
		})		
		.when("/user", {
			templateUrl : "userDetail.html",
			controller : "userController"
		})
		.when("/home", {
			templateUrl : "home.html",
			controller : "homeController"
		})
		.otherwise({
			redirectTo : "/main"
		});

	});

}());
