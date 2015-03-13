(function(){

  "use strict";

  /**
   * Get users from server
   */
  angular.module('app.instrument')

    .factory('instrument', ['$resource', 'config', function($resource, config) {
      return $resource(config.serverUrl + '/api/instrument/:id', { id: '@id'});
    }]);

})();

