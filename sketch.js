const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

var marvel;
var engine,world;
function preload(){
  night = loadImage("images/sky.jpeg");
  marvelImg = loadImage("images/marvel.png");
  spidermanImg = loadImage("images/spiderman2.png");
  
}
function setup() {
  createCanvas(displayWidth,displayHeight-100);
  engine = Engine.create();
  world = engine.world;
sky = new Sky(800,750);
//var marvel = createSprite(250,450);
//  marvel.addImage(marvelImg);
 // var spiderman = createSprite(100,450);
 // spiderman.addImage(spidermanImg);
 // spiderman.scale = 0.6
  heroes = new Heroes(400, 350);
corona = new Corona(700,350)
  








}

function draw() {
  background(night);
  //Engine.update(engine);


     
  
  sky.display();
  heroes.display();  
  corona.display();

  drawSprites();
}