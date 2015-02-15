angular.module('okc.persons')

    .controller('PersonsCtrl', ['$scope', 'Persons', function($scope, Persons) {

        $scope.persons = Persons.query();

        $scope.doRefresh = function() {
           $scope.persons = Persons.query();
           $scope.persons.$promise.finally(function() {
               $scope.$broadcast('scroll.refreshComplete');
           });

        };
    }])

    .controller('PersonDetailCtrl', ['$scope', '$stateParams', 'Persons', function($scope, $stateParams, Persons) {
        $scope.person = Persons.get({ id: $stateParams.personId });
    }]);
