
/**
 * Get users from server
 */
angular.module('okc.persons').factory('Persons', ['$resource', 'config', function($resource, config) {
    return $resource(config.serverUrl + '/api/users/:id', { id: '@id'});
}]);

