
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var r1,r2,r3,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     var options={
		 isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	 }
  ball= Matter.Bodies.circle(200,200,600,options)
    r1=createSprite(550,600,200,20);
	r2=createSprite(450,565,20,90);
	r3=createSprite(650,565,20,90);
	ground=Bodies.rectangle(200,600,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
 
}



