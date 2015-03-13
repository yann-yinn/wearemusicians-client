(function () {

  angular.module('app')

    // create our states; this is some kind of advanced router for our app.
    // states machines allow ionic module to build automatically a "back" button
    // and are far more flexible than native ng-route from Angular js.
    // @see ui-router module : https://github.com/angular-ui/ui-router
    .config([
      '$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', 'config', '$translateProvider',
      function($stateProvider, $urlRouterProvider, $sceDelegateProvider, config, $translateProvider) {

        // if none of the below states are matched, use this as the fallback
        // for now, redirect to a 404 state, to let us know something goes wrong.
        $urlRouterProvider.otherwise('/onboard/home');

        $translateProvider.preferredLanguage('fr');

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
            templateUrl:'modules/app/templates/main.html'
          });

        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',

          // Allow loading from soundcloud domain.  Notice the difference between * and **.
          'https://*.soundcloud.com/**',

          // Allow access to our server
          config.serverUrl + '/**'

        ]);

        $translateProvider.translations('en', {
          APP_TAB_ME_TITLE: "Me",
          APP_TAB_USERS_TITLE: "Users",
          CANCEL_BUTTON: "Cancel",
          SAVE_BUTTON: "Save"
        });

        $translateProvider.translations('fr', {
          APP_TAB_ME_TITLE: "Moi",
          APP_TAB_USERS_TITLE: "Utilisateurs",
          CANCEL_BUTTON: "Annuler",
          SAVE_BUTTON: "Sauvegarder"
        });


      }]);

})();