(function() {
	var app = angular.module('Test', []);
	var CalcSvc = function() {
		var add = function(num1, num2) {
			return (num1 + num2);
		};
		return {
			add : add
		};
	};
	app.factory('CalcSvc', CalcSvc);
	app.controller('Controller', function(CalcSvc) {
		this.strArr = [ "Ram", "Shyam", "Ajay", "Vijay" ];
		this.count = 4;
		this.square = function(numb) {
			return numb * numb;
		};
		this.clickFn = function(addName) {
			this.count += 1;
			this.strArr.push(addName);
			this.addName = "";
			console.log(CalcSvc.add(10, 20));
		};
	});	
	var CalcSvc2 = function() {
		this.mul =  function(num1, num2) {
			console.log(num1 * num2);
		};
	};
	app.service('CalcSvc2', CalcSvc2);
	app.controller('NameController', function(CalcSvc2) {
		this.names = [ {
			name : "Ram",
			age : 20
		}, {
			name : "Shyam",
			age : 30
		} ];
		this.count = 2;
        this.clickFnName = function(addName, addAge) {
        	CalcSvc2.mul(3,5);
    		this.count += 1;
    		this.names.push({
    			name : addName,
    			age : addAge
    		});
    		this.addName = "";
    		this.addAge = 0;
    		// console.log(CalcSvc2.mul(10, 20));
    	};

	});
})();
