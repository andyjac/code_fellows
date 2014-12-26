(function() {
  var app = angular.module('account', []);

  app.controller('AccountController', ['$scope', function($scope) {
    $scope.users = userList;

    $scope.addUser = function(user) {
      $scope.adding = false;
      $scope.users.push(user);
      $scope.user = {};
    };

    $scope.removeUser = function(user) {
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);
    };
  }]);

  app.directive('userList', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/user_list.html'
    };
  });

  app.directive('newUser', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/new_user.html'
    };
  });

  var userList = [
    {
      firstName: 'Guy',
      lastName: 'Person',
      email: 'dude@domain.com'
    },
    {
      firstName: 'Andrew',
      lastName: 'Jacobson',
      email: 'andrew@example.com'
    }
  ];
})();
