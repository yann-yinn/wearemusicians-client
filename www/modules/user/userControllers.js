(function(){

  "use strict";

  angular.module('app.user')

    // display my account informations
    .controller('meCtrl',
      ['$scope', '$ionicPopup', 'authentication', 'user', '$state', '$cordovaCamera', '$cordovaFile',
       function($scope, $ionicPopup, authentication, user, $state, $cordovaCamera, $cordovaFile) {

         $scope.images = [];

// 1
         $scope.images = [];

         $scope.addImage = function() {
           // 2
           var options = {
             destinationType : Camera.DestinationType.FILE_URI,
             sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
             allowEdit : false,
             encodingType: Camera.EncodingType.JPEG,
             popoverOptions: CameraPopoverOptions
           };

           // 3
           $cordovaCamera.getPicture(options).then(function(imageData) {

             // 4
             onImageSuccess(imageData);

             function onImageSuccess(fileURI) {
               createFileEntry(fileURI);
             }

             function createFileEntry(fileURI) {
               window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
             }

             // 5
             function copyFile(fileEntry) {
               var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
               var newName = makeid() + name;

               window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
                   fileEntry.copyTo(
                     fileSystem2,
                     newName,
                     onCopySuccess,
                     fail
                   );
                 },
                 fail);
             }

             // 6
             function onCopySuccess(entry) {
               $scope.$apply(function () {
                 $scope.images.push(entry.nativeURL);
               });
             }

             function fail(error) {
               console.log("fail: " + error.code);
             }

             function makeid() {
               var text = "";
               var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

               for (var i=0; i < 5; i++) {
                 text += possible.charAt(Math.floor(Math.random() * possible.length));
               }
               return text;
             }

           }, function(err) {
             console.log(err);
           });
         }

         $scope.urlForImage = function(imageName) {
           console.log("get correct path for image");
         }

         // get current user datas from local storage.
         var authDatas = authentication.isAuthenticated();

         // get full user object from server.
         user.get({id: authDatas.id}).$promise.then(function(me){
           $scope.me = me;
         });

         $scope.signOut = function(redirection) {
           authentication.signOut()

             .success(_.bind(function(data, status, headers, config) {
               // redirect to app.onboard.home
               $state.go(redirection);
             }, $state))

             .error(function(data, status, headers, config) {
               var popup = $ionicPopup.alert({
                 title: "We're so sorry ... ",
                 template: 'But server is unreachable... Please check your internet connexion or try later.',
                 buttons: [
                   {
                     text: "Grmblm ... okay ... ",
                     type : 'button-positive'
                   }
                 ]
               });
               $timeout(function() {
                 popup.close(); //close the popup after 3 seconds for some reason
               }, 4000);
             });

         };

       }])

    .controller('meFormCtrl', ['$scope','$ionicPopup', 'authentication', 'user', '$state', function($scope, $ionicPopup, authentication, user, $state) {

      // get current user datas from local storage.
      var authDatas = authentication.isAuthenticated();

      // get full user object from server.
      user.get({id: authDatas.id}).$promise.then(function(me) {
        $scope.me = me;
      });

      $scope.updateUser = function(me) {

        //me.$update().$promise.then(function() {

        //});

      };

    }])

    // create a new user from signUp form
    .controller('signUpCtrl', ['$scope', 'user', '$state', function($scope, userService, $state) {

      $scope.user = {
        email : '',
        password: ''
      };

      $scope.createUser = function(user) {

        userService.save(user).$promise.then(

          // success callback
          function(){
            //alert('user successfully created, you can signIn');
            $state.go('app.onboard.signin');
          },

          // error callback
          function(response){
            if (typeof response.data.error.message != 'undefined') {
              alert("User not created : " + response.data.error.message);
            }
            else {
              alert("An error was encountered but no message error found.")
            }
          }
        );

      };

    }])

    // list all existing users
    .controller('usersListCtrl', ['$scope', '$ionicPopup', 'user', function($scope, $ionicPopup, user) {

      /* query the server
      user.query().$promise
        .then(function(users) {
          console.log(users);
          $scope.users = users;
        })
        .catch(function(response){
          $ionicPopup.alert({
            title: 'Server error',
            template: 'Fail to get users lists from server'
          });
        }
      );
      */
      user.query().$httpPromise.then(function(response){
        $scope.users = response;
      });


      // refresh user list when dragging down
      $scope.doRefresh = function() {

        user.query().$promise
          .then(function(users) {
            $scope.users = users;
            $scope.$broadcast('scroll.refreshComplete');
          })
          .catch(function(users) {
            $ionicPopup.alert({
              title: 'Server error',
              template: 'Fail to get users lists from server'
            });
          })
          .finally(function(){
            $scope.$broadcast('scroll.refreshComplete');
          });

      };
    }])

    // see detail for a specific user.
    .controller('userDetailCtrl', ['$scope', '$stateParams', 'user', function($scope, $stateParams, user) {
      $scope.user = user.get({ id: $stateParams.userId });
    }]);

})();

