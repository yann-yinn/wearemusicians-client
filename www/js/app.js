/**
 * Okc people module.
 *
 * Display list of persons
 */
angular.module('okc.people', [])

    .config(function($stateProvider, $urlRouterProvider) {


        $stateProvider

            .state('tab.persons', {
                url: '/persons',
                views: {
                    'tab-persons': {
                        templateUrl: 'templates/tab-persons.html',
                        controller: 'PersonsCtrl'
                    }
                }
            })
            .state('tab.person-detail', {
                url: '/persons/:personId',
                views: {
                    'tab-persons': {
                        templateUrl: 'templates/person-detail.html',
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
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }

            })

    });








angular.module('routerUiDebug', []).run(['$rootScope',function($rootScope){

    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
    });
    $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
        console.log('$stateChangeError - fired when an error occurs during transition.');
        console.log(arguments);
    });
    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
    });
// $rootScope.$on('$viewContentLoading',function(event, viewConfig){
//   // runs on individual scopes, so putting it in "run" doesn't work.
//   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
// });
    $rootScope.$on('$viewContentLoaded',function(event){
        console.log('$viewContentLoaded - fired after dom rendered',event);
    });
    $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
        console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
        console.log(unfoundState, fromState, fromParams);
    });

}]);

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'routerUiDebug', 'okc.people', 'okc.account'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            });



        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/persons');

    });






