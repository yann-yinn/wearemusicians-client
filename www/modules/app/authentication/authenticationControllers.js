angular.module('app.authentication')

  // log a user to the server
  .controller('signInCtrl', ['$scope', 'authentication', function($scope, authentication) {

    $scope.user = {
      email : '',
      password: ''
    };

    // triggered by click on the submit button on login form
    // @see login-form.html
    $scope.signIn = function(user) {
      // do not post request if user did not fill its email or password
      if (!user.email || !user.password) {
        return;
      }
      //@fixme dependance "app.main.users" state du module user
      authentication.signIn(user.email, user.password, 'app.main.users');
    }

  }]);