class BirdElvis {
  constructor(x, y, w, h, ctx) {
    this.name = "birdElvis";
    this.x = x;
    this.y = y;
    this.w = w;//estas dos se pueden borrar
    this.h = h;
    this.birdW = 43;
    this.birdH = 35;
    this.ctx = ctx;
    this.birdElvis = new Image();
    this.birdElvis.src = "./characters/enemies/bird-elvis.png";
    this.index=6;
    this.t = 0;
    this.active=true
  }
  randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  draw (counter) {
    this.ctx.drawImage(this.birdElvis,this.index,0,this.birdW,this.birdH,this.x,this.y,this.birdW,this.birdH);
    if (this.index>375) {
      this.index=2;
    }
    if(counter%3==0) {
      this.index+=53.8;
    }    
  }

  move() {
    this.x--;
    // this.y = this.y + (Math.cos(this.t*(2*Math.PI))*this.randomInt(0.2,30));
    // this.t += 0.01    
  }

  
}
