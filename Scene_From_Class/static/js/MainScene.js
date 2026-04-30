// MainScene.js

export default class MainScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.setBaseURL('static');
    this.load.image("face", "images/bw_face.png");
  }

  create() {
    this.face = this.add.image(400, 290, "face");
  }
}
