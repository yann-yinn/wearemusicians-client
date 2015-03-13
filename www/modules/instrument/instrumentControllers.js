(function(){

  "use strict";

  angular.module('app.instrument')


    // display my account informations
    .controller('meAddInstrumentFormCtrl',
      ['$scope', 'authentication', 'user', '$state', 'instrument',
       function($scope, authentication, user, $state, instrument) {

         // get current user datas from local storage.
         var authDatas = authentication.isAuthenticated();
         // get full user object from server.
         $scope.user = user.get({id: authDatas.id});

         $scope.addInstrument = function(Submittedinstrument, user) {
           instrument.save(Submittedinstrument);
         };

       }])

})();

