export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          player.move_left();
          break;
        case "ArrowRight":
          player.move_right();
          break;
        case " ":
          alert("shot");
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
        case " ":
          alert("shot");
          break;
        default:
          break;
      }
    });
  }
}
