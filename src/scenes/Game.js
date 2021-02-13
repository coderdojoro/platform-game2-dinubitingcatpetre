
// @ts-check

import Phaser from 'phaser';
import Hero from '../entities/Hero.js';

class Game extends Phaser.Scene {

  preload() {
    this.load.image('rogue', 'assets/rogue/rogue.png');
    this.load.spritesheet('idle-spritesheet', 'assets/rogue/idle.png', { frameWidth: 171, frameHeight: 128 });
    this.load.spritesheet('walk-spritesheet', 'assets/rogue/walk.png', { frameWidth: 171, frameHeight: 128 });
    this.load.spritesheet('jump-spritesheet', 'assets/rogue/jump.png', { frameWidth: 171, frameHeight: 128 });
    this.load.spritesheet('double-jump-spritesheet', 'assets/rogue/double-jump.png', { frameWidth: 171, frameHeight: 128 });

    this.load.tilemapTiledJSON('level1-tilemap', 'assets/tilemap.json');

    this.load.image('ground-image', 'assets/tiles/tiles.png ');
    this.load.image('bush-image', 'assets/tiles/bush-and-trees.png');

  }

  create() {
    this.anims.create({
      key: 'hero-idle',
      frames: [
        { frame: 0, key: 'rogue', duration: 5000 },
        ...this.anims.generateFrameNumbers('idle-spritesheet', {})
      ],
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'hero-walk',
      frames: this.anims.generateFrameNumbers('walk-spritesheet', {}),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'hero-jump',
      frames: this.anims.generateFrameNumbers('jump-spritesheet', {}),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'hero-double-jump',
      frames: this.anims.generateFrameNumbers('double-jump-spritesheet', {}),
      frameRate: 20,
      repeat: 0
    });


    let hero = new Hero(this, 400, 300);

    this.map = this.make.tilemap({ key: 'level1-tilemap' });
    this.groundTiles = this.map.addTilesetImage('ground', 'ground-image');
    this.bushTiles = this.map.addTilesetImage('bush', 'bush-image');

    this.map.createStaticLayer('background' /*layer name from json*/, [this.groundTiles, this.bushTiles]);
    this.groundLayer = this.map.createStaticLayer('ground' /*layer name from json*/, this.groundTiles);
    this.map.createStaticLayer('foreground' /*layer name from json*/, [this.groundTiles, this.bushTiles]);

    this.children.moveTo(hero, this.children.getIndex(this.map.getLayer('ground').tilemapLayer));

    this.physics.add.collider(hero, this.groundLayer);
    this.groundLayer.setCollisionBetween(1, 150, true); //64

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(hero);
    this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    //ca să nu dea cu capul de cer
    this.physics.world.setBoundsCollision(true, true, false, true);

  }


}

export default Game;