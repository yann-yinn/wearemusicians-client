(function(){

  angular.module('app.authentication')

    .config([
      '$stateProvider','$translateProvider',
      function($stateProvider, $translateProvider) {

        $stateProvider

          .state('app.main.signIn', {
            url: '/signin',
            views: {
              'me': {
                templateUrl: 'modules/authentication/templates/signInForm.html'
              }
            }
          });

        $translateProvider.translations('en', {
          AUTHENTICATION_SIGNOUT_BUTTON: "Sign out",
          AUTHENTICATION_SIGNIN_BUTTON: "Sign in",
          AUTHENTICATION_SIGNIN_FORM_EMAIL_LABEL: "Email",
          AUTHENTICATION_SIGNIN_FORM_EMAIL_ERROR_REQUIRED:"Email is required",
          AUTHENTICATION_SIGNIN_FORM_PASSWORD_LABEL:"Password",
          AUTHENTICATION_SIGNIN_FORM_PASSWORD_ERROR_REQUIRED:"Password is required"
        });

        $translateProvider.translations('fr', {
          AUTHENTICATION_SIGNOUT_BUTTON: "Se déconnecter",
          AUTHENTICATION_SIGNIN_BUTTON: "Se connecter",
          AUTHENTICATION_SIGNIN_FORM_EMAIL_LABEL:"Email",
          AUTHENTICATION_SIGNIN_FORM_EMAIL_ERROR_REQUIRED:"L'email est requis",
          AUTHENTICATION_SIGNIN_FORM_PASSWORD_LABEL:"Mot de passe",
          AUTHENTICATION_SIGNIN_FORM_PASSWORD_ERROR_REQUIRED:"Le mot de passe est requis"
        });

      }]);

})();