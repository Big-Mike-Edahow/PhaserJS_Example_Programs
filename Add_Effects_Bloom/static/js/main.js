// main.js

import MainScene from "./scenes/MainScene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: "95%",
  parent: "game-canvas",
  backgroundColor: "#000000",
  pixelArt: true,
  scene: [MainScene],
  title: "Add Effects Bloom",
  version: "1.0",
  description: "PhaserJS Add Effects Bloom",
};

const game = new Phaser.Game(config);
