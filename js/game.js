let Game = {
  myCanvasDOMEl: undefined,
  ctx: undefined,
  w: undefined,
  h: undefined,
  w2: undefined,
  h2: undefined,
  scoreBoard: undefined,
  birdHPFreq: [120, 360, 480],
  birfCyclopFreq: [240, 480, 120],
  birdElvisFreq: [380, 120, 60],
  birdBatFreq: [480, 550],
  blueDiamondFreq: 240,
  yellowDiamondFreq: 480,
  redDiamondFreq: 580,


  time: {
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
  init: function () {
    this.myCanvasDOMEl = document.querySelector("#myCanvas");
    this.ctx = this.myCanvasDOMEl.getContext("2d");
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.setCanvasDimensions();
    ScoreBoard.init(this.ctx);
    this.start();
  },

  start: function () {

    this.reset();
    this.time.counter = 0;

    this.play = now => {

      this.time.counter++;
      this.time.elapsed = Math.floor(now);
      if (this.time.counter > 1000) this.time.counter = 0;
      this.generateAllBirds();
      this.generateUpgrades();

      //ACTION!!!
      this.clear();
      this.moveAll();
      this.drawAll();
      this.clearObstacles();
      this.killBirds()
      this.isUpgrade();
      if (this.isCollision()) {
        this.player.active = false;
        setTimeout(() => {
          this.gameOver();
        }, 2000);
      

      }
      if (this.player.y > Game.h) {
        this.gameOver(Game.player.y);
      }

      requestAnimationFrame(this.play);
    };
    requestAnimationFrame(this.play);
  },

  generateAllBirds: function () {
    //bird HP
    if (this.birdHPArr.length <= 3 && this.time.counter % this.birdHPFreq[0] == 0) this.generateBirdHP();
    else if (3 < this.birdHPArr.length >= 5 && this.time.counter % this.birdHPFreq[1] == 0) this.generateBirdHP();
    else if (5 < this.birdHPArr.length < 8 && this.time.counter % this.birdHPFreq[2] == 0) this.generateBirdHP();

    //bird cyclop
    if (this.birdCyclopArr.length <= 3 && this.time.counter % this.birfCyclopFreq[0] == 0) this.generateBirdCyclop();
    else if (3 < this.birdCyclopArr.length >= 5 && this.time.counter % this.birfCyclopFreq[1] == 0) this.generateBirdCyclop();
    else if (5 < this.birdCyclopArr.length < 8 && this.time.counter % this.birfCyclopFreq[2] == 0) this.generateBirdCyclop();

    //bird elvis
    if (this.birdElvisArr.length <= 3 && this.time.counter % this.birdElvisFreq[0] == 0) this.generateBirdElvis();
    else if (3 < this.birdElvisArr.length >= 5 && this.time.counter % this.birdElvisFreq[1] == 0) this.generateBirdElvis();
    else if (5 < this.birdElvisArr.length < 8 && this.time.counter % this.birdElvisFreq[2] == 0) this.generateBirdElvis();

    //bird Bat
    if (this.birdBatArr.length <= 3 && this.time.counter % this.birdBatFreq[0] == 0) this.generateBirdBat();
    else if (3 < this.birdBatArr.length >= 5 && this.time.counter % this.birdBatFreq[1] == 0) this.generateBirdBat();
    else if (5 < this.birdBatArr.length < 8 && this.time.counter % this.birdBatFreq[2] == 0) this.generateBirdBat();
  },

  generateBirdHP: function () {
    this.birdHPArr.push(
      new BirdHP(this.w, this.randomInt(this.h2 + 200, this.h2 - 200), this.w / 2, this.h / 2, this.ctx)
    );
  },

  generateBirdCyclop: function () {
    this.birdHPArr.push(
      new BirdCyclop(this.w, this.randomInt(this.h/2+50, this.h/2 - 50), this.w , this.h, this.ctx)
    );
  },

  generateBirdElvis: function () {
    this.birdHPArr.push(
      new BirdElvis(this.w, this.randomInt(20, this.h - 20), this.w / 2, this.h / 2, this.ctx)
    );
  },

  generateBirdBat: function () {
    this.birdHPArr.push(
      new BirdBat(this.w, this.randomInt(20, this.h - 20), this.ctx)
    );
  },

  generateUpgrades: function () {
    if (this.time.counter % this.blueDiamondFreq == 0)
      this.upgradesArr.push(new BlueDiamond(this.w, this.randomInt(20, this.h - 20), this.ctx))
    if (this.time.counter % this.yellowDiamondFreq == 0)
      this.upgradesArr.push(new YellowDiamond(this.w, this.randomInt(20, this.h - 20), this.ctx))
    if (this.time.counter % this.redDiamondFreq == 0)
      this.upgradesArr.push(new RedDiamond(this.w, this.randomInt(20, this.h - 20), this.ctx))

  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.w, this.h);
  },

  moveAll: function () {
    this.background.move();
    if (this.player.active) this.player.move();
    this.birdHPArr.forEach(bird => { bird.move(this.player.x, this.player.y, this.time.counter) });
    this.upgradesArr.forEach(upgrade => { upgrade.move() });

  },

  drawAll: function () {
    this.background.draw();

    if (this.player.active) {
      this.player.draw(this.time.counter);
    }
    else {
      this.player.die(this.time.counter);
    }

    this.birdHPArr.forEach(bird => { bird.draw(this.time.counter) });
    this.birdDied.forEach(died => { died.draw(this.time.counter) });
    this.upgradesArr.forEach(upgrade => { upgrade.draw(this.time.counter) });


    this.background.drawFirstCloud();
    this.drawScore();

  },

  reset: function () {
    this.birdHPArr = [];
    this.birdCyclopArr = this.birdHPArr.filter(bird => bird.name == "birdCyclop");
    this.birdElvisArr = this.birdHPArr.filter(bird => bird.name == "birdElvis");
    this.birdBatArr = this.birdHPArr.filter(bird => bird.name == "birdBat");
    this.birdDied = [];
    this.upgradesArr = [];
    this.background = new Background(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx);
    this.player = new Player(this.myCanvasDOMEl.width, this.myCanvasDOMEl.height, this.ctx, this.time.elapsed);
    this.scoreBoard = ScoreBoard;
    this.score = 0;
  },

  stop: function () {
    window.cancelAnimationFrame(this.play);
    this.play = undefined;

  },

  gameOver: function () {
    this.stop();

    // if (confirm("GAME OVER. Play again?")) {
    //   this.reset();
    //   this.start();
    // }
  },

  clearObstacles: function () {
    this.birdHPArr = this.birdHPArr.filter(bird => { if (bird.x + bird.birdW > 0) return true });
    this.upgradesArr = this.upgradesArr.filter(upgrade => { if (upgrade.x + upgrade.w > 0) return true });

  },

  isCollision: function () {
    return this.birdHPArr.some(bird => {
      return (
        this.player.x + this.player.w >= bird.x &&
        this.player.x < bird.x + bird.birdW &&
        this.player.y + this.player.h >= bird.y &&
        this.player.y <= (bird.y + bird.birdH)
      )
    });
  },

  isUpgrade: function () {
    this.upgradesArr.forEach(upgrade => {
     
      if (
        this.player.x + this.player.w >= upgrade.x &&
        this.player.x < upgrade.x + upgrade.w &&
        this.player.y + this.player.h >= upgrade.y &&
        this.player.y <= (upgrade.y + upgrade.h)
      )
      {
    
        this.player.weaponName= upgrade.weapon;
        this.player.bulletsNo = upgrade.bulletsNo;
        upgrade.active = false;
        this.upgradesArr = this.upgradesArr.filter(upgrade => upgrade.active === true); 
      }
    });
  },

  killBirds: function () {
    if (this.player.bullets.length > 0 && this.birdHPArr.length > 0) {
      this.player.bullets.forEach(bullet => {
        this.birdHPArr.forEach(bird => {
          if(bullet.name==="blueMissile") {

            if (bullet.x + bullet.w + 40 >= bird.x && bullet.x-40 < bird.x + bird.birdW && bullet.y + bullet.h + 40 >= bird.y && bullet.y-40 <= bird.y + bird.birdH) {
              bird.active = false; bullet.active = false;
              Game.score++;
              if (bird.name == "birdElvis") Game.score += 2;
              if (bird.name == "birdCyclop") Game.score += 4;
              if (bird.name == "birdBat") Game.score += 10;
              this.birdDied.push(new ExplosionPlusFx(bird.x, bird.y, this.ctx));
            }

          }
          else {

          if (bullet.x + 25 >= bird.x && bullet.x < bird.x + bird.birdW && bullet.y + 12 >= bird.y && bullet.y <= bird.y + bird.birdH) {
            bird.active = false; bullet.active = false;
            this.birdDied.push(new ExplosionFx(bird.x, bird.y, this.ctx, this.elapsed));
            Game.score++;
            if (bird.name == "birdElvis") Game.score += 2;
            if (bird.name == "birdCyclop") Game.score += 4;
            if (bird.name == "birdBat") Game.score += 10;
          }

          }
        })
      })
    }

    this.player.bullets = this.player.bullets.filter(bullet => bullet.active === true);
    this.birdHPArr = this.birdHPArr.filter(bird => bird.active === true);
    this.birdDied = this.birdDied.filter(died => died.active === true);
  },

  drawScore: function () {
    this.scoreBoard.update(this.score, this.player.bulletsNo);
  }

};


  //no puedo parar la animacion 
  //no puedo poner limites al muñeco