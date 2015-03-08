(function(){

  angular.module('app.authentication')

    // log a user to the server
    .controller('signInCtrl',
      ['$rootScope', '$scope', 'authentication', '$state', '$cookieStore',
       function($rootScope, $scope, authentication, $state, $cookieStore) {

      $scope.user = {
        email : '',
        password: ''
      };

      // triggered by click on the submit button on login form
      // @see login-form.html
      $scope.signIn = function(user) {

        authentication.signIn(user.email, user.password)

          .success(_.bind(function (data, status, headers, config) {
            $rootScope.$broadcast('appUserLoggedIn', data, status, headers, config);

            // update user authentication datas, that how we know
            // a user is "logged in for now".
            authentication.user = data;
            $cookieStore.put('user',  data, {expires:  new Date(2042)});

            // @FIXME dependance circulaire : cette route est définie par le module users.
            alert("Welcome back " + authentication.user.name + '!');
            $state.go('app.main.users');
          }, this))

          .error(function(data, status, headers, config) {
            $rootScope.$broadcast('appUserLoggedInError', data, status, headers, config);
            if (typeof data.error.message != 'undefined') {
              alert("Loggin failed : " + data.error.message);
            }
            else {
              alert("An error was encountered but no message error found.")
            }
          });
      }

    }]);

})()