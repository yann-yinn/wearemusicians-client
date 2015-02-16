/**
 * This module hold app configuration for now.
 * Inject "config" in controllers / services etc ... to use.
 */
angular.module('okc.config', [])
  .constant('config', {
    // base url for webservices
    serverUrl: 'http://192.168.1.47:3333'
  });
