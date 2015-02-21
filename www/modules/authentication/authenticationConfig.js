angular.module('app.authentication')

  .config([
    '$stateProvider','$translateProvider',
    function($stateProvider, $translateProvider) {

    $stateProvider

      .state('app.main.signIn', {
        url: '/signin',
        views: {
          'me': {
            templateUrl: 'modules/authentication/templates/signInForm.html',
            controller: 'signInCtrl'
          }
        }
      });

    $translateProvider.translations('en', {
      AUTHENTICATION_SIGNOUT: "Sign out",
      AUTHENTICATION_SIGNIN: "Sign in"
    });

    $translateProvider.translations('fr', {
      AUTHENTICATION_SIGNOUT: "Se déconnecter",
      AUTHENTICATION_SIGNIN: "Se connecter"
    });

  }]);