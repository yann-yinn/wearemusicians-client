angular.module('app.user')

  .config(function($stateProvider) {

    $stateProvider

      .state('app.main.me', {
        url: '/me',
        views: {
          'me': {
            templateUrl: 'modules/app/user/templates/me.html',
            controller: 'meCtrl'
          }
        }
      })

      .state('app.main.users', {
        url: '/users',
        views: {
          'usersList': {
            templateUrl: 'modules/app/user/templates/usersList.html',
            controller: 'usersListCtrl'
          }
        }
      })

      .state('app.main.userDetail', {
        url: '/users/:userId',
        // replace usersList view content with userDetail.html content
        views: {
          'usersList': {
            templateUrl: 'modules/app/user/templates/userDetail.html',
            controller: 'userDetailCtrl'
          }
        }
      })

      .state('app.main.signup', {

        url : "/users/signup",
        views: {
          'signup': {
            templateUrl: 'modules/app/user/templates/signUpForm.html'
          }
        }
      })

  });