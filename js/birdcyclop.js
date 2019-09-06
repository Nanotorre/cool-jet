class BirdCyclop {
  constructor(x, y, w, h, ctx) {
    this.name = "birdCyclop";
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.birdW = 39;
    this.birdH = 35;
    this.ctx = ctx;
    this.birdCyclop = new Image();
    this.birdCyclop.src = "./characters/enemies/bird-cyclop.png";
    this.index=6;
    this.active=true
    this.angle=0;

    this.angle = 0;
  }
  randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  draw (counter) {
    this.ctx.drawImage(this.birdCyclop,this.index,0,this.birdW,this.birdH,this.x,this.y,this.birdW,this.birdH);
      if (this.index>370) {
        this.index=6;
      }
      if(counter%3==0) {
        this.index+=53;
      }
  };

  // easer = new Easer().using('in-expo');

  move(playerx, playery, counter) {
    this.angle += 0.03;
    this.x--;
    this.y = 50 + 400 * Math.sin(this.angle);
  
   
  };

}

