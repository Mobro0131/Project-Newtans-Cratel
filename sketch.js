
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,
roof,rope1,rope2,rope3,rope4,rope5,bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bobDiameter=60


	bobObject1 = new Bob(350,350);
	bobObject2 = new Bob(350+60,350);
	bobObject3 = new Bob(350+120,350)
	bobObject4 = new Bob(350+180,350)
	bobObject5 = new Bob(350+240,350)

	roof = new Roof(470,100,350,30)

	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0)
	rope3=new Rope(bobObject3.body,roof.body,0,0)
	rope4=new Rope(bobObject4.body,roof.body,+bobDiameter*1,0)
	rope5=new Rope(bobObject5.body,roof.body,+bobDiameter*2,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  roof.display();
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}
	
	
	}
	


