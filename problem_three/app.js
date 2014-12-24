(function() {
  var app = angular.module('account', []);

  app.controller('AccountController', function() {
    this.users = userList;

    this.addUser = function(user) {
      userList.push(this.user);
      this.user  = {};
    };
  });

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
