/**
 * Okc people module.
 *
 * Display list of persons
 */
angular.module('okc.account', ['okc.persons'])

  .config(function($stateProvider) {


    $stateProvider

      .state('app.main.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'modules/okc/account/templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })



  });