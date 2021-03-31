const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, blcok6, block7, block8, block9, stone, platform;

var stoneImg;

var slingshot;

function preload() {
    stoneImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);

    block9 = new Block(390,155,30,40);

    platform = new Platform(390,200,200,10);

    slingshot = new Slingshot(50,200,10,10);

    stone = new Stone(50,200,10,10)
}

function draw() {
    rectMode(CENTER);
    background("black");


}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
	
	function mouseReleased(){
	slingshot.fly();
    console.log("bob");
    }