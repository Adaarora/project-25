class Ground {

    constructor(x, y, width,height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0.5,
            density: 1.2
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body);

    }
    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        strokeWeight(3);
        fill("white")
        rect(0,0,this.width, this.height);
        pop()

    }
    
}