angular.module('okc.persons')

  .controller('PersonsCtrl', function($scope, Persons) {
    $scope.persons = Persons.all();
  })

  .controller('PersonDetailCtrl', function($scope, $stateParams, Persons) {
        $scope.person = Persons.get($stateParams.personId);
  });
