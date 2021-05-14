export default class Enemy {
  constructor(game_width) {
    this.image = document.getElementById("enemy_img");
    this.game_max_width = game_width;
    this.width = 64;
    this.height = 64;
    this.max_speed = 32;
    this.speed = 32;
    this.position = {
      x: game_width / 2 - this.width / 2,
      y: this.random_y()
    };
  }

  random_y(){
    if (~~(Math.random()*2))
      return this.height
    else
      return this.height * 2;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  reset() {
    this.position = {
      x: game_width / 2 - this.width / 2,
      y: this.random_y()
    };
  }

  update(delta_time) {
    if (!delta_time) return;
    let velocity = this.speed / delta_time;
    if (this.position.x + velocity > 0) {
      if (this.position.x + velocity + this.width < this.game_max_width) {
        this.position.x += velocity;
        return;
      }
    }
    this.speed = -this.speed;
    this.position.y += 64;
  }
}
