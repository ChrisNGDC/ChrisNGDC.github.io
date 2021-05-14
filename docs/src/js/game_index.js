import Game from "./game_game";

let canvas =  document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

window.onload = window.onresize = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}

let game = new Game(800, 600);
game.start();

let last_time = 0;

function game_loop(time_stamp) {
    let delta_time = time_stamp -  last_time;
    last_time = time_stamp;
    ctx.clearRect(0, 0, game_width, game_height);
    game.update(delta_time);
    game.draw(ctx);

    requestAnimationFrame(game_loop);
}

game_loop();
