/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, right, down,  size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.right = right;
    this.down = down;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += 20;
      console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveTop = function(){
        this.top -= 20;
        console.log('ok: ' + this.top);
    }
    this.moveDown = function(){
        this.top += 20;
        console.log('ok: ' + this.top);
    }
  
  }
  
  addEventListener('keydown', (evt) => {
    switch(evt.keyCode){
        case 37: 
            hero.moveLeft();
            break;
        case 39:
            hero.moveRight();
            break;
        case 38:
          hero.moveTop();
        case 40:
          hero.moveDown();      


    }
  })
  var hero = new Hero('images.jpg', 20, 30, 200);
  
  function start(){
    if(hero.left < window.innerWidth - hero.size){
      hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
  }
  
  start();