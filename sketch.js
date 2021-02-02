
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1050,130,30);
	mango3=new mango(900,180,30);
	mango4=new mango(1200,160,30);
	mango5=new mango(1100,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneObj=new Stone(200,340);

	launcherObject=new slingshot(stoneObj.body,{x:235,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
	stoneObj.display();
	launcherObject.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

	detectColision(stoneObj,mango1);
	detectColision(stoneObj,mango2);
	detectColision(stoneObj,mango3);
	detectColision(stoneObj,mango4);
	detectColision(stoneObj,mango5);

// this function breaks it

//	keyPressed();
}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    launcherObject.fly();    

}

function detectColision(Lstone,Lmango){

	mangoBodyPos=Lmango.body.position
	stoneBodyPos=Lstone.body.position

	var distance=dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y)
		
		if(distance<=Lmango.r+Lstone.r){
			Matter.body.setStatic(Lmango.body,false)
		}

	}

	// this function breaks it

// function keyPressed(){

// 	if(keycode === 32){
// 	matter.Body.setPosition(stoneObj.body, {x:325,y:420})
// 	launcherObject.attach(stoneObj.body)
// 	}


// }