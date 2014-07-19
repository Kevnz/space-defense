module.exports =  function () {
 
    this.load.atlas('bullets', 'img/assets/bullets.png', 'img/assets/bullets.json');
    this.load.image('blue_bullet', 'img/assets/blue-bullet.png');
    this.load.image('bg', 'img/backgrounds/bg.png'); 
    this.load.atlas('atlas', 'img/enemy-fighters/enemy-fighters.png', 'img/enemy-fighters/enemy-fighters.json');
    this.load.image('ship', 'img/space_ship_base.png');
    this.load.spritesheet('explode', 'img/assets/explode.png', 128, 128);
    this.load.audio('boom', ['audio/effects/explode.wav']);
    this.load.audio('lazer', ['audio/effects/lazer.wav']);
    this.load.audio('stage-1', ['audio/background/stage-1.mp3', 'audio/background/stage-1.ogg']);
}