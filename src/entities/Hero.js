// @ts-check

class Hero extends Phaser.GameObjects.Sprite {


    keyLeft;


    constructor(scene, x, y) {
        super(scene, x, y, 'mage');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        if (!(this.body instanceof Phaser.Physics.Arcade.Body)) {
            return;
        }

        this.body.setCollideWorldBounds(true);
        this.body.setSize(33, 54);
        this.body.setOffset(27, 57);
        this.anims.play('hero-idle');

        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    };

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (!(this.body instanceof Phaser.Physics.Arcade.Body)) {
            return;
        }
        if (this.keyLeft.isDown) {
            this.body.setAccelerationX(-500);
            this.anims.play('hero-walk');
            this.setFlipX(true);
        }
        if (this.keyRight.isDown) {
            this.body.setAccelerationX(500);
            this.anims.play('hero-walk');
            this.setFlipX(false);
        } 

        if (this.keyUp.isDown) {
            this.body.setVelocityY(-500);
            this.anims.play('hero-walk');
        }

    }
}

export default Hero