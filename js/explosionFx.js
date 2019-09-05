class ExplosionFx {
  constructor(x, y, ctx, elapsed) {
    this.x=x;
    this.y=y;
    this.ctx= ctx;
    this.elapsed= elapsed;
    this.indexdie=0;
    this.bird_smoke = new Image();
    this.bird_smoke.src = "./characters/enemies/bird-smoke.png";
    this.active= true;
    this.counter= 0;
  }
  draw (counter) {
    // this.counter++;
    if(counter%120==0) this.active=false;
    this.ctx.drawImage(this.bird_smoke,this.indexdie,0,47,45,this.x-12,this.y-10,47*1.2,45*1.2);
    if(counter%10==0) {
      this.indexdie+=53;  
    }
  }
}
class ExplosionPlusFx {
  constructor(x, y, ctx) {
    this.x=x;
    this.y=y;
    this.w= 230;
    this.h= 213;
    this.ctx= ctx;
    this.index=0;
    this.explosionPlus = new Image();
    this.explosionPlus.src = "./characters/explosion.png";
    this.active= true;
    this.counter= 0;
  }
  draw (counter) {
    if(counter%180==0) this.active=false;

  this.ctx.drawImage(this.explosionPlus,this.index,0,this.w,this.h,this.x,this.y,this.w,this.h);
    if (this.index>9810) {
      this.index=0;
    }
    else {
      this.index+=239;}
  }
}