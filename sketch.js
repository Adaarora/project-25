
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 100, 20);

	wall1 = new Dustbin(600, 630, 150, 20);
	wall2 = new Dustbin(520, 590, 20, 120);
	wall3 = new Dustbin(670, 590, 20, 120);

	ground1 = new Ground(200,650,1200,20);

	//Create the Bodies Here


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	paper1.display();

	wall1.display();
	wall2.display();
	wall3.display();

	ground1.display();


	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 55, y: -55 });

	}
}



