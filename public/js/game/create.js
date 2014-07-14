 function resetBullet (bullet) {

    bullet.kill();

}
;
module.exports =    function(){
    console.log(this);


    this.spaceBG =  this.add.tileSprite(0, 0, 800, 600, 'bg');  
    this.spaceBG.autoScroll(0, 75); 

    var ef = window.ef = this.add.sprite((400 - 16), 10, 'atlas');
    ef.frameName = "bad-guy1.png";
    var player = window.player = this.add.sprite((400 - 16), 500, 'ship');

    var cursors = window.cursors = this.input.keyboard.createCursorKeys();

    var bullets = window.bullets = this.add.group();

    bullets.enableBody = true;

    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(10, 'bullets');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
}

 