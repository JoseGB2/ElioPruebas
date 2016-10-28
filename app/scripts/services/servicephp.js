'use strict';

/**
 * @ngdoc service
 * @name sketchFabApp.servicePhp
 * @description
 * # servicePhp
 * Service in the sketchFabApp.
 */
angular.module('sketchFabApp')
  .factory('servicePhp', function ($http) {


      var sendPost=function(){
        $http.post("http://localhost/gitJaguar/elio_motors_backend/public/saveImage").then(function(response){
          console.log(response.data);
          return response.data;
        });
      }
    // AngularJS will instantiate a singleton by calling "new" on this function

      return{
        sendPost:sendPost
      }
  });
