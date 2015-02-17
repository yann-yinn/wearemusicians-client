angular.module('drunkenPanda.user')

  // display my account informations
  .controller('meCtrl', ['$scope', 'authentication', function($scope, authentication) {
    $scope.authentication = authentication;
  }])

  // create a new user from signUp form
  .controller('createAccountCtrl', ['$scope', 'user', '$state', function($scope, user, $state) {
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
      user.save(user);
      $state.go('app.onboard.home');
    }
  }])

  .controller('usersListCtrl', ['$scope', 'user', function($scope, user) {

    $scope.users = user.query();

    $scope.doRefresh = function() {
      $scope.persons = user.query();
      $scope.persons.$promise.finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });

    };
  }])

  .controller('userDetailCtrl', ['$scope', '$stateParams', 'user', function($scope, $stateParams, user) {
    $scope.user = user.get({ id: $stateParams.userId });
  }]);



