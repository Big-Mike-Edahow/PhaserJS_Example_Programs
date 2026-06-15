// main.js

import MainScene from "./scenes/MainScene.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    backgroundColor: "#000000",
    pixelArt: false,
    scene: [MainScene],
    title: "Shader Test 2",
    version: "1.0",
    description: "Phaser shader test two.",
  };

  const game = new Phaser.Game(config);
}

main();
