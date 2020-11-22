class Paper{
    constructor(x,y,r){
        var option={
            density : 1,
            friction : 0.2,
            restitution : 0.8
        }

        this.body=Bodies.circle(x,y,22,option);
        World.add(world,this.body);
        this.width=20,
        this.height=20;
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

  
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        fill("white");
        stroke("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}