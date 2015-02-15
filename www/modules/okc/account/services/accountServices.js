
/**
 * Get users from server
 */
angular.module('okc.account').service('authentication', ['$http', 'config', function($http, config) {

    // if post request is successfull, this will contain
    // current logged in user.
    this.user = null;

    this.login = function(email, password) {

        var url = config.server.getServerBaseUrl() + '/auth/login';

        $http.post(url, {email:email, password:password}).

            success(_.bind(function(data, status, headers, config) {
                this.user = data;
            }, this)).

            error(function(data, status, headers, config) {
                console.log("unreachable server");
            });
    }



}]);

