// Ionic app

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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

    $rootScope.$on("$stateChangeStart",
      function (event, toState, toParams, fromState, fromParams) {
        if(!authentication.user && (toState.name != 'start' && toState.name != 'login')) {
          $location.path('start');
        }
      });

  })

  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    // create root default abstract tab with ui-router
    // all modules will provides "children" path for this abstract tab.
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('home', {
        url: "/",
        controller: ['$state', 'authentication', function($state, authentication) {
          if (authentication.user) {
            $state.go('tab.persons');
          }
          else {
            $state.go('start');
          }
        }]
      })

      // setup an abstract state for the tabs directive
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

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');


    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://*.soundcloud.com/**'
    ]);

  });





