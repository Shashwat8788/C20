var moveRec,fixRec;
var car,tower;
function setup() {
  createCanvas(windowWidth,windowHeight);
  fixRec = createSprite(400, 200, 50, 50);
  fixRec.shapeColor = "green";

  moveRec = createSprite(600, 200, 50, 100);
  moveRec.shapeColor = "green";

  car = createSprite(400,300,50,50);
  car.velocityX = 20;

  tower = createSprite(windowWidth-100,300,50,100);
}

function draw() {
  background(0);
  
  moveRec.x = World.mouseX;
  moveRec.y = World.mouseY;

  var k = moveRec.x-fixRec.x;
  
  collide();

  isTouching();

  bounceOff();

  console.log(k);

  drawSprites();
}

function isTouching(){
  if(moveRec.x-fixRec.x <= moveRec.width/2+fixRec.width/2&&fixRec.x-moveRec.x <= moveRec.width/2+fixRec.width/2&&
    moveRec.y-fixRec.y <= moveRec.height/2+fixRec.height/2&&fixRec.y-moveRec.y <= moveRec.height/2+fixRec.height/2){
    moveRec.shapeColor = "blue";
    fixRec.shapeColor = "blue";
  } else {
    moveRec.shapeColor = "green";
    fixRec.shapeColor = "green";
  }
}

function bounceOff(){
  if(car.x-tower.x <= car.width/2+tower.width/2&&tower.x-car.x <= car.width/2+tower.width/2){
    car.velocityX = car.velocityX*-1;
  }
}

function collide(){
  if(car.x-tower.x <= car.width/2+tower.width/2&&tower.x-car.x <= car.width/2+tower.width/2){
    car.velocityX = 0;
  }
}