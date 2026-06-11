// main.js

import MainScene from "./MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    parent: "game-canvas",
    width: 800,
    height: "95%",
    backgroundColor: "#000000",
    scene: [MainScene],
    title: "Chunky Raster Bars",
    version: "1.0",
    description: "Chunky raster bars.",
  };

  const game = new Phaser.Game(config);
}

main();
