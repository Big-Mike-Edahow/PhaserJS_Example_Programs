// GameScene.js

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.setBaseURL("static");
    this.load.image("pic", "/images/cougar-face-of-nature.png");
  }

  create() {
    //  Default non-flipped image
    this.add.image(180, 130, "pic").setScale(0.90);

    //  Flipped via a call to setFlipY
    this.add.image(180, 400, "pic").setScale(0.90).setFlipY(true);

    const image = this.add.image(530, 130, "pic").setScale(0.90);

    //  Flipped via setting the flipY property
    image.flipY = true;

    const image2 = this.add.image(530, 400, "pic").setScale(0.90);

    this.input.on("pointerdown", () => {
      //  Flipped via a call to toggleFlipX
      image2.toggleFlipY();
    });
  }
}
