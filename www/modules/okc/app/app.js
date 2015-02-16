/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
 *
 * @see www/index.html
 */

/**
 * angular.module object is a global place for creating, registering and retrieving Angular modules.
 * 'app' is the name of this angular module (also set in a <body> attribute in index.html)
 * the 2nd parameter is an array of required modules.
 *
 * A module is a collection of configuration and run blocks which get applied
 * to the application during the bootstrap process.
 * In its simplest form the module consist of a collection of two kinds of blocks:
 * - run
 * - config
 *
 * @see https://docs.angularjs.org/guide/module
 */
angular.module('app', ['ionic', 'okc.persons', 'okc.account'])

  .run(function($ionicPlatform, $rootScope, authentication, $location) {
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
        if(!authentication.user && (toState.name != 'start' && toState.name != 'login' &&toState.name != 'createAccount')) {
          $location.path('start');
        }
      });
  })

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    // if none of the below states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('home', {
        url: "/",
        controller: ['$state', 'authentication', function($state, authentication) {
          // if user is logged in, redirect him to the first screen of our application
          if (authentication.user) {
            $state.go('tab.persons');
          }
          // else, send him to sign in / create account page.
          else {
            $state.go('start');
          }
        }]
      })

      // create root default abstract tab with ui-router
      // all modules will provides "children" path for this abstract tab.
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "modules/okc/app/templates/tabs.html"
      })

      // setup an abstract state for the tabs directive
      .state('start', {
        url: "/start",
        templateUrl: "modules/okc/app/templates/start.html"
      });

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from soundcloud domain.  Notice the difference between * and **.
      'https://*.soundcloud.com/**'
    ]);

  });





