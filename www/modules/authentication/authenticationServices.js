(function () {

  /**
   * Authenticate a user against Drunken Panda server
   */
  angular.module('app.authentication')

    .service('authentication', ['$http', 'config', 'localStorageService', function($http, config, localStorageService) {

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
          if (typeof data.email !== 'undefined') {
            localStorageService.set('remember.email', data.email);
          }
        });
        return httpPost;
      };

      /**
       * sign Out user from server
       */
      this.signOut = function() {
        // logout from drunken panda server
        var httpGet = $http.get(config.serverUrl + '/auth/logout');
        httpGet.success(function (data, status, headers, config) {
          // destroy local authentication datas.
          localStorageService.remove('authenticationDatas');
        });
        return httpGet;
      };

    }]);

})();