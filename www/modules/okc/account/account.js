/**
 * Okc people module.
 *
 * Display list of persons
 */
angular.module('okc.account', [])

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })

    .config(function($stateProvider, $urlRouterProvider) {

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

    });