(function(){

  "use strict";

  /**
   * USer module.
   *
   * List / add  user from / to drunkenPanda server.
   *
   * Display list of persons
   */
  angular.module('app.user', [
    'pascalprecht.translate',
    'app.authentication', // authenticate to druken panda auth system
    'ngResource', // for REST services
    'LocalStorageModule',
    'ngCachedResource'
  ]);

})();

