import Player from "./game_player.js";

let canvas =  document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const game_width = 800;
const game_height = 600;

let player = new Player(game_width, game_height);
player.draw(ctx);