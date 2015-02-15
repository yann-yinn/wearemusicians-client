
/**
 * Get users from server
 */
angular.module('okc.persons').factory('Persons', ['$resource', 'config', function($resource, config) {
    return $resource(config.server.getServerResourcesBaseUrl() + '/users/:id', { id: '@id'});
}]);

