class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.sky = new Image();
    this.sky.src = "./characters/background/bkg1-layers/sky.png";
    this.clouds1 = new Image();
    this.clouds1.src = "./characters/background/bkg1-layers/clouds_1.png";
    this.clouds2 = new Image();
    this.clouds2.src = "./characters/background/bkg1-layers/clouds_2.png";
    this.farMountains= new Image();
    this.farMountains.src = "./characters/background/bkg1-layers/rocks_1.png";
    this.clouds3 = new Image();
    this.clouds3.src = "./characters/background/bkg1-layers/clouds_3.png";
    this.nearMountains = new Image();
    this.nearMountains.src = "./characters/background/bkg1-layers/rocks_2.png";
    this.clouds4 = new Image();
    this.clouds4.src = "./characters/background/bkg1-layers/clouds_4.png";
    
    this.w = w;
    this.h = h;
    
    //sky & clouds 1 are fixed and share position
    this.skyX= 0;
    this.skyY= 0;

    this.clouds2X = 0;
    this.clouds2Y = 0;
    this.farMountainsX = 0;
    this.farMountainsY = 0;
    this.clouds3X = 0;
    this.clouds3Y = 0;
    this.nearMountainsX = 0;
    this.nearMountainsY = 0;
    this.clouds4X = 0;
    this.clouds4Y = 0;


    this.clouds2Speed = .2;
    this.farMountainsSpeed = 1;
    this.clouds2Speed = 1.2;
    this.nearMountainsSpeed = 3.3;
    this.clouds4Speed = 3.6;
  }

  draw() {
    this.ctx.drawImage(this.sky,this.skyX,this.skyY,this.w,this.h);
    this.ctx.drawImage(this.clouds1,this.skyX,this.skyY,this.w,this.h);

    this.ctx.drawImage(this.clouds2,this.clouds2X,this.clouds2Y,this.w,this.h);
    this.ctx.drawImage(this.clouds2,this.clouds2X + this.w,this.clouds2Y,this.w,this.h);

    this.ctx.drawImage(this.farMountains,this.farMountainsX,this.farMountainsY,this.w,this.h);
    this.ctx.drawImage(this.farMountains,this.farMountainsX + this.w,this.farMountainsY,this.w,this.h);
    
    this.ctx.drawImage(this.clouds3,this.clouds3X,this.clouds3Y,this.w,this.h);
    this.ctx.drawImage(this.clouds3,this.clouds3X + this.w,this.clouds3Y,this.w,this.h);

    this.ctx.drawImage(this.nearMountains,this.nearMountainsX,this.nearMountainsY,this.w,this.h);
    this.ctx.drawImage(this.nearMountains,this.nearMountainsX + this.w,this.nearMountainsY,this.w,this.h);
  }
  drawFirstCloud() {
    this.ctx.drawImage(this.clouds4,this.clouds4X,this.clouds4Y,this.w,this.h);
    this.ctx.drawImage(this.clouds4,this.clouds4X + this.w,this.clouds4Y,this.w,this.h);
  }

  move() {
    this.clouds2X -= this.clouds2Speed;
    this.farMountainsX -= this.farMountainsSpeed;
    this.clouds3X -= this.clouds3Speed;
    this.nearMountainsX -= this.nearMountainsSpeed;
    this.clouds4X -= this.clouds4Speed;
    

    if (this.clouds2X < -this.w) this.clouds2X = 0;
    if (this.farMountainsX < -this.w) this.farMountainsX = 0;
    if (this.clouds3X < -this.w) this.clouds3X = 0;
    if (this.nearMountainsX < -this.w) this.nearMountainsX = 0;
    if (this.clouds4X < -this.w) this.clouds4X = 0;
  }
}
