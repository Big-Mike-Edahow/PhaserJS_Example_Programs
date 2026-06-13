// main.js

import MainScene from "./scenes/MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    backgroundColor: "#304858",
    pixelArt: false,
    scene: [MainScene],
    title: "60fps Animation Test",
    version: "1.0",
    description: "60 fps animation test."
  };

  const game = new Phaser.Game(config);
}

main();
