var backgroundimage
var bg
var chorimage
var theif
var invisibleground
function preload (){
backgroundimage=loadImage("bg1.jpg")
chorimage=loadImage("chor.png")
}

function setup(){
createCanvas(500,500);
bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bg.addImage(backgroundimage)
bg.scale=2.5;
bg.velocityX=-8
console.log(displayWidth);
console.log(bg.width);
theif=createSprite(50,400,10,10);
theif.addImage(chorimage);
theif.scale=0.5;
invisibleground=createSprite(250,480,500,10)
invisibleground.visible=false;
}


function draw(){
background("black")
if(bg.x<0){
    bg.x=bg.width/2
}
if(keyDown("space")){
    theif.velocityY=-10;
}
theif.velocityY=theif.velocityY+0.8;
console.log(theif.velocityY)
theif.collide(invisibleground)
drawSprites();
}











