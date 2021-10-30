
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var box
var thingamabob
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var boxoptions={
    restitution:0.95,
    
  }
   
   var ground_options ={
     isStatic: true
   };
  var thingamaboboptions={
    isStatic: false
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  box=Bodies.circle(250,10,20,boxoptions)
  World.add(world,box)
thingamabob = Bodies.rectangle(300,100,400,20,thingamaboboptions)
World.add(world,thingamabob);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(box.position.x,ball.position.y,20)
 rect(thingamabob.position.x,thingamabob.position.y,3000,20)
}

