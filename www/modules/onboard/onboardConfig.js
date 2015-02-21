angular.module('app.onboard').config(['$stateProvider', '$translateProvider', function($stateProvider, $translateProvider) {

  $stateProvider

    // Abstract root of app.onboard
    .state('app.onboard', {
      abstract: true,
      // base url for children states url.
      url: "/onboard",
      // children states templates will be inserted here
      templateUrl:'modules/onboard/templates/onboard.html'
    })

    // update onboard.html, inserting step.1 html template when
    // onboard/step-1 is the url.
    // views is an object because when need to inform router UI of views
    // we want to update in onboard.html
    // In our case, we simply want to display step 1.
    .state('app.onboard.home', {
      url : "/home",
      views: {
        // this is the value of "name" attribute of ion-nav-view from parent state template.
        'home': {
          templateUrl: 'modules/onboard/templates/onboard.home.html'
        }
      }
    })

    .state('app.onboard.signin', {
      url : "/signin",
      views: {
        'signin': {
          templateUrl: 'modules/authentication/templates/signInForm.html',
          controller: 'signInCtrl'
        }
      }
    })

    .state('app.onboard.signup', {
      url : "/signup",
      views: {
        'signup': {
          templateUrl: 'modules/user/templates/signUpForm.html'
        }
      }
    });

  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'german'
  });

  $translateProvider.translations('de', {
    TITLE: 'Hallo',
    FOO: 'Dies ist ein Paragraph.',
    BUTTON_LANG_EN: 'englisch',
    BUTTON_LANG_DE: 'deutsch'
  });



}]);