var bulletTime = 0;
 function resetBullet (bullet) {

    bullet.kill();

};

var right_bulletTime = 0, left_bulletTime = 0; 

module.exports =  function () {
    var bullets = window.bullets;
    var cursors = window.cursors; 

    player.update();
        //console.log(cursors);
    stage1.update();
        
};
