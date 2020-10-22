var bullet , wall ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50,200,20,20);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
    wall=createSprite(1200,200,thickness,height/2);




}

function draw() {
  background("black");  
  
  

  
function hasCollided(Lbullet, Iwall)
{
bulletRightEdge bullet.x +bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge >=wallLeftEdge)
{return true}
{
return false;
}
}


if (hasCollided(bullet,wall))
var damage=0.5 * weight * speed*speed/ (thickness*thickness*thickness) ;
If (damage>10)
wall.shapeColor=color(225,0,0) ;
If (damage<10)
wall. shapeColor=color(0, 255, 0) ;

  
  
  
  
  drawSprites();
}
