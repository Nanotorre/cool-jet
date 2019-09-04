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
  draw (elapsed) {
    this.counter++;
    if(this.counter%120==0) this.active=false;
    this.ctx.drawImage(this.bird_smoke,this.indexdie,0,47,45,this.x-12,this.y-10,47*1.2,45*1.2);
    if(this.counter%10==0) {
      this.indexdie+=53;
       
    }
  }
}