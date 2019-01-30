// create a new scene named "Game"
//let gameScene = new Phaser.Scene('Game');
import MenuScene from './MenuScene.js';
import GameScene from './GameScene.js';

// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 800, // game width
  height: 600, // game height
  scene: [GameScene],
    physics: {
      default: 'arcade'
    }
};
 
// create the game, and pass it the configuration
let game = new Phaser.Game(config);