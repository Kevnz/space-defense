var globals = {
    bullets: null,
    enemies: null,
    player: null
}
var update = require('./game/update');
var preload = require('./game/preload') ;
var create = require('./game/create');
 
var game = window.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
