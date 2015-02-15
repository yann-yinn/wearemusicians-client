/**
 * Okc people module.
 *
 * Display list of persons
 */
angular.module('okc.account', ['okc.persons'])

  .config(function($stateProvider) {

    $stateProvider

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'modules/okc/account/templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: 'modules/okc/account/templates/login-form.html',
        controller: 'LoginCtrl'
      })

      .state('createAccount', {
        url: '/create-account',
        templateUrl: 'modules/okc/account/templates/account-form.html',
        controller: 'createAccountCtrl'
      })

      .state('logout', {
        url: '/logout',
        controller: ['authentication', function(authentication) {
          authentication.logout();
        }]
      });

  });