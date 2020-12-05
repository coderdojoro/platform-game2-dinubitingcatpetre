// @ts-check

class Hero extends Phaser.GameObjects.Sprite{

        constructor(scene, x, y) {
            super(scene, x, y, 'mage');

            scene.add.existing(this);
            scene.physics.add.existing(this);

            if (!(this.body instanceof Phaser.Physics.Arcade.Body)){
                return;
            }

            this.body.setCollideWorldBounds(true);
            this.body.setSize(33, 54);
            this.body.setOffset(27, 57);
          
            this.anims.play('hero-idle');
        };




};
export default Hero