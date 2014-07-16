(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var globals={bullets:null,enemies:null,player:null},update=require("./game/update"),preload=require("./game/preload"),create=require("./game/create"),game=window.game=new Phaser.Game(800,600,Phaser.AUTO,"",{preload:preload,create:create,update:update});
//# sourceMappingURL=out.js.map

},{"./game/create":2,"./game/preload":3,"./game/update":4}],2:[function(require,module,exports){
"use strict";function resetBullet(s){s.kill()}module.exports=function(){game.physics.startSystem(Phaser.Physics.ARCADE),this.spaceBG=this.add.tileSprite(0,0,800,600,"bg"),this.spaceBG.autoScroll(0,75);var s=window.ef=this.add.sprite(384,10,"atlas");s.frameName="bad-guy1.png",game.physics.enable(s,Phaser.Physics.ARCADE);var e=window.player=this.add.sprite(384,500,"ship");game.physics.enable(e,Phaser.Physics.ARCADE);var t=(window.cursors=this.input.keyboard.createCursorKeys(),window.bullets=this.add.group());t.enableBody=!0,t.physicsBodyType=Phaser.Physics.ARCADE,t.createMultiple(10,"bullets"),t.setAll("anchor.x",.5),t.setAll("anchor.y",1),t.setAll("outOfBoundsKill",!0),t.setAll("checkWorldBounds",!0)};
//# sourceMappingURL=out.js.map

},{}],3:[function(require,module,exports){
"use strict";module.exports=function(){this.load.atlas("bullets","img/assets/bullets.png","img/assets/bullets.json"),this.load.image("blue_bullet","img/assets/blue-bullet.png"),this.load.image("bg","img/backgrounds/bg.png"),this.load.image("ship","img/space_ship_base.png"),this.load.atlas("atlas","img/enemy-fighters/enemy-fighters.png","img/enemy-fighters/enemy-fighters.json"),this.load.image("ship","img/space_ship_base.png")};
//# sourceMappingURL=out.js.map

},{}],4:[function(require,module,exports){
"use strict";function resetBullet(e){e.kill()}function collisionHandler(e,i){e.kill(),i.kill()}var bulletTime=0;module.exports=function(){function e(){if(t.time.now>l){var e=i.getFirstExists(!1);e&&(e.reset(player.x,player.y+16),e.body.velocity.y=-300,l=t.time.now+200)}if(t.time.now>o){var r=i.getFirstExists(!1);r&&(r.reset(player.x+26,player.y+16),r.body.velocity.y=-300,o=t.time.now+200)}}var i=window.bullets,l=0,o=0,t=window.game,r=window.cursors;r.up.isDown?r.up.shiftKey||player.y>350&&(player.y-=4):r.down.isDown&&(r.down.shiftKey||(player.y+=4)),r.left.isDown?player.x-=4:r.right.isDown&&(player.x+=4),this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)&&e(),t.physics.arcade.overlap(i,ef,collisionHandler,null,this)};
//# sourceMappingURL=out.js.map

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMva2V2aW5pc29tL1Byb2plY3RzL3NwYWNlLWRlZmVuc2Uvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9rZXZpbmlzb20vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9wdWJsaWMvanMvZ2FtZS5qcyIsIi9Vc2Vycy9rZXZpbmlzb20vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9wdWJsaWMvanMvZ2FtZS9jcmVhdGUuanMiLCIvVXNlcnMva2V2aW5pc29tL1Byb2plY3RzL3NwYWNlLWRlZmVuc2UvcHVibGljL2pzL2dhbWUvcHJlbG9hZC5qcyIsIi9Vc2Vycy9rZXZpbmlzb20vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9wdWJsaWMvanMvZ2FtZS91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFJLElBQUEsVUFDQSxRQUFTLEtBQ1QsUUFBUyxLQUNULE9BQVEsTUFFUixPQUFTLFFBQVEsaUJBQ2pCLFFBQVUsUUFBUSxrQkFDbEIsT0FBUyxRQUFRLGlCQUVqQixLQUFPLE9BQU0sS0FBUSxHQUFJLFFBQU0sS0FBTSxJQUFLLElBQUssT0FBTSxLQUFPLElBQU0sUUFBUyxRQUFTLE9BQVEsT0FBUSxPQUFROzs7O0FDVC9HLHFCQUFTLGFBQWEsR0FFbkIsRUFBTSxPQUlWLE9BQU0sUUFBYyxXQUVwQixLQUFJLFFBQVEsWUFBYSxPQUFNLFFBQVEsUUFFbkMsS0FBSSxRQUFZLEtBQUksSUFBSSxXQUFZLEVBQUcsRUFBRyxJQUFLLElBQUssTUFDcEQsS0FBSSxRQUFRLFdBQVksRUFBRyxHQUUzQixJQUFJLEdBQUssT0FBTSxHQUFNLEtBQUksSUFBSSxPQUFRLElBQVksR0FBSSxRQUNyRCxHQUFFLFVBQWEsZUFFZixLQUFJLFFBQVEsT0FBUSxFQUFJLE9BQU0sUUFBUSxPQUN0QyxJQUFJLEdBQVMsT0FBTSxPQUFVLEtBQUksSUFBSSxPQUFRLElBQVksSUFBSyxPQUM5RCxNQUFJLFFBQVEsT0FBUSxFQUFRLE9BQU0sUUFBUSxPQUMxQyxJQUVJLElBRlUsT0FBTSxRQUFXLEtBQUksTUFBTSxTQUFTLG1CQUVwQyxPQUFNLFFBQVcsS0FBSSxJQUFJLFFBRXZDLEdBQU8sWUFBYyxFQUVyQixFQUFPLGdCQUFtQixPQUFNLFFBQVEsT0FFeEMsRUFBTyxlQUFnQixHQUFJLFdBQzNCLEVBQU8sT0FBUSxXQUFZLElBQzNCLEVBQU8sT0FBUSxXQUFZLEdBQzNCLEVBQU8sT0FBUSxtQkFBbUIsR0FDbEMsRUFBTyxPQUFRLG9CQUFvQjs7OztBQy9CdkMsWUFBQSxRQUFNLFFBQVksV0FHZCxLQUFJLEtBQUssTUFBTyxVQUFXLHlCQUEwQiwyQkFDckQsS0FBSSxLQUFLLE1BQU8sY0FBZSw4QkFDL0IsS0FBSSxLQUFLLE1BQU8sS0FBTSwwQkFDdEIsS0FBSSxLQUFLLE1BQU8sT0FBUSwyQkFDeEIsS0FBSSxLQUFLLE1BQU8sUUFBUyx3Q0FBeUMsMENBQ2xFLEtBQUksS0FBSyxNQUFPLE9BQVE7Ozs7QUNSNUIscUJBQ1UsYUFBYSxHQUVuQixFQUFNLGVBSUQsa0JBQWtCLEVBQVEsR0FHL0IsRUFBTSxPQUNOLEVBQUssT0FYTCxHQUFBLFlBQWEsQ0FvQ2pCLFFBQU0sUUFBWSxXQU9WLFFBQVMsS0FDTCxHQUFLLEVBQUksS0FBSyxJQUFPLEVBQ3JCLENBQ0ksR0FBSSxHQUFlLEVBQU8sZ0JBQWdCLEVBQ3RDLEtBR0EsRUFBWSxNQUFPLE9BQU0sRUFBSSxPQUFNLEVBQUssSUFDeEMsRUFBWSxLQUFLLFNBQVMsRUFBSyxLQUMvQixFQUFtQixFQUFJLEtBQUssSUFBTyxLQUUxQyxHQUNJLEVBQUksS0FBSyxJQUFPLEVBQ3JCLENBQ0ksR0FBSSxHQUFjLEVBQU8sZ0JBQWdCLEVBQ3JDLEtBR0EsRUFBVyxNQUFPLE9BQU0sRUFBSyxHQUFJLE9BQU0sRUFBSyxJQUM1QyxFQUFXLEtBQUssU0FBUyxFQUFLLEtBQzlCLEVBQWtCLEVBQUksS0FBSyxJQUFPLE1BMUJsRCxHQUFJLEdBQVUsT0FBTSxRQUNoQixFQUFtQixFQUFHLEVBQWtCLEVBRXhDLEVBQU8sT0FBTSxLQUNiLEVBQVUsT0FBTSxPQTRCWixHQUFPLEdBQUcsT0FHTixFQUFPLEdBQUcsVUFNUCxPQUFNLEVBQUssTUFBSyxPQUFNLEdBQU0sR0FHOUIsRUFBTyxLQUFLLFNBRWIsRUFBTyxLQUFLLFdBTVosT0FBTSxHQUFNLElBR2hCLEVBQU8sS0FBSyxPQUVaLE9BQU0sR0FBTSxFQUVQLEVBQU8sTUFBTSxTQUVuQixPQUFNLEdBQU0sR0FFWCxLQUFJLE1BQU0sU0FBUyxPQUFRLE9BQU0sU0FBUyxXQUUxQyxJQUNILEVBRUksUUFBUSxPQUFPLFFBQVMsRUFBUyxHQUFJLGlCQUFrQixLQUFNIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZ2xvYmFscyA9IHtcbiAgICBidWxsZXRzOiBudWxsLFxuICAgIGVuZW1pZXM6IG51bGwsXG4gICAgcGxheWVyOiBudWxsXG59XG52YXIgdXBkYXRlID0gcmVxdWlyZSgnLi9nYW1lL3VwZGF0ZScpO1xudmFyIHByZWxvYWQgPSByZXF1aXJlKCcuL2dhbWUvcHJlbG9hZCcpIDtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL2dhbWUvY3JlYXRlJyk7XG4gXG52YXIgZ2FtZSA9IHdpbmRvdy5nYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQVVUTywgJycsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlIH0pO1xuIiwiIGZ1bmN0aW9uIHJlc2V0QnVsbGV0IChidWxsZXQpIHtcblxuICAgIGJ1bGxldC5raWxsKCk7XG5cbn1cbjtcbm1vZHVsZS5leHBvcnRzID0gICAgZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXG4gICAgdGhpcy5zcGFjZUJHID0gIHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgODAwLCA2MDAsICdiZycpOyAgXG4gICAgdGhpcy5zcGFjZUJHLmF1dG9TY3JvbGwoMCwgNzUpOyBcblxuICAgIHZhciBlZiA9IHdpbmRvdy5lZiA9IHRoaXMuYWRkLnNwcml0ZSgoNDAwIC0gMTYpLCAxMCwgJ2F0bGFzJyk7XG4gICAgZWYuZnJhbWVOYW1lID0gXCJiYWQtZ3V5MS5wbmdcIjtcbiAgICBjb25zb2xlLmxvZyhlZik7XG4gICAgZ2FtZS5waHlzaWNzLmVuYWJsZShlZiwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB2YXIgcGxheWVyID0gd2luZG93LnBsYXllciA9IHRoaXMuYWRkLnNwcml0ZSgoNDAwIC0gMTYpLCA1MDAsICdzaGlwJyk7XG4gICAgZ2FtZS5waHlzaWNzLmVuYWJsZShwbGF5ZXIsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdmFyIGN1cnNvcnMgPSB3aW5kb3cuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXG4gICAgdmFyIGJ1bGxldHMgPSB3aW5kb3cuYnVsbGV0cyA9IHRoaXMuYWRkLmdyb3VwKCk7XG5cbiAgICBidWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuXG4gICAgYnVsbGV0cy5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG5cbiAgICBidWxsZXRzLmNyZWF0ZU11bHRpcGxlKDEwLCAnYnVsbGV0cycpO1xuICAgIGJ1bGxldHMuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgYnVsbGV0cy5zZXRBbGwoJ2FuY2hvci55JywgMSk7XG4gICAgYnVsbGV0cy5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIGJ1bGxldHMuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG59XG5cbiAiLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XG4gXG4gICAgLy90aGlzLmxvYWQuaW1hZ2UoJ2VuZW15RmlnaHRlcicsICdpbWcvZW5lbXktZmlnaHRlcnMvYmFkLWd1eTEtYS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2J1bGxldHMnLCAnaW1nL2Fzc2V0cy9idWxsZXRzLnBuZycsICdpbWcvYXNzZXRzL2J1bGxldHMuanNvbicpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYmx1ZV9idWxsZXQnLCAnaW1nL2Fzc2V0cy9ibHVlLWJ1bGxldC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnJywgJ2ltZy9iYWNrZ3JvdW5kcy9iZy5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoaXAnLCAnaW1nL3NwYWNlX3NoaXBfYmFzZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2F0bGFzJywgJ2ltZy9lbmVteS1maWdodGVycy9lbmVteS1maWdodGVycy5wbmcnLCAnaW1nL2VuZW15LWZpZ2h0ZXJzL2VuZW15LWZpZ2h0ZXJzLmpzb24nKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoaXAnLCAnaW1nL3NwYWNlX3NoaXBfYmFzZS5wbmcnKTtcblxufSIsInZhciBidWxsZXRUaW1lID0gMDtcbiBmdW5jdGlvbiByZXNldEJ1bGxldCAoYnVsbGV0KSB7XG5cbiAgICBidWxsZXQua2lsbCgpO1xuXG59O1xuXG5mdW5jdGlvbiBjb2xsaXNpb25IYW5kbGVyIChidWxsZXQsIGFsaWVuKSB7XG5jb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgIC8vICBXaGVuIGEgYnVsbGV0IGhpdHMgYW4gYWxpZW4gd2Uga2lsbCB0aGVtIGJvdGhcbiAgICBidWxsZXQua2lsbCgpO1xuICAgIGFsaWVuLmtpbGwoKTtcblxuICAgIC8vICBJbmNyZWFzZSB0aGUgc2NvcmVcbiAgIC8vIHNjb3JlICs9IDIwO1xuICAgIC8vc2NvcmVUZXh0LnRleHQgPSBzY29yZVN0cmluZyArIHNjb3JlO1xuXG4gICAgLy8gIEFuZCBjcmVhdGUgYW4gZXhwbG9zaW9uIDopXG4gICAgLy92YXIgZXhwbG9zaW9uID0gZXhwbG9zaW9ucy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgLy9leHBsb3Npb24ucmVzZXQoYWxpZW4uYm9keS54LCBhbGllbi5ib2R5LnkpO1xuICAgIC8vZXhwbG9zaW9uLnBsYXkoJ2thYm9vbScsIDMwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAvL2lmIChhbGllbnMuY291bnRMaXZpbmcoKSA9PSAwKVxuICAgIC8ve1xuICAgICAgIC8vIHNjb3JlICs9IDEwMDA7XG4gICAgICAvLyAgc2NvcmVUZXh0LnRleHQgPSBzY29yZVN0cmluZyArIHNjb3JlO1xuXG4gICAgICAgLy8gZW5lbXlCdWxsZXRzLmNhbGxBbGwoJ2tpbGwnLHRoaXMpO1xuICAgICAgIC8vIHN0YXRlVGV4dC50ZXh0ID0gXCIgWW91IFdvbiwgXFxuIENsaWNrIHRvIHJlc3RhcnRcIjtcbiAgICAgICAvLyBzdGF0ZVRleHQudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgLy90aGUgXCJjbGljayB0byByZXN0YXJ0XCIgaGFuZGxlclxuICAgICAgLy8gIGdhbWUuaW5wdXQub25UYXAuYWRkT25jZShyZXN0YXJ0LHRoaXMpO1xuICAgIC8vfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBidWxsZXRzID0gd2luZG93LmJ1bGxldHM7XG4gICAgdmFyIHJpZ2h0X2J1bGxldFRpbWUgPSAwLCBsZWZ0X2J1bGxldFRpbWUgPSAwOyBcbiBcbiAgICB2YXIgZ2FtZSA9IHdpbmRvdy5nYW1lO1xuICAgIHZhciBjdXJzb3JzID0gd2luZG93LmN1cnNvcnM7IFxuXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVCdWxsZXQgKCkgeyBcbiAgICAgICAgICAgIGlmICggZ2FtZS50aW1lLm5vdyA+IHJpZ2h0X2J1bGxldFRpbWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0X2J1bGxldCA9IGJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodF9idWxsZXQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgQW5kIGZpcmUgaXRcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0LnJlc2V0KHBsYXllci54LCBwbGF5ZXIueSArIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X2J1bGxldFRpbWUgPSBnYW1lLnRpbWUubm93ICsgMjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggZ2FtZS50aW1lLm5vdyA+IGxlZnRfYnVsbGV0VGltZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVmdF9idWxsZXQgPSBidWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdF9idWxsZXQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgQW5kIGZpcmUgaXRcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9idWxsZXQucmVzZXQocGxheWVyLnggKyAyNiwgcGxheWVyLnkgKyAxNik7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0VGltZSA9IGdhbWUudGltZS5ub3cgKyAyMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gIEZvciBleGFtcGxlIHRoaXMgY2hlY2tzIGlmIHRoZSB1cCBvciBkb3duIGtleXMgYXJlIHByZXNzZWQgYW5kIG1vdmVzIHRoZSBjYW1lcmEgYWNjb3JkaW5nbHkuXG4gICAgICAgIGlmIChjdXJzb3JzLnVwLmlzRG93bilcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gIElmIHRoZSBzaGlmdCBrZXkgaXMgYWxzbyBwcmVzc2VkIHRoZW4gdGhlIHdvcmxkIGlzIHJvdGF0ZWRcbiAgICAgICAgICAgIGlmIChjdXJzb3JzLnVwLnNoaWZ0S2V5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiArPSAwLjA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci55ID4gMzUwKSBwbGF5ZXIueSAtPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnNvcnMuZG93bi5pc0Rvd24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjdXJzb3JzLmRvd24uc2hpZnRLZXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy9nYW1lLndvcmxkLnJvdGF0aW9uIC09IDAuMDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnkgKz0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyLnggLT0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJzb3JzLnJpZ2h0LmlzRG93bilcbiAgICAgICAge1xuICAgICAgICAgICBwbGF5ZXIueCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJlQnVsbGV0KCkgO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coY3Vyc29ycyk7XG4gICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoYnVsbGV0cywgZWYsIGNvbGxpc2lvbkhhbmRsZXIsIG51bGwsIHRoaXMpO1xufSJdfQ==
