angular.module('drunkenPanda.authentication')

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.signIn', {
        url: '/signin',
        views: {
          'me': {
            templateUrl: 'modules/drukenPanda/authentication/templates/signInForm.html',
            controller: 'signInCtrl'
          }
        }
      })

  });