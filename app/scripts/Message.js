function btn(color){
  SendMessage("Sphere", "ChangeColor",color);
}
 function screenShoot(){
   SendMessage("Sphere", "takeScreen", "true");
 }
