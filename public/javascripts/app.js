(function() {
  var app = angular.module('account', []);

  app.controller('AccountController', ['$scope', function($scope) {
    $scope.users = [];

    $scope.addUser = function(user) {
      $scope.addingUser = false;
      $scope.users.push(user);
      $scope.user = {};
    };

    $scope.removeUser = function(user) {
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);
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