(function() {
  var app = angular.module('account', []);

  app.controller('AccountController', ['$scope', function($scope) {
    $scope.users = [];

    $scope.addUser = function(user) {
      $scope.addingUser = false;
      $scope.users.unshift(user);
      $scope.user = {};
    };

    $scope.reset = function() {
      $scope.addingUser = false;
      $scope.user = {};
    };

    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.beginEdit = function(index) {
      $scope.editingUser = true;
      console.log('value of index: ', index);
      console.log('$scope.index before setting it to index: ', $scope.index);
      $scope.index = index;
      console.log('$scope.index after setting it to index: ', $scope.index);
      $scope.copy = angular.copy($scope.users[index]);
    };

    $scope.commitEdit = function() {
      $scope.users[$scope.index] = angular.copy($scope.copy);
      $scope.cancelEdit();
    };

    $scope.cancelEdit = function() {
      $scope.copy = null;
      $scope.index = -1;
      $scope.editingUser = false;
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
