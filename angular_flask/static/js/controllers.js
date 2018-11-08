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
    $window.location.href = '/dogs';
  }
}

function InsertPostController($scope, $window, Post) {
  $scope.submitForm = function() {
    var postQuery = Post.post(JSON.stringify({data: {type: "post", attributes: $scope.blog }}));
    postQuery.$promise.then(function (result) { 
      console.log(result);
    });
    $window.location.href = '/blog';
  }
}

function DogListController($scope, Dog) {
  var self = this;
  self.dogs = [];
  var dogsQuery = Dog.get({dogId: ''});
  dogsQuery.$promise.then(function (result) {
  angular.forEach(result['data'], function(dog, akey) {
    this.push({id: dog['id'], name: dog['attributes']['name'], breed: dog['attributes']['breed']});
  }, self.dogs);
  $scope.dogs = self.dogs;
  });
}

function DogDetailController($scope, $routeParams, Dog) {
  var dogQuery = Dog.get({ dogId: $routeParams.dogId });
  dogQuery.$promise.then(function (result) {
  var data = result['data'];
  var dog = {id: data['id'], name: data['attributes']['name'], breed: data['attributes']['breed']};
  $scope.dog = dog;
  });	
}

function PostListController($scope, Post) {
  var self = this;
  self.posts = [];
  var postsQuery = Post.get({postId: ''});
  postsQuery.$promise.then(function (result) {
  angular.forEach(result['data'], function(post, akey) {
    this.push({id: post['id'], title: post['attributes']['title']});
  }, self.posts);
  $scope.posts = self.posts;
  });
}


function PostDetailController($scope, $routeParams, Post) {
  var postsQuery = Post.get({ postId: $routeParams.postId });
  postsQuery.$promise.then(function (result) {
  var data = result['data'];
  var post = {id: data['id'], title: data['attributes']['title'], body : data['attributes']['body']};
  $scope.post = post;
  });	
}
