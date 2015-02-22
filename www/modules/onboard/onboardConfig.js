(function(){

  angular.module('app.onboard').config(
    ['$stateProvider', '$translateProvider', function($stateProvider, $translateProvider) {

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
        ONBOARD_USER_SIGNUP_BUTTON: "New user ? sign up !",
        ONBOARD_USER_SIGNIN_BUTTON: "Sign in",
        ONBOARD_USER_SIGNIN_TAB_TITLE: 'Sign in',
        ONBOARD_USER_SIGNUP_TAB_TITLE: 'Sign up',
        ONBOARD_HOME: 'Home'
      });

      $translateProvider.translations('fr', {
        ONBOARD_USER_SIGNUP_BUTTON: "Nouvel utilisateur ? Inscrivez vous !",
        ONBOARD_USER_SIGNIN_BUTTON: "Se connecter",
        ONBOARD_USER_SIGNIN_TAB_TITLE: 'Se connecter',
        ONBOARD_USER_SIGNUP_TAB_TITLE: 'Créer un compte',
        ONBOARD_HOME: 'Accueil'
      });

    }]);

})();