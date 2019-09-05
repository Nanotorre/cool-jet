let ScoreBoard = {
  ctx: undefined,
  init: function(ctx) {
    this.ctx = ctx;
    this.ctx.font = "45px helvetica";
    this.ctx.textAlign = 'center';
    
    this.bulletStatusMidNumber = 5;
    this.bulletStatusLowNumber = 2;
    this.bulletStatusOkNumber = 10;

  },
  update: function(score, bulletsNo) {
    this.ctx.beginPath();
    this.ctx.arc(120, 100, 60, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#3d959c";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(120, 100, 62, 0, 2 * Math.PI);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#003300';
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = "white";
    this.ctx.font = "14px helvetica";
    this.ctx.fillText("SCORE", 120, 130);
    this.ctx.font = "40px helvetica";
    this.ctx.fillText(Math.floor(score), 120, 100);

    if(bulletsNo <= this.bulletStatusLowNumber) {
      this.ctx.beginPath();
      this.ctx.arc(260, 100, 60, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#cf4d3c";
      this.ctx.fill();
      this.ctx.closePath();
  
      this.ctx.beginPath();
      this.ctx.arc(260, 100, 62, 0, 2 * Math.PI);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = '#003300';
      this.ctx.stroke();
      this.ctx.closePath();
    }
    else if (this.bulletStatusLowNumber < bulletsNo && bulletsNo<= this.bulletStatusMidNumber) {
      this.ctx.beginPath();
      this.ctx.arc(260, 100, 60, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#a4aa90";
      this.ctx.fill();
      this.ctx.closePath();
  
      this.ctx.beginPath();
      this.ctx.arc(260, 100, 62, 0, 2 * Math.PI);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = '#003300';
      this.ctx.stroke();
      this.ctx.closePath();
    }
    else if ( bulletsNo > this.bulletStatusMidNumber) {
      this.ctx.beginPath();
      this.ctx.arc(260, 100, 60, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#3d959c";
      this.ctx.fill();
      this.ctx.closePath();
  
      this.ctx.beginPath();
      this.ctx.arc(260, 100, 62, 0, 2 * Math.PI);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = '#003300';
      this.ctx.stroke();
      this.ctx.closePath();
    }
    this.ctx.fillStyle = "white";
    this.ctx.font = "14px helvetica";
    this.ctx.fillText("BULLETS", 260, 130);
    this.ctx.font = "40px helvetica";
    this.ctx.fillText(bulletsNo, 260, 100);
  }
};
