// SceneA.js

export default class SceneA extends Phaser.Scene {
  constructor() {
    super("GameScene");

    this.score = 0;
    this.lives = 6;
  }

  preload() {
    this.load.setBaseURL('static/');
    this.load.image("bg", "images/sky.png");
    this.load.image("crate", "images/crate.png");
  }

  create() {
    //  Store the score and lives in the Game Registry.
    this.registry.set("score", this.score);
    this.registry.set("lives", this.lives);

    this.add.image(400, 300, "bg");

    for (let i = 0; i < 64; i++) {
      let x = Phaser.Math.Between(0, 800);
      let y = Phaser.Math.Between(0, 600);

      let box = this.add.image(x, y, "crate").setInteractive();

      if (i % 2) {
        box.setTint(0xff0000);
      }
    }

    this.input.on("gameobjectup", this.clickHandler, this);
  }

  clickHandler(pointer, box) {
    if (this.lives === 0) {
      return;
    }

    //  Disable our box.
    box.input.enabled = false;
    box.setVisible(false);

    //  If the box was tinted red, you lose a life.
    if (box.tintTopLeft === 16711680) {
      this.lives--;
      this.registry.set("lives", this.lives);
    } else {
      this.score++;
      this.registry.set("score", this.score);
    }
  }
}
