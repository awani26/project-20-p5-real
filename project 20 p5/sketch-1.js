var catImg1, catImg2, catImg3, catImg4, mouseImg1, mouseImg2, mouseImg3, mouseImg4, cat, mouse;

function preload() {
    //load the images here

    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");

    mouseImg1= loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

cat = createSprite (300,300)
mouse = createSprite (400,400)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    //Text(mouseX + ',' + mouseY,10,45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
