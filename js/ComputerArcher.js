class compArcher
{
  constructor(x,y,width,height)
  {  
    var options= {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.image = loadImage("./assets/computerArcher.png")
    
    World.add(world,this.body)
    Matter.Body.setAngle(this.body,PI/2)
   }

   display() {
   
    var posi = this.body.position;
    var angle = this.body.angle;
 
    if (keyIsDown(UP_ARROW)&& angle>1.3){
        angle = angle - 0.01;
        Matter.Body.setAngle(this.body, angle);
    }
    if (keyIsDown(DOWN_ARROW)&& angle<1.9){
      angle = angle + 0.01;
      Matter.Body.setAngle(this.body, angle);
    }
   /* if (keyIsDown(UP_ARROW)&& angle > -1.77){
      angle = angle + 0.01;
      Matter.Body.setAngle(this.body, angle);
  }
  if (keyIsDown(DOWN_ARROW)&& angle < -1.97){
    angle = angle + 0.01;
    Matter.Body.setAngle(this.body, angle);
  }*/

    push();
    translate(posi.x, posi.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    

   }
}
