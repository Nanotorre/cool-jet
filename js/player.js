class Player {
  constructor(w, h, ctx, keys) {
    this.canvasW= w;
    this.canvasH = h;
    this.ctx = ctx;
    this.keys = keys;
    this.x = this.canvasW * 0.08;
    this.y = this.canvasH * 0.08;
    // guardar posición original (suelo)
    // this.y0 = this.canvasH * 0.8;
    // this.y = this.y0;

    this.img = new Image();
    this.img.src = "./characters/boy/boy.png";

    // número de imágenes diferentes
    this.img.frames = 6;
    this.img.frameIndex = 0;

    // medidas de la imagen a representar en el canvas
    this.w = 50;
    this.h = 75;

    this.vy = 1;

    this.bullets = [];
    this.index= 14;
    this.speed= 9;
    this.LEFT= false; 
    this.RIGHT= false;
    this.UP= false; 
    this.DOWN= false;
    // this.setListeners();
    }




    
    draw() {
      this.ctx.drawImage(this.img,this.index,0,43,60,this.x,this.y,43*2,60*2);
        if (this.index>380) {
          this.index=14;
        }
        else {
          this.index+=74.1;
        }
        
      }

    
    // moveLeft() {
    //     this.x -=5;
    //   }

    // moveRight() {
    //     this.x +=5;
    //   }

    // moveUp() {
    //     this.y -= 5;
    //   }
    // moveDown() {
    //     this.y += 5;
    //   }
    move() {
	
      if(this.LEFT) { 
        this.x -= this.speed;
      }
      if(this.RIGHT) {
        this.x += this.speed;	
      }
      if(this.UP) { 
        this.y -= this.speed;
      }
      if(this.DOWN) {
        this.y += this.speed;	
      }
      
    }
      
};
