(function(angular) {

	var app = angular.module('formValidation', []);

	app.directive('myActor', function() {
		return {
			restrict : 'A',
			scope : {
				actor : '='
			},
			replace : true,
			template : '<div class="container"><table class="table table-striped"><thead><tr><th>Name</th><th>Address</th></thead><tbody><tr><td>{{actor.name}}</td><td>{{actor.address}}</td></tr></tbody></table></div>'
		    // using inline html
		    //templateUrl : 'my-actor-template.html'
		};
	});
	app.directive('bookDir', function() {
		return {
			restrict : 'A',
			scope : {
				book : '='
			},
			replace : true,	
		   templateUrl : './book-dir.html'  // using template url
		};
	});

	app.controller('validationController', function($scope) {
		$scope.actors = [ {
			name : 'ShahRukh Khan',
			address : 'Mumbai'
		}, {
			name : 'Shalman Khan',
			address : 'India'
		} ];
		$scope.books = [ {
			title : 'Advanced Java',
			zonar: 'IT',
			author : 'Kethy Cierra',
			price: 799.50,
			publisher: 'T&M',
			edition: 7
		}, {
			title : 'Three Ediots',
			zonar: 'Novel',
			author : 'Chetan Bhagat',
			price: 800,
			publisher: 'CB Corp Pvt. Ltd.',
			edition: 3
		} ];
	});
})(window.angular);