(function(){

  "use strict";

  angular.module('app.user')

    // display my account informations
    .controller('meCtrl',
      ['$scope', 'authentication', 'user','$state', 'localStorageService',
       function($scope, authentication, user, $state, localStorageService) {

         // get current user datas from local storage.
         var localUser = localStorageService.get('user');
         $scope.user = user.get({id: localUser.id});

         $scope.signOut = function(redirection) {

           authentication.signOut()
             .success(_.bind(function(data, status, headers, config) {

               // destroy user storage
               localStorageService.remove('user');
               $scope.user = {};

               // redirect to app.onboard.home
               $state.go(redirection);
             }, $state))

             .error(function(data, status, headers, config) {
               alert(status);
             });
         };

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

      var usersResource = user.query();
      //console.log(userResource);
      usersResource.$promise.then(

        // success callback
        function(response){
          //console.log(response);
          $scope.users = usersResource;
        },

        // error callback
        function(response){
          if (typeof response.data.error.message != 'undefined') {
            alert("Failed to get users list server responds :" + response.data.error.message);
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

