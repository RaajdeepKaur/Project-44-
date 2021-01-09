function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);

 circle1 = new Circle(350,400,80,"red");
 circle2 = new Circle(100,300,55,"green");
 circle3 = new Circle(880,250,75,"blue");
 circle4 = new Circle(700,150,36,"red");
 circle5 = new Circle(650,225,40,"black");
 circle6 = new Circle(750,400,41,"green");
 circle7 = new Circle(500,300,75,"brown");
 circle8 = new Circle(450,750,39,"blue");
 circle9 = new Circle(300,600,53,"yellow");
 circle10 = new Circle(750,700,70,"pink");
}

function draw() {
  background(255,255,255);  

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
  drawSprites();
}