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
   */
  angular.module('app.offlineApp', [

    ])

    .config(['$resourceProvider', function($resourceProvider) {
      // Don't strip trailing slashes from calculated URLs
      //$resourceProvider.defaults.actions = false;
    }]);



})();