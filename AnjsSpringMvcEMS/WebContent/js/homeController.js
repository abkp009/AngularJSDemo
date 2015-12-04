(function() {

	var app = angular.module("EMS");

	var homeController = function($scope, $log, $location) {
        
		$log.info("Inside Home Controller");

	};

	app.controller("homeController", homeController);
}());