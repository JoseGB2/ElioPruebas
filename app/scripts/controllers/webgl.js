'use strict';

/**
 * @ngdoc function
 * @name sketchFabApp.controller:Webglctrl
 * @description
 * # WebglctrlCtrl
 * Controller of the sketchFabApp
 */
angular.module('sketchFabApp')
  .controller('Webglctrl', function ($http) {

      var vm=this;

      vm.callMethod=function(){
        $http.post("http://localhost/gitJaguar/elio_motors_backend/public/saveImage").then(function(response){
          console.log("esta entrando al response");
          console.log(response.data);

        });
      };

  });
