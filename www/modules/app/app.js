/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
 *
 * @see www/index.html
 */

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
    'pascalprecht.translate'
  ])

  .run([
    '$ionicPlatform', '$rootScope', 'authentication', '$location', 'config',
    function($ionicPlatform, $rootScope, authentication, $location, config) {
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

    // access control : do not allow user to see any screen of our app
    // if he is not logged in.
    //
    // Subscribe to "$stateChangeStart" event from ui-router :
    // We check at each state change that user is logged in.
    // If not, we redirect him to the login / create account page.
    $rootScope.$on("$stateChangeStart",
      function (event, toState, toParams, fromState, fromParams) {
        if(!authentication.user && (toState.name != 'app.onboard.home' && toState.name != 'app.onboard.signin' &&toState.name != 'app.onboard.signup')) {
          //$location.path('app.onboard.home');
        }
      });
  }]);






