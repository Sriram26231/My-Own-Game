const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var police, police_running,  van,vanImg, drone, droneGroup ;
var backgroundImg;
var ground, ground2;
var engine, world;
var lives, score;
var droneImg;



function preload(){

  police_running = loadAnimation("police_running1.png","police_running2.png","police_running3.png","police_running4.png","police_running5.png","police_running6.png","police_running7.png");
  vanImg = loadAnimation("van.png")

  droneImg = loadImage("drone.png")

  backgroundImg = loadImage("background.png");


}

function setup() {
  createCanvas(800,400)
  engine = Engine.create();
  world  = engine.world;
  ground = createSprite(400, 120, 1800, 1200)
  ground.addImage(backgroundImg)
  ground.velocityX = -3;
  ground.scale = 2.6;
  ground.depth = ground.depth+2;
  ground2 = createSprite(200, 390, 1200,20)
  ground2.visible = false;

  police = createSprite(200,200,100,100)
  police.addAnimation("Running", police_running)

  van = createSprite(700,200,100,100)
  van.addAnimation("Driving", vanImg)
  
  score = 0;
  lives = 3;

}

function draw() {
  background(0);  
  drawSprites();
  textSize(25)
  text("Lives:"+ lives, width-500,50)

  textSize(25)
  text("Drones Shot:"+ score, width-350,50)
  
  Engine.update(engine);
  console.log(frameRate)

  if (ground.x <200){
    ground.x = width/2
  }
 
  police.collide(ground2);
  van.collide(ground2)
  van.velocityY = 7




  


  if (keyDown("SPACE")){
    police.velocityY = -12
  }
  if (keyDown("ENTER")){
    var laser = createSprite(police.x, police.y,12,5)
    laser.velocityX = 11
  }
  police.velocityY = police.velocityY + 0.8

  
  spawnDrone();
  

  
  
}



function spawnDrone(){

  if (frameRate% 100 === 0){
    drone = createSprite(700,400, 30, 30)
    drone.addImage(droneImg)
    drone.y = Math.round(random(0,400))
    drone.velocityX = -13
  }
}