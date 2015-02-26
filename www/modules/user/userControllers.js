(function(){

  "use strict";

  angular.module('app.user')

    // display my account informations
    .controller('meCtrl', ['$scope', 'authentication', 'user', function($scope, authentication, user) {
      // we use user service to load full user object
      // from authentication datas received in log in operation
      $scope.user = user.get({id: authentication.user.id});
    }])

    // create a new user from signUp form
    .controller('signUpCtrl', ['$scope', 'user', '$state', function($scope, userService, $state) {

      $scope.user = {
        email : '',
        password: ''
      };

      $scope.createUser = function(user) {

        userService.save(user).$promise.then(

          // success callback
          function(){
            //alert('user successfully created, you can signIn');
            $state.go('app.onboard.signin');
          },

          // error callback
          function(response){
            if (typeof response.data.error.message != 'undefined') {
              alert("User not created : " + response.data.error.message);
            }
            else {
              alert("An error was encountered but no message error found.")
            }
          }
        );

      };

    }])

    .controller('usersListCtrl', ['$scope', 'user', function($scope, user) {

      $scope.users = user.query();
      $scope.users.$promise.then(

        // success callback
        function(response){

        },

        // error callback
        function(response){
          if (typeof response.data.error.message != 'undefined') {
            alert("User not created : " + response.data.error.message);
          }
          else {
            alert("An error was encountered but no message error found.")
          }
        }
      );

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

