(function () {

  /**
   * Authenticate a user against server
   */

  angular.module('app.authentication')

    .service('authentication', ['$http', 'config', '$state', function($http, config, $state) {

      // will contain user datas if log in is successfull
      this.user = null;

      /**
       * Log in a user to Drunken Panda server
       *
       * @param email (string) : user email
       * @param password (string) : user password as plain text.
       * @param redirection (string) : a state name to redirect user after sign in.
       */
      this.signIn = function(email, password, redirection) {

        var url = config.serverUrl + '/auth/login';

        return $http.post(url, {email: email, password: password});

      };

      /**
       * @param redirection (string) : a state name to redirect user after sign in.
       */
      this.signOut = function(redirection) {

        var url = config.serverUrl + '/auth/logout';

        return $http.get(url)

          .success(_.bind(function(data, status, headers, config) {
            $state.go(redirection);
          }, $state))

          .error(function(data, status, headers, config) {
            alert(status);
          });
      };

    }]);

})();