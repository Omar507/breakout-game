class MenuScene extends Phaser.Scene{

	preload(){
		this.load.image('play', '../assets/play.png');

	}

	create(){
		this.button = this.add.image(this.sys.game.config.width / 2,
		this.sys.game.config.height / 2, 'play');

	}

	update(){

	}
}

export default MenuScene;