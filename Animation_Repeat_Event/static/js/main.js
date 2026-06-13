// main.js

import MainScene from "./scenes/MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    backgroundColor: "#000000",
    pixelArt: true,
    scene: [MainScene],
    title: "Animation Repeat Event",
    version: "1.0",
    description: "Animation repeat event.",
  };

  const game = new Phaser.Game(config);
}

main();
