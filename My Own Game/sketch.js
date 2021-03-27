const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var police, police_running,  van,vanImg, drone, droneGroup ;
var backgroundImg;
var ground, ground2;
var engine, world;
var lives, score;



function preload(){

  police_running = loadAnimation("police_running1.png","police_running2.png","police_running3.png","police_running4.png","police_running5.png","police_running6.png","police_running7.png");
  vanImg = loadAnimation("van.png")


}

function setup() {
  createCanvas(800,400)
  engine = Engine.create();
  world  = engine.world;

  police = createSprite(200,200,100,100)
  police.addAnimation("Running", police_running)

  van = createSprite(700,200,100,100)
  van.addAnimation("Driving", vanImg)
  ground = new Ground(600,height,1200,20);
  ground2 = createSprite(600, height, 1200, 20)
  score = 0;
  lives = 3;
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  police.collide(ground2);
  van.collide(ground2)
  van.velocityY = 7



  textSize(25)
  text("Lives:"+ lives, width-500,50)

  textSize(25)
  text("Drones Shot:"+ score, width-350,50)
  


  if (keyDown("SPACE")){
    police.velocityY = -12
  }
  if (keyDown("ENTER")){
    var laser = createSprite(police.x, police.y,50,5)
    laser.velocityX = 11
  }
  police.velocityY = police.velocityY + 0.8

  ground.display();
  drawSprites();
  
  
}