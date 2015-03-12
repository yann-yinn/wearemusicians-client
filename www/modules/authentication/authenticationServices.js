(function () {

  /**
   * Authenticate a user against Drunken Panda server
   */
  angular.module('app.authentication')

    .service('authentication', ['$http', 'config', 'localStorageService', function($http, config, localStorageService) {

      // will contain user datas if log in is successfull
      this.user = null;

      /**
       * Return authentication datas if user is logged in, null otherwise
       * @returns {*}
       */
      this.isAuthenticated = function() {
        var authenticationDatas = localStorageService.get('authenticationDatas');
        if (authenticationDatas) {
          return authenticationDatas;
        }
        return false;
      };

      /**
       * Sign in a user to Drunken Panda server
       *
       * @param email (string) : user email
       * @param password (string) : user password as plain text.
       */
      this.signIn = function(email, password) {
        var url = config.serverUrl + '/auth/login';
        var httpPost = $http.post(url, {email: email, password: password});
        httpPost.success(function (data, status, headers, config) {
          // save locally authentications datas.
          localStorageService.set('authenticationDatas', data);
        });
        return httpPost;
      };

      /**
       * sign Out user from server
       */
      this.signOut = function() {
        // destro local authentication.
        localStorageService.remove('authenticationDatas');
        // logout from server
        return $http.get(config.serverUrl + '/auth/logout');
      };

    }]);

})();