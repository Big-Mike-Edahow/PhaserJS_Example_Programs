// main.js

import MainScene from './MainScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 580,
  backgroundColor: "#000000",
  parent: "game-canvas",
  scene: [MainScene],
  title: "Scene From Class",
  version: "1.0",
};

const game = new Phaser.Game(config);
