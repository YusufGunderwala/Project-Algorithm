var box1, box2;

function setup() {
  createCanvas(800,800);
  
  box1=createSprite(400,400,50,150);
  box1.shapeColor="red";

  box2=createSprite(100,100,150,50);
  box2.shapeColor="cyan";

 // box2.debug=true;
 // box1.debug=true;
}

function draw() {
  background(0);  

  box2.x=World.mouseX;
  box2.y=World.mouseY;

  if(touch(box1,box2)){
    box1.x=random(1,800);
    box1.y=random(1,800);
    box1.shapeColor="purple";
  }
 
 


  drawSprites();
}

