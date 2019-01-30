class GameScene extends Phaser.Scene{

	constructor() {
        super({
            key: 'GameScene'
        });
    }
	preload(){
		this.load.image('brick', 'assets/brick.png');
		this.load.image('paddle', 'assets/paddle1.png');
		this.load.image('ball', 'assets/ball1.png');
		console.log(paper);
	}


    changeBackgroundColor(){


    }

	create(){

        this.camera = this.cameras.main;
        //this.camera1 = this.cameras.add(0, 0, 800, 600);
        this.camera.setBackgroundColor("#48639C");

        this.physics.world.setBoundsCollision(true, true, true, false);
        this.createBricks();
        this.createPaddle();
        this.createBall();

        this.physics.add.collider(this.ball, this.bricksGroup, this.hitBrick, null, this);
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);
	}

	update(){
        if(this.bricksGroup.countActive() === 0){
            this.ball.disableBody(true, true);
            this.resetLevel();
        }
        if(this.ball.y > 600){
            this.resetLevel();
        }


	}

    /**
     * Creates the paddle and handles its movement, pointermove is the mouse movement and pointerup is mouse click
     */
    createPaddle() {
        this.paddle = this.physics.add.image(400, 550, 'paddle').setImmovable();

        this.input.on('pointermove', function (pointer) {

            //Keep the paddle within the game
            this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);

            if (this.ball.getData('onPaddle'))
            {
                this.ball.x = this.paddle.x;
            }

        }, this);

        this.input.on('pointerup', function (pointer) {

            if (this.ball.getData('onPaddle'))
            {
                this.ball.setVelocity(0, -300);
                this.ball.setData('onPaddle', false);
            }

        }, this);

    }

    createBricks(){
        this.bricksGroup = this.physics.add.staticGroup();
        /* ALTERNATIVE
        {
               key: 'brick',
               gridAlign:
                   {width: 10, height: 6, cellWidth: 64, cellHeight: 34, x:112, y:100},
               repeat: 19,

           });
           */
        for(let i = 1; i < 9; i++){
            for(let j = 1; j < 5; j++){
                this.bricksGroup.create(20 + 84 * i ,10 + 50 * j,'brick');
            }

        }
    }

    createBall() {
        this.ball = this.physics.add.image(this.paddle.x, 500, 'ball').setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('onPaddle', true);

    }

    hitBrick(ball, brick)
    {
        brick.disableBody(true, true);
    }

    /**
     * Handles the movement of the Ball once it hits the paddle.
     * The ball will bounce in the direction it hit the Paddle.
     * If it hits the middle of the Paddle, we bounce it randomly.
     **/
    hitPaddle(ball, paddle)
    {
        this.changeBackgroundColor();
        var diff = 0;

        if (ball.x < paddle.x)
        {
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        }
        else if (ball.x > paddle.x)
        {
            diff = ball.x -paddle.x;
            ball.setVelocityX(10 * diff);
        }
        else
        {
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            ball.setVelocityX((2 + Math.random() * 10) * plusOrMinus);
        }
    }

    resetLevel(){
        this.bricksGroup.children.each(function (brick) {
            brick.enableBody(false, 0, 0, true, true);
        });
        this.createBall();
    }
}

export default GameScene;