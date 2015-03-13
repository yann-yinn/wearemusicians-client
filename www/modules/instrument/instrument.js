(function(){

  "use strict";

  /**
   * USer module.
   *
   * List / add  instruments from / to drunkenPanda server.
   *
   * Display list of persons
   */
  angular.module('app.instrument', [
    'pascalprecht.translate',
    'app.authentication', // authenticate to druken panda auth system
    'ngResource', // for REST services
    'app.user'
  ]);

})();

