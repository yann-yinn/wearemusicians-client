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

            .state('tab.login', {
                url: '/login',
                views: {
                    'tab-login': {
                        templateUrl: 'modules/okc/account/templates/tab-login.html',
                        controller: 'LoginCtrl'
                    }
                }

            })

    });