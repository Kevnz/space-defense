(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var globals={bullets:null,enemies:null,player:null},update=require("./game/update"),preload=require("./game/preload"),create=require("./game/create"),game=window.game=new Phaser.Game(800,600,Phaser.AUTO,"",{preload:preload,create:create,update:update});
//# sourceMappingURL=out.js.map

},{"./game/create":2,"./game/preload":3,"./game/update":4}],2:[function(require,module,exports){
"use strict";function resetBullet(e){e.kill()}function setupEnemy(e){e.anchor.x=.5,e.anchor.y=.5,e.animations.add("explode")}module.exports=function(){game.physics.startSystem(Phaser.Physics.ARCADE),this.spaceBG=this.add.tileSprite(0,0,800,600,"bg"),this.spaceBG.autoScroll(0,75);var e=window.ef=this.add.sprite(384,10,"atlas");e.frameName="bad-guy1.png",game.physics.enable(e,Phaser.Physics.ARCADE);var s=window.player=this.add.sprite(384,500,"ship");game.physics.enable(s,Phaser.Physics.ARCADE);var a=(window.cursors=this.input.keyboard.createCursorKeys(),window.bullets=this.add.group());a.enableBody=!0,a.physicsBodyType=Phaser.Physics.ARCADE,a.createMultiple(10,"bullets"),a.setAll("anchor.x",.5),a.setAll("anchor.y",1),a.setAll("outOfBoundsKill",!0),a.setAll("checkWorldBounds",!0),window.aliens=game.add.group(),aliens.enableBody=!0,aliens.physicsBodyType=Phaser.Physics.ARCADE,window.explosions=game.add.group(),explosions.createMultiple(30,"explode"),explosions.forEach(setupEnemy,this);var i=function(){var e=game.rnd.integerInRange(40,600),s=game.rnd.integerInRange(40,300),a=aliens.create(e,s,"enemy");a.anchor.setTo(.5,.5),a.body.moves=!1};game.time.events.repeat(2*Phaser.Timer.SECOND,25,i,this)};
//# sourceMappingURL=out.js.map

},{}],3:[function(require,module,exports){
"use strict";module.exports=function(){this.load.image("enemy","img/enemy-fighters/bad-guy1-a.png"),this.load.atlas("bullets","img/assets/bullets.png","img/assets/bullets.json"),this.load.image("blue_bullet","img/assets/blue-bullet.png"),this.load.image("bg","img/backgrounds/bg.png"),this.load.image("ship","img/space_ship_base.png"),this.load.atlas("atlas","img/enemy-fighters/enemy-fighters.png","img/enemy-fighters/enemy-fighters.json"),this.load.image("ship","img/space_ship_base.png"),this.load.spritesheet("explode","img/assets/explode.png",128,128)};
//# sourceMappingURL=out.js.map

},{}],4:[function(require,module,exports){
"use strict";function resetBullet(e){e.kill()}function collisionHandler(e,i){e.kill(),i.kill();var l=(i.body.x,i.body.y,explosions.getFirstExists(!1));l.reset(i.body.x,i.body.y),l.play("explode",30,!1,!0)}var bulletTime=0;module.exports=function(){function e(){if(game.time.now>l){var e=i.getFirstExists(!1);e&&(e.reset(player.x,player.y+16),e.body.velocity.y=-300,l=game.time.now+200)}if(game.time.now>o){var s=i.getFirstExists(!1);s&&(s.reset(player.x+26,player.y+16),s.body.velocity.y=-300,o=game.time.now+200)}}var i=window.bullets,l=0,o=0,s=window.cursors;s.up.isDown?s.up.shiftKey||player.y>350&&(player.y-=4):s.down.isDown&&(s.down.shiftKey||(player.y+=4)),s.left.isDown?player.x-=4:s.right.isDown&&(player.x+=4),this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)&&e(),game.physics.arcade.overlap(i,ef,collisionHandler,null,this),game.physics.arcade.overlap(i,aliens,collisionHandler,null,this)};
//# sourceMappingURL=out.js.map

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZS5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFxjcmVhdGUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxccHJlbG9hZC5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFx1cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFJLElBQUEsVUFDQSxRQUFTLEtBQ1QsUUFBUyxLQUNULE9BQVEsTUFFUixPQUFTLFFBQVEsaUJBQ2pCLFFBQVUsUUFBUSxrQkFDbEIsT0FBUyxRQUFRLGlCQUVqQixLQUFPLE9BQU0sS0FBUSxHQUFJLFFBQU0sS0FBTSxJQUFLLElBQUssT0FBTSxLQUFPLElBQU0sUUFBUyxRQUFTLE9BQVEsT0FBUSxPQUFROzs7O0FDVC9HLHFCQUFTLGFBQWEsR0FFbkIsRUFBTSxlQUlELFlBQVksR0FFakIsRUFBSyxPQUFPLEVBQUssR0FDakIsRUFBSyxPQUFPLEVBQUssR0FDakIsRUFBSyxXQUFXLElBQUssV0FJekIsT0FBTSxRQUFjLFdBRWhCLEtBQUksUUFBUSxZQUFhLE9BQU0sUUFBUSxRQUV2QyxLQUFJLFFBQVksS0FBSSxJQUFJLFdBQVksRUFBRyxFQUFHLElBQUssSUFBSyxNQUNwRCxLQUFJLFFBQVEsV0FBWSxFQUFHLEdBRTNCLElBQUksR0FBSyxPQUFN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S0FBSSxNQUFNLFNBQVMsT0FBUSxPQUFNLFNBQVMsV0FFMUMsSUFDSCxLQUVJLFFBQVEsT0FBTyxRQUFTLEVBQVMsR0FBSSxpQkFBa0IsS0FBTSxNQUNqRSxLQUFJLFFBQVEsT0FBTyxRQUFTLEVBQVMsT0FBUSxpQkFBa0IsS0FBTSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGdsb2JhbHMgPSB7XHJcbiAgICBidWxsZXRzOiBudWxsLFxyXG4gICAgZW5lbWllczogbnVsbCxcclxuICAgIHBsYXllcjogbnVsbFxyXG59XHJcbnZhciB1cGRhdGUgPSByZXF1aXJlKCcuL2dhbWUvdXBkYXRlJyk7XHJcbnZhciBwcmVsb2FkID0gcmVxdWlyZSgnLi9nYW1lL3ByZWxvYWQnKSA7XHJcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL2dhbWUvY3JlYXRlJyk7XHJcbiBcclxudmFyIGdhbWUgPSB3aW5kb3cuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICcnLCB7IHByZWxvYWQ6IHByZWxvYWQsIGNyZWF0ZTogY3JlYXRlLCB1cGRhdGU6IHVwZGF0ZSB9KTtcclxuIiwiIGZ1bmN0aW9uIHJlc2V0QnVsbGV0IChidWxsZXQpIHtcclxuXHJcbiAgICBidWxsZXQua2lsbCgpO1xyXG5cclxufVxyXG47XHJcbmZ1bmN0aW9uIHNldHVwRW5lbXkgKGVuZW15KSB7XHJcblxyXG4gICAgZW5lbXkuYW5jaG9yLnggPSAwLjU7XHJcbiAgICBlbmVteS5hbmNob3IueSA9IDAuNTtcclxuICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdleHBsb2RlJyk7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAgICBmdW5jdGlvbigpe1xyXG5cclxuICAgIGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xyXG5cclxuICAgIHRoaXMuc3BhY2VCRyA9ICB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDgwMCwgNjAwLCAnYmcnKTsgIFxyXG4gICAgdGhpcy5zcGFjZUJHLmF1dG9TY3JvbGwoMCwgNzUpOyBcclxuXHJcbiAgICB2YXIgZWYgPSB3aW5kb3cuZWYgPSB0aGlzLmFkZC5zcHJpdGUoKDQwMCAtIDE2KSwgMTAsICdhdGxhcycpO1xyXG4gICAgZWYuZnJhbWVOYW1lID0gXCJiYWQtZ3V5MS5wbmdcIjtcclxuICAgIGNvbnNvbGUubG9nKGVmKTtcclxuICAgIGdhbWUucGh5c2ljcy5lbmFibGUoZWYsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XHJcbiAgICB2YXIgcGxheWVyID0gd2luZG93LnBsYXllciA9IHRoaXMuYWRkLnNwcml0ZSgoNDAwIC0gMTYpLCA1MDAsICdzaGlwJyk7XHJcbiAgICBnYW1lLnBoeXNpY3MuZW5hYmxlKHBsYXllciwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcclxuICAgIHZhciBjdXJzb3JzID0gd2luZG93LmN1cnNvcnMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuXHJcbiAgICB2YXIgYnVsbGV0cyA9IHdpbmRvdy5idWxsZXRzID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuXHJcbiAgICBidWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG5cclxuICAgIGJ1bGxldHMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG5cclxuICAgIGJ1bGxldHMuY3JlYXRlTXVsdGlwbGUoMTAsICdidWxsZXRzJyk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xyXG4gICAgYnVsbGV0cy5zZXRBbGwoJ2FuY2hvci55JywgMSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xyXG5cclxuICAgIHdpbmRvdy5hbGllbnMgPSBnYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgYWxpZW5zLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG4gICAgYWxpZW5zLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuXHJcbiAgICB3aW5kb3cuZXhwbG9zaW9ucyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBleHBsb3Npb25zLmNyZWF0ZU11bHRpcGxlKDMwLCAnZXhwbG9kZScpO1xyXG4gICAgZXhwbG9zaW9ucy5mb3JFYWNoKHNldHVwRW5lbXksIHRoaXMpO1xyXG5cclxuICAgIHZhciBzcGF3biA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzcGF3bicpO1xyXG4gICAgdmFyIHggPSBnYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg0MCwgNjAwKSAgLCB5ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsIDMwMCk7XHJcbiAgICAgICAgICAgIHZhciBfYWxpZW4gPSBhbGllbnMuY3JlYXRlKHgsIHksICdlbmVteScpO1xyXG4gICAgICAgICAgICBfYWxpZW4uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuIFxyXG4gICAgICAgICAgICBfYWxpZW4uYm9keS5tb3ZlcyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGdhbWUudGltZS5ldmVudHMucmVwZWF0KFBoYXNlci5UaW1lci5TRUNPTkQgKiAyLCAyNSwgc3Bhd24sIHRoaXMpO1xyXG59XHJcblxyXG4gIiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VuZW15JywgJ2ltZy9lbmVteS1maWdodGVycy9iYWQtZ3V5MS1hLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmF0bGFzKCdidWxsZXRzJywgJ2ltZy9hc3NldHMvYnVsbGV0cy5wbmcnLCAnaW1nL2Fzc2V0cy9idWxsZXRzLmpzb24nKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYmx1ZV9idWxsZXQnLCAnaW1nL2Fzc2V0cy9ibHVlLWJ1bGxldC5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYmcnLCAnaW1nL2JhY2tncm91bmRzL2JnLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGlwJywgJ2ltZy9zcGFjZV9zaGlwX2Jhc2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2F0bGFzJywgJ2ltZy9lbmVteS1maWdodGVycy9lbmVteS1maWdodGVycy5wbmcnLCAnaW1nL2VuZW15LWZpZ2h0ZXJzL2VuZW15LWZpZ2h0ZXJzLmpzb24nKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hpcCcsICdpbWcvc3BhY2Vfc2hpcF9iYXNlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb2RlJywgJ2ltZy9hc3NldHMvZXhwbG9kZS5wbmcnLCAxMjgsIDEyOCk7XHJcblxyXG59IiwidmFyIGJ1bGxldFRpbWUgPSAwO1xyXG4gZnVuY3Rpb24gcmVzZXRCdWxsZXQgKGJ1bGxldCkge1xyXG5cclxuICAgIGJ1bGxldC5raWxsKCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29sbGlzaW9uSGFuZGxlciAoYnVsbGV0LCBhbGllbikge1xyXG5jb25zb2xlLmxvZyhhcmd1bWVudHMpO1xyXG4gICAgLy8gIFdoZW4gYSBidWxsZXQgaGl0cyBhbiBhbGllbiB3ZSBraWxsIHRoZW0gYm90aFxyXG4gICAgYnVsbGV0LmtpbGwoKTtcclxuICAgIGFsaWVuLmtpbGwoKTtcclxudmFyIHggPSBhbGllbi5ib2R5LngsIHkgPWFsaWVuLmJvZHkueVxyXG4gICAgdmFyIGV4cGxvc2lvbiA9IGV4cGxvc2lvbnMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgZXhwbG9zaW9uLnJlc2V0KGFsaWVuLmJvZHkueCwgYWxpZW4uYm9keS55KTtcclxuICAgIGV4cGxvc2lvbi5wbGF5KCdleHBsb2RlJywgMzAsIGZhbHNlLCB0cnVlKTtcclxuICAgIC8vICBJbmNyZWFzZSB0aGUgc2NvcmVcclxuICAgLy8gc2NvcmUgKz0gMjA7XHJcbiAgICAvL3Njb3JlVGV4dC50ZXh0ID0gc2NvcmVTdHJpbmcgKyBzY29yZTtcclxuXHJcbiAgICAvLyAgQW5kIGNyZWF0ZSBhbiBleHBsb3Npb24gOilcclxuICAgIC8vdmFyIGV4cGxvc2lvbiA9IGV4cGxvc2lvbnMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgLy9leHBsb3Npb24ucmVzZXQoYWxpZW4uYm9keS54LCBhbGllbi5ib2R5LnkpO1xyXG4gICAgLy9leHBsb3Npb24ucGxheSgna2Fib29tJywgMzAsIGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAvL2lmIChhbGllbnMuY291bnRMaXZpbmcoKSA9PSAwKVxyXG4gICAgLy97XHJcbiAgICAgICAvLyBzY29yZSArPSAxMDAwO1xyXG4gICAgICAvLyAgc2NvcmVUZXh0LnRleHQgPSBzY29yZVN0cmluZyArIHNjb3JlO1xyXG5cclxuICAgICAgIC8vIGVuZW15QnVsbGV0cy5jYWxsQWxsKCdraWxsJyx0aGlzKTtcclxuICAgICAgIC8vIHN0YXRlVGV4dC50ZXh0ID0gXCIgWW91IFdvbiwgXFxuIENsaWNrIHRvIHJlc3RhcnRcIjtcclxuICAgICAgIC8vIHN0YXRlVGV4dC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy90aGUgXCJjbGljayB0byByZXN0YXJ0XCIgaGFuZGxlclxyXG4gICAgICAvLyAgZ2FtZS5pbnB1dC5vblRhcC5hZGRPbmNlKHJlc3RhcnQsdGhpcyk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL2dhbWUuYWRkLnNwcml0ZSgoNDAwIC0gMTYpLCAxMCwgJ2F0bGFzJyk7XHJcbiAgICAvL2VmLmZyYW1lTmFtZSA9IFwiYmFkLWd1eTEucG5nXCI7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGJ1bGxldHMgPSB3aW5kb3cuYnVsbGV0cztcclxuICAgIHZhciByaWdodF9idWxsZXRUaW1lID0gMCwgbGVmdF9idWxsZXRUaW1lID0gMDsgXHJcbiAgICBcclxuICAgIHZhciBjdXJzb3JzID0gd2luZG93LmN1cnNvcnM7IFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXJlQnVsbGV0ICgpIHsgXHJcbiAgICAgICAgICAgIGlmICggZ2FtZS50aW1lLm5vdyA+IHJpZ2h0X2J1bGxldFRpbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodF9idWxsZXQgPSBidWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyaWdodF9idWxsZXQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIEFuZCBmaXJlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0LnJlc2V0KHBsYXllci54LCBwbGF5ZXIueSArIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9idWxsZXQuYm9keS52ZWxvY2l0eS55ID0gLTMwMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9idWxsZXRUaW1lID0gZ2FtZS50aW1lLm5vdyArIDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGdhbWUudGltZS5ub3cgPiBsZWZ0X2J1bGxldFRpbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0X2J1bGxldCA9IGJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRfYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBBbmQgZmlyZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LnJlc2V0KHBsYXllci54ICsgMjYsIHBsYXllci55ICsgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9idWxsZXRUaW1lID0gZ2FtZS50aW1lLm5vdyArIDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIEZvciBleGFtcGxlIHRoaXMgY2hlY2tzIGlmIHRoZSB1cCBvciBkb3duIGtleXMgYXJlIHByZXNzZWQgYW5kIG1vdmVzIHRoZSBjYW1lcmEgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgaWYgKGN1cnNvcnMudXAuaXNEb3duKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIElmIHRoZSBzaGlmdCBrZXkgaXMgYWxzbyBwcmVzc2VkIHRoZW4gdGhlIHdvcmxkIGlzIHJvdGF0ZWRcclxuICAgICAgICAgICAgaWYgKGN1cnNvcnMudXAuc2hpZnRLZXkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiArPSAwLjA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLnkgPiAzNTApIHBsYXllci55IC09IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyc29ycy5kb3duLmlzRG93bilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3JzLmRvd24uc2hpZnRLZXkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiAtPSAwLjA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnkgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYXllci54IC09IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGN1cnNvcnMucmlnaHQuaXNEb3duKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBwbGF5ZXIueCArPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpcmVCdWxsZXQoKSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coY3Vyc29ycyk7XHJcbiAgICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChidWxsZXRzLCBlZiwgY29sbGlzaW9uSGFuZGxlciwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChidWxsZXRzLCBhbGllbnMsIGNvbGxpc2lvbkhhbmRsZXIsIG51bGwsIHRoaXMpO1xyXG59O1xyXG4iXX0=
