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
 
  time: {
    start: undefined,
    delta: undefined,
    deltaSeconds: undefined
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
    // ScoreBoard.init(this.ctx);
    

    this.start();
  },

  start: function() {
    
    this.reset();
  //   setInterval(() => {
  //     console.log(this.time.deltaSeconds)
  //  }, 1000);

    
    // this.controlKeys();

    //animation loop
    this.play = now => {
      
      this.time.elapsed = now - this.time.start;
      this.time.deltaSeconds= Math.floor(this.time.delta/60);
      console.log(this.time.elapsed)
      
      //ACTION!!!
      this.clear();
      this.time.delta++;
      if (this.framesCounter > 1000) {
        this.time.delta = 0;
      }
      // if (this.framesCounter % 50 === 0) {
        
      // }
      this.moveAll();
      this.drawAll();
      if (this.player.y >  Game.h)  {
        console.log()
        this.gameOver(Game.player.y);
      }

      requestAnimationFrame(this.play);
    };
    
    requestAnimationFrame(this.play);








    // this.interval = setInterval(() => {
    //   this.clear();

    //   this.framesCounter++;

    //   // controlamos que frameCounter no sea superior a 1000
    //   if (this.framesCounter > 1000) {
    //     this.framesCounter = 0;
    //   }

    //   // controlamos la velocidad de generación de obstáculos
    //   // if (this.framesCounter % 50 === 0) {
    //   //   this.generateObstacle();
    //   // }

    //   // this.score += 0.01;
     
    //   this.moveAll();
    //   this.drawAll();

    //   // eliminamos obstáculos fuera del canvas
    //   // this.clearObstacles();

    //   // if (this.isCollision()) {
    //   //   this.gameOver();
    //   // }
    // }, 1000/30);
  },
  generateBirdHP: function() {
    this.birdHPArr.push(
      new BirdHP(500, 500, this.w/2, this.h/2, this.ctx)
    );
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  },
  moveAll: function() {
    this.background.move();
    this.player.move();
    // this.obstacles.forEach(function(obstacle) {
      // obstacle.move();
      // })
    this.birdHPArr[0].move();

  },
  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.birdHPArr[0].draw();
    this.background.drawFirstCloud();

  },
  reset: function() {
    this.birdHPArr = [];
    this.generateBirdHP()
    this.background = new Background(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx);
    this.player = new Player(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx, this.keys);
    // this.scoreBoard = ScoreBoard;
    this.time.delta = 0;
    this.score = 0;
  },
  stop: function() {
    window.cancelAnimationFrame(this.play);
    this.play = undefined;

  },
  //fin del juego
  gameOver: function() {
    this.stop();

    // if (confirm("GAME OVER. Play again?")) {
    //   this.reset();
    //   this.start();
    // }
  }
};

  //no puedo parar la animacion 
  //no puedo poner limites al muñeco