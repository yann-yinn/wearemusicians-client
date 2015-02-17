
/**
 * Get users from server
 */
angular.module('drunkenPanda.user')

  .factory('user', ['$resource', 'config', function($resource, config) {
    return $resource(config.serverUrl + '/api/users/:id', { id: '@id'});
}]);

