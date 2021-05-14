import Player from "./game_player.js";
import Enemy from "./game_enemy.js";
import Bullet from "./game_bullet.js";
import InputHandler from "./game_input.js";

let canvas =  document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

window.onload = window.onresize = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}

const game_width = 800;
const game_height = 600;

let player = new Player(game_width, game_height);
let enemy = new Enemy(game_width, game_height);
let bullet = new Bullet(game_width);

new InputHandler(player, bullet);

let last_time = 0;

function game_loop(time_stamp) {
    let delta_time = time_stamp -  last_time;
    last_time = time_stamp;
    ctx.clearRect(0, 0, game_width, game_height);
    player.update(delta_time);
    enemy.update(delta_time);
    bullet.update(delta_time);
    player.draw(ctx);
    enemy.draw(ctx);
    bullet.draw(ctx);

    requestAnimationFrame(game_loop);
}

game_loop();
