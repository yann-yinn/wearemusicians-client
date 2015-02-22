(function(){

  /**
   * Get users from server
   */
  angular.module('app.authentication')

    .service('authentication', ['$http', 'config', '$state', function($http, config, $state) {

      /**
       * @param email (string) : user email
       * @param password (string) : user password as plain text.
       * @param redirection (string) : a state name to redirect user after sign in.
       */
      this.signIn = function(email, password, redirection) {

        var url = config.serverUrl + '/auth/login';

        $http.post(url, {email:email, password:password})

          .success(_.bind(function(data, status, headers, config) {
            // store current user.
            this.user = data;
            $state.go(redirection);
          }, this))

          .error(function(data, status, headers, config) {
            alert(status);
          });
      };

      /**
       * @param redirection (string) : a state name to redirect user after sign in.
       */
      this.signOut = function(redirection) {

        var url = config.serverUrl + '/auth/logout';

        $http.get(url)

          .success(_.bind(function(data, status, headers, config) {
            $state.go(redirection);
          }, $state))

          .error(function(data, status, headers, config) {
            alert(status);
          });
      };

    }]);

})();