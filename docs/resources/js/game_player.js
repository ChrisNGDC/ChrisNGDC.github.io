export default class Player {
    constructor(game_width, game_height) {
        this.image = document.getElementById("player_img");
        this.width = 64;
        this.height = 64;
        this.position = {
            x : game_width / 2 - this.width / 2,
            y : game_height - this.height - 24
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    update(delta_time) {
        if (!delta_time) 
            return
        this.position.x += 5 / delta_time;
    }
}