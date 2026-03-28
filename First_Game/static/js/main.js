// main.js

import GameScene from "./GameScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 560,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    parent: "game-canvas",
    scene: GameScene,
    title: "First Game",
    version: "1.0",
  };

  const game = new Phaser.Game(config);
}

main();
