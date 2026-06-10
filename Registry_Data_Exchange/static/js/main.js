// main.js

import SceneA from "./scenes/SceneA.js";
import SceneB from "./scenes/SceneB.js";

function main() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    backgroundColor: "#000000",
    scene: [SceneA, SceneB],
    title: "Registry Data Exchange",
    version: "1.0",
    description: "Exchange registry data between scenes.",
  };

  const game = new Phaser.Game(config);
}

main();
