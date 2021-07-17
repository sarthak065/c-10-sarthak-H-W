
var ship,movingship;
var seaimage,sea,edges;
function preload(){
movingship=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimage=loadImage("sea.png");
}

function setup(){
  createCanvas(600,300);
  edges = createEdgeSprites();
   

sea= createSprite(200,20,400,20)
sea.velocityX=-6; 
sea.addImage("running",seaimage)
ship = createSprite(150,160,20,50);
ship.addAnimation("skipping",movingship);

ship.scale = 0.3
}



function draw() {
 
 
 background("blue");
 if(sea.x<0){
  sea.x=sea.width/2;
}
drawSprites();
}