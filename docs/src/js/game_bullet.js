export default class Bullet {
    constructor(player) {
      this.image = document.getElementById("bullet_img");
      this.game_max_width = game_width;
      this.width = 32;
      this.height = 32;
      this.max_speed = 128;
      this.speed = 0;
      this.ready = false;
      this.position = {
        x: player.position.x - this.width / 2,
        y: player.position.y
      };
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    shoot(x_position) {
        this.ready = false;
        this.position.x = x_position;
    }
  
    update(delta_time) {
        if (!delta_time) return;
        let velocity = this.speed / delta_time;
        if (this.position.y < 0 || this.ready){
            this.position.y = player.position.y;
        } else {
            this.position.y -= velocity;
        }
    }
  }