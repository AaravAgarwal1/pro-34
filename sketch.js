const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;


var bgImg;
var ground;
//level 1
var box1, box2, box3, box4, box5; 
//level2
var box6, box7, box8, box9;
//lvl3
var box10,box11,box12;
//lvl4
var box13,box14;

var hero;
var fly;

function preload() {
//preload the images here
bgImg= loadImage("images/bg.png");



}

function setup() {

  engine= Engine.create();
  world= engine.world;
  createCanvas(1500, 500);
  
  ground= new Ground(500,490,width,20);
  box1= new Block(540,350,50,50);
   box2= new Block(600,350,50,50);
   box3= new Block(660,350,50,50);
   box4= new Block(720,350,50,50);
   box5= new Block(780,350,50,50);

   //lvl 2

   box6= new Block(570,320,50,50);
   box7= new Block(640,320,50,50);
   box8= new Block(670,320,50,50);
   box9= new Block(700,320,50,50);
   
   //lvl 3

   
   box10= new Block(590,300,50,50);
   box11= new Block(660,300,50,50);
   box12= new Block(690,300,50,50);

   //lvl4
   
   box13= new Block(610,280,50,50);
   box14= new Block(675,280,50,50);

   //lvl last

   box15= new Block(630,250,50,50);

   hero= new Hero(200,200,100);
   
   fly= new Fly(hero.body,{x:500,y:450});














  Engine.run(engine);

}

function draw() {
  background(bgImg);



  ground.display();








  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
    box8.display();
  box9.display();

  box10.display();
    box11.display();
  box12.display();

  box13.display();
  box14.display();
box15.display();
hero.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{
    x:mouseX,
    y:mouseY
  })

}

