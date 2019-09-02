class Bullet {
  constructor(x, y, h, w, ctx, ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.r = 5;
    this.vx = 10;
    this.vy = 1;

    this.gravity = 0.25;
    this.bullets = new Image();
    this.bullets.src = "./characters/boy/bullets.png";

    // número de imágenes diferentes
    this.frames = 2;
    this.frameIndex = 5;
  }

  draw() {
    this.ctx.drawImage(this.bullets,this.frameIndex,0,33,19,300,300,33*2,20*2);
    if(Game.time.deltaSeconds%2==0 && this.frameIndex==80) {
      this.frameIndex=6;
    }
    if(Game.time.deltaSeconds%3==0 && this.frameIndex==5) {
      this.frameIndex=80;
    }
  }

  move() {
    this.x+=10 //this.vx;

  }
}
//5-80