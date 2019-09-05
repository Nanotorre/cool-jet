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
    this.gravity= 9;
    this.sense= 0.2;
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

  move(playerX, playerY) {
    
    this.x-=1

    if(this.y-5 >= playerY+ 10) {     
      this.gravity += this.sense;
      this.y-= this.gravity;
      this.sense= 0.30;
      
    }
    else if (this.y+5< playerY-10){
      
      this.gravity += this.sense;
      this.y+= this.gravity;
      this.sense= -0.30;
    

    }
    


    // this.x-= (playerX-this.x)-5;

  }

  
}
