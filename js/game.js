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
  keys: {
    LEFT_KEY: 37,
    RIGHT_KEY: 39, 
    UP_KEY: 38,
    DOWN_KEY:40, 
    SPACE: 32
  },
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
    setInterval(() => {
      console.log(this.time.deltaSeconds)
   }, 1000);

    this.controlKeys();


    //animation loop
    this.play = now => {
      this.time.elapsed = now - this.time.start;
      this.time.deltaSeconds= Math.floor(this.time.delta/60);
      
      
      
      //ACTION!!!
      this.clear();
      this.time.delta++;
      if (this.framesCounter > 1000) {
        this.time.delta = 0;
      }
      this.moveAll();
      this.drawAll();

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
  clear: function() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  },
  controlKeys() {
    document.onkeydown = function(e) {
    
      if(e.keyCode == Game.keys.LEFT_KEY) Game.player.LEFT = true;
      if(e.keyCode == Game.keys.RIGHT_KEY) {
        Game.player.RIGHT = true;
        // Game.player.RIGHT = false;
      }
      if(e.keyCode == Game.keys.UP_KEY) Game.player.UP = true;
      if(e.keyCode == Game.keys.DOWN_KEY) Game.player.DOWN = true;
     };
     document.onkeyup = function(e) {
       if(e.keyCode == Game.keys.LEFT_KEY) Game.player.LEFT = false;
       if(e.keyCode == Game.keys.RIGHT_KEY) {
        Game.player.RIGHT = false;
        // Game.player.RIGHT_DECELERATE= true;
       }
       if(e.keyCode == Game.keys.UP_KEY) Game.player.UP = false;
       if(e.keyCode == Game.keys.DOWN_KEY) Game.player.DOWN = false;
     };
  },
  moveAll: function() {
    this.background.move();
    this.player.move();
    // this.obstacles.forEach(function(obstacle) {
      // obstacle.move();
      // })

  },
  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.background.drawFirstCloud();
    // this.obstacles.forEach(function(obstacle) {
      // obstacle.draw1();
    // });
    // this.drawScore();
  },
  reset: function() {
    this.background = new Background(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx);
    this.player = new Player(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx, this.keys);
    // this.scoreBoard = ScoreBoard;
    this.time.delta = 0;
    this.obstacles = [];
    this.score = 0;
  },
};
  