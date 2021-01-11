class Block {
    constructor(x,y,width,height) {
      var options = {
         
          restitution: 0.8,
          friction:1.0,
          density:20
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
