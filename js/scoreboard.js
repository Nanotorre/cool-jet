let ScoreBoard = {
  ctx: undefined,
  init: function(ctx) {
    this.ctx = ctx;
    this.ctx.fillStyle = "white";
    this.ctx.font = "45px helvetica";
    this.ctx.textAlign = 'center';
    this.score_bkg = new Image();
    this.score_bkg.src = "./characters/background/score.png";
  },
  update: function(score) {
    
    this.ctx.drawImage(this.score_bkg, 60, 40, 120, 120);
    
    this.ctx.fillText(Math.floor(score), 120, 100);
  
  }
};
