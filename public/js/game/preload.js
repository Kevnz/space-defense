module.exports =  function () {
 
    this.load.atlas('bullets', 'img/assets/bullets.png', 'sheets/bullets');
    this.load.image('blue_bullet', 'img/assets/blue-bullet.png');
    this.load.image('bg', 'img/backgrounds/bg.png'); 
    this.load.atlas('atlas', 'img/enemy-fighters/enemy-fighters.png', 'sheets/enemy-fighters');
    this.load.atlas('bosses', 'img/enemy-bosses/enemy-bosses.png', 'sheets/bosses');
    this.load.image('ship', 'img/space_ship_base.png');
    this.load.spritesheet('explode', 'img/assets/explode.png', 128, 128);
    this.load.spritesheet('explode-small', 'img/assets/explode-small.png', 32, 32);
    this.load.spritesheet('explode-smallest', 'img/assets/explode-smallest.png', 16, 16);
    this.load.audio('boom', ['audio/effects/explode.wav']);
    this.load.audio('lazer', ['audio/effects/lazer.wav']);
    this.load.audio('stage-1', ['audio/background/stage-1.mp3', 'audio/background/stage-1.ogg']);

}