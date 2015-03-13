(function(){

  "use strict";

  angular.module('app.user')

    // display my account informations
    .controller('meCtrl',
      ['$scope', 'authentication', 'user', '$state',
       function($scope, authentication, user, $state) {

         // get current user datas from local storage.
         var authDatas = authentication.isAuthenticated();
         // get full user object from server.
         $scope.user = user.get({id: authDatas.id});

         $scope.signOut = function(redirection) {

           authentication.signOut()

             .success(_.bind(function(data, status, headers, config) {
               // redirect to app.onboard.home
               $state.go(redirection);
             }, $state))

             .error(function(data, status, headers, config) {
               alert(status);
             });
         };

       }])

    .controller('meFormCtrl', ['$scope', 'authentication', 'user', '$state', function($scope, authentication, user, $state) {

      // get current user datas from local storage.
      var authDatas = authentication.isAuthenticated();

      // get full user object from server.
      $scope.user = user.get({id: authDatas.id});

      $scope.updateUser = function(updatedUser) {
        user.save(updatedUser);
      };

      $scope.cancelEdition = function() {
        $state.go('app.main.me');
      }

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

    // list all existing users
    .controller('usersListCtrl', ['$scope', 'user', 'localStorageService', '$ionicLoading', function($scope, user, localStorageService, $ionicLoading) {

      // search a local cache.
      var localUsersList = false;
      var cacheKey = 'cache.usersList';
      if (localStorageService.get(cacheKey)) {
        localUsersList = localStorageService.get(cacheKey);
      }
      $scope.users = localUsersList;


      // no local cache, we need to display a loader while we are fetching
      // datas to the webserver
      if (!$scope.users) {
        // Setup the loader
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          noBackdrop: true,
          maxWidth: 200,
          showDelay: 0,
          duration:250
        });
      }

      user.query().$promise.then(

        // success callback
        function(users){
          localStorageService.set(cacheKey, users);
          $scope.users = users;
          $ionicLoading.hide();
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

      // refresh user list when dragging down
      $scope.doRefresh = function() {
        user.query().$promise.then(
          // success callback
          function(users) {
            localStorageService.set(cacheKey, users);
            $scope.users = users;
            $scope.$broadcast('scroll.refreshComplete');
          },
          // error callback
          function(users) {
            alert('server unreachable');
            $scope.$broadcast('scroll.refreshComplete');
          });
      };
    }])

    // see detail for a specific user.
    .controller('userDetailCtrl', ['$scope', '$stateParams', 'user', function($scope, $stateParams, user) {
      $scope.user = user.get({ id: $stateParams.userId });
    }]);

})();

