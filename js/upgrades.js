class BlueDiamond {
  constructor(x, y, ctx) {
    this.weapon = "redMissile";
    this.bulletsNo = 10;
    this.x = x;
    this.y = y;
    this.w = 110;
    this.h = 106;
    this.ctx = ctx;
    this.blueDiamond = new Image();
    this.blueDiamond.src = "./characters/upgrades/blue-diamond.png";
    this.index=0;
    this.active = true;

  }

  draw(counter) {
    this.ctx.drawImage(this.blueDiamond,this.index,0, this.w, this.h, this.x, this.y, this.w/2, this.h/2);

    if (this.index>1330) {
      this.index=0;
    }
    if(counter%3==0)
      this.index+=112.5;
  }

  move() {
    this.x-=3;
  }
}

class YellowDiamond{
  constructor(x, y, ctx) {
    this.weapon = "std";
    this.bulletsNo = 20;
    this.x = x;
    this.y = y;
    this.w = 110;
    this.h = 106;
    this.ctx = ctx;
    this.yellowDiamond = new Image();
    this.yellowDiamond.src = "./characters/upgrades/yellow.diamond.png";
    this.index=0;
    this.active = true;

  }

  draw(counter) {



    this.ctx.drawImage(this.yellowDiamond,this.index,0,this.w, this.h,this.x,this.y,this.w/2, this.h/2);
    if (this.index>1100) {
      this.index=0;
    }
    if(counter%3==0)
      this.index+=113;}


  move() {
    this.x-=5;
  }
}


class RedDiamond {
  constructor(x, y, ctx) {
    this.weapon = "blueMissile";
    this.bulletsNo = 5;
    this.x = x;
    this.y = y;
    this.w = 110;
    this.h = 106;
    this.ctx = ctx;
    this.redDiamond = new Image();
    this.redDiamond.src = "./characters/upgrades/red-diamond.png";
    this.index=0;
    this.active = true;

  }

  draw(counter) {
    this.ctx.drawImage(this.redDiamond,this.index,0, this.w, this.h, this.x, this.y, this.w/2, this.h/2);

    if (this.index>1330) {
      this.index=0;
    }
    if(counter%3==0)
      this.index+=112.5;
  }

  move() {
    this.x-=3;
  }
}
