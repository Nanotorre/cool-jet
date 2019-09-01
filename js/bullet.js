class Bullet {
  constructor(x, y, y0, h, w, ctx) {
    this.x = x;
    this.y = y;
    this.y0 = y0
    this.h = h
    this.w = w
    this.ctx = ctx
    this.r = 5;
    this.vx = 10;
    this.vy = 1;

    this.gravity = 0.25;
    this.img = new Image();
    this.img.src = "../characters/boy/bullets.png";

    // número de imágenes diferentes
    this.img.frames = 2;
    this.img.frameIndex = 11;
  }

  draw1() {
    this.ctx.drawImage(this.img,this.frameIndex,5,26,16,this.x/2,this.y/2,26*2,16*2);
    if (this.index==87) {
      this.index=11;
    }
    else {
      this.index=87;
    }
    // this.ctx.beginPath();
    // this.ctx.fillStyle = "red";
    // this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  move() {
    this.x += this.vx;

    this.vy += this.gravity;
    this.y += this.vy;

    if (this.y > this.y0 + this.h) {
      this.vy *= -1;
    }
  }
}
