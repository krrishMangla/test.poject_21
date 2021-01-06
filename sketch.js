var canvas;
var box;
var surface1 , surface2 , surface3 , surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(400,100,30,30);
    box.shapeColor="white";
    box.velocityY = 3;
    
    surface1 = createSprite(80,590,185,20);
    surface1.shapeColor="blue";

    surface2 = createSprite(290,590,185,20);
    surface2.shapeColor="orange";

    surface3 = createSprite(500,590,185,20);
    surface3.shapeColor="purple";
    
    surface4 = createSprite(710,590,185,20);
    surface4.shapeColor="green";

}


function draw() {
    background(rgb(169,169,169));

    createEdgeSprite();
    box.bounceOff(topEdge);
   

  drawSprites();
}

