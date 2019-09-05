let ScoreBoard = {
  ctx: undefined,
  init: function(ctx) {
    this.ctx = ctx;
    this.ctx.fillStyle = "white";
    this.ctx.font = "45px helvetica";
    this.ctx.textAlign = 'center';
    this.score_bkg = new Image();
    this.score_bkg.src = "./characters/background/score.png";
    this.bulletStatusOk = new Image ();
    this.bulletStatusOk.src = "./characters/background/bullet-status-green.png";
    this.bulletStatusMid = new Image ();
    this.bulletStatusMid.src = "./characters/background/bullet-status-mid.png";
    this.bulletStatusLow = new Image ();
    this.bulletStatusLow.src = "./characters/background/bullet-status-low.png";
    
    this.bulletStatusMidNumber = 5;
    this.bulletStatusLowNumber = 2;
    this.bulletStatusOkNumber = 10;
    
    

  },
  update: function(score, bulletsNo) {
    
    this.ctx.drawImage(this.score_bkg, 60, 40, 120, 120);
    this.ctx.fillText(Math.floor(score), 119, 100);

    if(bulletsNo <= this.bulletStatusLowNumber) {
      this.ctx.drawImage(this.bulletStatusLow, 200, 40, 120, 120);
      this.ctx.fillText(bulletsNo, 260, 100);
    }
    else if (this.bulletStatusLowNumber < bulletsNo && bulletsNo<= this.bulletStatusMidNumber) {
      this.ctx.drawImage(this.bulletStatusMid, 200, 40, 120, 120);
      this.ctx.fillText(bulletsNo, 260, 100);
    }
    else if ( bulletsNo > this.bulletStatusMidNumber) {
      this.ctx.drawImage(this.bulletStatusOk, 200, 40, 120, 120);
      this.ctx.fillText(bulletsNo, 260, 100);
    }
  }
};
