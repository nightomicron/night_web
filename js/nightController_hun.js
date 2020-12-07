var app = angular.module("nightApp", ['ngAnimate','ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "about_hun.htm"
	})
	.when("/contact",{
		templateUrl : "contact_hun.htm"
	})
	.when("/ur",{
		templateUrl : "ur_hun.htm"
	})
	.when("/egghead",{
		templateUrl : "egghead_hun.htm"
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