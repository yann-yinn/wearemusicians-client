/**
 * Declaration of Okc people module
 *
 * Display list of persons
 */
angular.module('okc.persons', [
    'ngResource',
    'okc.config'
    ])

    .config(['$stateProvider', function($stateProvider) {

        $stateProvider

            .state('app.main.persons', {
                url: '/persons',
                views: {
                    'tab-persons': {
                        templateUrl: 'modules/okc/persons/templates/tab-persons.html',
                        controller: 'PersonsCtrl'
                    }
                }
            })
            .state('app.main.person-detail', {
                url: '/persons/:personId',
                views: {
                    'tab-persons': {
                        templateUrl: 'modules/okc/persons/templates/person-detail.html',
                        controller: 'PersonDetailCtrl'
                    }
                }
            })

    }]);


