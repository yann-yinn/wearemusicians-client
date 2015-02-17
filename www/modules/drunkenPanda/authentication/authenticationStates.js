angular.module('drunkenPanda.authentication')

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.signIn', {
        url: '/signin',
        views: {
          'tab-account': {
            templateUrl: 'modules/okc/account/templates/tab-account.html',
            controller: 'signInCtrl'
          }
        }
      })

  });