class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        //console.log(this.body.speed);
  
        
        if(this.body.speed < 3){

        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility)
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
          pop();

        }
        var angle = this.body.angle;
        var pos= this.body.position;
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
       
      }
}