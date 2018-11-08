'use strict';

angular.module('angularFlaskServices', ['ngResource'])
	.factory('Post', ['$resource', function($resource) {
		return $resource('/api/post/:postId',
			{},
			{
				get: {
					method: 'GET',
					params: { postId: '@_id' },
					isArray: false,
					headers: {'Content-Type': 'application/vnd.api+json',
								'Accept': 'application/vnd.api+json'}
				},
				post: {
					method: 'POST',
					data: $resource,
					headers: {'Content-Type': 'application/vnd.api+json',
								'Accept': 'application/vnd.api+json'}
				}
			}
		);	
	}])
	.factory('Dog', ['$resource', function($resource) {
		return $resource('/api/dog/:dogId',
			{},
			{
				get: {
					method: 'GET',
					params: { dogId: '@_id' },
					isArray: false,
					headers: {'Content-Type': 'application/vnd.api+json',
								'Accept': 'application/vnd.api+json'}
				},
				post: {
					method: 'POST',
					data: $resource,
					headers: {'Content-Type': 'application/vnd.api+json',
								'Accept': 'application/vnd.api+json'}
				}
			}
		);	
	}]);
