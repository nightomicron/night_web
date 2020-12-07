var app = angular.module("nightApp", ['ngAnimate','ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "about.htm"
	})
	.when("/contact",{
		templateUrl : "contact.htm"
	})
	.when("/ur",{
		templateUrl : "ur.htm"
	})
	.when("/egghead",{
		templateUrl : "egghead.htm"
	})
	.when("/notready",{
		templateUrl : "notready.htm"
	});
});

app.controller('nightCtrl', function($scope) {

	$scope.prevpic = "pics/placeholder2.png";
	
	$scope.prevUr = function(){
		$scope.prevpic = "pics/ur2.png";
	}
	$scope.prevEgg = function(){
		$scope.prevpic = "pics/wwtbae1.png";
	}
  
});