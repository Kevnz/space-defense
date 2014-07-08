(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var preload = require('./game/preload');
var create = require('./game/create');
var update = require('./game/update');
 
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

 
console.log('game')
},{"./game/create":2,"./game/preload":3,"./game/update":4}],2:[function(require,module,exports){
module.exports =  function () {
 
    console.log(this);


    this.spaceBG =  this.add.tileSprite(0, 0, 800, 600, 'bg');  
    this.spaceBG.autoScroll(0, 75); 

    this.add.sprite((400 - 16), 10, 'enemyFighter');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9LZXZpbi9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lLmpzIiwiQzovVXNlcnMvS2V2aW4vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9wdWJsaWMvanMvZ2FtZS9jcmVhdGUuanMiLCJDOi9Vc2Vycy9LZXZpbi9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3ByZWxvYWQuanMiLCJDOi9Vc2Vycy9LZXZpbi9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3VwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHByZWxvYWQgPSByZXF1aXJlKCcuL2dhbWUvcHJlbG9hZCcpO1xyXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9nYW1lL2NyZWF0ZScpO1xyXG52YXIgdXBkYXRlID0gcmVxdWlyZSgnLi9nYW1lL3VwZGF0ZScpO1xyXG4gXHJcbnZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQVVUTywgJycsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlIH0pO1xyXG5cclxuIFxyXG5jb25zb2xlLmxvZygnZ2FtZScpIiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHJcblxyXG4gICAgdGhpcy5zcGFjZUJHID0gIHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgODAwLCA2MDAsICdiZycpOyAgXHJcbiAgICB0aGlzLnNwYWNlQkcuYXV0b1Njcm9sbCgwLCA3NSk7IFxyXG5cclxuICAgIHRoaXMuYWRkLnNwcml0ZSgoNDAwIC0gMTYpLCAxMCwgJ2VuZW15RmlnaHRlcicpO1xyXG4gICAgdGhpcy5hZGQuc3ByaXRlKCg0MDAgLSAxNiksIDUwMCwgJ3NoaXAnKTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnZW5lbXlGaWdodGVyJywgJ2ltZy9lbmVteS1maWdodGVycy9iYWQtZ3V5MS1hLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiZycsICdpbWcvYmFja2dyb3VuZHMvYmcucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoaXAnLCAnaW1nL3NwYWNlX3NoaXBfYmFzZS5wbmcnKTtcclxuIFxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlJyk7XHJcblxyXG4gXHJcbn0iXX0=
