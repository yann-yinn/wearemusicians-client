angular.module('drunkenPanda.authentication')

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
      authentication.signIn(user.email, user.password, 'app.main.persons');
    }

  }]);
