// main.js

import GameScene from "./GameScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    parent: "game-canvas",
    scene: GameScene,
    width: 704,
    height: 528,
    title: "Flip Y",
    version: "1.0",
  };

  const game = new Phaser.Game(config);
}

main();
