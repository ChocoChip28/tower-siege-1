
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var stand, slingShot;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

     engine = Engine.create();
     world = engine.world;
    ground = new Ground(600,height,1200,20);
    stand = new Ground(600,600,200,20);

    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    block16 = new Box(390,155,30,40);
    
    
  
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
