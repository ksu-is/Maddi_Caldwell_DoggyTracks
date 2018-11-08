'use strict';

angular.module('AngularFlask', ['ngRoute', 'angularFlaskServices'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/landing.html',
			controller: DogListController
		})
		.when('/about', {
			templateUrl: 'static/partials/about.html',
			controller: AboutController
		})
		.when('/dog/add', {
			templateUrl: 'static/partials/dog-add.html',
			controller: InsertDogController
		})
		.when('/dog/:dogId', {
			templateUrl: '/static/partials/dog-detail.html',
			controller: DogDetailController
		})
		.when('/dogs', {
			templateUrl: 'static/partials/dog-list.html',
			controller: DogListController
		})
		.when('/doglist', {
			templateUrl: 'static/partials/dog-list.html',
			controller: DogListController
		})
		.otherwise({
			redirectTo: '/'
		})
		;

		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('');
	}])
;
