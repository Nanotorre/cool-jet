class Bullet {
  constructor(x, y, h, w, ctx, elapsed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.r = 5;
    this.vx = 10;
    this.vy = 1;
    this.elapsed= elapsed;

    this.gravity = 0.25;
    this.bullets = new Image();
    this.bullets.src = "./characters/boy/bullets.png";

    // número de imágenes diferentes
    this.frames = 2;
    this.frameIndex = 5;
    this.active=true
  }

  draw() {
    this.ctx.drawImage(this.bullets,this.frameIndex,0,33,19,this.x,this.y,33*1.5,20*1.5);
    if(this.elapsed%60==0) {
      
      if(this.frameIndex==80) {
        this.frameIndex=6;
      }
      if(this.frameIndex==5) {
        this.frameIndex=80;
      }
    }
  }

  move() {
    this.x+=10 

  }
}
