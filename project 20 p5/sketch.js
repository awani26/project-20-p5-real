var catImg1, catImg2, catImg3, catImg4, mouseImg1, mouseImg2, mouseImg3, mouseImg4, cat, mouse;

function preload() {
  //load the images here

  catImg1 = loadImage("cat1.png");
  catImg2 = loadImage("cat2.png");
  catImg3 = loadImage("cat3.png");
  catImg4 = loadImage("cat4.png");
  backgroundImage = loadImage("garden.png");

  mouseImg1 = loadImage("mouse1.png");
  mouseImg2 = loadImage("mouse2.png");
  mouseImg3 = loadImage("mouse3.png");
  mouseImg4 = loadImage("mouse4.png");
}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here

  background = createSprite(0, 0, 1000, 800);
  background.addImage(backgroundImage);

  cat = createSprite(420, 300)
  cat.addImage(catImg1);
  cat.scale = 0.1;
  mouse = createSprite(50, 300)
  mouse.addImage(mouseImg1);
  mouse.scale = 0.1;
}

function draw() {

  //background(255);
  //Write condition here to evalute if tom and jerry collide
  //Text(mouseX + ',' + mouseY,10,45);

  if (cat.x - mouse.x < cat.width / 2 && mouse.x - cat.x < cat.width / 2 + mouse.width / 2 + mouse.width / 2 &&
    cat.y - mouse.y < cat.width / 2 && mouse.y - cat.y < cat.width / 2 + mouse.width / 2 + mouse.width / 2) {
    mouse.addImage(mouseImg3);
    cat.addImage(catImg4);
  } else {
    cat.addImage(catImg1);
    mouse.addImage(mouseImg1);
  }
  
  if (mouse.isTouching(cat)) {
  }
  drawSprites();
}


function keyPressed() {

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catrunning", catImg2);
    cat.changeAnimation("catRunning");
  }
  if (keyDown("left_arrow")){
cat.velocityX = -5;
    cat.addAnimation("catrunning", catImg2);
    cat.changeAnimation("catRunning");
  }
}