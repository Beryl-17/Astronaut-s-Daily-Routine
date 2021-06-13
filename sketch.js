var astronaut;
var sleeping;
var exercise;
var bath;
var eating;
var moving;
var cabinRoom;
var cabinRoomImg;

function preload(){
   moving = loadAnimation("move.png","move1.png");
   sleeping = loadAnimation("sleep.png");
   exercise = loadAnimation("gym.png");
   cabinRoomImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  astronaut= createSprite(400, 200, 50, 50);
  astronaut.addImage(moving);
  cabinRoom = createSprite(800,400);
  cabinRoom.addImage(cabinRoomImg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}