class Paper{
    constructor(x,y,r){
        var options ={
            restitution:0.5,
            density:2,
            friction:1,

        }

    this.body = Matter.Bodies.circle(x,y,r)
    Matter.World.add(wld,this.body);
    this.r =r;
    }



    show(){

        push ();
        fill ("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
        pop ();
    }
}
