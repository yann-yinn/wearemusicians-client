(function(){

  angular.module('app.authentication')

    // log a user to the server
    .controller('signInCtrl',
      ['$rootScope', '$ionicHistory', '$scope', 'authentication', '$state', 'localStorageService', '$ionicPopup', '$timeout',
       function($rootScope, $ionicHistory, $scope, authentication, $state, localStorageService, $ionicPopup, $timeout) {

         // try to get en email user already entered previously to
         // avoid him some typing.
         var email = '';
         if (localStorageService.get('remember.email')) {
           email = localStorageService.get('remember.email');
         }

         $scope.user = {
           email : email,
           password: ''
         };

         // triggered by click on the submit button on login form
         // @see login-form.html
         $scope.signIn = function(user) {

           // log in user to the server
           authentication.signIn(user.email, user.password)
             .success(function (data, status, headers, config) {
               var welcomePopup = $ionicPopup.alert({
                 title: 'Welcome back',
                 template: 'Nice to see you, '+  _.escape(data.name) + ' !',
                 buttons: [
                   {
                     text: "You're welcome, Dude.",
                     type : 'button-positive'
                   }
                 ]
               });
               $timeout(function() {
                 welcomePopup.close(); //close the popup after 3 seconds for some reason
               }, 4000);
               //@TODO  dependance circulaire au module user
               $ionicHistory.nextViewOptions({
                 disableAnimate: true,
                 disableBack: true
               });
               $state.go('app.main.users');
             })
             .error(function(data, status, headers, config) {
               alert("Loggin failed : " + data.error.message);
             });

         }

       }]);

})();