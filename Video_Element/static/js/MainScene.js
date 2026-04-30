// MainScene.js

export default class MainScene extends Phaser.Scene {
  preload() {
    this.load.setBaseURL("static");
    this.load.image("logo", "images/phaser3_logo.png");
  }

  create() {
    const video = document.createElement("video");

    video.playsinline = true;
    video.src = "static/videos/skull.mp4";
    video.width = 900;
    video.height = 580;
    video.muted = true;
    video.autoplay = true;

    const element = this.add.dom(450, 290, video);

    video.addEventListener("ended", (event) => {
      element.setVisible(false);

      this.add.image(450, 290, "logo");
    });
  }
}
