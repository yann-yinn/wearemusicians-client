angular.module('drunkenPanda.onboard').config(function($stateProvider) {

  $stateProvider

    // Abstract root of app.onboard
    .state('app.onboard', {
      abstract: true,
      // base url for children states url.
      url: "/onboard",
      // children states templates will be inserted here
      templateUrl:'modules/drunkenPanda/onboard/templates/onboard.html'
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
          templateUrl: 'modules/drunkenPanda/onboard/templates/onboard.home.html'
        }
      }
    })

    .state('app.onboard.signin', {
      url : "/signin",
      views: {
        'signin': {
          templateUrl: 'modules/drunkenpanda/authentication/templates/signInForm.html',
          controller: 'signInCtrl'
        }
      }
    })

    .state('app.onboard.signup', {
      url : "/signup",
      views: {
        'signup': {
          templateUrl: 'modules/drunkenpanda/user/templates/signUpForm.html'
        }
      }
    });

});