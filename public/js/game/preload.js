module.exports =  function () {
 
    this.load.image('enemy', 'img/enemy-fighters/bad-guy1-a.png');
    this.load.atlas('bullets', 'img/assets/bullets.png', 'img/assets/bullets.json');
    this.load.image('blue_bullet', 'img/assets/blue-bullet.png');
    this.load.image('bg', 'img/backgrounds/bg.png');
    this.load.image('ship', 'img/space_ship_base.png');
    this.load.atlas('atlas', 'img/enemy-fighters/enemy-fighters.png', 'img/enemy-fighters/enemy-fighters.json');
    this.load.image('ship', 'img/space_ship_base.png');
    this.load.spritesheet('explode', 'img/assets/explode.png', 128, 128);

}