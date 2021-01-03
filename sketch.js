const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var division;


function setup() {
  createCanvas(700,700)
  engine = Engine.create();
  world = engine.world

 ground=new Ground(300,700,800,10)

for(var k =  0; k<=width; k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}

for(var j = 0; j <=width; j=j+70){
  plinkos.push(new Plinkos(j,75,10))
}

for(var j = 0; j <=width; j=j+70){
  plinkos.push(new Plinkos(j,175,10))
}

for(var j = 0; j <=width; j=j+70){
  plinkos.push(new Plinkos(j,275,10))
}

for(var j = 0; j <=width; j=j+70){
  plinkos.push(new Plinkos(j,375,10))
}




 
}

function draw() {
  background(0);  
  Engine.update(engine)

  ground.display();




for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
}

if(frameCount%60 === 0){
  particle.push(new Particle(random(100,700),10,5))
}

for(var j = 0; j < particle.length; j++){
  particle[j].display();
}



for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}

  drawSprites();
}