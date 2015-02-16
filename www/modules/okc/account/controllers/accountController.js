angular.module('okc.account')

  // display account profile
  .controller('AccountCtrl', ['$scope','authentication', function($scope, authentication) {
    $scope.authentication = authentication;
  }])

  // display account profile
  .controller('createAccountCtrl', ['$scope', 'Persons', '$state', function($scope, Persons, $state) {
    $scope.message = 'hello';

    $scope.user = {
      email : '',
      password: ''
    };

    $scope.savePerson = function(user) {
      // do not submit form if some fields are not filled
      if (!user.email || !user.password || !user.name) {
        return;
      }
      Persons.save(user);
      $state.go('app.onboard.home');
    }
  }])

  // log a user to the server
  .controller('LoginCtrl', ['$scope', 'authentication', function($scope, authentication) {

    $scope.authentication = authentication;

    $scope.user = {
      email : '',
      password: ''
    };

    // triggered by click on the submit button on login form
    // @see login-form.html
    $scope.logIn = function(user) {
      // do not post request if user did not fill its email or password
      if (!user.email || !user.password) {
        return;
      }
      authentication.login(user.email, user.password, 'app.main.persons');
    }

  }]);
