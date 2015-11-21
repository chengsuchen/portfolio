// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
		$stateProvider
		.state('work', {
			url:'/work',
			templateUrl: 'templates/work.html',
			controller: 'WorkController',
		})

		$stateProvider
		.state('about', {
			url:'/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController',
		})

		$stateProvider
		.state('resume', {
			url:'/resume',
			templateUrl: 'templates/resume.html',
			controller: 'ResumeController',
		})

})

	// About page controller: define $scope.about as a string

		myApp.controller('AboutController', function($scope){
			$scope.about = "info"
		})

	// Content controller: define $scope.url as an image
		myApp.controller('WorkController', function($scope, $http){
		    $http.get("content.json").success(function(response){
		    	$scope.projects = response;
			});
		})

		myApp.controller('ResumeController', function($scope){
			$scope.resume = "info"
		})

