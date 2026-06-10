// main.js

import GameScene from "./GameScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    scene: [GameScene],
    title: "Get and Set Data Values",
    version: "1.0",
    description: "Store data, then display it.",
  };

  const game = new Phaser.Game(config);
}

main();
