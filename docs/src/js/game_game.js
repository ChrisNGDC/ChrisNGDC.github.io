import Player from "./game_player.js";
import Enemy from "./game_enemy.js";
import Bullet from "./game_bullet.js";
import InputHandler from "./game_input.js";

export default class Game {
    constructor(game_width, game_height) {
        this.game_width = game_width;
        this.game_height = game_height;
    }

    start() {
        this.player = new Player(this);
        this.enemies = this.create_enemies();
        this.bullet = new Bullet(this);

        this.game_objects = [
            this.player,
            this.bullet,
        ];

        new InputHandler(this.player, this.bullet);
    }

    update(delta_time) {
        this.game_objects.forEach(object => object.update(delta_time));
        this.enemies.forEach(enemy => enemy.update(delta_time));
    }

    draw(ctx) {
        this.game_objects.forEach(object => object.draw(ctx));
        this.enemies.forEach(enemy => enemy.draw(ctx));
    }

    create_enemies() {
        let number_of_enemies = 6;
        let enemies = [];
        for (i = 0; i < number_of_enemies; i++) {
            enemies.push(new Enemy(this));
        }
        return enemies;
    }
}