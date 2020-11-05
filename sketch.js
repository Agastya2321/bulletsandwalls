var bullet,wall,thickness
var speed;
var weight;
var gameState = "Test Phase";
var damage;
var gun;




function setup() {
  createCanvas(1600,400);

  wall = createSprite(900, 200, 50, 200);
  gun = createSprite(120,255,10,10)
  bullet =  createSprite(170,200,40,10)
  bullet.shapeColor = "white"
}
  
  


function draw() {
  background("blue")
  
  drawSprites();
  if(gameState === "Test Phase"){
    
    fill("orange")
    textSize(30)
    text("PRESS SPACE TO START",100,100)
}
  
  if(gameState === "Test Phase" && keyDown("space")){
   gameState = "play";
   speed = random(10,20);
  thickness = random(22,80);
  weight = random(2,100);
   damage = (0.5 * weight * speed * speed / thickness * thickness * thickness);
  }

  if(gameState === "play"){
    bullet.velocityX =  speed
    bullet.depth = 5
    fill("orange")
    textSize(15)
    text("Speed of the Car: "+speed,50,70)
    text("Weight of theCar: "+weight,50,120)
    
  }
  if(bullet.x + bullet.width > wall.x
    &&wall.x +wall.width > bullet.x
    &&bullet.y+bullet.height > wall.y
    &&wall.y+wall.height > bullet.y){
    
    if(keyWentDown("a")){
      fill("white")
      textSize(30)
      text("PRESS A TO RESTART",175,250)
      bullet.x =  40;
      bullet.velocityX = speed;
      speed = random(1,1);
     thickness = random(1,1);
     weight = random(1,1);
      damage = (0.5 * weight * speed * speed / thickness * thickness * thickness)
    }
     
      bullet.velocityX = 0;
      textSize(15);
      text ("Damage Rate: "+ Math.round(damage),50,170);
      text("Press A to Restart.",175,300)
      
      if(damage > 10){
        wall.shapeColor = "red";
        textSize(15)
        fill("red")
        text("Damage: Lethal",50,200)
      }
      
      if(damage < 10){
        wall.shapeColor = "green";
        textSize(15)
        fill("green")
        text("Damage: Safe",50,200)
      }

   

  }



}