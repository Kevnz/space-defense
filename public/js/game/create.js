module.exports =  function () {
 
    console.log(this);


    this.spaceBG =  this.add.tileSprite(0, 0, 800, 600, 'bg');  
    this.spaceBG.autoScroll(0, 75); 

    this.add.sprite((400 - 16), 10, 'enemyFighter');
    this.add.sprite((400 - 16), 500, 'ship');
    //var this.lazer = this.game.add.tileSprite((400 - 16), 495, width, height, 'bullet');  
}