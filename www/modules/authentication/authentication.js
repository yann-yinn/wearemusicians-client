(function(){

  /**
   * Authentication module.
   *
   * Sign in, sign up, sign out from drunken panda server.
   */
  angular.module('app.authentication', [
    'pascalprecht.translate',
    'app.config',
    'LocalStorageModule'
  ]);

})();