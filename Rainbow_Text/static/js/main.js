// main.js

import MainScene from "./scenes/MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    backgroundColor: "#2d2d2d",
    pixelArt: false,
    scene: [MainScene],
    title: "Rainbow Text",
    version: "1.0",
    description: "Phaser rainbow text.",
  };

  const game = new Phaser.Game(config);
}

main();
