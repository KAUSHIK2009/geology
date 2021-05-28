class Hammer{
 constructor(x,y){
    var options={
    'density':2,
    'friction':1.0,
    'restitution':0.5
    };
    this.body=bodies.rectangle(x,y,50,50,options);
    this.width=150;
    this.height=40;
    world.add(world,this.body);
 };
display(){
var pos=this.body.position;
pos.x=mouse.x;
pos.y=mouse.y;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(3);
stroke('white')
fill('orange')
rectmode(CENTER)
rect(0,0,this.width,this.height);
pop();
};
};
