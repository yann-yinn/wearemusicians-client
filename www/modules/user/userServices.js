(function(){

  "use strict";

  /**
   * Get users from server
   */
  angular.module('app.user')

    .factory('user', ['$cachedResource', 'config', function($cachedResource, config) {
      return $cachedResource('users', config.serverUrl + '/api/users/:id', { id: '@id'}, {
        'update': { method:'PUT' }
      });
    }]);

})();

