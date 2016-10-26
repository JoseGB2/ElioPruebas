function btn(color){
  SendMessage("Sphere", "ChangeColor",color);
}
 function screenShoot(){

   var no=SendMessage("Sphere", "takeScreen", "true:elio");
     console.log("este mensaje"+no);
 }


function setOriginal(){
    SendMessage("Sphere", "camPosition", "default");
}
