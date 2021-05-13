export default class Bullet {
    constructor(game_width) {
      this.image = document.getElementById("bullet_img");
      this.width = 32;
      this.height = 32;
      this.max_speed = 128;
      this.speed = 0;
      this.status = "ready";
      this.position = {
        x: game_width - this.width,
        y: this.height
      };
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    shoot(x_position) {
        this.status = "firing";
        this.position.x = x_position;
    }
  
    update(delta_time) {
        if (!delta_time) return;
        let velocity = this.speed / delta_time;
        if (this.position.y < 0 || this.status == "ready"){
            this.position.y = 0;
            this.position.x = this.game_max_width + this.width;
            this.status = "ready";
        } else {
            this.position.y -= velocity;
        }
    }
  }