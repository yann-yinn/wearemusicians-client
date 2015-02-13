/**
 * Okc people module.
 *
 * Display list of persons
 */
angular.module('okc.persons', [])

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

    })

    .controller('PersonsCtrl', function($scope, Persons) {

        $scope.persons = Persons.all();
    })

    .controller('PersonDetailCtrl', function($scope, $stateParams, Persons) {
        $scope.person = Persons.get($stateParams.personId);
    })


/**
 * A simple example service that returns some data.
 */
    .factory('Persons', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var persons = [
            {
                id: 0,
                name: 'Ben Sparrow',
                notes: 'Enjoys drawing things',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            }, {
                id: 1,
                name: 'Max Lynx',
                notes: 'Odd obsession with everything',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            }, {
                id: 2,
                name: 'Andrew Jostlen',
                notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
                face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
            }, {
                id: 3,
                name: 'Adam Bradleyson',
                notes: 'I think he needs to buy a boat',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            }, {
                id: 4,
                name: 'Perry Governor',
                notes: 'Just the nicest guy',
                face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
            }
        ];

        return {
            all: function() {
                return persons;
            },
            get: function(personId) {
                // Simple index lookup
                return persons[personId];
            }
        }
    });