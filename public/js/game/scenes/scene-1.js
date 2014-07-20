module.exports =  function (game) {
	var raptors;
    var spawn = function () { 

        var x = game.rnd.integerInRange(40, 600)  , y = game.rnd.integerInRange(0, 10);
        var _alien = aliens.create(x, y, 'atlas', 'bad-guy1.png');
        _alien.anchor.setTo(0.5, 0.5);
 
        _alien.body.moves = true;
        _alien.body.velocity.setTo(0, 100) ; 
    };

	var collisionHandler = function  (bullet, alien) {

	    bullet.kill();
	    alien.kill();
	    window.boom.play();
	    var x = alien.body.x, y =alien.body.y
	    var explosion = explosions.getFirstExists(false);
	    explosion.reset(alien.body.x, alien.body.y);
	    explosion.play('explode', 30, false, true);
	};

    var spawnRaptor = function () {
    	var x = game.rnd.integerInRange(40, 600)  , y = game.rnd.integerInRange(0, 10);
        var _alien = raptors.create(x, y, 'atlas', 'raptor-1.png');
        _alien.anchor.setTo(0.5, 0.5);
 
        _alien.body.moves = true;
        _alien.body.velocity.setTo(0, 150) ; 
    }
	var enemyFactory;

	return {
		init: function () {
			window.aliens = game.add.group();
    		aliens.enableBody = true;
    		aliens.physicsBodyType = Phaser.Physics.ARCADE;
    		raptors = game.add.group();
    		raptors.enableBody = true;
    		raptors.physicsBodyType = Phaser.Physics.ARCADE;
		    music.play('', 0, 1, true);

    		game.time.events.repeat(Phaser.Timer.SECOND * 2, 105, spawn, this);

    		game.time.events.repeat(Phaser.Timer.SECOND * 8, 20, spawnRaptor, this);
		},
		update : function () {
			//game loop for the stage
			game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
			game.physics.arcade.overlap(bullets, raptors, collisionHandler, null, this);
		},
		destroy: function () {

		}
	}
}