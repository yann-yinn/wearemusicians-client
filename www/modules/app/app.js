/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
 *
 * @see www/index.html
 */
(function () {

  /**
   * Master module, calling other modules.
   * Others modules should not call any code from this module, as
   * we may use this master module to disable one module by commenting
   * its dependencies array without braking the app.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  angular.module('app', [
      'ionic',
      //'app.routerUiDebug', // display ui-router events
      'app.config',
      'app.authentication',
      'app.user',
      'app.onboard',
      'pascalprecht.translate',
      'ngCookies',
      'LocalStorageModule'
    ])

    .run([
      '$ionicPlatform', '$rootScope', 'authentication', '$location', 'config', 'localStorageService',
      function($ionicPlatform, $rootScope, authentication, $location, config, localStorageService) {
        $ionicPlatform.ready(function() {

          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          }
          if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
          }
        });

        // if user is already authenticated, skip all onboarding screens
        // and redirect him to the first actual screen of the app.
        $rootScope.$on("$stateChangeStart",
          function (event, toState, toParams, fromState, fromParams) {

            if(authentication.isAuthenticated() && (toState.name.indexOf('app.onboard') === 0)) {
              $location.path('users');
            }
            if (!authentication.isAuthenticated() && (toState.name.indexOf('app.onboard') === -1)) {
              $location.path('onboard/home');
            }
          });
      }]);


})();



