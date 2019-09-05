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

// class BlueDiamond
