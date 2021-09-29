var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount=0;
var gameState,allPlayers;
var car1,car2;
var cars=[]
var car1img,car2img,track;
var powerCoins,fuels;
var fuelImg,coinsImg;
var obstacle1Image,obstacle2Image,obstacles;



function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1img=loadImage("./assets/car1.png");
  car2img=loadImage("./assets/car2.png");
  track=loadImage("./assets/track.jpg");

  fuelImg=loadImage("./assets/fuel.png")
  coinsImg=loadImage("./assets/goldCoin.png")
  
  obstacle1Image=loadImage("./assets/obstacle1.png")
  obstacle2Image=loadImage("./assets/obstacle2.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount===2)
  {
    game.update(1);
  }
  if(gameState===1)
  {
    game.play();
  }
}

////to adjust the size of the window according to the device
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
