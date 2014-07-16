var bulletTime = 0;
 function resetBullet (bullet) {

    bullet.kill();

};

function collisionHandler (bullet, alien) {
console.log(arguments);
    //  When a bullet hits an alien we kill them both
    bullet.kill();
    alien.kill();
var x = alien.body.x, y =alien.body.y
    var explosion = explosions.getFirstExists(false);
    explosion.reset(alien.body.x, alien.body.y);
    explosion.play('explode', 30, false, true);
    //  Increase the score
   // score += 20;
    //scoreText.text = scoreString + score;

    //  And create an explosion :)
    //var explosion = explosions.getFirstExists(false);
    //explosion.reset(alien.body.x, alien.body.y);
    //explosion.play('kaboom', 30, false, true);

    //if (aliens.countLiving() == 0)
    //{
       // score += 1000;
      //  scoreText.text = scoreString + score;

       // enemyBullets.callAll('kill',this);
       // stateText.text = " You Won, \n Click to restart";
       // stateText.visible = true;

        //the "click to restart" handler
      //  game.input.onTap.addOnce(restart,this);
    //}

    //game.add.sprite((400 - 16), 10, 'atlas');
    //ef.frameName = "bad-guy1.png";
};


module.exports =  function () {
    var bullets = window.bullets;
    var right_bulletTime = 0, left_bulletTime = 0; 
    
    var cursors = window.cursors; 

        function fireBullet () { 
            if ( game.time.now > right_bulletTime)
            {
                var right_bullet = bullets.getFirstExists(false);
                if (right_bullet)
                {
                    //  And fire it
                    right_bullet.reset(player.x, player.y + 16);
                    right_bullet.body.velocity.y = -300;
                    right_bulletTime = game.time.now + 200;
                }
            }
            if ( game.time.now > left_bulletTime)
            {
                var left_bullet = bullets.getFirstExists(false);
                if (left_bullet)
                {
                    //  And fire it
                    left_bullet.reset(player.x + 26, player.y + 16);
                    left_bullet.body.velocity.y = -300;
                    left_bulletTime = game.time.now + 200;
                }
            }
        }

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
        if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            fireBullet() ;
        }
        //console.log(cursors);
         game.physics.arcade.overlap(bullets, ef, collisionHandler, null, this);
         game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
};
