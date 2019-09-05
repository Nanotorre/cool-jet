class Bullet {
  constructor(x, y, ctx) {
    this.name = "std";
    this.x = x;
    this.y = y;
    this.w = 33;
    this.h = 19;
    this.ctx = ctx;
    this.bullets = new Image();
    this.bullets.src = "./characters/boy/bullets.png";
    this.frameIndex = 5;
    this.active= true;
  }

  draw() {
    this.ctx.drawImage(this.bullets, this.frameIndex, 0, this.w, this.h, this.x, this.y, 33*1.5, 20*1.5);
  
      
      if(this.frameIndex==80) {
        this.frameIndex=6;
      }
      if(this.frameIndex==5) {
        this.frameIndex=80;
      }

  }

  move() {
    this.x+=10 

  }
}

class RedMissile extends Bullet {
  constructor(x, y, ctx) {
    super(x, y, ctx);
    this.active= true;
    this.name = "redMissile";
    this.w = 32;
    this.h = 15;
    this.redMissile = new Image();
    this.redMissile.src = "./characters/boy/red-missile.png";
    this.frameIndex = 0;
  }
  draw(counter) {
    
  
      if (counter%20==0 && this.frameIndex==0){
        this.frameIndex=41.8;

      }
      if(counter%20==0 && this.frameIndex==0) {
        this.frameIndex=0;
      }
      // else if(!counter%60==0 && !this.frameIndex==0) {this.frameIndex=0}
      
    this.ctx.drawImage(this.redMissile,this.frameIndex,0,this.w,this.h,this.x,this.y,this.w,this.h);
    // }
   
  }
  move() {
    this.x+=10; 
    this.y+= Game.randomInt(-10,10)
  }
}

class BlueMissile extends Bullet {
  constructor(x, y, ctx) {
    super(x, y, ctx);
    this.active= true;
    this.name = "blueMissile";
    this.w = 38;
    this.h = 13;
    this.blueMissile = new Image();
    this.blueMissile.src = "./characters/boy/blue-missile.png";
    this.frameIndex = 0;
  }
  draw(counter) {
      
    this.ctx.drawImage(this.blueMissile, this.frameIndex, 0, this.w, this.h, this.x, this.y, this.w*2.5,this.h*2.5);
    // }
   
  }
  move() {
    this.x+=15; 
    this.y+=0.5;
  }
}
