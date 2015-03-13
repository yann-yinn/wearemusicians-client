/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
 *
 * @see www/index.html
 */
(function () {

  /**
   * Master module, calling all other modules.
   * @see https://docs.angularjs.org/guide/module
   */
  angular.module('app', [
      'ionic',
      //'app.routerUiDebug', // display ui-router events
      'app.config',
      'app.authentication',
      'app.user',
      'app.onboard',
      'app.instrument',
      'pascalprecht.translate',
      'LocalStorageModule',
    ])

    .run([
      '$ionicPlatform', '$rootScope', 'authentication', '$location',
      function($ionicPlatform, $rootScope, authentication, $location) {

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

        // When ui-router is changing state :
        $rootScope.$on("$stateChangeStart",

          function (event, toState, toParams, fromState, fromParams) {
            // if user is already authenticated, skip all onboarding screens
            if(authentication.isAuthenticated() && (toState.name.indexOf('app.onboard') === 0)) {
              $location.path('users');
            }
            // if user is not authenticatated, redirect him to onboard screens
            if (!authentication.isAuthenticated() && (toState.name.indexOf('app.onboard') === -1)) {
              $location.path('onboard/home');
            }

          });
      }]);

})();



