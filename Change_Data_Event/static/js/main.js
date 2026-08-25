// main.js

import GameScene from "./scenes/GameScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    backgroundColor: "#000000",
    scene: [GameScene],
    title: "Change Data Event",
    version: "1.0",
    description: "Change data event.",
  };

  const game = new Phaser.Game(config);
}

main();
