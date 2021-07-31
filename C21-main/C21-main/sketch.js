
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var option = {
      restitution:1
    }
    ball = Bodies.circle(200,200,25,option);
    World.add(world,ball);
    console.log(ball)
}

function draw() 
{
  background("pink")
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
}

