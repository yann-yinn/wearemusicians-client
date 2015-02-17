angular.module('okc.account')

  // display my account informations
  .controller('meCtrl', ['$scope', 'authentication', 'Persons', function($scope, authentication) {
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


