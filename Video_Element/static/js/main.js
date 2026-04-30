// main.js

import MainScene from "./MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    parent: "game-canvas",
    width: 900,
    height: 580,
    dom: {
      createContainer: true,
    },
    scene: [MainScene],
    title: "Video Element",
    version: "1.0",
  };

  const game = new Phaser.Game(config);
}

main();
