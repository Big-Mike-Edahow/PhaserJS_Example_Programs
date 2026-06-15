// MainScene.js

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.setBaseURL("static/");
    this.load.glsl("machine_shaman", "shaders/machine_shaman.frag");
    this.load.image("logo", "images/phaser4_logo.png");
    this.load.image("mask", "images/grunge_mask.png");
  }

  create() {
    this.cameras.main.filters.internal.addMask("mask");

    this.add.shader(
      {
        name: "machine_shaman",
        fragmentKey: "machine_shaman",
        setupUniforms: (setUniform, drawingContext) => {
          setUniform("time", this.game.loop.getDuration());
        },
      },
      400,
      300,
      800,
      800,
    );

    this.add.image(400, 300, "logo").setScale(0.5);
  }
}
