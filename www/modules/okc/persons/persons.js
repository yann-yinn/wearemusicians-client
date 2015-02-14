/**
 * Declaration of Okc people module
 *
 * Display list of persons
 */
angular.module('okc.persons', [
    'ngResource'
    ])

    .config(function($stateProvider, $urlRouterProvider) {


        $stateProvider

            .state('tab.persons', {
                url: '/persons',
                views: {
                    'tab-persons': {
                        templateUrl: 'modules/okc/persons/templates/tab-persons.html',
                        controller: 'PersonsCtrl'
                    }
                }
            })
            .state('tab.person-detail', {
                url: '/persons/:personId',
                views: {
                    'tab-persons': {
                        templateUrl: 'modules/okc/persons/templates/person-detail.html',
                        controller: 'PersonDetailCtrl'
                    }
                }
            })

    });


