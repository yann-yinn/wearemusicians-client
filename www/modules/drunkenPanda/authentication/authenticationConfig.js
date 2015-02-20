angular.module('drunkenPanda.authentication')

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.signIn', {
        url: '/signin',
        views: {
          'me': {
            templateUrl: 'modules/drunkenPanda/authentication/templates/signInForm.html',
            controller: 'signInCtrl'
          }
        }
      })

  });