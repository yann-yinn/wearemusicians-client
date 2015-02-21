angular.module('app.authentication')

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.signIn', {
        url: '/signin',
        views: {
          'me': {
            templateUrl: 'modules/authentication/templates/signInForm.html',
            controller: 'signInCtrl'
          }
        }
      })

  });