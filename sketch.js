const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,ground;
var boy, tree, stone, m1, m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15;
function preload(){
    boy = loadImage("boy.png");
    tree = loadImage("tree.png");

}
function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone (150,380,30);
    ground = new Ground(650,600,1300,20);
    m1 = new Mangoes (1100,100,30);
    m2 = new Mangoes (1170,130,40);
    m3 = new Mangoes (900, 150,35);
    m4 = new Mangoes (1000,200,40);
    m5 = new Mangoes (1200,185,28);
    m6 = new Mangoes (975,175,30);
    m7 = new Mangoes (1000,170,35);
    m8 = new Mangoes (1250,200,43);
    m9 = new Mangoes (1300, 150, 40);
    m10 = new Mangoes (800,250,30);
    m11 = new Mangoes (1050,275, 37);
    m12 = new Mangoes (885,123,43);
    m13 = new Mangoes (1010,195,39);
    m14 = new Mangoes (990, 220, 32);
    m15 = new Mangoes ( 1210, 185,45);
    slingshot = new Slingshot(stone.body,{x:150, y:380})
   
}

function draw(){
    background(180);
    Engine.update(engine);
    imageMode(CENTER);
    image(boy,200,440,150,300);
    image(tree,1050,300,500,700);
    stone.display();
    ground.display();
    slingshot.display();
    m1.display();
    m2.display();
    m3.display();
    m4.display();
    m5.display();
    m6.display();
    m7.display();
    m8.display();
    m10.display();
    m11.display();
    m12.display();
    m13.display();
    m14.display();
    m15.display();
    
    

   dropmango(stone,m1);
   dropmango(stone,m2);
   dropmango(stone,m3);
   dropmango(stone,m4);
   dropmango(stone,m5);
   dropmango(stone,m6);
   dropmango(stone,m7);
   dropmango(stone,m8);
   dropmango(stone,m9);
   dropmango(stone,m10);
   dropmango(stone,m11);
   dropmango(stone,m12);
   dropmango(stone,m13);
   dropmango(stone,m14);
   dropmango(stone,m15);

;  
   
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function dropmango(s,m){
    var mposition = m.body.position;
    var sposition = s.body.position;
    var distance = dist(sposition.x,sposition.y,mposition.x,mposition.y);
    if(distance<=m.r+s.r){
        Matter.Body.setStatic(m.body,false);
    }

}