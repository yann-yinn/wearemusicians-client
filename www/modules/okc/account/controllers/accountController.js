angular.module('okc.account')

    // display account profile
    .controller('AccountCtrl', ['$scope','authentication', function($scope, authentication) {
        $scope.authentication = authentication;

    }])

    // log a user to the server
    .controller('LoginCtrl', ['$scope', 'authentication', function($scope, authentication) {

        $scope.authentication = authentication;

        $scope.user = {
            email : '',
            password: ''
        };

        // triggered by click on the submit button on login form
        // @see login-form.html
        $scope.logIn = function(user) {
            // do not post request if user did not fill its email or password
            if (!user.email || !user.password) {
                return;
            }
            authentication.login(user.email, user.password, 'tab.persons');
        }

    }]);
