/* TODO

 Add Movement
 eatFood
 collision detection
 pause/start/menu/gameover

*/

const snake_color = "lightgreen";
const snake_border = "darkgreen";
const food_color = "red";
const food_border = "darkred";
const ctx = snekCanvas.getContext("2d");
const scale = 20;
const columns = snekCanvas.width / scale;
const rows = snekCanvas.height / scale;

snake = new Snake();
snake.draw();

food = new Food();
food.draw();

function Food () {
  this.x = 300;
  this.y = 100;

  this.draw = function() {
    ctx.fillStyle = food_color;
    ctx.fillRect(this.x, this.y, scale, scale)

  }
}

function Snake () {
  this.x = 300;
  this.y = 300;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.draw = function () {
    ctx.fillStyle = snake_color;
    ctx.fillRect(this.x, this.y, scale, scale);

  this.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  }

}
