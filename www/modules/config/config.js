(function(){

  /**
   * This module hold app configuration for now.
   * Inject "config" in controllers / services etc ... to use.
   */
  angular.module('app.config', [])

    .constant('config', {
      // base url for webservices, point to nodejs server
      serverUrl: 'http://91.121.166.167:3333'
    });

})();
