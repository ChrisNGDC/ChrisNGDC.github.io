import Player from "./game_player.js";
import Enemy from "./game_enemy.js"
import InputHandler from "./game_input.js";

let canvas =  document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const game_width = 800;
const game_height = 600;

let player = new Player(game_width, game_height);
let enemy = new Enemy(game_width);

new InputHandler(player);

let last_time = 0

function game_loop(time_stamp) {
    let delta_time = time_stamp -  last_time;
    last_time = time_stamp;
    ctx.clearRect(0, 0, game_width, game_height);
    player.update(delta_time);
    enemy.update(delta_time);
    player.draw(ctx);
    enemy.draw(ctx);

    requestAnimationFrame(game_loop);
}

game_loop();
