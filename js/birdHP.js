class BirdHP {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;//estas dos se pueden borrar
    this.h = h;
    this.birdW = 36;
    this.birdH = 32;
    this.ctx = ctx;
    this.birdHP = new Image();
    this.birdHP.src = "./characters/enemies/bird-hp.png";
    this.index=6;
    this.t = 0;

  }
  randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  draw () {
    this.ctx.drawImage(this.birdHP,this.index,0,this.birdW,this.birdH,this.x,this.y,this.birdW,this.birdH);
    if (this.index>380) {
      this.index=6;
    }
    else {
      this.index+=53.8;
    }
  }

  move() {
    // function easeInOutQuad (t, b, c, d) {
    //   if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    //   return -c / 2 * ((--t) * (t - 2) - 1) + b;
    // }
    // this.x = easeInOutQuad (this.t, this.x, 0, 4);
    // console.log(this.x, this.t)
    // this.t++;
    this.x--;
    this.y = this.y + (Math.cos(this.t*(2*Math.PI))*this.randomInt(0.2,30));
    this.t += 0.01




    
  }













}



