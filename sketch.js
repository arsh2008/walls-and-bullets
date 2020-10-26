
var wall,bullet;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  
  thickness=random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
 
}

function draw() 
{
          background(255,255,255);
          if (hasCollided(bullet,wall))
          {
          bullet.velocityX=0;
          var damage =0.5 *weight *speed *speed/(thickness*thickness*thickness);
          
          if(damage>10)
          {
            bullet.shapeColor=color(255,0,0)
          }
          
          if(damage<10)
          {
            bullet.shapeColor=color(0,255,0)
          }
        }
          
       //   hasCollided();
          drawSprites();
}


function hasCollided(lbullet,lwall)
{

        bulletRightEdge=lbullet.x + lbullet.width;
        wallRightEdge=lwall.x
        if (bulletRightEdge>=wallRightEdge){
        return true;
      }
      return false;
}