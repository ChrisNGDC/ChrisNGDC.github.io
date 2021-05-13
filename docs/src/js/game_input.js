export default class InputHandler {
  constructor(player, bullet) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          player.move_left();
          break;
        case "ArrowRight":
          player.move_right();
          break;
        case " ":
          if (bullet.ready) {
            alert("shooting bullet");
            let x_position = player.position.x - bullet.width / 2;
            bullet.shot(x_position);
          }
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          if (player.speed < 0) player.stop();
          break;
        case "ArrowRight":
          if (player.speed > 0) player.stop();
          break;
        default:
          break;
      }
    });
  }
}
