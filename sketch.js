
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,d2,d3,ground,paper,options

function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);
    options = {
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(600,520,1200,20,options);
	World.add(world,ground);
	d1=new Dustbin(1000,500,200,20);
	d2=new Dustbin(910,415,20,150);
	d3=new Dustbin(1090,415,20,150);
    paper=new Paper(100,400,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,20);
  


 
  d1.display();
  d2.display();
  d3.display();
  paper.display();
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-89});
	   }
}


