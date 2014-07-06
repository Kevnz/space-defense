var preload = require('./game/preload');
var create = require('./game/create');
var update = require('./game/update');
 
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

 
console.log('game')