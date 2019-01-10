class MenuScene extends Phaser.Scene{

	constructor(test) {
        super({
            key: 'MenuScene'
        });
    }

	preload(){
		this.load.image('play', '../assets/play.png');
	}

	create(){

		const playButton = this.add.text(this.sys.game.config.width / 2,
		this.sys.game.config.height / 2, 'Play', { fill: '#46468F', fontSize: '56px', }).setOrigin(0.5,0.5);

		playButton.setInteractive();
		
		//playButton.on('pointerdown', () => { console.log('pointerover'); });
		playButton.on('pointerdown', this.startGame, this);
		
		this.camera = this.cameras.main;
		this.camera.setBackgroundColor("#48639C");
		this.camera.shake(100);

	}

	update(){

	}

	startGame(){
		this.scene.start('GameScene');
	}
	
}

export default MenuScene;