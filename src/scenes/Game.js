
// @ts-check

import Phaser from 'phaser';
import Hero from '../entities/Hero.js';
class Game extends Phaser.Scene {

  preload() {
    this.load.image('hero', 'assets/rogue/rogue.png');
    this.load.spritesheet('spritesheet', 'assets/rogue/idle.png', { frameWidth: 171, frameHeight: 128 });
    this.load.spritesheet('walk-spritesheet', 'assets/rogue/walk.png', { frameWidth: 171, frameHeight: 128 });
    this.load.spritesheet('jump-spritesheet', 'assets/rogue/jump.png', { frameWidth: 171, frameHeight: 128 });
  }
  

  create() {
    this.anims.create({
      key: 'hero-idle',
      frames: [
        { frame: 0, key: 'hero', duration: 5000 },
        ... this.anims.generateFrameNumbers('spritesheet', {})
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
      key: 'hero-jump'
      ,frames: this.anims.generateFrameNumbers('jump-spritesheet', {}),
      frameRate: 6,
      repeat: 0
    });
    
    
    
    
    
    
    let hero = new Hero (this, 400, 300);

 
  }


}

export default Game;