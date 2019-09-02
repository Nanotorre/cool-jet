class Player {
  constructor(w, h, ctx, keys) {
    this.canvasW= w;
    this.canvasH = h;
    this.ctx = ctx;
    this.keys = keys;
    this.x = this.canvasW * 0.08;
    this.y = this.canvasH * 0.08;


    this.img = new Image();
    this.img.src = "./characters/boy/boy.png";


    this.img.frames = 6;
    this.img.frameIndex = 0;

    // boy measures
    this.w = 43;
    this.h = 60;

   

    this.bullets = [];
    this.index= 14;
    this.speed= 9;
    this.LEFT= false; 
    this.RIGHT= false;

    this.UP= false; 
    this.DOWN= false;

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
      this.ctx.drawImage(this.img,this.index,0,43,60,this.x,this.y,this.w*1.5,this.h*1.5);
        if (this.index>380) {
          this.index=14;
        }
        else {
          this.index+=74.1;
        }

      }

    move() {
	
      if(this.LEFT) { 
        this.x -= this.speed;
        
      }
      if(this.RIGHT) {
        this.x += this.speed;
      }
      if(this.UP) { 
        this.y -= this.speed;
 
      }
      if(this.DOWN) {
        this.y += this.speed;	
      }
    }

}