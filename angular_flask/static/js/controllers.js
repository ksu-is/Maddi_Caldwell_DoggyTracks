'use strict';

/* Controllers */

function IndexController($scope) {
	
}

function AboutController($scope) {
	
}

function InsertDogController($scope, $window, Dog) {
  $scope.submitForm = function() {
    var dogQuery = Dog.post(JSON.stringify({data: {type: "dog", attributes: $scope.dog }}));
    dogQuery.$promise.then(function (result) { 
      console.log(result)
    });
    $window.location.href = '/doglist';
  }
}

function DogListController($scope, Dog) {
  var self = this;
  self.dogs = [];
  var dogsQuery = Dog.get({dogId: ''});
  dogsQuery.$promise.then(function (result) {
  angular.forEach(result['data'], function(dog, akey) {
    this.push({id: dog['id'], name: dog['attributes']['name'], breed: dog['attributes']['breed'], desc: dog['attributes']['desc']});
  }, self.dogs);
  $scope.dogs = self.dogs;
  });
}

function DogDetailController($scope, $routeParams, Dog) {
  var dogQuery = Dog.get({ dogId: $routeParams.dogId });
  dogQuery.$promise.then(function (result) {
  var data = result['data'];
  var dog = {id: data['id'], name: data['attributes']['name'], breed: data['attributes']['breed'], desc: data['attributes']['desc']};
  $scope.dog = dog;
  });	
}