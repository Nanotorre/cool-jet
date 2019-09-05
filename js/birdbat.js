class BirdBat {
  constructor(x, y, ctx) {
    this.name = "birdBat";
    this.x = x;
    this.y = y;
    this.birdW = 43;
    this.birdH = 35;
    this.ctx = ctx;
    this.birdBat = new Image();
    this.birdBat.src = "./characters/enemies/bird-bat.png";
    this.index=0;
    this.active=true
  }
  randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  draw (counter) {
    this.ctx.drawImage(this.birdBat,this.index,0,this.birdW,this.birdH,this.x,this.y,this.birdW,this.birdH);
    if (this.index>375) {
      this.index=2;
    }
    if(counter%3==0) {
      this.index+=53.7;
    }    
  }

  move() {
    this.x--;
    // this.y = this.y + (Math.cos(this.t*(2*Math.PI))*this.randomInt(0.2,30));
    // this.t += 0.01    
  }

  
}
