class Pared{
    constructor(){
        for(var i=0; i<830; i=i+37){
            Block1 = createSprite(i,13,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.5
            kid.bounceOff(Block1);
           }
           for(var i=0; i<830; i=i+37){
            Block1 = createSprite(i,760,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.5
            kid.bounceOff(Block1);
          }
          for(var i=120; i<500; i=i+31){
            Block1 = createSprite(i,120,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.4
            kid.bounceOff(Block1);
          }
          for(var i=500; i<660; i=i+31){
            Block1 = createSprite(i,206,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.4
            kid.bounceOff(Block1);
          }
          
          for(var i=47; i<760; i=i+34){
            Block1 = createSprite(17,i,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.5
            kid.bounceOff(Block1);
           }
           for(var i=47; i<760; i=i+34){
            Block1 = createSprite(780,i,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.5
            kid.bounceOff(Block1);
           }
           for(var i=44; i<200; i=i+27){
            Block1 = createSprite(620,i,5,5)
            Block1.addImage(Block1Img)
            Block1.scale= 0.4
            kid.bounceOff(Block1);
           }
          
    }
    display(){
        
    }
}