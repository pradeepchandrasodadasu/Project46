var database
var player, game, form;
var run, longJump, shortJump;
var player1,player2,players; 
var twoHorses;
var gameState = 0;
var playerCount = 0;

function peload(){
  longJump = loadAnimation("animations/jumping/jumping_1.png",
  "animations/jumping/jumping_2.png",
  "animations/jumping/jumping_3.png",
  "animations/jumping/jumping_4.png",
  "animations/jumping/jumping_5.png"); 

  shortJump = loadAnimation("animations/jumping/jumping_2.png",
  "animations/jumping/jumping_4.png");

}

function setup() {
  createCanvas(windowWidth,500);
  database = firebase.database()

  game = new Game();
  game.getState();
  game.start();

  ground = createSprite(width/2, height, width, 20);
  ground.shapeColor = "black";

  ob1 = createSprite(1100, height-45, 300, 70);
  ob1.shapeColor = "black";
  ob2 = createSprite(1350, height-85, 15, 150);
  ob2.shapeColor = "black";
  ob3 = createSprite(1600, height-45, 300, 70);
  ob3.shapeColor = "black";
  ob4 = createSprite(2200, height-85, 500, 150);
  ob4.shapeColor = "black";
  ob5 = createSprite(2925, height-45, 130, 70);
  ob5.shapeColor = "black";
  ob6 = createSprite(3490, 320, 700, 20);
  ob6.shapeColor = "black";
  ob7 = createSprite(3520, 280, 20, 80);
  ob7.shapeColor = "black";
  ob8 = createSprite(3970, height-55, 10, 90);
  ob8.shapeColor = "black";
  ob9 = createSprite(4220, height-55, 10, 90);
  ob9.shapeColor = "black";
  ob10 = createSprite(4500, height-55, 10, 90);
  ob10.shapeColor = "black";
  ob11 = createSprite(4800, height-55, 10, 90);
  ob11.shapeColor = "black";
  /*ob12 = createSprite(1300, 200, 50, 50);
  ob12.shapeColor = "black";
  ob13 = createSprite(1400, 200, 50, 50);
  ob13.shapeColor = "black";*/


}

function draw() {
  background("blue");  
  fill("blue");
  textSize(20);
  text(mouseX+ " , " +mouseY,mouseX,50);

  if(playerCount === 2){
    gameState = 1;
    game.update(gameState);
  }

  if(gameState === 1){
    
    game.play();
    drawSprites();
  }

  
}