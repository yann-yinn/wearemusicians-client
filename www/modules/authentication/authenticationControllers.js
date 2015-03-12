(function(){

  angular.module('app.authentication')

    // log a user to the server
    .controller('signInCtrl',
      ['$rootScope', '$scope', 'authentication', '$state', 'localStorageService',
       function($rootScope, $scope, authentication, $state, localStorageService) {

         $scope.user = {
           email : '',
           password: ''
         };

         // triggered by click on the submit button on login form
         // @see login-form.html
         $scope.signIn = function(user) {

           // log in user to the server
           authentication.signIn(user.email, user.password)

             // on successfull http request (code 2**)
             .success(function (data, status, headers, config) {
               // store authentication datas of current user in local storage
               // @FIXME dependance circulaire : cette route est définie par le module users.
               alert("Welcome back " + data.name + '!');
               $state.go('app.main.users');
             })

             .error(function(data, status, headers, config) {
               alert("Loggin failed : " + data.error.message);
             });
         }

       }]);

})()