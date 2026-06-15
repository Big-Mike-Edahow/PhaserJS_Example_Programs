// MainScene.js

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");

    // Class properties.
    this.i = 0;
  }

  preload() {
    this.load.setBaseURL("static/");
    this.load.image("logo", "images/phaser4_logo.png");
  }

  create() {
    // Add the Phaser 4 logo.
    this.add
      .image(this.scale.width / 2, 150, "logo")
      .setScale(0.75)
      .setOrigin(0.5, 0.5);

    // Array of 360 color objects in the HSV spectrum.
    this.hsv = Phaser.Display.Color.HSVColorWheel();

    //  Rainbow text.
    this.text1 = this.add.text(this.scale.width / 2, 325, "Rainbow Text", {
      font: "74px Arial Black",
      fill: "#fff",
    });
    this.text1.setStroke("#00f", 16);
    this.text1.setShadow(2, 2, "#333333", 2, true, true).setOrigin(0.5, 0.5);

    //  Rainbow stroke.
    this.text2 = this.add.text(this.scale.width / 2, 475, "Rainbow Stroke", {
      font: "74px Arial Black",
      fill: "#000",
    });
    this.text2.setStroke("#fff", 16);
    this.text2.setShadow(2, 2, "#333333", 2, true, true).setOrigin(0.5, 0.5);
  }

  update() {
    // Alternate the text colors.
    const top = this.hsv[this.i].color;
    const bottom = this.hsv[359 - this.i].color;

    this.text1.setTint(top, top, bottom, bottom);
    this.text2.setTint(top, bottom, top, bottom);

    this.i++;

    if (this.i === 360) {
      this.i = 0;
    }
  }
}
