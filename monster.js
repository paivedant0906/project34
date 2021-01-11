class Monster {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
         frictionAir:1,
          density:1,
         
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Monster-01.png");
      this.body = Bodies.circle(x,y,(this.r)/2,options);
      World.add(world, this.body);
    }
    display(){
     
     
     
      
      imageMode(CENTER);
      image(this.image,this.x, this.y, this.r, this.r);
      
    }
  };
