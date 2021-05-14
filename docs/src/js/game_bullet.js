export default class Bullet {
    constructor(game) {
      this.image = document.getElementById("bullet_img");
      this.width = 32;
      this.height = 32;
      this.max_speed = 128;
      this.speed = 0;
      this.status = "ready";
      this.position = {
        x: game.game_width + this.width,
        y: 0
      };
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    shoot(x_position, y_position) {
        this.status = "firing";
        this.speed = this.max_speed;
        this.position = {
          x: x_position,
          y: y_position
        }
    }

    stop() {
      this.status = "ready";
      this.position = {
        x: 0 - this.width,
        y: 0
      };
    }
  
    update(delta_time) {
        if (!delta_time) return;
        let velocity = this.speed / delta_time;
        if (this.status == "firing"){
            this.position.y -= velocity;
            if (this.position.y < 0) {
                this.stop();
            }
        }
    }
  }