class Corona{
    constructor(x,y){
        var options={

        }
    this.body = Bodies.rectangle(x,y,options);
    this.image = loadImage("images/thanos.png");
    World.add(world,this.body);

    }
display(){
    var pos = this.body.position;
    imageMode(CENTER)
    image(this.image,pos.x,pos.y);
}


}