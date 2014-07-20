module.exports = function (game) {
	var player, cursors;
	var right_bulletTime = 0, left_bulletTime = 0; 
        function fireBullet () { 
            if ( game.time.now > right_bulletTime)
            {
                var right_bullet = bullets.getFirstExists(false);
                if (right_bullet)
                {
                    //  And fire it
                    right_bullet.reset(player.x, player.y + 16);
                    right_bullet.body.velocity.y = -300;
                    right_bulletTime = game.time.now + 1000;
                    lazer.play();
                }
            }
            if ( game.time.now > left_bulletTime + 20)
            {
                var left_bullet = bullets.getFirstExists(false);
                if (left_bullet)
                {
                    //  And fire it
                    left_bullet.reset(player.x + 26, player.y + 16);
                    left_bullet.body.velocity.y = -300;
                    left_bulletTime = game.time.now + 1000;
                    lazer.play();
                }
            }
        }

	return {
		init : function () {
			player = game.add.sprite((400 - 16), 500, 'ship');
    		game.physics.enable(player, Phaser.Physics.ARCADE);
    		cursors =  game.input.keyboard.createCursorKeys();
		},
		update: function () {
        //  For example this checks if the up or down keys are pressed and moves the camera accordingly.
	        if (cursors.up.isDown)
	        {
	            //  If the shift key is also pressed then the world is rotated
	            if (cursors.up.shiftKey)
	            {
	                //game.world.rotation += 0.05;
	            }
	            else
	            {
	                if(player.y > 350) player.y -= 4;
	            }
	        }
	        else if (cursors.down.isDown)
	        {
	            if (cursors.down.shiftKey)
	            {
	                //game.world.rotation -= 0.05;
	            }
	            else
	            {
	                player.y += 4;
	            }
	        }
	        if (cursors.left.isDown)
	        {
	            player.x -= 4;
	        }
	        else if (cursors.right.isDown)
	        {
	           player.x += 4;
	        }
	        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
	        {
	            fireBullet() ;
	        }
		}
	}
}