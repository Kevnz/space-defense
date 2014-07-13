var bulletTime = 0;
 function resetBullet (bullet) {

    bullet.kill();

}
module.exports =  function () {
    var game = this;
    var cursors = this.cursors;
    var player = this.player;


    function fireBullet () {

        if (true || game.time.now > bulletTime)
        {
            var bullet = game.add.sprite((400 - 16), 300, 'bullets');
            bullet.frameName ="blue-bullet.png";


                bullet.enableBody = true;

  bullet.physicsBodyType = Phaser.Physics.ARCADE;
 
    //bullet.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, game);
    //bullet.setAll('checkWorldBounds', true);


            bullet.y = -300;
            if (game.bullet)
            {

                //game.bullet.reset(sprite.x + 6, sprite.y - 8);
                game.bullet.body.velocity.y = -300;
                bulletTime = game.time.now + 250;
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
}