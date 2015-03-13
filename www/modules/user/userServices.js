(function(){

  "use strict";

  /**
   * Get users from server
   */
  angular.module('app.user')

    .factory('user', ['$resource', 'config', function($resource, config) {
      return $resource(config.serverUrl + '/api/users/:id', { id: '@id'}, {
        get : {
          method : 'GET'
        }
      });
    }]);

})();

