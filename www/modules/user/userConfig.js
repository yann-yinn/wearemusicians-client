(function(){

  "use strict";

  angular.module('app.user')

    .config([
      '$stateProvider', '$translateProvider',
      function($stateProvider, $translateProvider) {

        $stateProvider

          .state('app.main.me', {
            url: '/me',
            views: {
              'me': {
                templateUrl: 'modules/user/templates/me.html'
              }
            }
          })

          .state('app.main.meForm', {
            url: '/me/edit',
            // replace me informations view content with meform.html content in main.html
            views: {
              'me': {
                templateUrl: 'modules/user/templates/meForm.html'
              }
            }
          })

          .state('app.main.users', {
            url: '/users',
            cache: false,
            views: {
              'usersList': {
                templateUrl: 'modules/user/templates/usersList.html'
              }
            }
          })

          .state('app.main.userDetail', {
            url: '/users/:userId',
            // replace usersList view content with userDetail.html content in main.html
            views: {
              'usersList': {
                templateUrl: 'modules/user/templates/userDetail.html'
              }
            }
          })

          .state('app.main.signup', {
            url : "/users/signup",
            views: {
              'signup': {
                templateUrl: 'modules/user/templates/signUpForm.html'
              }
            }
          });

        $translateProvider.translations('en', {
          USER_SIGNUP_BUTTON: "Sign up !",
          USER_EDIT_PROFILE_BUTTON: "Save",
          USER_SIGNOUT_BUTTON: "Sign out",
          USER_SIGNUP_FORM_EMAIL_LABEL: 'Email',
          USER_SIGNUP_FORM_EMAIL_ERROR_REQUIRED: 'Email is required',
          USER_SIGNUP_FORM_NAME_LABEL: 'User name',
          USER_SIGNUP_FORM_NAME_ERROR_REQUIRED: 'User name is required',
          USER_SIGNUP_FORM_PASSWORD_LABEL: 'Password',
          USER_SIGNUP_FORM_PASSWORD_ERROR_REQUIRED: 'Password is required',
          USER_VIEW_USERS_LIST_TITLE: 'Users',
          USER_VIEW_ME_TITLE: 'My account',
          USER_VIEW_ME_EDIT_TITLE: 'Edit my informations'
        });

        $translateProvider.translations('fr', {
          USER_SIGNUP_BUTTON: "Créer mon compte",
          USER_EDIT_PROFILE_BUTTON: "Mettre à jour",
          USER_SIGNOUT_BUTTON: "Se déconnecter",
          USER_SIGNUP_FORM_EMAIL_LABEL: 'Email',
          USER_SIGNUP_FORM_EMAIL_ERROR_REQUIRED: "L'email est obligatoire",
          USER_SIGNUP_FORM_NAME_LABEL: 'Nom',
          USER_SIGNUP_FORM_NAME_ERROR_REQUIRED: 'Le nom est requis',
          USER_SIGNUP_FORM_PASSWORD_LABEL: 'Mot de passe',
          USER_SIGNUP_FORM_PASSWORD_ERROR_REQUIRED: 'Le mot de passe est requis',
          USER_VIEW_USERS_LIST_TITLE: 'Utilisateurs',
          USER_VIEW_ME_TITLE: 'Mon profil',
          USER_VIEW_ME_EDIT_TITLE: 'Editer mes informations'
        });

      }]);

})();