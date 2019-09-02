class Player {
  constructor(w, h, ctx, keys) {
    this.canvasW= w;
    this.canvasH = h;
    this.ctx = ctx;
    this.keys = keys;
    this.x = this.canvasW * 0.2;
    this.y = this.canvasH * 0.2;

    //sprites
    this.boy_off = new Image();
    this.boy_off.src = "./characters/boy/boy_off.png";
    this.boy_on = new Image();
    this.boy_on.src = "./characters/boy/boy.png";
    this.boy_shoots = new Image();
    this.boy_shoots.src = "./characters/boy/boy_shoots.png";

    // boy measures
    this.w = 43;
    this.h = 60;

    this.bullets = [];
    this.index= 14;
    this.speed= 9;
    this.speedAcc= 0.001
    this.speedY= 0;
    this.gravity= 0.023;
    this.gravitySpeed= 0;

    this.LEFT= false; 
    this.RIGHT= false;
    this.UP= false; 
    this.SPACE= false;

    this.time= {
      start: undefined,
      delta: undefined,
      deltaSeconds: undefined
    }
  }
    easeOut (speed) {
      Math.pow(--speed, 5) + 1;
    }
        
    draw() {
     
      //sprite JET ON
      if(this.UP) {
        this.ctx.drawImage(this.boy_on,this.index,0,43,60,this.x,this.y,this.w*1.5,this.h*1.5);
        if (this.index>380) {
          this.index=14;
        }
        else {
          this.index+=74.1;
        }
      }
      //sprite JET OFF
      if(!this.UP) {
        this.ctx.drawImage(this.boy_off,this.index,0,43,60,this.x,this.y,this.w*1.5,this.h*1.5);
        if (this.index>380) {
          this.index=14;
        }
        else {
          this.index+=74.1;
        }
      }
      //sprite SHOOT
      if(this.SPACE) {
        this.ctx.drawImage(this.boy_shoots,this.index,0,55,60,this.x,this.y,55*1.5,this.h*1.5);
        if (this.index>380) {
          this.index=14;
        }
        else {
          this.index+=74.1;
        }
      }
      
    }

    move() {
      this.gravitySpeed += this.gravity;
      this.y += this.speedY + this.gravitySpeed;
	
      if(this.LEFT) {
        if(this.x > 0) {
          this.x -= this.speed;
        } 
      }
      if(this.RIGHT) {
        this.x += this.speed*this.speedAcc;
        this.speedAcc+=0.05;
      }
      if(!this.RIGHT) {
        this.speedAcc=0.2;
      }
      if(this.UP) { 
        if(this.y >= 60) {
          this.gravity= -0.2;
          this.y -= this.speed;
        }
      }
      if(!this.UP) { 
        this.gravity= 0.23
        this.y -= this.speed;
      }
      if(this.SPACE) {
        
      }
    }

    shoot() {
      let bullet = new Bullet(
        this.x + this.w,
        this.y + this.h / 2,
        this.h,
        this.w,
        this.ctx
      );
    this.bullets.push(bullet);
      }
}