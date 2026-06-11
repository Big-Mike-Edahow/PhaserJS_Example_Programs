// main.js

import GameScene from "./GameScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    scene: [GameScene],
    title: "Hash Cell Landscape",
    version: "1.0",
    description: "Hash cell landscape."
  };

  const game = new Phaser.Game(config);
}

main();
