module.exports =  function (game) {
	var raptors,miniBosses;
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
	    //window.boom.play();
	    var x = alien.body.x, y =alien.body.y
	    var explosion = explosions.getFirstExists(false);
	    explosion.reset(alien.body.x, alien.body.y);
	    explosion.play('explode', 30, false, true);
	};
    var bossCollisionHandler = function  (bullet, boss) {

        
       // window.boom.play();
        var x = boss.body.x, y =boss.body.y;
        console.log(boss.hitCount)
        boss.hitCount = boss.hitCount - 1;
        var ex = explosionsSmallest.getFirstExists(false);
        ex.reset(bullet.body.x, bullet.body.y);
        bullet.kill(); 
        ex.play('explode-smallest', 60, false, true); 
        if (boss.hitCount <= 0){
            var explosion = explosions.getFirstExists(false);
            explosion.reset(boss.body.x, boss.body.y);
            explosion.play('explode', 30, false, true); 
            boss.kill();
        }

    };
    var spawnRaptorFormation = function () {
        var x = game.rnd.integerInRange(40, 600)  , y = game.rnd.integerInRange(0, 10);
        spawnRaptor(x - 32, y);
        spawnRaptor(x + 32, y);
        spawnRaptor(x, y + 32);
    }
    var spawnRaptor = function (x,y) {
    	
        var _alien = raptors.create(x, y, 'atlas', 'raptor-1.png');
        _alien.anchor.setTo(0.5, 0.5);
 
        _alien.body.moves = true;
        _alien.body.velocity.setTo(0, 150) ; 
        game.time.events.add(Phaser.Timer.SECOND * 1.25, function () { 
            _alien.body.velocity.setTo(350, 350) ;
            // This would be rad if random
            game.time.events.add(Phaser.Timer.SECOND * 0.65  , function () { 
                _alien.body.velocity.setTo(-350, 350) ;
            }, _alien);

        }, _alien);

    }
    var spawnMiniBoss = function () {
        var x = game.rnd.integerInRange(40, 600)  , y = game.rnd.integerInRange(0, 10);
        var _alien = miniBosses.create(x, y, 'bosses', 'boss-1.png');
        _alien.anchor.setTo(0.5, 0.5);
 
        _alien.body.moves = true;
        _alien.body.velocity.setTo(0, 70) ; 
        _alien.hitCount = 5;
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
            miniBosses = game.add.group();
            miniBosses.enableBody = true;
            miniBosses.physicsBodyType = Phaser.Physics.ARCADE;
		    //music.play('', 0, 1, true);
            //console.log(music.volume);
            //music.volume = 0.5;
            //console.log(music.volume);
    		game.time.events.repeat(Phaser.Timer.SECOND * 2, 105, spawn, this);

    		game.time.events.repeat(Phaser.Timer.SECOND * 5, 25, spawnRaptorFormation, this);

            game.time.events.repeat(Phaser.Timer.SECOND * 12, 10, spawnMiniBoss, this);
		},
		update : function () {
			//game loop for the stage
			game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
			game.physics.arcade.overlap(bullets, raptors, collisionHandler, null, this);
            game.physics.arcade.overlap(bullets, miniBosses, bossCollisionHandler, null, this);
		},
		destroy: function () {

		}
	}
}