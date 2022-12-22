var birdIMG;
var backgroundIMG;
var topobstacle,topobstacle2,topobstacle3,topobstacle4;
var bottomobstacle,bottomobstacle2,bottomobstacle3,bottomobstacle4;
var bird;
var coin;

var gameState="end";
var gs = "a";

var point = 0;

let engine;
let world;


function preload(){
  backgroundIMG = loadImage("background.png");
  birdIMG= loadImage("flappybird.png");
  topobstacle= loadImage("topobs.webp");
  bottomobstacle = loadImage("bottomobs.webp");
  coinImg = loadImage("coin.png");
}

function setup() {
  createCanvas(1024,768);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  bird=createSprite(50,400,65,65);
  bird.addImage(birdIMG);
  bird.scale = 0.2;
  
  // obs 1
  topobs=createSprite(250,50,50,50);
  topobs.addImage(topobstacle);
  topobs.scale = 0.4

  bottomobs=createSprite(250,580);
  bottomobs.addImage(bottomobstacle);
  bottomobs.scale=0.4;
  //

  // obs 2
  topobs2=createSprite(500,160,50,50);
  topobs2.addImage(topobstacle);
  topobs2.scale = 0.4

  bottomobs2=createSprite(500,680);
  bottomobs2.addImage(bottomobstacle);
  bottomobs2.scale=0.4;
  // 

  // obs 3
  topobs3=createSprite(700,90,50,50);
  topobs3.addImage(topobstacle);
  topobs3.scale = 0.4

  bottomobs3=createSprite(700,630);
  bottomobs3.addImage(bottomobstacle);
  bottomobs3.scale=0.4;
  // 

  // obs 4
  topobs4=createSprite(900,120,50,50);
  topobs4.addImage(topobstacle);
  topobs4.scale = 0.4

  bottomobs4=createSprite(900,640);
  bottomobs4.addImage(bottomobstacle);
  bottomobs4.scale=0.4;
  //

  coin = createSprite(1000,380)
  coin.addImage(coinImg);
  coin.scale=0.2

  ground = createSprite(10,760,2050,20)
  
}

function draw() {
  background(backgroundIMG);  

    if(keyDown(RIGHT_ARROW))
    {
        bird.x-=-5
    }

    if(keyDown("space")&& bird.y >= 100) {
      bird.velocityY = -5;
  }

  //add gravity
  bird.velocityY = bird.velocityY + 0.8

    if(bird.isTouching(coin))
    {
      gameState = "end";
      swal("Good job!", "You reached the end!", "success");
    }

    if(bird.isTouching(topobs) || bird.isTouching(bottomobs))
    {
      gameState = "end";
      swal("Game over", "YOU LOSE");
      bird.velocityY=0;
      bird.velocityX=0;
    }

    if(bird.isTouching(topobs2) || bird.isTouching(bottomobs2))
    {
      gameState = "end";
      swal("Game over", "YOU LOSE");
      bird.velocityY=0;
      bird.velocityX=0;
    }

    if(bird.isTouching(topobs3) || bird.isTouching(bottomobs3))
    {
      gameState = "end";
      swal("Game over", "YOU LOSE");
      bird.velocityY=0;
      bird.velocityX=0;
    }

    if(bird.isTouching(topobs4) || bird.isTouching(bottomobs4))
    {
      gameState = "end";
      swal("Game over", "YOU LOSE");
      bird.velocityY=0;
      bird.velocityX=0;
    }

    if (bird.isTouching(ground)){
      gameState = "end";
      swal("Game over", "YOU LOSE");
      bird.velocityY=0;
      bird.velocityX=0;
    }



    
  drawSprites();
}