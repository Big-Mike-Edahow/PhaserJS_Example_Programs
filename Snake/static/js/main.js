// main.js

import GameScene from "./GameScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: "#bfcc00",
    parent: "game-canvas",
    scene: GameScene,
    title: "Snake",
    version: "1.0",
  };

  const game = new Phaser.Game(config);
}

main();
