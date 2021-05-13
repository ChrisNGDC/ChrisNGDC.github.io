import Player from "./game_player.js";

let canvas =  document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const game_width = 800;
const game_height = 600;

let player = new Player(game_width, game_height);

let last_time = 0

player.draw(ctx);

function game_loop(time_stamp) {
    let delta_time = time_stamp -  last_time;
    last_time = time_stamp;
    ctx.clearRec(0, 0, game_width, game_height);
    player.update(delta_time);
    player.draw(ctx);

    requestAnimationFrame(game_loop);
}

game_loop();