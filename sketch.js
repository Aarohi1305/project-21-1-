var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    var surface1, surface2, surface3, surface4;
    surface1.shapeColor = "blue";
    surface2.shapeColor = "red";
    surface3.shapeColor = "cyan";
    surface4.shapecolor = "blue";


    //create box sprite and give velocity
    var box;
    box = createSprite(rondom(20,70));
    box.velocity = 2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprite();

    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box)&& box.bounceOff(surface1)){
    box.shapecolor = "purple";


    drawSprites();
}}
