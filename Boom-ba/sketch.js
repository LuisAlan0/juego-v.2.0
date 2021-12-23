

var kid, kidL, kidR, KidRl, KidRr;
var pared1, pared2, pared3, pared4;
var edges;
var mon1, mon2;
var monAni;
var Bomb, BombE;
var Box1,Box2, boxImg;
var Block1,Block1Img
function preload(){
  KidRl = loadAnimation("ani/kidR6.png","ani/kidR5.png","ani/kidR6.png","ani/kidR7.png")
  kidL = loadAnimation("ani/kidR8.png")
  KidRr = loadAnimation("ani/kidR2.png","ani/kidR1.png","ani/kidR2.png","ani/kidR3.png")
  kidR = loadAnimation("ani/kidR4.png")

  BombE = loadAnimation("ani/bomb1.png", "ani/bomb2.png", "ani/bomb3.png", "ani/bomb2.png", "ani/bomb1.png","ani/bomb2.png","ani/bomb3.png","ani/bomb2.png","ani/bomb1.png","ani/bomb2.png","ani/bomb3.png","ani/bomb3.png","ani/bomb4.png")

  

  monAni = loadAnimation("mon/Mons1.png","mon/Mons2.png","mon/Mons3.png","mon/Mons4.png","mon/Mons5.png","mon/Mons6.png","mon/Mons7.png","mon/Mons8.png","mon/Mons9.png","mon/Mons10.png")

  Block1Img = loadImage("ani/Block2.png")
}

function setup(){
createCanvas(800,776);
kid = createSprite(70,50,20,20);
kid.shapeColor = "red"
kid.scale = 0.15
kid.addAnimation("KLR", kidR)
kid.addAnimation("KLL",kidL) 
kid.addAnimation("KRL",KidRl)
kid.addAnimation("KRR",KidRr)

mon1 = createSprite(690,70,20,20);
//mon1.addAnimation("nope",monAni)
mon1.scale = 0.7

mon2 = new Monstruo(60,300,20,20);


Box1 = new BoxM(300, 60, 40,40)
Box2 = new BoxM(200, 80, 40,40)


}


function draw(){
background(100)
edges = createEdgeSprites();
kid.bounceOff(edges);


mon1.display();
mon2.display();

if (keyDown(LEFT_ARROW)){
  kid.x = kid.x-5;
  kid.changeAnimation("KRL",KidRl)
  kid.play()
} else{
    if (keyWentUp("left")){
      kid.pause()
    }
}

if (keyDown(RIGHT_ARROW)){
  kid.x = kid.x+5;
  kid.changeAnimation("KRR",KidRr)
  kid.play()

} else{
    if (keyWentUp("right")){
      kid.pause()
    }
}

if (keyDown(UP_ARROW)){
  kid.y = kid.y-5;

}
if (keyDown(DOWN_ARROW)){
  kid.y = kid.y+5;
}

if (keyDown("z")){
  Bomb = createSprite(kid.x+70, kid.y+15, 10,10)
  Bomb.shapeColor = "gray"
  Bomb.addAnimation("Bom",BombE)
  Bomb.scale = 0.6
  Bomb.lifetime = 50
  DestruirCajas()
}

Box1.display()
Box2.display()

drawSprites();
}

function DestruirCajas(){
  if (Bomb.isTouching(Box1)){
    Box1.lifetime = 50
  }
  if (Bomb.isTouching(Box2)){
    Box2.lifetime = 50
  }
  if (Bomb.isTouching(kid)){
    kid.lifetime = 50
  }
}

