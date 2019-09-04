let Game = {
  myCanvasDOMEl: undefined,
  ctx: undefined,
  w: undefined,
  h: undefined,
  w2: undefined,
  h2: undefined,
  PI: Math.PI,
  PI_DOUBLE: Math.PI * 2,
  PI_HALF: Math.PI / 2,
  fps: 60,
  scoreBoard: undefined,
  birdHPfreq: [120, 360, 480],
 
  time: {
    start: undefined,
    delta: undefined,
    elapsedS: undefined,
    counter: undefined
  },
  
  randomFloat: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  randomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  shuffle: function (array) {
    array.sort(() => Math.random() - 0.5);
  },
  setCanvasDimensions: function () {
    // x axis
    this.myCanvasDOMEl.setAttribute("width", `${this.w}px`);
    // y axis
    this.myCanvasDOMEl.setAttribute("height", `${this.h}px`);
  },
  init: function() {
    this.myCanvasDOMEl= document.querySelector("#myCanvas");
    this.ctx= this.myCanvasDOMEl.getContext("2d");
    this.w= window.innerWidth;
    this.h= window.innerHeight;
    this.w2= this.w / 2;
    this.h2= this.h / 2;
    this.setCanvasDimensions();
    ScoreBoard.init(this.ctx);
    this.start();
  },

  start: function() {
    
    this.reset();
    
      this.time.start=(performance.now()/1000).toFixed(2);
  
   
    this.time.counter=0;

    this.play = now => {

      this.time.counter++;
   
     
      this.time.elapsed = Math.floor(now);
      this.time.elapsedS= Math.floor(now/1000);
      if (this.time.counter > 1000) this.time.counter = 0;
      
      //bird HP
      if(this.birdHPArr.length<= 3 && this.time.counter%this.birdHPfreq[0]==0) this.generateBirdHP();
      else if(3 < this.birdHPArr.length >= 5 && this.time.counter%this.birdHPfreq[1]==0) this.generateBirdHP();
      else if(5 < this.birdHPArr.length < 8 && this.time.counter%this.birdHPfreq[2]==0) this.generateBirdHP();

      
      //ACTION!!!
      this.clear();
      this.moveAll();
      this.drawAll();
      this.clearObstacles();
     
      this.killBirds()
      if (this.isCollision()) {
        this.player.active=false;
        setTimeout(() => {
           this.gameOver();
        }, 2000);
       
      }
      if (this.player.y >  Game.h)  {
        this.gameOver(Game.player.y);
      }

      requestAnimationFrame(this.play);
    };
    requestAnimationFrame(this.play);
  },

  generateBirdHP: function() {
    this.birdHPArr.push(
      new BirdHP(this.w, this.randomInt(this.h2+200, this.h2-200), this.w/2, this.h/2, this.ctx)
    );
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  },

  moveAll: function() {
    this.background.move();
    if(this.player.active)this.player.move();
    
    this.birdHPArr.forEach(bird => {bird.move()});

  },

  drawAll: function() {
    this.background.draw();
    if(this.player.active) {
      this.player.draw(this.time.elapsed);
    }
    else {
      this.player.die(this.time.elapsed);
    }
    
    this.birdHPArr.forEach(bird => {bird.draw()});
    this.birdDied.forEach(died => {died.draw(this.time.elapsed)});
    
    this.background.drawFirstCloud();
    this.drawScore();

  },

  reset: function() {
    this.birdHPArr = [];
    this.birdDied = [];
    this.background = new Background(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx);
    this.player = new Player(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx, this.time.elapsed);
    this.scoreBoard = ScoreBoard;
    this.score = 0;
  },

  stop: function() {
    window.cancelAnimationFrame(this.play);
    this.play = undefined;

  },

  gameOver: function() {
    this.stop();

    // if (confirm("GAME OVER. Play again?")) {
    //   this.reset();
    //   this.start();
    // }
  },

  clearObstacles: function() {
    this.birdHPArr = this.birdHPArr.filter(bird => {if(bird.x>= - bird.birdW) return true});
  },

  isCollision: function() {
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // esto chequea que el personaje no estén en colisión con cualquier obstáculo
    return this.birdHPArr.some(bird => {
      return (
        this.player.x + this.player.w >= bird.x &&
        this.player.x < bird.x + bird.birdW &&
        this.player.y + this.player.h >= bird.y &&
        this.player.y <= (bird.y + bird.birdH)
        )
    });
  },
  killBirds: function () {
    if(this.player.bullets.length>0 && this.birdHPArr.length>0) {
      this.player.bullets.forEach(bullet=> {
          this.birdHPArr.forEach(bird=> {
            if(bullet.x+ 25 >= bird.x && bullet.x < bird.x + bird.birdW  && bullet.y + 12 >= bird.y && bullet.y <= bird.y + bird.birdH){
              bird.active=false; bullet.active=false; 
              this.birdDied.push(new ExplosionFx(bird.x, bird.y, this.ctx, this.elapsed));
              Game.score++;
            }
          })
      })
    }
    
    this.player.bullets = this.player.bullets.filter(bullet=> bullet.active===true);
    this.birdHPArr= this.birdHPArr.filter(bird=> bird.active === true);
    this.birdDied= this.birdDied.filter(died=> died.active === true);
  },
  drawScore: function() {
    this.scoreBoard.update(this.score);
  }

};


  //no puedo parar la animacion 
  //no puedo poner limites al muñeco