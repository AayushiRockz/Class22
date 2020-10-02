const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
 var bird_options ={
   restitution : 1.5
 }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    bird = Bodies.circle(300,100,25,bird_options);
    World.add(world,ground);
    World.add(world,bird);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(bird.position.x,bird.position.y,25,25);
}