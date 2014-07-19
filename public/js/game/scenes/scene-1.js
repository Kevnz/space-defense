module.exports =  function (game) {
    var spawn = function () {
        console.log('spawn');
        var x = game.rnd.integerInRange(40, 600)  , y = game.rnd.integerInRange(40, 300);
        var _alien = aliens.create(x, y, 'atlas', 'raptor-3-c.png');
        _alien.anchor.setTo(0.5, 0.5);
 
        _alien.body.moves = true;
        _alien.body.velocity.setTo(0, 100) ; 
    };
var enemyFactory;

	return {
		init: function () {
		    music.play('',0,1,true);

    		game.time.events.repeat(Phaser.Timer.SECOND * 2, 25, spawn, this);
		},
		update : function () {
			//game loop for the stage
		},
		destroy: function () {
			
		}
	}
}