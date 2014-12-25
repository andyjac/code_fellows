(function() {
  var app = angular.module('account', []);

  app.controller('AccountController', ['$scope', function($scope) {
    $scope.users = userList;
    $scope.addUser = function(user) {
      $scope.users.push(user);
      $scope.user = {};
    };

    $scope.removeUser = function(user) {
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);
    };
  }]);

  var userList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@domain.com'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com'
    }
  ];
})();
