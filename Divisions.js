class Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitution:0.4,
            friction:1,
        }

        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w;
        this.h=h;

        World.add(world,this.body)
    } 

    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rotate(angle)
        fill("white")
        rect(0,0,this.w,this.h)
        pop();
    }
}