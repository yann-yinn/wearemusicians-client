angular.module('app.authentication')

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.signIn', {
        url: '/signin',
        views: {
          'me': {
            templateUrl: 'modules/app/authentication/templates/signInForm.html',
            controller: 'signInCtrl'
          }
        }
      })

  });