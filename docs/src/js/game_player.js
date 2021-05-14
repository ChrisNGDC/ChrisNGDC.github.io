export default class Player {
  constructor(game) {
    this.image = document.getElementById("player_img");
    this.game_max_width = game.game_width;
    this.width = 64;
    this.height = 64;
    this.max_speed = 64;
    this.speed = 0;
    this.position = {
      x: game.game_width / 2 - this.width / 2,
      y: game.game_height - this.height - 24
    };
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  move_left() {
    this.speed = -this.max_speed;
  }

  move_right() {
    this.speed = this.max_speed;
  }

  stop() {
    this.speed = 0;
  }

  update(delta_time) {
    if (!delta_time) return;
    let velocity = this.speed / delta_time;
    if (this.position.x + velocity > 0) {
      if (this.position.x + velocity + this.width < this.game_max_width) {
        this.position.x += velocity;
      }
    }
  }
}
