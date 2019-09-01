
window.onload = function() {
  Game.init("myCanvas");
  // window.onkeydown = function(e) {
  //   switch (e.key) {
  //     case "ArrowLeft":
  //       Game.player.moveLeft();
  //       break;
  //     case "ArrowRight":
  //       Game.player.moveRight();
  //       break;
  //     case "ArrowUp":
  //       Game.player.moveUp();
  //       break;
  //     case 40:
  //       Game.player.moveDown();
  //       break;
  //   };
  // }
  document.onkeydown = function(e) {
    console.log(e)
    if(e.keyCode == 37) Game.player.LEFT = true;
    if(e.keyCode == 39) Game.player.RIGHT = true;
  
    if(e.keyCode == 38) Game.player.UP = true;
    if(e.keyCode == 40) Game.player.DOWN = true;
  }
  document.onkeyup = function(e) {
    if(e.keyCode == 37) Game.player.LEFT = false;
    if(e.keyCode == 39) Game.player.RIGHT = false;
    if(e.keyCode == 38) Game.player.UP = false;
    if(e.keyCode == 40) Game.player.DOWN = false;
    // if(e.keyCode == 37) Game.player.LEFT = false;
    // if(e.keyCode == 39) Game.player.RIGHT = false;
  }

 
};

