const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, height, 1200, 20);
    box1 = new box(700, 320, 70, 70);
    pig1 = new pigs(810, 350);
    box2 = new box(920, 320, 70, 70);
    log1 = new log(810, 260, 300, PI / 2);
    box3 = new box(700, 240, 70, 70);
    pig2 = new pigs(810, 220,);
    box4 = new box(920, 240, 70, 70);
    log2 = new log(810, 180, 300, PI / 2);
    box5 = new box(810, 160, 70, 70);
    log3 = new log(760, 120, 150, PI / 7);
    log4 = new log(870, 120, 150, -PI / 7);
    bird1 = new bird(100, 100);

}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.show();
    pig2.show();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.show();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
}
