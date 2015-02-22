(function(){

angular.module('app.user')

  // display my account informations
  .controller('meCtrl', ['$scope', 'authentication', function($scope, authentication) {
    $scope.authentication = authentication;
  }])

  // create a new user from signUp form
  .controller('signUpCtrl', ['$scope', 'user', '$state', function($scope, userService, $state) {

    $scope.user = {
      email : '',
      password: ''
    };

    $scope.createUser = function(user) {
      userService.save(user);
      $state.go('app.onboard.home');
    };

  }])

  .controller('usersListCtrl', ['$scope', 'user', function($scope, user) {

    $scope.users = user.query();
    console.log($scope.users);

    $scope.doRefresh = function() {
      $scope.users = user.query();
      $scope.users.$promise.finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });

    };
  }])

  .controller('userDetailCtrl', ['$scope', '$stateParams', 'user', function($scope, $stateParams, user) {
    $scope.user = user.get({ id: $stateParams.userId });
  }]);

})();
