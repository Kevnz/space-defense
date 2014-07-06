(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var preload = require('./game/preload');
var create = require('./game/create');
var update = require('./game/update');
 
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

 
console.log('game')
},{"./game/create":2,"./game/preload":3,"./game/update":4}],2:[function(require,module,exports){
module.exports =  function () {
 
    console.log(this);
    this.add.sprite(0,0,'bg');
    this.add.sprite(0, 0, 'enemyFighter');
    this.add.sprite((400 - 16), 500, 'ship');
 
}
},{}],3:[function(require,module,exports){
module.exports =  function () {
 
    this.load.image('enemyFighter', 'img/enemy-fighters/bad-guy1-a.png');
    this.load.image('bg', 'img/backgrounds/bg.png');
    this.load.image('ship', 'img/space_ship_base.png');
 
}
},{}],4:[function(require,module,exports){
module.exports =  function () {
 
    console.log('create');

 
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9LZXZpbi9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lLmpzIiwiQzovVXNlcnMvS2V2aW4vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9wdWJsaWMvanMvZ2FtZS9jcmVhdGUuanMiLCJDOi9Vc2Vycy9LZXZpbi9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3ByZWxvYWQuanMiLCJDOi9Vc2Vycy9LZXZpbi9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3VwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBwcmVsb2FkID0gcmVxdWlyZSgnLi9nYW1lL3ByZWxvYWQnKTtcclxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vZ2FtZS9jcmVhdGUnKTtcclxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJy4vZ2FtZS91cGRhdGUnKTtcclxuIFxyXG52YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICcnLCB7IHByZWxvYWQ6IHByZWxvYWQsIGNyZWF0ZTogY3JlYXRlLCB1cGRhdGU6IHVwZGF0ZSB9KTtcclxuXHJcbiBcclxuY29uc29sZS5sb2coJ2dhbWUnKSIsIm1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uICgpIHtcclxuIFxyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB0aGlzLmFkZC5zcHJpdGUoMCwwLCdiZycpO1xyXG4gICAgdGhpcy5hZGQuc3ByaXRlKDAsIDAsICdlbmVteUZpZ2h0ZXInKTtcclxuICAgIHRoaXMuYWRkLnNwcml0ZSgoNDAwIC0gMTYpLCA1MDAsICdzaGlwJyk7XHJcbiBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uICgpIHtcclxuIFxyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteUZpZ2h0ZXInLCAnaW1nL2VuZW15LWZpZ2h0ZXJzL2JhZC1ndXkxLWEucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnJywgJ2ltZy9iYWNrZ3JvdW5kcy9iZy5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hpcCcsICdpbWcvc3BhY2Vfc2hpcF9iYXNlLnBuZycpO1xyXG4gXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICAgIGNvbnNvbGUubG9nKCdjcmVhdGUnKTtcclxuXHJcbiBcclxufSJdfQ==
