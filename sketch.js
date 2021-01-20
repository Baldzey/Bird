const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600, 750,50,50);
    pig1 = new Pig(675, 750);
    box2 = new Box(750,750,50,50);

    log1 = new Log(675, 700, 200, PI);
    box3 = new Box(600, 650,50,50);
    pig2 = new Pig(675, 650);
    box4 = new Box(750,650, 50,50);

    log2 = new Log(675, 550, 200, PI)
    box5 = new Box(675, 525, 50, 50);
 
    log3 = new Log(650, 525, 120, -PI/4);
    log4 = new Log(690, 525, 120, PI/4);
     
    bird = new Bird(400, 400);

    ground = new Ground(400,785,800,20)
    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display(); 
    bird.display();
    

}
