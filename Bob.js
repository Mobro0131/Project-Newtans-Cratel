class Bob {
    constructor(x,y) {
      var options = {
          restitution:0.3,
          density:1.2,
          friction:0.2,
          
      }
      this.body = Bodies.circle(x,y,30,options);
      this.radius=30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("Pink");
      ellipse(pos.x, pos.y, this.radius*2,this.radius*2);

    }
  };