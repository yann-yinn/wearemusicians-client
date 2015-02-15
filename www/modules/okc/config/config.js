/**
 * This module hold app configuration for now.
 * Inject "config" in controllers / services etc ... to use.
 */
angular.module('okc.config', [])

    .constant('config', {
        // base url for webservice
        server: {

            protocol: 'http',
            port: 3333,
            host: '192.168.0.18',
            resourcesBaseUrl: 'api',

            // generate server base url from above informations.
            getServerBaseUrl: function() {
              return this.protocol + '://' + this.host + ':' + this.port;
            },

            // generate resources webservices base url from above informations.
            getServerResourcesBaseUrl: function() {
              return this.getServerBaseUrl() + '/' + this.resourcesBaseUrl;
            }

        }

    });
