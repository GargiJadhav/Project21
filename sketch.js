
var wall;
var speed;
var weight;
var thickness;
var bulletRightEdge;
var wallLeftEdge;



function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200,30,10);
bullet.shapeColor=250;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor=80,80,80;
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);
bullet.velocityX=speed;


}

function draw() {
  background(0); 
  
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage =0.5*weight*speed*speed/thickness*thickness*thickness;
if(damage>0){
  wall.shapeColor="green";
}
if(damage<10){
  wall.shapeColor="red";
}

}







  hasCollided();
  drawSprites();
}
function hasCollided(abullet,awall){
bulletRightEdge=bullet.x+bullet.width/2;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}
