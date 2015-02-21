/**
 * This is the master module of the application, instancied in
 * index.html with <body ng-app="app">
 *
 * @see www/index.html
 */

/**
 * Master module, calling other modules.
 *
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
angular.module('app', [
    'ionic',
    //'app.routerUiDebug', // display ui-router events
    'app.config',
    'app.authentication',
    'app.user',
    'app.onboard'
  ])

  .run(function($ionicPlatform, $rootScope, authentication, $location, config) {
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
  })

  // create our states; this is some kind of advanced router for our app.
  // states machines allow ionic module to build automatically a "back" button
  // and are far more flexible than native ng-route from Angular js.
  // @see ui-router module : https://github.com/angular-ui/ui-router
  .config([
    '$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', 'config', '$translateProvider',
    function($stateProvider, $urlRouterProvider, $sceDelegateProvider, config, $translateProvider) {

    // if none of the below states are matched, use this as the fallback
    // for now, redirect to a 404 state, to let us know something goes wrong.
    $urlRouterProvider.otherwise('/not-found');

    $stateProvider

      // Abstract root of our app. Set as abstract, we dont want this state
      // to be transionned to. But it will be always "active" by default,
      // so this is some kind of middleware for our states routing.
      // All our states will be children of this states. As
      // children are rendered inside parent state template, we need
      // to provide here a template so that children can be rendered somewhere !
      .state('app', {
        abstract: true,
        // children states templates will be inserted here :
        template:'<ion-nav-view></ion-nav-view>'
      })

      // route not found will get here.
      .state('app.notFound', {
        url: '/not-found',
        // children states templates will be inserted here
        template:'State not found'
      })

      // Abstract root of app.main
      .state('app.main', {
        abstract: true,
        // children states templates will be inserted here
        templateUrl:'modules/app/app/templates/main.html'
      });

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from soundcloud domain.  Notice the difference between * and **.
      'https://*.soundcloud.com/**',

      // just in case, allow access to our demo server for now.
      config.serverUrl + '/**'

    ]);


    $translateProvider.preferredLanguage('fr');

  }]);





