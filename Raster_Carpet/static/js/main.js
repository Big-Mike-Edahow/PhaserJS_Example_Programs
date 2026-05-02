// main.js

import MainScene from "./MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    parent: "game-canvas",
    width: 800,
    height: 580,
    scene: [MainScene],
    title: "Raster Carpet",
    version: "1.0",
  };

  const game = new Phaser.Game(config);
}

main();
