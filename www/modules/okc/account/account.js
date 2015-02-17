/**
 * Okc people module.
 *
 * Display list of persons
 */
angular.module('okc.account', [
    'okc.persons',
    'drunkenPanda.authentication'
  ])

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.me', {
        url: '/me',
        views: {
          'tab-account': {
            templateUrl: 'modules/okc/account/templates/me.html',
            controller: 'meCtrl',
            resolve: {

            }
          }
        }
      })



  });