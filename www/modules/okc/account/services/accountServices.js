
/**
 * Get users from server
 */
angular.module('okc.account').service('authentication', ['$http', 'config', '$state', function($http, config, $state) {

  // if post request is successfull, this will contain
  // current logged in user.
  this.user = null;

  this.login = function(email, password, redirection) {

    var url = config.server.getServerBaseUrl() + '/auth/login';

    $http.post(url, {email:email, password:password})

      .success(_.bind(function(data, status, headers, config) {
        console.log(data);
        // store current user
        this.user = data;
        $state.go(redirection);
      }, this))

      .error(function(data, status, headers, config) {
        alert(status);
      });
  }

  this.logout = function(redirection) {

    var url = config.server.getServerBaseUrl() + '/auth/logout';

    $http.get(url)

      .success(_.bind(function(data, status, headers, config) {
        $state.go(redirection);
      }, $state))

      .error(function(data, status, headers, config) {
        alert(status);
      });
  }




}]);

