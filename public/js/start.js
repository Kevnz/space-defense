(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var update = require('./game/update');
var preload = require('./game/preload');
var create = require('./game/create');
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});


},{"./game/create":2,"./game/preload":3,"./game/update":4}],2:[function(require,module,exports){
"use strict";
function resetBullet(bullet) {
  bullet.kill();
}
module.exports = function() {
  console.log(this);
  this.spaceBG = this.add.tileSprite(0, 0, 800, 600, 'bg');
  this.spaceBG.autoScroll(0, 75);
  var ef = this.add.sprite((400 - 16), 10, 'atlas');
  ef.frameName = "bad-guy1.png";
  this.player = this.add.sprite((400 - 16), 500, 'ship');
  this.cursors = this.input.keyboard.createCursorKeys();
  this.bullets = this.add.group();
  this.bullets.enableBody = true;
  this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
  this.bullets.createMultiple(10, 'bullets');
  this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
  this.bullets.setAll('checkWorldBounds', true);
  console.log(this.bullets);
};


},{}],3:[function(require,module,exports){
"use strict";
module.exports = function() {
  this.load.atlas('bullets', 'img/assets/bullets.png', 'img/assets/bullets.json');
  this.load.image('bg', 'img/backgrounds/bg.png');
  this.load.image('ship', 'img/space_ship_base.png');
  this.load.atlas('atlas', 'img/enemy-fighters/enemy-fighters.png', 'img/enemy-fighters/enemy-fighters.json');
  this.load.image('ship', 'img/space_ship_base.png');
};


},{}],4:[function(require,module,exports){
"use strict";
var bulletTime = 0;
function resetBullet(bullet) {
  bullet.kill();
}
module.exports = function() {
  var game = this;
  var cursors = this.cursors;
  var player = this.player;
  function fireBullet() {
    if (true || game.time.now > bulletTime) {
      var bullet = game.add.sprite((400 - 16), 300, 'bullets');
      bullet.frameName = "blue-bullet.png";
      bullet.enableBody = true;
      bullet.physicsBodyType = Phaser.Physics.ARCADE;
      bullet.y = -300;
      if (game.bullet) {
        game.bullet.body.velocity.y = -300;
        bulletTime = game.time.now + 250;
      }
    }
  }
  if (cursors.up.isDown) {
    if (cursors.up.shiftKey) {} else {
      if (player.y > 350)
        player.y -= 4;
    }
  } else if (cursors.down.isDown) {
    if (cursors.down.shiftKey) {} else {
      player.y += 4;
    }
  }
  if (cursors.left.isDown) {
    player.x -= 4;
  } else if (cursors.right.isDown) {
    player.x += 4;
  }
  if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    fireBullet();
  }
};


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZS5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFxjcmVhdGUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxccHJlbG9hZC5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFx1cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQTtBQUFJLENBQUosRUFBSSxDQUFBLE1BQU0sRUFBRyxDQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsQyxDQUFKLEVBQUksQ0FBQSxPQUFPLEVBQUcsQ0FBQSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNwQyxDQUFKLEVBQUksQ0FBQSxNQUFNLEVBQUcsQ0FBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFbEMsQ0FBSixFQUFJLENBQUEsSUFBSSxFQUFHLElBQUksQ0FBQSxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUUsSUFBRyxDQUFFLENBQUEsTUFBTSxLQUFLLENBQUUsR0FBRSxDQUFFO0FBQUUsQ0FBQSxRQUFPLENBQUUsUUFBTztBQUFFLENBQUEsT0FBTSxDQUFFLE9BQU07QUFBRSxDQUFBLE9BQU0sQ0FBRSxPQUFNO0NBQUEsQUFBRSxDQUFDLENBQUM7Q0FDM0c7OztBQ05BO0NBQUEsT0FBUyxZQUFXLENBQUUsTUFBTSxDQUFFO0FBRTNCLENBQUEsT0FBTSxLQUFLLEVBQUUsQ0FBQztDQUVqQjtBQUVELENBRkMsS0FFSyxRQUFRLEVBQUksVUFBVSxDQUFFO0FBRTFCLENBQUEsUUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHbEIsQ0FBQSxLQUFJLFFBQVEsRUFBSSxDQUFBLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFFLEVBQUMsQ0FBRSxJQUFHLENBQUUsSUFBRyxDQUFFLEtBQUksQ0FBQyxDQUFDO0FBQzFELENBQUEsS0FBSSxRQUFRLFdBQVcsQ0FBQyxDQUFDLENBQUUsR0FBRSxDQUFDLENBQUM7QUFFM0IsQ0FBSixJQUFJLENBQUEsRUFBRSxFQUFHLENBQUEsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRyxHQUFFLENBQUMsQ0FBRSxHQUFFLENBQUUsUUFBTyxDQUFDLENBQUM7QUFDbEQsQ0FBQSxHQUFFLFVBQVUsRUFBRyxlQUFjLENBQUM7QUFDOUIsQ0FBQSxLQUFJLE9BQU8sRUFBRyxDQUFBLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUcsR0FBRSxDQUFDLENBQUUsSUFBRyxDQUFFLE9BQU0sQ0FBQyxDQUFDO0FBRXZELENBQUEsS0FBSSxRQUFRLEVBQUcsQ0FBQSxJQUFJLE1BQU0sU0FBUyxpQkFBaUIsRUFBRSxDQUFDO0FBRXRELENBQUEsS0FBSSxRQUFRLEVBQUcsQ0FBQSxJQUFJLElBQUksTUFBTSxFQUFFLENBQUM7QUFFaEMsQ0FBQSxLQUFJLFFBQVEsV0FBVyxFQUFHLEtBQUksQ0FBQztBQUUvQixDQUFBLEtBQUksUUFBUSxnQkFBZ0IsRUFBRyxDQUFBLE1BQU0sUUFBUSxPQUFPLENBQUM7QUFFckQsQ0FBQSxLQUFJLFFBQVEsZUFBZSxDQUFDLEVBQUUsQ0FBRSxVQUFTLENBQUMsQ0FBQztBQUMzQyxDQUFBLEtBQUksUUFBUSxRQUFRLENBQUMsMEJBQTBCLENBQUUsdUJBQXNCLENBQUUsWUFBVyxDQUFFLEtBQUksQ0FBQyxDQUFDO0FBQzVGLENBQUEsS0FBSSxRQUFRLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBRSxLQUFJLENBQUMsQ0FBQztBQUc5QyxDQUFBLFFBQU8sSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUM7Q0FDN0IsQ0FBQTtDQUFBOzs7QUNoQ0Q7QUFBQSxDQUFBLEtBQU0sUUFBUSxFQUFJLFVBQVUsQ0FBRTtBQUcxQixDQUFBLEtBQUksS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFFLHlCQUF3QixDQUFFLDBCQUF5QixDQUFDLENBQUM7QUFDaEYsQ0FBQSxLQUFJLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBRSx5QkFBd0IsQ0FBQyxDQUFDO0FBQ2hELENBQUEsS0FBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUUsMEJBQXlCLENBQUMsQ0FBQztBQUNuRCxDQUFBLEtBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFFLHdDQUF1QyxDQUFFLHlDQUF3QyxDQUFDLENBQUM7QUFDNUcsQ0FBQSxLQUFJLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBRSwwQkFBeUIsQ0FBQyxDQUFDO0NBRXRELENBQUE7Q0FBQTs7O0FDVEQ7QUFBSSxDQUFKLEVBQUksQ0FBQSxVQUFVLEVBQUcsRUFBQyxDQUFDO0NBQ2xCLE9BQVMsWUFBVyxDQUFFLE1BQU0sQ0FBRTtBQUUzQixDQUFBLE9BQU0sS0FBSyxFQUFFLENBQUM7Q0FFakI7QUFDRCxDQURDLEtBQ0ssUUFBUSxFQUFJLFVBQVUsQ0FBRTtBQUN0QixDQUFKLElBQUksQ0FBQSxJQUFJLEVBQUcsS0FBSSxDQUFDO0FBQ1osQ0FBSixJQUFJLENBQUEsT0FBTyxFQUFHLENBQUEsSUFBSSxRQUFRLENBQUM7QUFDdkIsQ0FBSixJQUFJLENBQUEsTUFBTSxFQUFHLENBQUEsSUFBSSxPQUFPLENBQUM7Q0FHekIsU0FBUyxXQUFVLENBQUUsQ0FBRTtDQUVuQixPQUFJLElBQUksR0FBSSxDQUFBLElBQUksS0FBSyxJQUFJLEVBQUcsV0FBVSxDQUN0QztBQUNRLENBQUosUUFBSSxDQUFBLE1BQU0sRUFBRyxDQUFBLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUcsR0FBRSxDQUFDLENBQUUsSUFBRyxDQUFFLFVBQVMsQ0FBQyxDQUFDO0FBQ3pELENBQUEsV0FBTSxVQUFVLEVBQUUsa0JBQWlCLENBQUM7QUFHaEMsQ0FBQSxXQUFNLFdBQVcsRUFBRyxLQUFJLENBQUM7QUFFdkMsQ0FBQSxXQUFNLGdCQUFnQixFQUFHLENBQUEsTUFBTSxRQUFRLE9BQU8sQ0FBQztBQU1yQyxDQUFBLFdBQU0sRUFBRSxFQUFHLEVBQUMsR0FBRyxDQUFDO0NBQ2hCLFNBQUksSUFBSSxPQUFPLENBQ2Y7QUFHSSxDQUFBLFdBQUksT0FBTyxLQUFLLFNBQVMsRUFBRSxFQUFHLEVBQUMsR0FBRyxDQUFDO0FBQ25DLENBQUEsaUJBQVUsRUFBRyxDQUFBLElBQUksS0FBSyxJQUFJLEVBQUcsSUFBRyxDQUFDO09BQ3BDO0NBQUEsSUFDSjtDQUFBLEVBQ0o7QUFHRCxDQUhDLEtBR0csT0FBTyxHQUFHLE9BQU8sQ0FDckI7Q0FFSSxPQUFJLE9BQU8sR0FBRyxTQUFTLENBQ3ZCLEdBRUMsS0FFRDtDQUNJLFNBQUcsTUFBTSxFQUFFLEVBQUcsSUFBRztBQUFFLENBQUEsYUFBTSxFQUFFLEdBQUksRUFBQyxDQUFDO0NBQUEsSUFDcEM7Q0FBQSxFQUNKLEtBQ0ksS0FBSSxPQUFPLEtBQUssT0FBTyxDQUM1QjtDQUNJLE9BQUksT0FBTyxLQUFLLFNBQVMsQ0FDekIsR0FFQyxLQUVEO0FBQ0ksQ0FBQSxXQUFNLEVBQUUsR0FBSSxFQUFDLENBQUM7S0FDakI7Q0FBQSxFQUNKO0FBQ0QsQ0FEQyxLQUNHLE9BQU8sS0FBSyxPQUFPLENBQ3ZCO0FBQ0ksQ0FBQSxTQUFNLEVBQUUsR0FBSSxFQUFDLENBQUM7R0FDakIsS0FDSSxLQUFJLE9BQU8sTUFBTSxPQUFPLENBQzdCO0FBQ0csQ0FBQSxTQUFNLEVBQUUsR0FBSSxFQUFDLENBQUM7R0FDaEI7QUFDRCxDQURDLEtBQ0csSUFBSSxNQUFNLFNBQVMsT0FBTyxDQUFDLE1BQU0sU0FBUyxTQUFTLENBQUMsQ0FDeEQ7QUFDSSxDQUFBLGFBQVUsRUFBRSxDQUFFO0dBQ2pCO0NBQUEsQUFFSixDQUFBO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgdXBkYXRlID0gcmVxdWlyZSgnLi9nYW1lL3VwZGF0ZScpO1xyXG52YXIgcHJlbG9hZCA9IHJlcXVpcmUoJy4vZ2FtZS9wcmVsb2FkJyk7XHJcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL2dhbWUvY3JlYXRlJyk7XHJcbiBcclxudmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA2MDAsIFBoYXNlci5BVVRPLCAnJywgeyBwcmVsb2FkOiBwcmVsb2FkLCBjcmVhdGU6IGNyZWF0ZSwgdXBkYXRlOiB1cGRhdGUgfSk7XHJcbiAiLCIgZnVuY3Rpb24gcmVzZXRCdWxsZXQgKGJ1bGxldCkge1xyXG5cclxuICAgIGJ1bGxldC5raWxsKCk7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcblxyXG5cclxuICAgIHRoaXMuc3BhY2VCRyA9ICB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDgwMCwgNjAwLCAnYmcnKTsgIFxyXG4gICAgdGhpcy5zcGFjZUJHLmF1dG9TY3JvbGwoMCwgNzUpOyBcclxuXHJcbiAgICB2YXIgZWYgPSB0aGlzLmFkZC5zcHJpdGUoKDQwMCAtIDE2KSwgMTAsICdhdGxhcycpO1xyXG4gICAgZWYuZnJhbWVOYW1lID0gXCJiYWQtZ3V5MS5wbmdcIjtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5hZGQuc3ByaXRlKCg0MDAgLSAxNiksIDUwMCwgJ3NoaXAnKTtcclxuXHJcbiAgICB0aGlzLmN1cnNvcnMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cclxuICAgIHRoaXMuYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmJ1bGxldHMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG5cclxuICAgIHRoaXMuYnVsbGV0cy5jcmVhdGVNdWx0aXBsZSgxMCwgJ2J1bGxldHMnKTtcclxuICAgIHRoaXMuYnVsbGV0cy5jYWxsQWxsKCdldmVudHMub25PdXRPZkJvdW5kcy5hZGQnLCAnZXZlbnRzLm9uT3V0T2ZCb3VuZHMnLCByZXNldEJ1bGxldCwgdGhpcyk7XHJcbiAgICB0aGlzLmJ1bGxldHMuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYnVsbGV0cyk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICAgIC8vdGhpcy5sb2FkLmltYWdlKCdlbmVteUZpZ2h0ZXInLCAnaW1nL2VuZW15LWZpZ2h0ZXJzL2JhZC1ndXkxLWEucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2J1bGxldHMnLCAnaW1nL2Fzc2V0cy9idWxsZXRzLnBuZycsICdpbWcvYXNzZXRzL2J1bGxldHMuanNvbicpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiZycsICdpbWcvYmFja2dyb3VuZHMvYmcucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoaXAnLCAnaW1nL3NwYWNlX3NoaXBfYmFzZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5hdGxhcygnYXRsYXMnLCAnaW1nL2VuZW15LWZpZ2h0ZXJzL2VuZW15LWZpZ2h0ZXJzLnBuZycsICdpbWcvZW5lbXktZmlnaHRlcnMvZW5lbXktZmlnaHRlcnMuanNvbicpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGlwJywgJ2ltZy9zcGFjZV9zaGlwX2Jhc2UucG5nJyk7XHJcblxyXG59IiwidmFyIGJ1bGxldFRpbWUgPSAwO1xyXG4gZnVuY3Rpb24gcmVzZXRCdWxsZXQgKGJ1bGxldCkge1xyXG5cclxuICAgIGJ1bGxldC5raWxsKCk7XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBnYW1lID0gdGhpcztcclxuICAgIHZhciBjdXJzb3JzID0gdGhpcy5jdXJzb3JzO1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBmaXJlQnVsbGV0ICgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRydWUgfHwgZ2FtZS50aW1lLm5vdyA+IGJ1bGxldFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gZ2FtZS5hZGQuc3ByaXRlKCg0MDAgLSAxNiksIDMwMCwgJ2J1bGxldHMnKTtcclxuICAgICAgICAgICAgYnVsbGV0LmZyYW1lTmFtZSA9XCJibHVlLWJ1bGxldC5wbmdcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmVuYWJsZUJvZHkgPSB0cnVlO1xyXG5cclxuICBidWxsZXQucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG4gXHJcbiAgICAvL2J1bGxldC5jYWxsQWxsKCdldmVudHMub25PdXRPZkJvdW5kcy5hZGQnLCAnZXZlbnRzLm9uT3V0T2ZCb3VuZHMnLCByZXNldEJ1bGxldCwgZ2FtZSk7XHJcbiAgICAvL2J1bGxldC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICBidWxsZXQueSA9IC0zMDA7XHJcbiAgICAgICAgICAgIGlmIChnYW1lLmJ1bGxldClcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZ2FtZS5idWxsZXQucmVzZXQoc3ByaXRlLnggKyA2LCBzcHJpdGUueSAtIDgpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5idWxsZXQuYm9keS52ZWxvY2l0eS55ID0gLTMwMDtcclxuICAgICAgICAgICAgICAgIGJ1bGxldFRpbWUgPSBnYW1lLnRpbWUubm93ICsgMjUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICBGb3IgZXhhbXBsZSB0aGlzIGNoZWNrcyBpZiB0aGUgdXAgb3IgZG93biBrZXlzIGFyZSBwcmVzc2VkIGFuZCBtb3ZlcyB0aGUgY2FtZXJhIGFjY29yZGluZ2x5LlxyXG4gICAgaWYgKGN1cnNvcnMudXAuaXNEb3duKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBJZiB0aGUgc2hpZnQga2V5IGlzIGFsc28gcHJlc3NlZCB0aGVuIHRoZSB3b3JsZCBpcyByb3RhdGVkXHJcbiAgICAgICAgaWYgKGN1cnNvcnMudXAuc2hpZnRLZXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2dhbWUud29ybGQucm90YXRpb24gKz0gMC4wNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocGxheWVyLnkgPiAzNTApIHBsYXllci55IC09IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3Vyc29ycy5kb3duLmlzRG93bilcclxuICAgIHtcclxuICAgICAgICBpZiAoY3Vyc29ycy5kb3duLnNoaWZ0S2V5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9nYW1lLndvcmxkLnJvdGF0aW9uIC09IDAuMDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYXllci55ICs9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnNvcnMubGVmdC5pc0Rvd24pXHJcbiAgICB7XHJcbiAgICAgICAgcGxheWVyLnggLT0gNDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN1cnNvcnMucmlnaHQuaXNEb3duKVxyXG4gICAge1xyXG4gICAgICAgcGxheWVyLnggKz0gNDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpKVxyXG4gICAge1xyXG4gICAgICAgIGZpcmVCdWxsZXQoKSA7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnNvcnMpO1xyXG59Il19
