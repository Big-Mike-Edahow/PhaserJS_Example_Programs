// MainScene.js

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.setBaseURL("static/");
    this.load.atlas(
      "walker",
      "images/walker_spritesheet.png",
      "data/walker_animation.json",
    );
    this.load.image("sky", "images/sky.png");
    this.load.image("trees", "images/trees.png");
  }

  create() {
    this.bg = this.add.tileSprite(0, 38, 800, 296, "sky").setOrigin(0, 0);
    this.trees = this.add.tileSprite(0, 280, 800, 320, "trees").setOrigin(0, 0);

    const animConfig = {
      key: "walk",
      frames: "walker",
      frameRate: 60,
      repeat: -1,
    };

    this.anims.create(animConfig);
    const sprite = this.add.sprite(400, 484, "walker", "frame_0000");
    sprite.play("walk");
  }

  update() {
    this.bg.tilePositionX -= 2;
    this.trees.tilePositionX -= 6;
  }
}
