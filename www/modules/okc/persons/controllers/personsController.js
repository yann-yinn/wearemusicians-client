angular.module('okc.persons')

  .controller('PersonsCtrl', function($scope, Persons) {
     $scope.persons = Persons.query();
  })

  .controller('PersonDetailCtrl', function($scope, $stateParams, Persons) {
        $scope.person = Persons.get({ id: $stateParams.personId });
        // $scope.person.$promise.catch(function (err) {
        //
        // })
  });
