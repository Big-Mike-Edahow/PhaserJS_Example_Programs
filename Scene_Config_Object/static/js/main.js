// main.js

const sceneConfig = {
  preload: preload,
  create: create,
  pack: {
    files: [
      {
        type: "image",
        key: "sonic",
        url: "static/images/sonic.png",
      },
    ],
  },
};

const gameConfig = {
  type: Phaser.AUTO,
  parent: "game-canvas",
  width: 800,
  height: 580,
  scene: [sceneConfig],
  title: "Scene Config Object",
  version: "1.0",
};

const game = new Phaser.Game(gameConfig);

function preload() {
  this.load.setBaseURL("static");
  this.load.image("face", "images/bw_face.png");
}

function create() {
  this.add.image(400, 290, "face");
  this.add.image(400, 290, "sonic");
}
