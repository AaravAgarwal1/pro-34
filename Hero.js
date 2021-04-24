class Hero{
    constructor(x,y,radius){
        var options= {
            isStatic:false,
            density:1.2,
            restitution:0.4
        }

        this.body= Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.image= loadImage("images/superhero.png");
        World.add(world,this.body);


        
    }

    display(){

        var pos= this.body.position;
   
        push();
        translate(pos.x,pos.y);

        
        this.body.position.x= mouseX;
        this.body.position.y= mouseY;
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}