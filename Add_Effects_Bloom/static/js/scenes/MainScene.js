// MainScene.js

export default class MainScene extends Phaser.Scene {
  preload() {
    // Set the base url to static, and load the images.
    this.load.setBaseURL("static/");
    this.load.image("volcano", "images/volcanic_encounter.jpg");
    this.load.image("phaser-logo", "images/phaser.png");
  }

  create() {
    // Add the volcano image. Set it's size to the canvas width & height.
    const volcano = this.add.image(0, 0, "volcano").setOrigin(0, 0);
    volcano.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    // Center text at x,y coords. Lock it into place (ignore camera movement).
    const text = this.add
      .text(170, 40, "Add Effect Bloom", {
        font: "40px Arial",
        fill: "#88ffff",
      })
      .setOrigin(0.5)
      .setScrollFactor(0);

    // Add the phaser logo at 2x its original size. Lock it into place.
    const phaserLogo = this.add
      .image(160, 480, "phaser-logo")
      .setScale(2)
      .setScrollFactor(0);

    // Initialize the bloom effect on the main camera.
    const bloomAction = Phaser.Actions.AddEffectBloom(this.cameras.main);

    // Access the filter properties to tween.
    const bloomFilters = bloomAction[0];

    // Create the tween to pulsate the bloom.
    this.tweens.add({
      targets: bloomFilters,
      strength: 1.5,
      blurRadius: 10,
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  // Smooth camera "screen shake" effect (circular oscillation).
  update(time, _delta) {
    this.cameras.main.setScroll(
      50 * Math.cos(time / 1000),
      50 * Math.sin(time / 1000),
    );
  }
}
