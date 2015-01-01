(function() {
  var app = angular.module('account', []);

  app.controller('AccountController', ['$scope', function($scope) {
    $scope.users = [];

    $scope.addUser = function(user) {
      $scope.users.unshift(user);
      $scope.reset();
    };

    $scope.reset = function() {
      $scope.addingUser = false;
      $scope.user = {};
    };

    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.showCurrentUserToEdit = function(index) {
      return $scope.userToEdit === index;
    };

    $scope.beginEdit = function(index) {
      $scope.userToEdit = index;
      $scope.copy = angular.copy($scope.users[index]);
    };

    $scope.commitEdit = function() {
      $scope.users[$scope.userToEdit] = angular.copy($scope.copy);
      $scope.cancelEdit();
    };

    $scope.cancelEdit = function() {
      $scope.copy = null;
      $scope.userToEdit = -1;
    };
  }]);

  app.directive('editUser', function() {
    return {
      restrict: 'E',
      templateUrl: 'edit_user.html'
    };
  });

  app.directive('addUser', function() {
    return {
      restrict: 'E',
      templateUrl: 'add_user.html'
    };
  });
})();
