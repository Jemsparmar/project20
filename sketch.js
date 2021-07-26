var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight=random(400,1500);
 thickness=random(22,83);
 bullet =  createSprite(50, 200, 50, 50);

 wall= createSprite(1500,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  
if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){

wall.shapeColor=color(255,0,0);
}
if(damage<10){

  wall.shapeColor=color(0,255,0);
  }
}

 drawSprites();
}

function hascollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
  return true
  }
  return false;
  
  
  }