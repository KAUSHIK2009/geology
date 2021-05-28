class Iron{
    constructor(x,y){
        var options={
            'restitution:0.8',
            'friction':3,
            'density':30
        }
        this.body=bodies.rectangle(x,y,50,50,options);
        this.width=80;
        this.height=50;

        world.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectmode(CENTER);

        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
};
