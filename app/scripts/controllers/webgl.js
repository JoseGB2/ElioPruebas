'use strict';

/**
 * @ngdoc function
 * @name sketchFabApp.controller:Webglctrl
 * @description
 * # WebglctrlCtrl
 * Controller of the sketchFabApp
 */
angular.module('sketchFabApp')
  .controller('Webglctrl', function ($http, servicePhp) {

      var vm=this;

      vm.callMethod=function(){
        servicePhp.sendPost().then(function(response){
            console.log("somepost");
        });
      };


        var cont=0;
        var arregloColor=[[255, 87, 51],[169, 204, 227],[213, 219, 219],[192, 57, 43],
            [30, 132, 73],[175, 96, 26],[99, 57, 116],[118, 215, 196],
            [247, 220, 111],[26, 82, 118],[148, 49, 38],[33, 97, 140],
            [202, 111, 30],[40, 55, 71],[153, 163, 164],[230, 126, 34],
            [141, 83, 71]];

        vm.scene=function(mode){

            SendMessage("Main Camera","changeScene",mode);
        }

        vm.btn=function(){
            var color="";
            if(cont<arregloColor.length){
                for(var i=0;i<3;i++){
                    console.log(arregloColor[cont][i]);
                    if(i==0){
                        color+=""+(arregloColor[cont][i]/255).toFixed(2);
                    }else{
                        color+=":"+(arregloColor[cont][i]/255).toFixed(2);
                    }

                }
                cont++;
            }else{
                cont=0;
                color="";
            }
            console.log(color);
            SendMessage("Sphere", "ChangeColor",color);
        }
        vm.screenShoot=function(){
            SendMessage("Sphere", "takeScreen", "true:elio");
        }


        vm.setOriginal=function(){
            SendMessage("Main Camera", "camPosition", "default");
        }


        vm.show=function(){
            SendMessage("Sphere", "getShowHide", "ext01");
        }

  });
