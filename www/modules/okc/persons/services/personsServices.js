
/**
 * A simple example service that returns some data.
 */
angular.module('okc.persons').factory('Persons', function($resource) {
    return $resource('http://localhost:3333/api/users/:id', { id: '@id'});
});

