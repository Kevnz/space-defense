 function resetBullet (bullet) {

    bullet.kill();

}
;
function setupEnemy (enemy) {

    enemy.anchor.x = 0.5;
    enemy.anchor.y = 0.5;
    enemy.animations.add('explode');

};

module.exports =    function(){

    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.spaceBG =  this.add.tileSprite(0, 0, 800, 600, 'bg');  
    this.spaceBG.autoScroll(0, 75); 

    var ef = window.ef = this.add.sprite((400 - 16), 10, 'atlas');
    ef.frameName = "bad-guy1.png";
    console.log(ef);
    game.physics.enable(ef, Phaser.Physics.ARCADE);
    var player = window.player = this.add.sprite((400 - 16), 500, 'ship');
    game.physics.enable(player, Phaser.Physics.ARCADE);
    var cursors = window.cursors = this.input.keyboard.createCursorKeys();

    var bullets = window.bullets = this.add.group();

    bullets.enableBody = true;

    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(10, 'bullets', 'bullet-green.png');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

    window.aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    window.explosions = game.add.group();
    explosions.createMultiple(30, 'explode');
    explosions.forEach(setupEnemy, this);
    window.music = game.add.audio('stage-1');
    window.boom = game.add.audio('boom');
    window.lazer = game.add.audio('lazer');

    
    music.play('',0,1,true);
    var spawn = function () {
        console.log('spawn');
        var x = game.rnd.integerInRange(40, 600)  , y = game.rnd.integerInRange(40, 300);
        var _alien = aliens.create(x, y, 'atlas', 'raptor-3-c.png');
        _alien.anchor.setTo(0.5, 0.5);
 
        _alien.body.moves = true;
        _alien.body.velocity.setTo(0, 100) ; 
    };
    game.time.events.repeat(Phaser.Timer.SECOND * 2, 25, spawn, this);
}

 