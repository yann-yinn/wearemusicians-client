/**
 * Offline App.
 * Provides local storage off application datas pulled from
 * the server by $resource angular service.
 *
 * @see www/index.html
 */
(function () {

  /**
   * Master module, calling all other modules.
   * @see https://docs.angularjs.org/guide/module

  angular.module('app.offlineApp', [
      'ngResource'
    ])


    .config(['$provide', function($provide) {
      $provide.decorator('$http', function($delegate) {
        return $delegate;
      });


    }]);


   */
})();