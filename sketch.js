const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var iris;
var pupila;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var irisConfig = {
    restitution: 0.95,
    frictionAir: 0.03
  }

  iris = Bodies.circle(100,10,20,irisConfig);
  World.add(world,iris);
   
  var pupilaConfig = {
    isStatic: true
  }

  pupila = Bodies.rectangle(200,390,400,20,pupilaConfig);
  World.add(world,pupila);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 Engine.update(engine);
 background("grey");

 ellipse(iris.position.x, iris.position.y, 20);
 rect(pupila.position.x, pupila.position.y, 400, 20);
}

