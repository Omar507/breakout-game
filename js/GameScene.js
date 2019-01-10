class GameScene extends Phaser.Scene{

	constructor(test) {
        super({
            key: 'GameScene'
        });
    }
	preload(){
		this.load.image('play', '../assets/play.png');
	}

	create(){
		console.log("yeaaaaa");

		this.camera = this.cameras.main;
		this.camera.setBackgroundColor("#555");
	}

	update(){

	}

	startGame(){
		console.log("game started");
	}
	
}

export default GameScene;