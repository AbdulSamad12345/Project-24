const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var iron1;
var stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(925,0,100);
    iron1 = new Iron(600,0,125,125);
    stone1 = new Stone(250,0,70,50)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    iron1.display();
    stone1.display();

    
 
}