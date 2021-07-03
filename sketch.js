/*const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies*/

var bg;
var snow1, snow2;
var snowImg1, snowImg2;
var bg, bgImg;

function preload(){
 // bg = loadImage("snow2.jpg");
  snowImg1 = loadImage("snow4.webp");
  //snowImg2 = loadImage("snow5.webp");
  bgImg = loadImage("snow2.jpg");
}




function setup() {
  createCanvas(1000,540);
  //createSprite(400, 200, 50, 50);
  //engine = Engine.create()
  //world = engine.world
  /*snow1 = createSprite(350, 10, 50, 50);
  snow1.addImage(snowImage1);
  snow2 = createSprite(350, 10, 50, 50);
  snow2.addImage(snowImage2);*/
bg = createSprite(400, 200, 800, 400);
bg.addImage(bgImg);
}

function draw() {
  background("white");  

 // Engine.update(engine);
 Snowfalling1();


  drawSprites();
}

function Snowfalling1(){
  if(frameCount % 50 === 0){
    snow1 = createSprite(Math.round(random(50 , 950)), 10, 50, 50);
    snow1.addImage(snowImg1);
    snow1.velocityY = 10;
    snow1.lifetime = 900;
    //snow1.debug = true;
    snow1.scale = 0.2;
    
  }
}