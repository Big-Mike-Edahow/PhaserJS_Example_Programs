// SceneB.js

export default class SceneB extends Phaser.Scene {
  constructor() {
    super({ key: "UIScene", active: true });

    this.scoreText;
    this.livesText;
  }

  create() {
    //  Our Text object to display the Score.
    this.scoreText = this.add.text(10, 10, "Score: 0", {
      font: "32px Arial",
      fill: "#000000",
    });
    this.livesText = this.add.text(10, 48, "Lives: 6", {
      font: "32px Arial",
      fill: "#000000",
    });

    //  Check the Registry and hit our callback every time the 'score' value is updated.
    this.registry.events.on("changedata", this.updateData, this);
  }

  updateData(parent, key, data) {
    if (key === "score") {
      this.scoreText.setText("Score: " + data);
    } else if (key === "lives") {
      this.livesText.setText("Lives: " + data);
    }
  }
}
