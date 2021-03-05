var box1, box2;

function setup() {
  createCanvas(800,800);
  
  box1=createSprite(400,400,50,150);
  box1.shapeColor="red";

  box2=createSprite(100,100,150,50);
  box2.shapeColor="cyan";

  box2.debug=true;
  box1.debug=true;
}

function draw() {
  background(0);  

  box2.x=World.mouseX;
  box2.y=World.mouseY;

  if(box1.x-box2.x <= (box1.width + box2.width)/2
  && box2.x - box1.x <= (box1.width + box2.width)/2
  && box1.y-box2.y <= (box1.height + box2.height)/2
  && box2.y - box1.y <= (box1.height + box2.height)/2)
  {
    box1.shapeColor="green";
    box2.shapeColor="green";
  }
  else{
    box1.shapeColor="red";
    box2.shapeColor="cyan";
  }


  drawSprites();
}