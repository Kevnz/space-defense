 function resetBullet (bullet) {

    bullet.kill();

}

module.exports =  function () {

    console.log(this);


    this.spaceBG =  this.add.tileSprite(0, 0, 800, 600, 'bg');  
    this.spaceBG.autoScroll(0, 75); 

    var ef = this.add.sprite((400 - 16), 10, 'atlas');
    ef.frameName = "bad-guy1.png";
    this.player = this.add.sprite((400 - 16), 500, 'ship');

    this.cursors = this.input.keyboard.createCursorKeys();

    this.bullets = this.add.group();

    this.bullets.enableBody = true;

    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(10, 'bullets');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
    this.bullets.setAll('checkWorldBounds', true);


    console.log(this.bullets);
}