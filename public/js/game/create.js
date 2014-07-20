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


    window.player = require('./player')(game);
    player.init();
    var bullets = window.bullets = this.add.group();

    bullets.enableBody = true;

    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(10, 'bullets', 'bullet-green.png');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

    


    window.explosions = game.add.group();
    explosions.createMultiple(30, 'explode');
    explosions.forEach(setupEnemy, this);
    window.music = game.add.audio('stage-1');
    window.boom = game.add.audio('boom');
    window.lazer = game.add.audio('lazer');

    
    window.stage1 = require('./scenes/scene-1')(game);
    stage1.init();
}

 