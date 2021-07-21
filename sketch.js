var box1;
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(200,100,30,50,1,2);
}

function draw() 
{
  background(220);
box1.show();
box1.move();
box1.moveUp();
}

