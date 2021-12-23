class BoxM{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("ani/box1.png");
    }
    display(){
        //rectMode(CENTER)
        //rect(this.x, this.y, this.width, this.height)
        image(this.image, this.x, this.y, this.width, this.height);
    }
}