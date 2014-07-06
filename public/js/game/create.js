module.exports =  function () {
 
    console.log(this);
    this.add.sprite(0,0,'bg');
    this.add.sprite(0, 0, 'enemyFighter');
    this.add.sprite((400 - 16), 500, 'ship');
 
}