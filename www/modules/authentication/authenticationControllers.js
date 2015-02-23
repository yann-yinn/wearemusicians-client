(function(){

  angular.module('app.authentication')

    // log a user to the server
    .controller('signInCtrl', ['$scope', 'authentication', '$state', function($scope, authentication, $state) {

      $scope.user = {
        email : '',
        password: ''
      };

      // triggered by click on the submit button on login form
      // @see login-form.html
      $scope.signIn = function(user) {
        // do not post request if user did not fill its email or password
        // @FIXME use template with form.$valid on submit instead.
        if (!user.email || !user.password) {
          return;
        }
        //@fixme dependance "app.main.users" state du module user
        authentication.signIn(user.email, user.password)

        .success(_.bind(function (data, status, headers, config) {
          // store current user, this is how we know a user is authenticated for now.
          this.user = data;
          $state.go('app.main.users');
        }, this))

          .error(function(data, status, headers, config) {
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