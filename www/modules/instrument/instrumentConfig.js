(function(){

  "use strict";

  angular.module('app.instrument')

    .config([
      '$stateProvider', '$translateProvider',
      function($stateProvider, $translateProvider) {

        $stateProvider

          .state('app.main.meAddInstrumentForm', {
            url: '/me/addInstrument',
            // replace me informations view content with meAddInstrumentForm.html content in main.html
            views: {
              'me': {
                templateUrl: 'modules/instrument/templates/meAddInstrumentForm.html'
              }
            }
          });

        $translateProvider.translations('en', {
          USER_ADD_INSTRUMENT_BUTTON: 'Add an instrument'
        });

        $translateProvider.translations('fr', {
          USER_ADD_INSTRUMENT_BUTTON: 'Ajouter un instrument'
        });

      }]);

})();