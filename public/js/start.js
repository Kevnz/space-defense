(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
(function(exports) {
  var __slice = [].slice;
  var __hasProp = {}.hasOwnProperty;
  var __extends = function(child, parent) {
    for (var key in parent) {
      if (__hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  };
  function extend(target, src) {
    var options,
        name,
        copy,
        copyIsArray,
        clone,
        i = 1,
        length = 2,
        deep = true;
    if (typeof target === "boolean") {
      deep = target;
      i = 2;
    }
    if (typeof target !== "object" && !typeof target === 'function') {
      target = {};
    }
    if (options = src) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep && (typeof copy == 'object' || (copyIsArray = Object.prototype.toString.call(copy) === '[object Array]'))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Object.prototype.toString.call(src) === '[object Array]' ? src : [];
          } else {
            clone = src && typeof src == 'object' ? src : {};
          }
          target[name] = extend(clone, copy);
        } else if (typeof copy !== 'undefined') {
          target[name] = copy;
        }
      }
    }
    return target;
  }
  exports.GameController = {
    options: {
      left: {
        type: 'dpad',
        position: {
          left: '13%',
          bottom: '22%'
        },
        dpad: {
          up: {
            width: '7%',
            height: '15%',
            stroke: 2,
            touchStart: function() {
              GameController.simulateKeyEvent('press', 38);
              GameController.simulateKeyEvent('down', 38);
            },
            touchEnd: function() {
              GameController.simulateKeyEvent('up', 38);
            }
          },
          left: {
            width: '15%',
            height: '7%',
            stroke: 2,
            touchStart: function() {
              GameController.simulateKeyEvent('press', 37);
              GameController.simulateKeyEvent('down', 37);
            },
            touchEnd: function() {
              GameController.simulateKeyEvent('up', 37);
            }
          },
          down: {
            width: '7%',
            height: '15%',
            stroke: 2,
            touchStart: function() {
              GameController.simulateKeyEvent('press', 40);
              GameController.simulateKeyEvent('down', 40);
            },
            touchEnd: function() {
              GameController.simulateKeyEvent('up', 40);
            }
          },
          right: {
            width: '15%',
            height: '7%',
            stroke: 2,
            touchStart: function() {
              GameController.simulateKeyEvent('press', 39);
              GameController.simulateKeyEvent('down', 39);
            },
            touchEnd: function() {
              GameController.simulateKeyEvent('up', 39);
            }
          }
        },
        joystick: {
          radius: 60,
          touchMove: function(e) {
            console.log(e);
          }
        }
      },
      right: {
        type: 'buttons',
        position: {
          right: '17%',
          bottom: '28%'
        },
        buttons: [{
          offset: {
            x: '-13%',
            y: 0
          },
          label: 'X',
          radius: '7%',
          stroke: 2,
          backgroundColor: 'blue',
          fontColor: '#fff',
          touchStart: function() {
            GameController.simulateKeyEvent('press', 38);
            GameController.simulateKeyEvent('down', 38);
          },
          touchEnd: function() {
            GameController.simulateKeyEvent('up', 38);
          }
        }, {
          offset: {
            x: 0,
            y: '-11%'
          },
          label: 'Y',
          radius: '7%',
          stroke: 2,
          backgroundColor: 'yellow',
          fontColor: '#fff'
        }, {
          offset: {
            x: '13%',
            y: 0
          },
          label: 'B',
          radius: '7%',
          stroke: 2,
          backgroundColor: 'red',
          fontColor: '#fff',
          touchStart: function() {
            GameController.simulateKeyEvent('press', 32);
            GameController.simulateKeyEvent('down', 32);
            GameController.simulateKeyEvent('press', 40);
            GameController.simulateKeyEvent('down', 40);
          },
          touchEnd: function() {
            GameController.simulateKeyEvent('up', 32);
            GameController.simulateKeyEvent('up', 40);
          }
        }, {
          offset: {
            x: 0,
            y: '11%'
          },
          label: 'A',
          radius: '7%',
          stroke: 2,
          backgroundColor: 'green',
          fontColor: '#fff',
          touchStart: function() {
            GameController.simulateKeyEvent('press', 38);
            GameController.simulateKeyEvent('down', 38);
          },
          touchEnd: function() {
            GameController.simulateKeyEvent('up', 38);
          }
        }],
        dpad: {
          up: {
            width: '7%',
            height: '15%',
            stroke: 2
          },
          left: {
            width: '15%',
            height: '7%',
            stroke: 2
          },
          down: {
            width: '7%',
            height: '15%',
            stroke: 2
          },
          right: {
            width: '15%',
            height: '7%',
            stroke: 2
          }
        },
        joystick: {
          radius: 60,
          touchMove: function(e) {
            console.log(e);
          }
        }
      },
      touchRadius: 45
    },
    touchableAreas: [],
    touches: [],
    cachedSprites: {},
    paused: false,
    init: function(options) {
      if (!'ontouchstart' in document.documentElement)
        return;
      options = options || {};
      extend(this.options, options);
      var ele;
      if (!this.options.canvas || !(ele = document.getElementById(this.options.canvas))) {
        this.options.canvas = document.getElementsByTagName('canvas')[0];
      } else if (ele) {
        this.options.canvas = ele;
      }
      this.options.ctx = this.options.canvas.getContext('2d');
      this.createOverlayCanvas();
    },
    createOverlayCanvas: function() {
      this.canvas = document.createElement('canvas');
      this.resize(true);
      document.getElementsByTagName('body')[0].appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      var _this = this;
      window.addEventListener('resize', function() {
        setTimeout(function() {
          GameController.resize.call(_this);
        }, 1);
      });
      this.setTouchEvents();
      this.loadSide('left');
      this.loadSide('right');
      this.render();
      if (!this.touches || this.touches.length == 0)
        this.paused = true;
    },
    pixelRatio: 1,
    resize: function(firstTime) {
      this.canvas.width = this.options.canvas.width;
      this.canvas.height = this.options.canvas.height;
      if (this.options.canvas.style.width && this.options.canvas.style.height && this.options.canvas.style.height.indexOf('px') !== -1) {
        this.canvas.style.width = this.options.canvas.style.width;
        this.canvas.style.height = this.options.canvas.style.height;
        this.pixelRatio = this.canvas.width / parseInt(this.canvas.style.width);
      }
      this.canvas.style.position = 'absolute';
      this.canvas.style.left = this.options.canvas.offsetLeft + 'px';
      this.canvas.style.top = this.options.canvas.offsetTop + 'px';
      this.canvas.setAttribute('style', this.canvas.getAttribute('style') + ' -ms-touch-action: none;');
      if (!firstTime) {
        this.touchableAreas = [];
        this.cachedSprites = [];
        this.reloadSide('left');
        this.reloadSide('right');
      }
    },
    getPixels: function(value, axis) {
      if (typeof value === 'undefined')
        return 0;
      else if (typeof value === 'number')
        return value;
      else {
        if (axis == 'x')
          return (parseInt(value) / 100) * this.canvas.width;
        else
          return (parseInt(value) / 100) * this.canvas.height;
      }
    },
    simulateKeyEvent: function(eventName, keyCode) {
      if (typeof window.onkeydown === 'undefined')
        return false;
      if (jQuery) {
        var press = jQuery.Event('key' + eventName);
        press.ctrlKey = false;
        press.which = keyCode;
        $(document).trigger(press);
        return;
      }
      var oEvent = document.createEvent('KeyboardEvent');
      if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1) {
        Object.defineProperty(oEvent, 'keyCode', {get: function() {
            return this.keyCodeVal;
          }});
        Object.defineProperty(oEvent, 'which', {get: function() {
            return this.keyCodeVal;
          }});
      }
      if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent('key' + eventName, true, true, document.defaultView, false, false, false, false, keyCode, keyCode);
      } else {
        oEvent.initKeyEvent('key' + eventName, true, true, document.defaultView, false, false, false, false, keyCode, keyCode);
      }
      oEvent.keyCodeVal = keyCode;
    },
    setTouchEvents: function() {
      var _this = this;
      var touchStart = function(e) {
        if (_this.paused) {
          _this.paused = false;
        }
        e.preventDefault();
        if (window.navigator.msPointerEnabled && e.clientX && e.pointerType == e.MSPOINTER_TYPE_TOUCH) {
          _this.touches[e.pointerId] = {
            clientX: e.clientX,
            clientY: e.clientY
          };
        } else {
          _this.touches = e.touches || [];
        }
      };
      this.canvas.addEventListener('touchstart', touchStart, false);
      var touchEnd = function(e) {
        e.preventDefault();
        if (window.navigator.msPointerEnabled && e.pointerType == e.MSPOINTER_TYPE_TOUCH) {
          delete _this.touches[e.pointerId];
        } else {
          _this.touches = e.touches || [];
        }
        if (!e.touches || e.touches.length == 0) {
          _this.render();
          _this.paused = true;
        }
      };
      this.canvas.addEventListener('touchend', touchEnd);
      var touchMove = function(e) {
        e.preventDefault();
        if (window.navigator.msPointerEnabled && e.clientX && e.pointerType == e.MSPOINTER_TYPE_TOUCH) {
          _this.touches[e.pointerId] = {
            clientX: e.clientX,
            clientY: e.clientY
          };
        } else {
          _this.touches = e.touches || [];
        }
      };
      this.canvas.addEventListener('touchmove', touchMove);
      if (window.navigator.msPointerEnabled) {
        this.canvas.addEventListener('MSPointerDown', touchStart);
        this.canvas.addEventListener('MSPointerUp', touchEnd);
        this.canvas.addEventListener('MSPointerMove', touchMove);
      }
    },
    addTouchableDirection: function(options) {
      var direction = new TouchableDirection(options);
      direction.id = this.touchableAreas.push(direction);
    },
    addJoystick: function(options) {
      var joystick = new TouchableJoystick(options);
      joystick.id = this.touchableAreas.push(joystick);
    },
    addButton: function(options) {
      var button = new TouchableButton(options);
      button.id = this.touchableAreas.push(button);
    },
    addTouchableArea: function(check, callback) {},
    loadButtons: function(side) {
      var buttons = this.options[side].buttons;
      var _this = this;
      for (var i = 0,
          j = buttons.length; i < j; i++) {
        var posX = this.getPositionX(side);
        var posY = this.getPositionY(side);
        buttons[i].x = posX + this.getPixels(buttons[i].offset.x, 'y');
        buttons[i].y = posY + this.getPixels(buttons[i].offset.y, 'y');
        this.addButton(buttons[i]);
      }
    },
    loadDPad: function(side) {
      var dpad = this.options[side].dpad || {};
      var _this = this;
      var posX = this.getPositionX(side);
      var posY = this.getPositionY(side);
      if (dpad.up && dpad.left && dpad.down && dpad.right) {
        var options = {
          x: posX,
          y: posY,
          radius: dpad.right.height
        };
        var center = new TouchableCircle(options);
        this.touchableAreas.push(center);
      }
      if (dpad.up !== false) {
        dpad.up.x = posX - this.getPixels(dpad.up.width, 'y') / 2;
        dpad.up.y = posY - (this.getPixels(dpad.up.height, 'y') + this.getPixels(dpad.left.height, 'y') / 2);
        dpad.up.direction = 'up';
        this.addTouchableDirection(dpad.up);
      }
      if (dpad.left !== false) {
        dpad.left.x = posX - (this.getPixels(dpad.left.width, 'y') + this.getPixels(dpad.up.width, 'y') / 2);
        dpad.left.y = posY - (this.getPixels(dpad.left.height, 'y') / 2);
        dpad.left.direction = 'left';
        this.addTouchableDirection(dpad.left);
      }
      if (dpad.down !== false) {
        dpad.down.x = posX - this.getPixels(dpad.down.width, 'y') / 2;
        dpad.down.y = posY + (this.getPixels(dpad.left.height, 'y') / 2);
        dpad.down.direction = 'down';
        this.addTouchableDirection(dpad.down);
      }
      if (dpad.right !== false) {
        dpad.right.x = posX + (this.getPixels(dpad.up.width, 'y') / 2);
        dpad.right.y = posY - this.getPixels(dpad.right.height, 'y') / 2;
        dpad.right.direction = 'right';
        this.addTouchableDirection(dpad.right);
      }
    },
    loadJoystick: function(side) {
      var joystick = this.options[side].joystick;
      joystick.x = this.getPositionX(side);
      joystick.y = this.getPositionY(side);
      this.addJoystick(joystick);
    },
    reloadSide: function(side) {
      this.loadSide(side);
    },
    loadSide: function(side) {
      if (this.options[side].type === 'dpad') {
        this.loadDPad(side);
      } else if (this.options[side].type === 'joystick') {
        this.loadJoystick(side);
      } else if (this.options[side].type === 'buttons') {
        this.loadButtons(side);
      }
    },
    normalizeTouchPositionX: function(x) {
      return (x - GameController.options.canvas.offsetLeft + document.body.scrollLeft) * (this.pixelRatio);
    },
    normalizeTouchPositionY: function(y) {
      return (y - GameController.options.canvas.offsetTop + document.body.scrollTop) * (this.pixelRatio);
    },
    getXFromRight: function(right) {
      return this.canvas.width - right;
    },
    getYFromBottom: function(bottom) {
      return this.canvas.height - bottom;
    },
    getPositionX: function(side) {
      if (typeof this.options[side].position.left !== 'undefined')
        return this.getPixels(this.options[side].position.left, 'x');
      else
        return this.getXFromRight(this.getPixels(this.options[side].position.right, 'x'));
    },
    getPositionY: function(side) {
      if (typeof this.options[side].position.top !== 'undefined')
        return this.getPixels(this.options[side].position.top, 'y');
      else
        return this.getYFromBottom(this.getPixels(this.options[side].position.bottom, 'y'));
    },
    render: function() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (!this.paused) {
        var cacheId = 'touch-circle';
        var cached = GameController.cachedSprites[cacheId];
        if (!cached && this.options.touchRadius) {
          var subCanvas = document.createElement('canvas');
          var ctx = subCanvas.getContext('2d');
          subCanvas.width = 2 * this.options.touchRadius;
          subCanvas.height = 2 * this.options.touchRadius;
          var center = this.options.touchRadius;
          var gradient = ctx.createRadialGradient(center, center, 1, center, center, this.options.touchRadius);
          gradient.addColorStop(0, 'rgba( 200, 200, 200, 1 )');
          gradient.addColorStop(1, 'rgba( 200, 200, 200, 0 )');
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(center, center, this.options.touchRadius, 0, 2 * Math.PI, false);
          ctx.fill();
          cached = GameController.cachedSprites[cacheId] = subCanvas;
        }
        for (var i = 0,
            j = this.touches.length; i < j; i++) {
          var touch = this.touches[i];
          if (typeof touch === 'undefined')
            continue;
          var x = this.normalizeTouchPositionX(touch.clientX),
              y = this.normalizeTouchPositionY(touch.clientY);
          this.ctx.drawImage(cached, x - this.options.touchRadius, y - this.options.touchRadius);
        }
      }
      for (var i = 0,
          j = this.touchableAreas.length; i < j; i++) {
        this.touchableAreas[i].draw();
        var area = this.touchableAreas[i];
        var touched = false;
        for (var k = 0,
            l = this.touches.length; k < l; k++) {
          var touch = this.touches[k];
          if (typeof touch === 'undefined')
            continue;
          var x = this.normalizeTouchPositionX(touch.clientX),
              y = this.normalizeTouchPositionY(touch.clientY);
          if ((area.check(x, y)) !== false) {
            if (!touched)
              touched = this.touches[k];
          }
        }
        if (touched) {
          if (!area.active)
            area.touchStartWrapper(touched);
          area.touchMoveWrapper(touched);
        } else if (area.active) {
          area.touchEndWrapper(touched);
        }
      }
      window.requestAnimationFrame(this.renderWrapper);
    },
    renderWrapper: function() {
      GameController.render();
    }
  };
  var TouchableArea = (function() {
    function TouchableArea() {}
    TouchableArea.prototype.touchStart = null;
    TouchableArea.prototype.touchMove = null;
    TouchableArea.prototype.touchEnd = null;
    TouchableArea.prototype.type = 'area';
    TouchableArea.prototype.id = false;
    TouchableArea.prototype.active = false;
    TouchableArea.prototype.setTouchStart = function(callback) {
      this.touchStart = callback;
    };
    TouchableArea.prototype.touchStartWrapper = function(e) {
      if (this.touchStart)
        this.touchStart();
      this.active = true;
    };
    TouchableArea.prototype.setTouchMove = function(callback) {
      this.touchMove = callback;
    };
    TouchableArea.prototype.lastPosX = 0;
    TouchableArea.prototype.lastPosY = 0;
    TouchableArea.prototype.touchMoveWrapper = function(e) {
      if (this.touchMove && (e.clientX != TouchableArea.prototype.lastPosX || e.clientY != TouchableArea.prototype.lastPosY)) {
        this.touchMove();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
      this.active = true;
    };
    TouchableArea.prototype.setTouchEnd = function(callback) {
      this.touchEnd = callback;
    };
    TouchableArea.prototype.touchEndWrapper = function(e) {
      if (this.touchEnd)
        this.touchEnd();
      this.active = false;
      GameController.render();
    };
    return TouchableArea;
  })();
  var TouchableDirection = (function(__super) {
    __extends(TouchableDirection, __super);
    function TouchableDirection(options) {
      for (var i in options) {
        if (i == 'x')
          this[i] = GameController.getPixels(options[i], 'x');
        else if (i == 'y' || i == 'height' || i == 'width')
          this[i] = GameController.getPixels(options[i], 'y');
        else
          this[i] = options[i];
      }
      this.draw();
    }
    TouchableDirection.prototype.type = 'direction';
    TouchableDirection.prototype.check = function(touchX, touchY) {
      var distanceX,
          distanceY;
      if ((Math.abs(touchX - this.x) < (GameController.options.touchRadius / 2) || (touchX > this.x)) && (Math.abs(touchX - (this.x + this.width)) < (GameController.options.touchRadius / 2) || (touchX < this.x + this.width)) && (Math.abs(touchY - this.y) < (GameController.options.touchRadius / 2) || (touchY > this.y)) && (Math.abs(touchY - (this.y + this.height)) < (GameController.options.touchRadius / 2) || (touchY < this.y + this.height)))
        return true;
      return false;
    };
    TouchableDirection.prototype.draw = function() {
      var cacheId = this.type + '' + this.id + '' + this.active;
      var cached = GameController.cachedSprites[cacheId];
      if (!cached) {
        var subCanvas = document.createElement('canvas');
        var ctx = subCanvas.getContext('2d');
        subCanvas.width = this.width + 2 * this.stroke;
        subCanvas.height = this.height + 2 * this.stroke;
        var opacity = this.opacity || 0.9;
        if (!this.active)
          opacity *= 0.5;
        switch (this.direction) {
          case 'up':
            var gradient = ctx.createLinearGradient(0, 0, 0, this.height);
            gradient.addColorStop(0, 'rgba( 0, 0, 0, ' + (opacity * 0.5) + ' )');
            gradient.addColorStop(1, 'rgba( 0, 0, 0, ' + opacity + ' )');
            break;
          case 'left':
            var gradient = ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, 'rgba( 0, 0, 0, ' + (opacity * 0.5) + ' )');
            gradient.addColorStop(1, 'rgba( 0, 0, 0, ' + opacity + ' )');
            break;
          case 'right':
            var gradient = ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, 'rgba( 0, 0, 0, ' + opacity + ' )');
            gradient.addColorStop(1, 'rgba( 0, 0, 0, ' + (opacity * 0.5) + ' )');
            break;
          case 'down':
          default:
            var gradient = ctx.createLinearGradient(0, 0, 0, this.height);
            gradient.addColorStop(0, 'rgba( 0, 0, 0, ' + opacity + ' )');
            gradient.addColorStop(1, 'rgba( 0, 0, 0, ' + (opacity * 0.5) + ' )');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.lineWidth = this.stroke;
        ctx.strokeStyle = 'rgba( 255, 255, 255, 0.1 )';
        ctx.strokeRect(0, 0, this.width, this.height);
        cached = GameController.cachedSprites[cacheId] = subCanvas;
      }
      GameController.ctx.drawImage(cached, this.x, this.y);
    };
    return TouchableDirection;
  })(TouchableArea);
  var TouchableButton = (function(__super) {
    __extends(TouchableButton, __super);
    function TouchableButton(options) {
      for (var i in options) {
        if (i == 'x')
          this[i] = GameController.getPixels(options[i], 'x');
        else if (i == 'x' || i == 'radius')
          this[i] = GameController.getPixels(options[i], 'y');
        else
          this[i] = options[i];
      }
      this.draw();
    }
    TouchableButton.prototype.type = 'button';
    TouchableButton.prototype.check = function(touchX, touchY) {
      if ((Math.abs(touchX - this.x) < this.radius + (GameController.options.touchRadius / 2)) && (Math.abs(touchY - this.y) < this.radius + (GameController.options.touchRadius / 2)))
        return true;
      return false;
    };
    TouchableButton.prototype.draw = function() {
      var cacheId = this.type + '' + this.id + '' + this.active;
      var cached = GameController.cachedSprites[cacheId];
      if (!cached) {
        var subCanvas = document.createElement('canvas');
        var ctx = subCanvas.getContext('2d');
        ctx.lineWidth = this.stroke;
        subCanvas.width = subCanvas.height = 2 * (this.radius + ctx.lineWidth);
        var gradient = ctx.createRadialGradient(this.radius, this.radius, 1, this.radius, this.radius, this.radius);
        var textShadowColor;
        switch (this.backgroundColor) {
          case 'blue':
            gradient.addColorStop(0, 'rgba(123, 181, 197, 0.6)');
            gradient.addColorStop(1, '#105a78');
            textShadowColor = '#0A4861';
            break;
          case 'green':
            gradient.addColorStop(0, 'rgba(29, 201, 36, 0.6)');
            gradient.addColorStop(1, '#107814');
            textShadowColor = '#085C0B';
            break;
          case 'red':
            gradient.addColorStop(0, 'rgba(165, 34, 34, 0.6)');
            gradient.addColorStop(1, '#520101');
            textShadowColor = '#330000';
            break;
          case 'yellow':
            gradient.addColorStop(0, 'rgba(219, 217, 59, 0.6)');
            gradient.addColorStop(1, '#E8E10E');
            textShadowColor = '#BDB600';
            break;
          case 'white':
          default:
            gradient.addColorStop(0, 'rgba( 255,255,255,.3 )');
            gradient.addColorStop(1, '#eee');
            break;
        }
        if (this.active)
          ctx.fillStyle = textShadowColor;
        else
          ctx.fillStyle = gradient;
        ctx.strokeStyle = textShadowColor;
        ctx.beginPath();
        ctx.arc(subCanvas.width / 2, subCanvas.width / 2, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        if (this.label) {
          ctx.fillStyle = textShadowColor;
          ctx.font = 'bold ' + (this.fontSize || subCanvas.height * 0.35) + 'px Verdana';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.label, subCanvas.height / 2 + 2, subCanvas.height / 2 + 2);
          ctx.fillStyle = this.fontColor;
          ctx.font = 'bold ' + (this.fontSize || subCanvas.height * 0.35) + 'px Verdana';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.label, subCanvas.height / 2, subCanvas.height / 2);
        }
        cached = GameController.cachedSprites[cacheId] = subCanvas;
      }
      GameController.ctx.drawImage(cached, this.x, this.y);
    };
    return TouchableButton;
  })(TouchableArea);
  var TouchableJoystick = (function(__super) {
    __extends(TouchableJoystick, __super);
    function TouchableJoystick(options) {
      for (var i in options)
        this[i] = options[i];
      this.currentX = this.currentX || this.x;
      this.currentY = this.currentY || this.y;
    }
    TouchableJoystick.prototype.type = 'joystick';
    TouchableJoystick.prototype.check = function(touchX, touchY) {
      if ((Math.abs(touchX - this.x) < this.radius + (GameController.options.touchRadius / 2)) && (Math.abs(touchY - this.y) < this.radius + (GameController.options.touchRadius / 2)))
        return true;
      return false;
    };
    TouchableJoystick.prototype.moveDetails = {};
    TouchableJoystick.prototype.touchMoveWrapper = function(e) {
      this.currentX = GameController.normalizeTouchPositionX(e.clientX);
      this.currentY = GameController.normalizeTouchPositionY(e.clientY);
      if (this.touchMove) {
        if (this.moveDetails.dx != this.currentX - this.x && this.moveDetails.dy != this.y - this.currentY) {
          this.moveDetails.dx = this.currentX - this.x;
          this.moveDetails.dy = this.y - this.currentY;
          this.moveDetails.max = this.radius + (GameController.options.touchRadius / 2);
          this.moveDetails.normalizedX = this.moveDetails.dx / this.moveDetails.max;
          this.moveDetails.normalizedY = this.moveDetails.dy / this.moveDetails.max;
          this.touchMove(this.moveDetails);
        }
      }
      this.active = true;
    };
    TouchableJoystick.prototype.draw = function() {
      if (!this.id)
        return false;
      var cacheId = this.type + '' + this.id + '' + this.active;
      var cached = GameController.cachedSprites[cacheId];
      if (!cached) {
        var subCanvas = document.createElement('canvas');
        this.stroke = this.stroke || 2;
        subCanvas.width = subCanvas.height = 2 * (this.radius + this.stroke);
        var ctx = subCanvas.getContext('2d');
        ctx.lineWidth = this.stroke;
        if (this.active) {
          var gradient = ctx.createRadialGradient(0, 0, 1, 0, 0, this.radius);
          gradient.addColorStop(0, 'rgba( 200,200,200,.5 )');
          gradient.addColorStop(1, 'rgba( 200,200,200,.9 )');
          ctx.strokeStyle = '#000';
        } else {
          var gradient = ctx.createRadialGradient(0, 0, 1, 0, 0, this.radius);
          gradient.addColorStop(0, 'rgba( 200,200,200,.2 )');
          gradient.addColorStop(1, 'rgba( 200,200,200,.4 )');
          ctx.strokeStyle = 'rgba( 0,0,0,.4 )';
        }
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.radius, this.radius, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        cached = GameController.cachedSprites[cacheId] = subCanvas;
      }
      GameController.ctx.fillStyle = '#444';
      GameController.ctx.beginPath();
      GameController.ctx.arc(this.x, this.y, this.radius * 0.7, 0, 2 * Math.PI, false);
      GameController.ctx.fill();
      GameController.ctx.stroke();
      GameController.ctx.drawImage(cached, this.currentX - this.radius, this.currentY - this.radius);
    };
    return TouchableJoystick;
  })(TouchableArea);
  var TouchableCircle = (function(__super) {
    __extends(TouchableCircle, __super);
    function TouchableCircle(options) {
      for (var i in options) {
        if (i == 'x')
          this[i] = GameController.getPixels(options[i], 'x');
        else if (i == 'x' || i == 'radius')
          this[i] = GameController.getPixels(options[i], 'y');
        else
          this[i] = options[i];
      }
      this.draw();
    }
    TouchableCircle.prototype.check = function(touchX, touchY) {
      return false;
    };
    TouchableCircle.prototype.draw = function() {
      GameController.ctx.fillStyle = 'rgba( 0, 0, 0, 0.5 )';
      GameController.ctx.beginPath();
      GameController.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      GameController.ctx.fill();
    };
    return TouchableCircle;
  })(TouchableArea);
  (function() {
    if (typeof module !== "undefined")
      return;
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());
})(typeof module !== "undefined" ? module.exports : window);


},{}],2:[function(require,module,exports){
"use strict";
var globals = {
  bullets: null,
  enemies: null,
  player: null
};
var update = require('./game/update');
var preload = require('./game/preload');
var create = require('./game/create');
var game = window.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});


},{"./game/create":3,"./game/preload":5,"./game/update":7}],3:[function(require,module,exports){
"use strict";
function resetBullet(bullet) {
  bullet.kill();
}
;
function setupEnemy(enemy) {
  enemy.anchor.x = 0.5;
  enemy.anchor.y = 0.5;
  enemy.animations.add('explode');
}
;
module.exports = function() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  this.spaceBG = this.add.tileSprite(0, 0, 800, 600, 'bg');
  this.spaceBG.autoScroll(0, 75);
  game.input.gamepad.start();
  var GameController = window.GameController = require('game-controller').GameController;
  GameController.init({
    left: {
      type: 'joystick',
      joystick: {
        touchStart: function() {},
        touchMove: function(joystick_details) {
          game.input.joystickLeft = joystick_details;
        },
        touchEnd: function() {
          game.input.joystickLeft = null;
        }
      }
    },
    right: {type: 'none'}
  });
  window.player = require('./player')(game);
  player.init();
  var bullets = window.bullets = this.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;
  bullets.createMultiple(10, 'bullets', 'bullet-green.png');
  bullets.setAll('anchor.x', 0.5);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
  window.explosions = game.add.group();
  explosions.createMultiple(30, 'explode');
  explosions.forEach(setupEnemy, this);
  window.music = game.add.audio('stage-1');
  window.explosionsSmallest = game.add.group();
  explosionsSmallest.createMultiple(30, 'explode-smallest');
  explosionsSmallest.forEach(setupEnemy, this);
  window.boom = game.add.audio('boom');
  window.lazer = game.add.audio('lazer');
  window.stage1 = require('./scenes/scene-1')(game);
  stage1.init();
};


},{"./player":4,"./scenes/scene-1":6,"game-controller":1}],4:[function(require,module,exports){
"use strict";
module.exports = function(game) {
  var player,
      cursors;
  var right_bulletTime = 0,
      left_bulletTime = 0;
  var playerSpeed = 200;
  function fireBullet() {
    if (game.time.now > right_bulletTime) {
      var right_bullet = bullets.getFirstExists(false);
      if (right_bullet) {
        right_bullet.reset(player.x, player.y + 16);
        right_bullet.body.velocity.y = -300;
        right_bulletTime = game.time.now + 1000;
      }
    }
    if (game.time.now > left_bulletTime + 20) {
      var left_bullet = bullets.getFirstExists(false);
      if (left_bullet) {
        left_bullet.reset(player.x + 26, player.y + 16);
        left_bullet.body.velocity.y = -300;
        left_bulletTime = game.time.now + 1000;
      }
    }
  }
  return {
    init: function() {
      player = game.add.sprite((400 - 16), 500, 'ship');
      game.physics.enable(player, Phaser.Physics.ARCADE);
      cursors = game.input.keyboard.createCursorKeys();
    },
    update: function() {
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
      if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        fireBullet();
      }
      if (game.input.joystickLeft) {
        player.body.velocity.setTo(game.input.joystickLeft.normalizedX * 200, game.input.joystickLeft.normalizedY * playerSpeed * -1);
      } else {
        player.body.velocity.setTo(0, 0);
      }
    }
  };
};


},{}],5:[function(require,module,exports){
"use strict";
module.exports = function() {
  this.load.atlas('bullets', 'img/assets/bullets.png', 'sheets/bullets');
  this.load.image('blue_bullet', 'img/assets/blue-bullet.png');
  this.load.image('bg', 'img/backgrounds/bg.png');
  this.load.atlas('atlas', 'img/enemy-fighters/enemy-fighters.png', 'sheets/enemy-fighters');
  this.load.atlas('bosses', 'img/enemy-bosses/enemy-bosses.png', 'sheets/bosses');
  this.load.image('ship', 'img/space_ship_base.png');
  this.load.spritesheet('explode', 'img/assets/explode.png', 128, 128);
  this.load.spritesheet('explode-small', 'img/assets/explode-small.png', 32, 32);
  this.load.spritesheet('explode-smallest', 'img/assets/explode-smallest.png', 16, 16);
  this.load.audio('boom', ['audio/effects/explode.wav']);
  this.load.audio('lazer', ['audio/effects/lazer.wav']);
  this.load.audio('stage-1', ['audio/background/stage-1.mp3', 'audio/background/stage-1.ogg']);
};


},{}],6:[function(require,module,exports){
"use strict";
module.exports = function(game) {
  var raptors,
      miniBosses;
  var spawn = function() {
    var x = game.rnd.integerInRange(40, 600),
        y = game.rnd.integerInRange(0, 10);
    var _alien = aliens.create(x, y, 'atlas', 'bad-guy1.png');
    _alien.anchor.setTo(0.5, 0.5);
    _alien.body.moves = true;
    _alien.body.velocity.setTo(0, 100);
  };
  var collisionHandler = function(bullet, alien) {
    bullet.kill();
    alien.kill();
    var x = alien.body.x,
        y = alien.body.y;
    var explosion = explosions.getFirstExists(false);
    explosion.reset(alien.body.x, alien.body.y);
    explosion.play('explode', 30, false, true);
  };
  var bossCollisionHandler = function(bullet, boss) {
    var x = boss.body.x,
        y = boss.body.y;
    console.log(boss.hitCount);
    boss.hitCount = boss.hitCount - 1;
    var ex = explosionsSmallest.getFirstExists(false);
    ex.reset(bullet.body.x, bullet.body.y);
    bullet.kill();
    ex.play('explode-smallest', 30, false, true);
    if (boss.hitCount <= 0) {
      var explosion = explosions.getFirstExists(false);
      explosion.reset(boss.body.x, boss.body.y);
      explosion.play('explode', 30, false, true);
      boss.kill();
    }
  };
  var spawnRaptor = function() {
    var x = game.rnd.integerInRange(40, 600),
        y = game.rnd.integerInRange(0, 10);
    var _alien = raptors.create(x, y, 'atlas', 'raptor-1.png');
    _alien.anchor.setTo(0.5, 0.5);
    _alien.body.moves = true;
    _alien.body.velocity.setTo(0, 150);
  };
  var spawnMiniBoss = function() {
    var x = game.rnd.integerInRange(40, 600),
        y = game.rnd.integerInRange(0, 10);
    var _alien = miniBosses.create(x, y, 'bosses', 'boss-1.png');
    _alien.anchor.setTo(0.5, 0.5);
    _alien.body.moves = true;
    _alien.body.velocity.setTo(0, 70);
    _alien.hitCount = 5;
  };
  var enemyFactory;
  return {
    init: function() {
      window.aliens = game.add.group();
      aliens.enableBody = true;
      aliens.physicsBodyType = Phaser.Physics.ARCADE;
      raptors = game.add.group();
      raptors.enableBody = true;
      raptors.physicsBodyType = Phaser.Physics.ARCADE;
      miniBosses = game.add.group();
      miniBosses.enableBody = true;
      miniBosses.physicsBodyType = Phaser.Physics.ARCADE;
      game.time.events.repeat(Phaser.Timer.SECOND * 2, 105, spawn, this);
      game.time.events.repeat(Phaser.Timer.SECOND * 5, 25, spawnRaptor, this);
      game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, spawnMiniBoss, this);
    },
    update: function() {
      game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
      game.physics.arcade.overlap(bullets, raptors, collisionHandler, null, this);
      game.physics.arcade.overlap(bullets, miniBosses, bossCollisionHandler, null, this);
    },
    destroy: function() {}
  };
};


},{}],7:[function(require,module,exports){
"use strict";
var bulletTime = 0;
function resetBullet(bullet) {
  bullet.kill();
}
;
var right_bulletTime = 0,
    left_bulletTime = 0;
module.exports = function() {
  var bullets = window.bullets;
  var cursors = window.cursors;
  player.update();
  stage1.update();
};


},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxnYW1lLWNvbnRyb2xsZXJcXGdhbWVjb250cm9sbGVyLmpzIiwiQzpcXFVzZXJzXFxLZXZpblxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxcY3JlYXRlLmpzIiwiQzpcXFVzZXJzXFxLZXZpblxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHBsYXllci5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFxwcmVsb2FkLmpzIiwiQzpcXFVzZXJzXFxLZXZpblxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHNjZW5lc1xcc2NlbmUtMS5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFx1cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNHQTtBQUFBLENBQUEsQUFBRSxTQUFTLE9BQU8sQ0FBRTtBQUNmLENBQUosSUFBSSxDQUFBLE9BQU8sRUFBRyxDQUFBLEVBQUUsTUFBTSxDQUFDO0FBQ25CLENBQUosSUFBSSxDQUFBLFNBQVMsRUFBRyxDQUFBLEVBQUUsZUFBZSxDQUFDO0FBQzlCLENBQUosSUFBSSxDQUFBLFNBQVMsRUFBRyxVQUFTLEtBQUssQ0FB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LENBQUEsQ0FBQyxFQUFHLEVBQUM7QUFBRSxDQUFBLFVBQUMsRUFBRyxDQUFBLE9BQU8sT0FBTyxDQUFFLENBQUEsQ0FBQyxFQUFHLEVBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUM5QztBQUNLLENBQUosVUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ2pDLENBQUosVUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBRXJDLENBQUEsY0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsQ0FBQSxJQUFJLFVBQVUsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFFLElBQUcsQ0FBRSxDQUFDO0FBQ2pFLENBQUEsY0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsQ0FBQSxJQUFJLFVBQVUsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFFLElBQUcsQ0FBRSxDQUFDO0FBRWpFLENBQUEsV0FBSSxVQUFVLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7T0FDN0I7Q0FBQSxJQUNEO0FBRUQsQ0FBQSxXQUFRLENBQUUsVUFBVSxJQUFJLENBQUc7QUFDdEIsQ0FBSixRQUFJLENBQUEsSUFBSSxFQUFHLENBQUEsSUFBSSxRQUFRLENBQUUsSUFBSSxDQUFFLEtBQUssR0FBSSxHQUFFLENBQUM7QUFJdkMsQ0FBSixRQUFJLENBQUEsS0FBSyxFQUFHLEtBQUksQ0FBQztBQUViLENBQUosUUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ2pDLENBQUosUUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0NBSXJDLFNBQUksSUFBSSxHQUFHLEdBQUksQ0FBQSxJQUFJLEtBQUssQ0FBQSxFQUFJLENBQUEsSUFBSSxLQUFLLENBQUEsRUFBSSxDQUFBLElBQUksTUFBTSxDQUNuRDtBQUNLLENBQUosVUFBSSxDQUFBLE9BQU8sRUFBRztBQUNiLENBQUEsVUFBQyxDQUFFLEtBQUk7QUFDUCxDQUFBLFVBQUMsQ0FBRSxLQUFJO0FBQ1AsQ0FBQSxlQUFNLENBQUUsQ0FBQSxJQUFJLE1BQU0sT0FBTztDQUFBLFFBQ3pCLENBQUE7QUFDRyxDQUFKLFVBQUksQ0FBQSxNQUFNLEVBQUcsSUFBSSxnQkFBZSxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBQzVDLENBQUEsV0FBSSxlQUFlLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztPQUNuQztBQUdELENBSEMsU0FHRyxJQUFJLEdBQUcsSUFBSyxNQUFLLENBQ3JCO0FBQ0MsQ0FBQSxXQUFJLEdBQUcsRUFBRSxFQUFHLENBQUEsSUFBSSxFQUFHLENBQUEsSUFBSSxVQUFVLENBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBRSxJQUFHLENBQUUsQ0FBQSxDQUFHLEVBQUMsQ0FBQztBQUM1RCxDQUFBLFdBQUksR0FBRyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEdBQUcsT0FBTyxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUksQ0FBQSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEtBQUssT0FBTyxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUcsRUFBQyxDQUFFLENBQUM7QUFDNUcsQ0FBQSxXQUFJLEdBQUcsVUFBVSxFQUFHLEtBQUksQ0FBQztBQUN6QixDQUFBLFdBQUksc0JBQXNCLENBQUUsSUFBSSxHQUFHLENBQUUsQ0FBQztPQUN0QztBQUdELENBSEMsU0FHRyxJQUFJLEtBQUssSUFBSyxNQUFLLENBQ3ZCO0FBQ0MsQ0FBQSxXQUFJLEtBQUssRUFBRSxFQUFHLENBQUEsSUFBSSxFQUFHLEVBQUUsSUFBSSxVQUFVLENBQUUsSUFBSSxLQUFLLE1BQU0sQ0FBRSxJQUFHLENBQUUsQ0FBQSxDQUFHLENBQUEsSUFBSSxVQUFVLENBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBRSxJQUFHLENBQUUsQ0FBQSxDQUFHLEVBQUMsQ0FBRSxDQUFDO0FBQzNHLENBQUEsV0FBSSxLQUFLLEVBQUUsRUFBRyxDQUFBLElBQUksRUFBRyxFQUFFLElBQUksVUFBVSxDQUFFLElBQUksS0FBSyxPQUFPLENBQUUsSUFBRyxDQUFFLENBQUEsQ0FBRyxFQUFDLENBQUUsQ0FBQztBQUNyRSxDQUFBLFdBQUksS0FBSyxVQUFVLEVBQUcsT0FBTSxDQUFDO0FBQzdCLENBQUEsV0FBSSxzQkFBc0IsQ0FBRSxJQUFJLEtBQUssQ0FBRSxDQUFDO09BQ3hDO0FBR0QsQ0FIQyxTQUdHLElBQUksS0FBSyxJQUFLLE1BQUssQ0FDdkI7QUFDQyxDQUFBLFdBQUksS0FBSyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsQ0FBQSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEtBQUssTUFBTSxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUcsRUFBQyxDQUFDO0FBQ2hFLENBQUEsV0FBSSxLQUFLLEVBQUUsRUFBRyxDQUFBLElBQUksRUFBRyxFQUFFLElBQUksVUFBVSxDQUFFLElBQUksS0FBSyxPQUFPLENBQUUsSUFBRyxDQUFFLENBQUEsQ0FBRyxFQUFDLENBQUUsQ0FBQztBQUNyRSxDQUFBLFdBQUksS0FBSyxVQUFVLEVBQUcsT0FBTSxDQUFDO0FBQzdCLENBQUEsV0FBSSxzQkFBc0IsQ0FBRSxJQUFJLEtBQUssQ0FBRSxDQUFDO09BQ3hDO0FBR0QsQ0FIQyxTQUdHLElBQUksTUFBTSxJQUFLLE1BQUssQ0FDeEI7QUFDQyxDQUFBLFdBQUksTUFBTSxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUcsRUFBQyxDQUFFLENBQUM7QUFDbkUsQ0FBQSxXQUFJLE1BQU0sRUFBRSxFQUFHLENBQUEsSUFBSSxFQUFHLENBQUEsSUFBSSxVQUFVLENBQUUsSUFBSSxNQUFNLE9BQU8sQ0FBRSxJQUFHLENBQUUsQ0FBQSxD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RSxpQkFBZ0IsQ0FBRSxLQUFJLENBQUUsS0FBSSxDQUFDLENBQUM7QUFDbkUsQ0FBQSxTQUFJLFFBQVEsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFFLFdBQVUsQ0FBRSxxQkFBb0IsQ0FBRSxLQUFJLENBQUUsS0FBSSxDQUFDLENBQUM7S0FDNUY7QUFDRCxDQUFBLFVBQU8sQ0FBRSxVQUFVLENBQUUsR0FFcEI7Q0FBQSxFQUNELENBQUE7Q0FDRCxDQUFBO0NBQUE7OztBQzVGRDtBQUFJLENBQUosRUFBSSxDQUFBLFVBQVUsRUFBRyxFQUFDLENBQUM7Q0FDbEIsT0FBUyxZQUFXLENBQUUsTUFBTSxDQUFFO0FBRTNCLENBQUEsT0FBTSxLQUFLLEVBQUUsQ0FBQztDQUVqQjtBQUFBLENBQUEsQUFBQztBQUdNLENBQUosRUFBSSxDQUFBLGdCQUFnQixFQUFHLEVBQUM7QUFBRSxDQUFBLGtCQUFlLEVBQUcsRUFBQyxDQUFDO0FBRWxELENBQUEsS0FBTSxRQUFRLEVBQUksVUFBVSxDQUFFO0FBQ3RCLENBQUosSUFBSSxDQUFBLE9BQU8sRUFBRyxDQUFBLE1BQU0sUUFBUSxDQUFDO0FBR3pCLENBQUosSUFBSSxDQUFBLE9BQU8sRUFBRyxDQUFBLE1BQU0sUUFBUSxDQUFDO0FBSTdCLENBQUEsT0FBTSxPQUFPLEVBQUUsQ0FBQztBQUVaLENBQUEsT0FBTSxPQUFPLEVBQUUsQ0FBQztDQUV2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBIZWxwZXJzIFxyXG4gKi9cclxuKCBmdW5jdGlvbihleHBvcnRzKSB7XHJcblx0dmFyIF9fc2xpY2UgPSBbXS5zbGljZTtcclxuXHR2YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XHJcblx0dmFyIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xyXG5cdC8qICQuZXh0ZW5kIGZ1bmN0aW9uYWxpdHkgKi9cclxuXHRmdW5jdGlvbiBleHRlbmQoIHRhcmdldCwgc3JjIClcclxuXHR7XHJcblx0XHR2YXIgb3B0aW9ucywgbmFtZSwgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxyXG5cdFx0XHRpID0gMSxcclxuXHRcdFx0bGVuZ3RoID0gMixcclxuXHRcdFx0ZGVlcCA9IHRydWU7XHJcblx0XHJcblx0XHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXHJcblx0XHRpZiggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKVxyXG5cdFx0e1xyXG5cdFx0XHRkZWVwID0gdGFyZ2V0O1xyXG5cdFx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XHJcblx0XHRcdGkgPSAyO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0Ly8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nKCBwb3NzaWJsZSBpbiBkZWVwIGNvcHkgKVxyXG5cdFx0aWYoIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIXR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicgKVxyXG5cdFx0e1xyXG5cdFx0XHR0YXJnZXQgPSB7fTtcclxuXHRcdH1cclxuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcclxuXHRcdGlmKCBvcHRpb25zID0gc3JjIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxyXG5cdFx0XHRmb3IoIG5hbWUgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XHJcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XHJcblx0XHJcblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxyXG5cdFx0XHRcdGlmKCB0YXJnZXQgPT09IGNvcHkgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcclxuXHRcdFx0XHRpZiggZGVlcCAmJiggdHlwZW9mIGNvcHkgPT0gJ29iamVjdCcgfHwoIGNvcHlJc0FycmF5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCAgY29weSAgKSA9PT0gJ1tvYmplY3QgQXJyYXldJyApICkgKSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiggY29weUlzQXJyYXkgKSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCAgc3JjICApID09PSAnW29iamVjdCBBcnJheV0nID8gc3JjIDogW107XHJcblx0XHJcblx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgdHlwZW9mIHNyYyA9PSAnb2JqZWN0JyA/IHNyYyA6IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXHJcblx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoIGNsb25lLCBjb3B5ICk7XHJcblx0XHJcblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXHJcblx0XHRcdFx0fSBcclxuXHRcdFx0XHRlbHNlIGlmKCB0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcgKSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRhcmdldDtcclxuXHR9XHJcblx0XHJcblx0Ly8gTWFrZSBhdmFpbGFibGUgdG8gd2luZG93XHJcblx0ZXhwb3J0cy5HYW1lQ29udHJvbGxlciA9IHtcclxuXHRcdFxyXG5cdFx0Ly8gRGVmYXVsdCBvcHRpb25zLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRsZWZ0OiB7IFxyXG5cdFx0XHRcdHR5cGU6ICdkcGFkJywgXHJcblx0XHRcdFx0cG9zaXRpb246IHsgbGVmdDogJzEzJScsIGJvdHRvbTogJzIyJScgfSxcclxuXHRcdFx0XHRkcGFkOiB7XHJcblx0XHRcdFx0XHR1cDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyLFxyXG5cdFx0XHRcdFx0XHR0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzOCApO1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzggKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM4ICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsZWZ0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM3ICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzNyApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzcgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgNDAgKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDQwICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCA0MCApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cmlnaHQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzkgKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM5ICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOSApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRqb3lzdGljazoge1xyXG5cdFx0XHRcdFx0cmFkaXVzOiA2MCxcclxuXHRcdFx0XHRcdHRvdWNoTW92ZTogZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCBlICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyaWdodDogeyBcclxuXHRcdFx0XHR0eXBlOiAnYnV0dG9ucycsIFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7IHJpZ2h0OiAnMTclJywgYm90dG9tOiAnMjglJyB9LCBcclxuXHRcdFx0XHRidXR0b25zOiBbXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAnLTEzJScsIHk6IDAgfSwgbGFiZWw6ICdYJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLCBmb250Q29sb3I6ICcjZmZmJywgdG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdC8vIEJsdWUgaXMgY3VycmVudGx5IG1hcHBlZCB0byB1cCBidXR0b25cclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzggKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOCApO1xyXG5cdFx0XHRcdFx0fSwgdG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOCApO1x0XHJcblx0XHRcdFx0XHR9IH0sXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAwLCB5OiAnLTExJScgfSwgbGFiZWw6ICdZJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsIGZvbnRDb2xvcjogJyNmZmYnIH0sXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAnMTMlJywgeTogMCB9LCBsYWJlbDogJ0InLCByYWRpdXM6ICc3JScsIHN0cm9rZTogMiwgYmFja2dyb3VuZENvbG9yOiAncmVkJywgZm9udENvbG9yOiAnI2ZmZicsIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBSZWQgaXMgY3VycmVudGx5IG1hcHBlZCB0byBkb3duIGJ1dHRvbiwgYW5kIHNwYWNlIGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzMiApO1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDMyICk7XHJcblx0XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDQwICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgNDAgKTtcclxuXHRcdFx0XHRcdH0sIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzIgKTtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgNDAgKTtcclxuXHRcdFx0XHRcdH0gfSxcclxuXHRcdFx0XHRcdHsgb2Zmc2V0OiB7IHg6IDAsIHk6ICcxMSUnIH0sIGxhYmVsOiAnQScsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsIGZvbnRDb2xvcjogJyNmZmYnLCB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gR3JlZW4gaXMgY3VycmVudGx5IG1hcHBlZCB0byB1cCBidXR0b25cclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzggKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOCApO1xyXG5cdFx0XHRcdFx0fSwgdG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOCApO1x0XHJcblx0XHRcdFx0XHR9ICB9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRkcGFkOiB7XHJcblx0XHRcdFx0XHR1cDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bGVmdDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE1JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzclJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZG93bjoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cmlnaHQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0am95c3RpY2s6IHtcclxuXHRcdFx0XHRcdHJhZGl1czogNjAsXHJcblx0XHRcdFx0XHR0b3VjaE1vdmU6IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyggZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hSYWRpdXM6IDQ1XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyBBcmVhcyAob2JqZWN0cykgb24gdGhlIHNjcmVlbiB0aGF0IGNhbiBiZSB0b3VjaGVkXHJcblx0XHR0b3VjaGFibGVBcmVhczogW10sXHJcblx0XHRcclxuXHRcdC8vIE11bHRpLXRvdWNoXHJcblx0XHR0b3VjaGVzOiBbXSxcclxuXHRcdFxyXG5cdFx0Ly8gSGVhdnkgc3ByaXRlcyAod2l0aCBncmFkaWVudHMpIGFyZSBjYWNoZWQgYXMgYSBjYW52YXMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxyXG5cdFx0Y2FjaGVkU3ByaXRlczoge30sXHJcblx0XHRcclxuXHRcdHBhdXNlZDogZmFsc2UsXHJcblx0XHRcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlcmUncyBubyB0b3VjaCBzdXBwb3J0XHJcblx0XHRcdGlmKCAhICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFxyXG5cdFxyXG5cdFx0XHQvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgYW5kIHNwZWNpZmllZCBvcHRpb25zXHJcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0XHRleHRlbmQoIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1x0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBHcmFiIHRoZSBjYW52YXMgaWYgb25lIHdhc24ndCBwYXNzZWRcclxuXHRcdFx0dmFyIGVsZTtcclxuXHRcdFx0aWYoICF0aGlzLm9wdGlvbnMuY2FudmFzIHx8ICEoIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCB0aGlzLm9wdGlvbnMuY2FudmFzICkgKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdjYW52YXMnIClbMF07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiggZWxlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jYW52YXMgPSBlbGU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMub3B0aW9ucy5jdHggPSB0aGlzLm9wdGlvbnMuY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENyZWF0ZSBhIGNhbnZhcyB0aGF0IGdvZXMgZGlyZWN0bHkgb24gdG9wIG9mIHRoZSBnYW1lIGNhbnZhc1xyXG5cdFx0XHR0aGlzLmNyZWF0ZU92ZXJsYXlDYW52YXMoKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ3JlYXRlcyB0aGUgY2FudmFzIHRoYXQgc2l0cyBvbiB0b3Agb2YgdGhlIGdhbWUncyBjYW52YXMgYW5kIGhvbGRzIGdhbWUgY29udHJvbHMgXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZU92ZXJsYXlDYW52YXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBTY2FsZSB0byBzYW1lIHNpemUgYXMgb3JpZ2luYWwgY2FudmFzXHJcblx0XHRcdHRoaXMucmVzaXplKCB0cnVlICk7XHJcblx0XHRcdFxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2JvZHknIClbMF0uYXBwZW5kQ2hpbGQoIHRoaXMuY2FudmFzICk7XHJcblx0XHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBXYWl0IGZvciBhbnkgb3RoZXIgZXZlbnRzIHRvIGZpbmlzaFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBHYW1lQ29udHJvbGxlci5yZXNpemUuY2FsbCggX3RoaXMgKTsgfSwgMSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gU2V0IHRoZSB0b3VjaCBldmVudHMgZm9yIHRoaXMgbmV3IGNhbnZhc1xyXG5cdFx0XHR0aGlzLnNldFRvdWNoRXZlbnRzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMb2FkIGluIHRoZSBpbml0aWFsIFVJIGVsZW1lbnRzXHJcblx0XHRcdHRoaXMubG9hZFNpZGUoICdsZWZ0JyApO1xyXG5cdFx0XHR0aGlzLmxvYWRTaWRlKCAncmlnaHQnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBTdGFydHMgdXAgdGhlIHJlbmRlcmluZyAvIGRyYXdpbmdcclxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCAhIHRoaXMudG91Y2hlcyB8fCB0aGlzLnRvdWNoZXMubGVuZ3RoID09IDAgKVxyXG5cdFx0XHRcdHRoaXMucGF1c2VkID0gdHJ1ZTsgLy8gcGF1c2UgdW50aWwgYSB0b3VjaCBldmVudFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cGl4ZWxSYXRpbzogMSxcclxuXHRcdHJlc2l6ZTogZnVuY3Rpb24oIGZpcnN0VGltZSApIHtcclxuXHRcdFx0Ly8gU2NhbGUgdG8gc2FtZSBzaXplIGFzIG9yaWdpbmFsIGNhbnZhc1xyXG5cdFx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMub3B0aW9ucy5jYW52YXMud2lkdGg7XHJcblx0XHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMub3B0aW9ucy5jYW52YXMuaGVpZ2h0O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gR2V0IGluIG9uIHRoaXMgcmV0aW5hIGFjdGlvblxyXG5cdFx0XHRpZiggdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS53aWR0aCAmJiB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLmhlaWdodCAmJiB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLmhlaWdodC5pbmRleE9mKCAncHgnICkgIT09IC0xICkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUud2lkdGg7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS5oZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5waXhlbFJhdGlvID0gdGhpcy5jYW52YXMud2lkdGggLyBwYXJzZUludCggdGhpcy5jYW52YXMuc3R5bGUud2lkdGggKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5vZmZzZXRMZWZ0ICsgJ3B4JztcclxuXHRcdFx0dGhpcy5jYW52YXMuc3R5bGUudG9wID0gdGhpcy5vcHRpb25zLmNhbnZhcy5vZmZzZXRUb3AgKyAncHgnO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoICdzdHlsZScsIHRoaXMuY2FudmFzLmdldEF0dHJpYnV0ZSggJ3N0eWxlJyApICsnIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7JyApO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoICFmaXJzdFRpbWUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBjdXJyZW50IGJ1dHRvbnNcclxuXHRcdFx0XHR0aGlzLnRvdWNoYWJsZUFyZWFzID0gW107XHJcblx0XHRcdFx0Ly8gQ2xlYXIgb3V0IHRoZSBjYWNoZWQgc3ByaXRlc1xyXG5cdFx0XHRcdHRoaXMuY2FjaGVkU3ByaXRlcyA9IFtdO1xyXG5cdFx0XHRcdC8vIFJlbG9hZCBpbiB0aGUgaW5pdGlhbCBVSSBlbGVtZW50c1xyXG5cdFx0XHRcdHRoaXMucmVsb2FkU2lkZSggJ2xlZnQnICk7XHJcblx0XHRcdFx0dGhpcy5yZWxvYWRTaWRlKCAncmlnaHQnICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgc2NhbGVkIHBpeGVscy4gR2l2ZW4gdGhlIHZhbHVlIHBhc3NlZFxyXG5cdFx0ICogQHBhcmFtIHtpbnQvc3RyaW5nfSB2YWx1ZSAtIGVpdGhlciBhbiBpbnRlZ2VyIGZvciAjIG9mIHBpeGVscywgb3IgJ3glJyBmb3IgcmVsYXRpdmVcclxuXHRcdCAqIEBwYXJhbSB7Y2hhcn0gYXhpcyAtIHgsIHlcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UGl4ZWxzOiBmdW5jdGlvbiggdmFsdWUsIGF4aXMgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiggdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0cmV0dXJuIDBcclxuXHRcdFx0ZWxzZSBpZiggdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyApXHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHRlbHNlIC8vIGEgcGVyY2VudGFnZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGF4aXMgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHJldHVybiAoIHBhcnNlSW50KCB2YWx1ZSApIC8gMTAwICkgKiB0aGlzLmNhbnZhcy53aWR0aDtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gKCBwYXJzZUludCggdmFsdWUgKSAvIDEwMCApICogdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNpbXVsYXRlcyBhIGtleSBwcmVzc1xyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtICdkb3duJywgJ3VwJ1xyXG5cdFx0ICogQHBhcmFtIHtjaGFyfSBjaGFyYWN0ZXJcclxuXHRcdCAqL1xyXG5cdFx0c2ltdWxhdGVLZXlFdmVudDogZnVuY3Rpb24oIGV2ZW50TmFtZSwga2V5Q29kZSApIHtcclxuXHRcdFx0aWYoIHR5cGVvZiB3aW5kb3cub25rZXlkb3duID09PSAndW5kZWZpbmVkJyApIC8vIE5vIGtleWJvYXJkLCBjYW4ndCBzaW11bGF0ZS4uLlxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0LyogSWYgdGhleSBoYXZlIGpRdWVyeSwgdXNlIGl0IGJlY2F1c2UgaXQgd29ya3MgYmV0dGVyIGZvciBtb2JpbGUgc2FmYXJpICovXHJcblx0XHRcdGlmKCBqUXVlcnkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHByZXNzID0galF1ZXJ5LkV2ZW50KCAna2V5JyArIGV2ZW50TmFtZSApO1xyXG5cdFx0XHRcdHByZXNzLmN0cmxLZXkgPSBmYWxzZTtcclxuXHRcdFx0XHRwcmVzcy53aGljaCA9IGtleUNvZGU7XHJcblx0XHRcdFx0JCggZG9jdW1lbnQgKS50cmlnZ2VyKCBwcmVzcyApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR2YXIgb0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdLZXlib2FyZEV2ZW50JyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQ2hyb21pdW0gSGFja1xyXG5cdFx0XHRpZiggbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpICE9PSAtMSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG9FdmVudCwgJ2tleUNvZGUnLCB7XHJcblx0XHRcdFx0XHRnZXQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMua2V5Q29kZVZhbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHQgXHJcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBvRXZlbnQsICd3aGljaCcsIHtcclxuXHRcdFx0XHRcdGdldCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5rZXlDb2RlVmFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiggb0V2ZW50LmluaXRLZXlib2FyZEV2ZW50IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9FdmVudC5pbml0S2V5Ym9hcmRFdmVudCggJ2tleScgKyBldmVudE5hbWUsIHRydWUsIHRydWUsIGRvY3VtZW50LmRlZmF1bHRWaWV3LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwga2V5Q29kZSwga2V5Q29kZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9FdmVudC5pbml0S2V5RXZlbnQoICdrZXknICsgZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBkb2N1bWVudC5kZWZhdWx0VmlldywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGtleUNvZGUsIGtleUNvZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdG9FdmVudC5rZXlDb2RlVmFsID0ga2V5Q29kZTtcclxuXHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0c2V0VG91Y2hFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHR2YXIgdG91Y2hTdGFydCA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGlmKCBfdGhpcy5wYXVzZWQgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcclxuXHRcdFx0XHQvLyBNaWNyb3NvZnQgYWx3YXlzIGhhcyB0byBoYXZlIHRoZWlyIG93biBzdHVmZi4uLlxyXG5cdFx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5jbGllbnRYICYmIGUucG9pbnRlclR5cGUgPT0gZS5NU1BPSU5URVJfVFlQRV9UT1VDSCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlc1sgZS5wb2ludGVySWQgXSA9IHsgY2xpZW50WDogZS5jbGllbnRYLCBjbGllbnRZOiBlLmNsaWVudFkgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXMgPSBlLnRvdWNoZXMgfHwgW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFxyXG5cdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQsIGZhbHNlICk7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgdG91Y2hFbmQgPSBmdW5jdGlvbiggZSApIHtcdFx0XHRcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5wb2ludGVyVHlwZSA9PSBlLk1TUE9JTlRFUl9UWVBFX1RPVUNIIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkZWxldGUgX3RoaXMudG91Y2hlc1sgZS5wb2ludGVySWQgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlcyA9IGUudG91Y2hlcyB8fCBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoICFlLnRvdWNoZXMgfHwgZS50b3VjaGVzLmxlbmd0aCA9PSAwIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBEcmF3IG9uY2UgbW9yZSB0byByZW1vdmUgdGhlIHRvdWNoIGFyZWFcclxuXHRcdFx0XHRcdF90aGlzLnJlbmRlcigpO1xyXG5cdFx0XHRcdFx0X3RoaXMucGF1c2VkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoRW5kICk7XHJcblx0XHJcblx0XHRcdHZhciB0b3VjaE1vdmUgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiBlLmNsaWVudFggJiYgZS5wb2ludGVyVHlwZSA9PSBlLk1TUE9JTlRFUl9UWVBFX1RPVUNIIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzWyBlLnBvaW50ZXJJZCBdID0geyBjbGllbnRYOiBlLmNsaWVudFgsIGNsaWVudFk6IGUuY2xpZW50WSB9O1x0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzID0gZS50b3VjaGVzIHx8IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNoTW92ZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyRG93bicsIHRvdWNoU3RhcnQgKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyVXAnLCB0b3VjaEVuZCApO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyB0aGUgYXJlYSB0byBhIGxpc3Qgb2YgdG91Y2hhYmxlIGFyZWFzLCBkcmF3c1xyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCBwcm9wZXJ0aWVzOiB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgdG91Y2hNb3ZlXHJcblx0XHQgKi9cclxuXHRcdGFkZFRvdWNoYWJsZURpcmVjdGlvbjogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgZGlyZWN0aW9uID0gbmV3IFRvdWNoYWJsZURpcmVjdGlvbiggb3B0aW9ucyApO1xyXG5cdFx0XHRcclxuXHRcdFx0ZGlyZWN0aW9uLmlkID0gdGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBkaXJlY3Rpb24gKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyB0aGUgY2lyY3VsYXIgYXJlYSB0byBhIGxpc3Qgb2YgdG91Y2hhYmxlIGFyZWFzLCBkcmF3c1x0XHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHByb3BlcnRpZXM6IHgsIHksIHdpZHRoLCBoZWlnaHQsIHRvdWNoU3RhcnQsIHRvdWNoRW5kLCB0b3VjaE1vdmVcclxuXHRcdCAqL1xyXG5cdFx0YWRkSm95c3RpY2s6IGZ1bmN0aW9uKCBvcHRpb25zICkgeyAvL3gsIHksIHJhZGl1cywgYmFja2dyb3VuZENvbG9yLCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCApIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBqb3lzdGljayA9IG5ldyBUb3VjaGFibGVKb3lzdGljayggb3B0aW9ucyApO1xyXG5cdFx0XHRcclxuXHRcdFx0am95c3RpY2suaWQgPSB0aGlzLnRvdWNoYWJsZUFyZWFzLnB1c2goIGpveXN0aWNrICk7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGRzIHRoZSBjaXJjdWxhciBhcmVhIHRvIGEgbGlzdCBvZiB0b3VjaGFibGUgYXJlYXMsIGRyYXdzXHQgXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHByb3BlcnRpZXM6IHgsIHksIHdpZHRoLCBoZWlnaHQsIHRvdWNoU3RhcnQsIHRvdWNoRW5kLCB0b3VjaE1vdmVcclxuXHRcdCAqL1xyXG5cdFx0YWRkQnV0dG9uOiBmdW5jdGlvbiggb3B0aW9ucyApIHsgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciwgdG91Y2hTdGFydCwgdG91Y2hFbmQgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgYnV0dG9uID0gbmV3IFRvdWNoYWJsZUJ1dHRvbiggb3B0aW9ucyApO1xyXG5cdFx0XHRcclxuXHRcdFx0YnV0dG9uLmlkID0gdGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBidXR0b24gKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGFkZFRvdWNoYWJsZUFyZWE6IGZ1bmN0aW9uKCBjaGVjaywgY2FsbGJhY2sgKSB7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkQnV0dG9uczogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdHZhciBidXR0b25zID0gdGhpcy5vcHRpb25zWyBzaWRlIF0uYnV0dG9ucztcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGogPSBidXR0b25zLmxlbmd0aDsgaSA8IGo7IGkrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgcG9zWCA9IHRoaXMuZ2V0UG9zaXRpb25YKCBzaWRlICk7XHJcblx0XHRcdFx0dmFyIHBvc1kgPSB0aGlzLmdldFBvc2l0aW9uWSggc2lkZSApO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGJ1dHRvbnNbaV0ueCA9IHBvc1ggKyB0aGlzLmdldFBpeGVscyggYnV0dG9uc1tpXS5vZmZzZXQueCwgJ3knICk7XHJcblx0XHRcdFx0YnV0dG9uc1tpXS55ID0gcG9zWSArIHRoaXMuZ2V0UGl4ZWxzKCBidXR0b25zW2ldLm9mZnNldC55LCAneScgKTtcclxuXHRcclxuXHRcdFx0XHR0aGlzLmFkZEJ1dHRvbiggYnV0dG9uc1tpXSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkRFBhZDogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdHZhciBkcGFkID0gdGhpcy5vcHRpb25zWyBzaWRlIF0uZHBhZCB8fCB7fTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENlbnRlcmVkIHZhbHVlIGlzIGF0IHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uXHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHBvc1ggPSB0aGlzLmdldFBvc2l0aW9uWCggc2lkZSApO1xyXG5cdFx0XHR2YXIgcG9zWSA9IHRoaXMuZ2V0UG9zaXRpb25ZKCBzaWRlICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gSWYgdGhleSBoYXZlIGFsbCA0IGRpcmVjdGlvbnMsIGFkZCBhIGNpcmNsZSB0byB0aGUgY2VudGVyIGZvciBsb29rc1xyXG5cdFx0XHRpZiggZHBhZC51cCAmJiBkcGFkLmxlZnQgJiYgZHBhZC5kb3duICYmIGRwYWQucmlnaHQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHR4OiBwb3NYLFxyXG5cdFx0XHRcdFx0eTogcG9zWSxcclxuXHRcdFx0XHRcdHJhZGl1czogZHBhZC5yaWdodC5oZWlnaHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGNlbnRlciA9IG5ldyBUb3VjaGFibGVDaXJjbGUoIG9wdGlvbnMgKTsgXHJcblx0XHRcdFx0dGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBjZW50ZXIgKTtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHQvLyBVcCBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC51cCAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC51cC54ID0gcG9zWCAtIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLndpZHRoLCAneScgKSAvIDI7XHJcblx0XHRcdFx0ZHBhZC51cC55ID0gcG9zWSAtICggdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAuaGVpZ2h0LCAneScgKSArICB0aGlzLmdldFBpeGVscyggZHBhZC5sZWZ0LmhlaWdodCwgJ3knICkgLyAyICk7XHJcblx0XHRcdFx0ZHBhZC51cC5kaXJlY3Rpb24gPSAndXAnO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLnVwICk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0Ly8gTGVmdCBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC5sZWZ0ICE9PSBmYWxzZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkcGFkLmxlZnQueCA9IHBvc1ggLSAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQud2lkdGgsICd5JyApICsgdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAud2lkdGgsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQubGVmdC55ID0gcG9zWSAtICggdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC5oZWlnaHQsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQubGVmdC5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQubGVmdCApO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdC8vIERvd24gYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQuZG93biAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC5kb3duLnggPSBwb3NYIC0gdGhpcy5nZXRQaXhlbHMoIGRwYWQuZG93bi53aWR0aCwgJ3knICkgLyAyO1xyXG5cdFx0XHRcdGRwYWQuZG93bi55ID0gcG9zWSArICggdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC5oZWlnaHQsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQuZG93bi5kaXJlY3Rpb24gPSAnZG93bic7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQuZG93biApO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSaWdodCBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC5yaWdodCAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC5yaWdodC54ID0gcG9zWCArICggdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAud2lkdGgsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQucmlnaHQueSA9IHBvc1kgLSB0aGlzLmdldFBpeGVscyggZHBhZC5yaWdodC5oZWlnaHQsICd5JyApIC8gMjtcclxuXHRcdFx0XHRkcGFkLnJpZ2h0LmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQucmlnaHQgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxvYWRKb3lzdGljazogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdHZhciBqb3lzdGljayA9IHRoaXMub3B0aW9uc1sgc2lkZSBdLmpveXN0aWNrO1xyXG5cdFx0XHRqb3lzdGljay54ID0gdGhpcy5nZXRQb3NpdGlvblgoIHNpZGUgKTtcclxuXHRcdFx0am95c3RpY2sueSA9IHRoaXMuZ2V0UG9zaXRpb25ZKCBzaWRlICk7XHJcblx0XHJcblx0XHRcdHRoaXMuYWRkSm95c3RpY2soIGpveXN0aWNrICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFVzZWQgZm9yIHJlc2l6aW5nLiBDdXJyZW50bHkgaXMganVzdCBhbiBhbGlhcyBmb3IgbG9hZFNpZGVcclxuXHRcdCAqL1xyXG5cdFx0cmVsb2FkU2lkZTogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdC8vIExvYWQgaW4gbmV3IG9uZXNcclxuXHRcdFx0dGhpcy5sb2FkU2lkZSggc2lkZSApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZFNpZGU6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHRpZiggdGhpcy5vcHRpb25zWyBzaWRlIF0udHlwZSA9PT0gJ2RwYWQnIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZERQYWQoIHNpZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS50eXBlID09PSAnam95c3RpY2snIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZEpveXN0aWNrKCBzaWRlICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiggdGhpcy5vcHRpb25zWyBzaWRlIF0udHlwZSA9PT0gJ2J1dHRvbnMnIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZEJ1dHRvbnMoIHNpZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBOb3JtYWxpemUgdG91Y2ggcG9zaXRpb25zIGJ5IHRoZSBsZWZ0IGFuZCB0b3Agb2Zmc2V0c1xyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHhcclxuXHRcdCAqL1xyXG5cdFx0bm9ybWFsaXplVG91Y2hQb3NpdGlvblg6IGZ1bmN0aW9uKCB4IClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICggeCAtIEdhbWVDb250cm9sbGVyLm9wdGlvbnMuY2FudmFzLm9mZnNldExlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKSAqICggdGhpcy5waXhlbFJhdGlvICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIE5vcm1hbGl6ZSB0b3VjaCBwb3NpdGlvbnMgYnkgdGhlIGxlZnQgYW5kIHRvcCBvZmZzZXRzXHJcblx0XHQgKiBAcGFyYW0ge2ludH0geVxyXG5cdFx0ICovXHJcblx0XHRub3JtYWxpemVUb3VjaFBvc2l0aW9uWTogZnVuY3Rpb24oIHkgKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gKCB5IC0gR2FtZUNvbnRyb2xsZXIub3B0aW9ucy5jYW52YXMub2Zmc2V0VG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKSAqICggdGhpcy5waXhlbFJhdGlvICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIHggcG9zaXRpb24gd2hlbiBnaXZlbiAjIG9mIHBpeGVscyBmcm9tIHJpZ2h0IChiYXNlZCBvbiBjYW52YXMgc2l6ZSlcclxuXHRcdCAqIEBwYXJhbSB7aW50fSByaWdodCBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0WEZyb21SaWdodDogZnVuY3Rpb24oIHJpZ2h0ICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jYW52YXMud2lkdGggLSByaWdodDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB5IHBvc2l0aW9uIHdoZW4gZ2l2ZW4gIyBvZiBwaXhlbHMgZnJvbSBib3R0b20gKGJhc2VkIG9uIGNhbnZhcyBzaXplKVxyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHJpZ2h0IFxyXG5cdFx0ICovXHJcblx0XHRnZXRZRnJvbUJvdHRvbTogZnVuY3Rpb24oIGJvdHRvbSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodCAtIGJvdHRvbTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogR3JhYnMgdGhlIHggcG9zaXRpb24gb2YgZWl0aGVyIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGUvY29udHJvbHNcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzaWRlIC0gJ2xlZnQnLCAncmlnaHQnIFxyXG5cdFx0ICovXHJcblx0XHRnZXRQb3NpdGlvblg6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHRpZiggdHlwZW9mIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLmxlZnQgIT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQaXhlbHMoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLmxlZnQsICd4JyApO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0WEZyb21SaWdodCggdGhpcy5nZXRQaXhlbHMoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLnJpZ2h0LCAneCcgKSApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBHcmFicyB0aGUgeSBwb3NpdGlvbiBvZiBlaXRoZXIgdGhlIGxlZnQgb3IgcmlnaHQgc2lkZS9jb250cm9sc1xyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHNpZGUgLSAnbGVmdCcsICdyaWdodCcgXHJcblx0XHQgKi9cclxuXHRcdGdldFBvc2l0aW9uWTogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdGlmKCB0eXBlb2YgdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24udG9wICE9PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi50b3AsICd5JyApO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0WUZyb21Cb3R0b20oIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5ib3R0b20sICd5JyApICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0XHR0aGlzLmN0eC5jbGVhclJlY3QoIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly8gV2hlbiBubyB0b3VjaCBldmVudHMgYXJlIGhhcHBlbmluZywgdGhpcyBlbmFibGVzICdwYXVzZWQnIG1vZGUsIHdoaWNoIG9ubHkgc2tpcHMgdGhpcyBzbWFsbCBwYXJ0LlxyXG5cdFx0XHQvLyBTa2lwcGluZyB0aGUgY2xlYXJSZWN0IGFuZCBkcmF3KClzIHdvdWxkIGJlIG5pY2UsIGJ1dCBpdCBtZXNzZXMgd2l0aCB0aGUgdHJhbnNwYXJlbnQgZ3JhZGllbnRzXHJcblx0XHRcdGlmKCAhIHRoaXMucGF1c2VkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjYWNoZUlkID0gJ3RvdWNoLWNpcmNsZSc7XHJcblx0XHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0XHRpZiggISBjYWNoZWQgJiYgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdFx0c3ViQ2FudmFzLndpZHRoID0gMiAqIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cztcclxuXHRcdFx0XHRcdHN1YkNhbnZhcy5oZWlnaHQgPSAyICogdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzO1xyXG5cdFx0XHJcblx0XHRcdFx0XHR2YXIgY2VudGVyID0gdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzO1xyXG5cdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCBjZW50ZXIsIGNlbnRlciwgMSwgY2VudGVyLCBjZW50ZXIsIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyApOyAvLyAxMCA9IGVuZCByYWRpdXNcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDIwMCwgMjAwLCAyMDAsIDEgKScgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDIwMCwgMjAwLCAyMDAsIDAgKScgKTtcclxuXHRcdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdFx0XHRcdGN0eC5hcmMoIGNlbnRlciwgY2VudGVyLCB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIERyYXcgdGhlIGN1cnJlbnQgdG91Y2ggcG9zaXRpb25zIGlmIGFueVxyXG5cdFx0XHRcdGZvciggdmFyIGkgPSAwLCBqID0gdGhpcy50b3VjaGVzLmxlbmd0aDsgaSA8IGo7IGkrKyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHRvdWNoID0gdGhpcy50b3VjaGVzWyBpIF07XHJcblx0XHRcdFx0XHRpZiggdHlwZW9mIHRvdWNoID09PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0dmFyIHggPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YKCB0b3VjaC5jbGllbnRYICksIHkgPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25ZKCB0b3VjaC5jbGllbnRZICk7XHJcblx0XHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgeCAtIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cywgeSAtIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGogPSB0aGlzLnRvdWNoYWJsZUFyZWFzLmxlbmd0aDsgaSA8IGo7IGkrKyApXHJcblx0XHRcdHtcdFxyXG5cdFx0XHRcdHRoaXMudG91Y2hhYmxlQXJlYXNbIGkgXS5kcmF3KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGFyZWEgPSB0aGlzLnRvdWNoYWJsZUFyZWFzWyBpIF07XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGFsbCB0b3VjaGVzIHRvIHNlZSBpZiBhbnkgaGl0IHRoaXMgYXJlYVxyXG5cdFx0XHRcdHZhciB0b3VjaGVkID0gZmFsc2U7XHJcblx0XHRcdFx0Zm9yKCB2YXIgayA9IDAsIGwgPSB0aGlzLnRvdWNoZXMubGVuZ3RoOyBrIDwgbDsgaysrIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgdG91Y2ggPSB0aGlzLnRvdWNoZXNbIGsgXTtcclxuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdG91Y2ggPT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHJcblx0XHRcdFx0XHR2YXIgeCA9IHRoaXMubm9ybWFsaXplVG91Y2hQb3NpdGlvblgoIHRvdWNoLmNsaWVudFggKSwgeSA9IHRoaXMubm9ybWFsaXplVG91Y2hQb3NpdGlvblkoIHRvdWNoLmNsaWVudFkgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIENoZWNrIHRoYXQgaXQncyBpbiB0aGUgYm91bmRpbmcgYm94L2NpcmNsZVxyXG5cdFx0XHRcdFx0aWYoICggYXJlYS5jaGVjayggeCwgeSApICkgIT09IGZhbHNlIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYoICF0b3VjaGVkIClcclxuXHRcdFx0XHRcdFx0XHR0b3VjaGVkID0gdGhpcy50b3VjaGVzWyBrIF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKCB0b3VjaGVkIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiggIWFyZWEuYWN0aXZlIClcclxuXHRcdFx0XHRcdFx0YXJlYS50b3VjaFN0YXJ0V3JhcHBlciggdG91Y2hlZCApO1xyXG5cdFx0XHRcdFx0YXJlYS50b3VjaE1vdmVXcmFwcGVyKCB0b3VjaGVkICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoIGFyZWEuYWN0aXZlIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhcmVhLnRvdWNoRW5kV3JhcHBlciggdG91Y2hlZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5yZW5kZXJXcmFwcGVyICk7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTbyB3ZSBjYW4ga2VlcCBzY29wZSwgYW5kIGRvbid0IGhhdmUgdG8gY3JlYXRlIGEgbmV3IG9iaiBldmVyeSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKGJhZCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uKSBcclxuXHRcdCAqL1xyXG5cdFx0cmVuZGVyV3JhcHBlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFN1cGVyY2xhc3MgZm9yIHRvdWNoYWJsZSBzdHVmZiBcclxuXHQgKi9cclxuXHR2YXIgVG91Y2hhYmxlQXJlYSA9ICggZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZUFyZWEoKSBcclxuXHRcdHtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgYmVpbmcgdG91Y2hlZFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hTdGFydCA9IG51bGw7XHJcblx0XHRcclxuXHRcdC8vIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIGJlaW5nIG1vdmVkXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaE1vdmUgPSBudWxsO1xyXG5cdFx0XHJcblx0XHQvLyBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBubyBsb25nZXIgYmVpbmcgdG91Y2hlZFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hFbmQgPSBudWxsO1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50eXBlID0gJ2FyZWEnO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuaWQgPSBmYWxzZTtcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIGZvciB0aGlzIGRpcmVjdGlvbiBiZWluZyB0b3VjaGVkXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuc2V0VG91Y2hTdGFydCA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcclxuXHRcdFx0dGhpcy50b3VjaFN0YXJ0ID0gY2FsbGJhY2s7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIG5vIGxvbmdlciB0b3VjaGVkIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaFN0YXJ0V3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaFN0YXJ0IClcclxuXHRcdFx0XHR0aGlzLnRvdWNoU3RhcnQoKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgYWN0aXZlXHJcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgZm9yIHRoaXMgZGlyZWN0aW9uIG5vIGxvbmdlciBiZWluZyB0b3VjaGVkXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuc2V0VG91Y2hNb3ZlID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xyXG5cdFx0XHR0aGlzLnRvdWNoTW92ZSA9IGNhbGxiYWNrO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBtb3ZlZC4gTWFrZSBzdXJlIGl0J3MgYWN0dWFsbHkgY2hhbmdlZCBiZWZvcmUgcGFzc2luZyB0byBkZXZlbG9wZXJcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1ggPSAwO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1kgPSAwO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hNb3ZlV3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaE1vdmUgJiYgKCBlLmNsaWVudFggIT0gVG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1ggfHwgZS5jbGllbnRZICE9IFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NZICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy50b3VjaE1vdmUoKTtcclxuXHRcdFx0XHR0aGlzLmxhc3RQb3NYID0gZS5jbGllbnRYO1xyXG5cdFx0XHRcdHRoaXMubGFzdFBvc1kgPSBlLmNsaWVudFk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBpbmFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIGZvciB0aGlzIGRpcmVjdGlvbiBubyBsb25nZXIgYmVpbmcgdG91Y2hlZFxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnNldFRvdWNoRW5kID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xyXG5cdFx0XHR0aGlzLnRvdWNoRW5kID0gY2FsbGJhY2s7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIGZpcnN0IHRvdWNoZWQgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoRW5kV3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaEVuZCApXHJcblx0XHRcdFx0dGhpcy50b3VjaEVuZCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBpbmFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIucmVuZGVyKCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlQXJlYTtcclxuXHRcdFxyXG5cdH0gKSgpO1xyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVEaXJlY3Rpb24gPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVEaXJlY3Rpb24sIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlRGlyZWN0aW9uKCBvcHRpb25zICkgXHJcblx0XHR7XHJcblx0XHRcdGZvciggdmFyIGkgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggaSA9PSAneCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3gnICk7XHJcblx0XHRcdFx0ZWxzZSBpZiggaSA9PSAneScgfHwgaSA9PSAnaGVpZ2h0JyB8fCBpID09ICd3aWR0aCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3knICk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0VG91Y2hhYmxlRGlyZWN0aW9uLnByb3RvdHlwZS50eXBlID0gJ2RpcmVjdGlvbic7XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2tzIGlmIHRoZSB0b3VjaCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGlzIGRpcmVjdGlvbiBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlRGlyZWN0aW9uLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCB0b3VjaFgsIHRvdWNoWSApIHtcclxuXHRcdFx0dmFyIGRpc3RhbmNlWCwgZGlzdGFuY2VZO1xyXG5cdFx0XHRpZiggKCBNYXRoLmFicyggdG91Y2hYIC0gdGhpcy54ICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFggPiB0aGlzLnggKSApICYmIC8vIGxlZnRcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFggLSAoIHRoaXMueCArIHRoaXMud2lkdGggKSApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hYIDwgdGhpcy54ICsgdGhpcy53aWR0aCApICkgJiYgLy8gcmlnaHRcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSB0aGlzLnkgKSA8ICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSB8fCAoIHRvdWNoWSA+IHRoaXMueSApICkgJiYgLy8gdG9wXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gKCB0aGlzLnkgKyB0aGlzLmhlaWdodCApICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCApICkgLy8gYm90dG9tXHJcblx0XHRcdClcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlRGlyZWN0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBjYWNoZUlkID0gdGhpcy50eXBlICsgJycgKyB0aGlzLmlkICsgJycgKyB0aGlzLmFjdGl2ZTtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0aWYoICEgY2FjaGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGggKyAyICogdGhpcy5zdHJva2U7XHJcblx0XHRcdFx0c3ViQ2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMiAqIHRoaXMuc3Ryb2tlO1xyXG5cdFxyXG5cdFx0XHRcdHZhciBvcGFjaXR5ID0gdGhpcy5vcGFjaXR5IHx8IDAuOTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiggISB0aGlzLmFjdGl2ZSApIC8vIERpcmVjdGlvbiBjdXJyZW50bHkgYmVpbmcgdG91Y2hlZFxyXG5cdFx0XHRcdFx0b3BhY2l0eSAqPSAwLjU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRzd2l0Y2goIHRoaXMuZGlyZWN0aW9uIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjYXNlICd1cCc6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgMCwgdGhpcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArICggb3BhY2l0eSAqIDAuNSApICsgJyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAwLCAwLCAwLCAnICsgb3BhY2l0eSArICcgKScgKTsgICBcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCB0aGlzLndpZHRoLCAwICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7ICAgXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxyXG5cdFx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoIDAsIDAsIHRoaXMud2lkdGgsIDAgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTsgIFxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCAwLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAwLCAwLCAwLCAnICsgb3BhY2l0eSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArICggb3BhY2l0eSAqIDAuNSApICsgJyApJyApOyAgIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcclxuXHRcdFx0XHRjdHguZmlsbFJlY3QoIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjEgKSc7XHJcblx0XHRcdFx0Y3R4LnN0cm9rZVJlY3QoIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHRoaXMueCwgdGhpcy55ICk7XHJcblx0XHRcdFx0XHJcblx0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlRGlyZWN0aW9uO1xyXG5cdH0gKSggVG91Y2hhYmxlQXJlYSApO1xyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVCdXR0b24gPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVCdXR0b24sIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlQnV0dG9uKCBvcHRpb25zICkgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciApXHJcblx0XHR7XHJcblx0XHRcdGZvciggdmFyIGkgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggaSA9PSAneCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3gnICk7XHJcblx0XHRcdFx0ZWxzZSBpZiggaSA9PSAneCcgfHwgaSA9PSAncmFkaXVzJyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneScgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gb3B0aW9uc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUJ1dHRvbi5wcm90b3R5cGUudHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdG91Y2ggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpcyBkaXJlY3Rpb24gXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUJ1dHRvbi5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdGlmKCBcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFggLSB0aGlzLnggKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApICkgJiZcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSB0aGlzLnkgKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIClcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVCdXR0b24ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGNhY2hlSWQgPSB0aGlzLnR5cGUgKyAnJyArIHRoaXMuaWQgKyAnJyArIHRoaXMuYWN0aXZlO1xyXG5cdFx0XHR2YXIgY2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdO1xyXG5cdFx0XHRpZiggISBjYWNoZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFx0dmFyIGN0eCA9IHN1YkNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IHN1YkNhbnZhcy5oZWlnaHQgPSAyICogKCB0aGlzLnJhZGl1cyArIGN0eC5saW5lV2lkdGggKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgMSwgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcdHZhciB0ZXh0U2hhZG93Q29sb3I7XHJcblx0XHRcdFx0c3dpdGNoKCB0aGlzLmJhY2tncm91bmRDb2xvciApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2FzZSAnYmx1ZSc6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMTIzLCAxODEsIDE5NywgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnIzEwNWE3OCcgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyMwQTQ4NjEnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2dyZWVuJzpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSgyOSwgMjAxLCAzNiwgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnIzEwNzgxNCcgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyMwODVDMEInO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JlZCc6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMTY1LCAzNCwgMzQsIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyM1MjAxMDEnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjMzMwMDAwJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd5ZWxsb3cnOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDIxOSwgMjE3LCA1OSwgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnI0U4RTEwRScgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyNCREI2MDAnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doaXRlJzpcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDI1NSwyNTUsMjU1LC4zICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyNlZWUnICk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB0aGlzLmFjdGl2ZSApXHRcdFx0XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdGV4dFNoYWRvd0NvbG9yO1xyXG5cdFx0XHRcdGVsc2VcdFxyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFxyXG5cdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IHRleHRTaGFkb3dDb2xvcjtcdFx0XHRcclxuXHRcdFxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHQvL2N0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRcdGN0eC5hcmMoIHN1YkNhbnZhcy53aWR0aCAvIDIsIHN1YkNhbnZhcy53aWR0aCAvIDIsIHRoaXMucmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0Y3R4LmZpbGwoKTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIHRoaXMubGFiZWwgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFRleHQgU2hhZG93XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdGV4dFNoYWRvd0NvbG9yO1xyXG5cdFx0XHRcdFx0Y3R4LmZvbnQgPSAnYm9sZCAnICsgKCB0aGlzLmZvbnRTaXplIHx8IHN1YkNhbnZhcy5oZWlnaHQgKiAwLjM1ICkgKyAncHggVmVyZGFuYSc7XHJcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHRcdFx0XHRjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcblx0XHRcdFx0XHRjdHguZmlsbFRleHQoIHRoaXMubGFiZWwsIHN1YkNhbnZhcy5oZWlnaHQgLyAyICsgMiwgc3ViQ2FudmFzLmhlaWdodCAvIDIgKyAyICk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuZm9udENvbG9yO1xyXG5cdFx0XHRcdFx0Y3R4LmZvbnQgPSAnYm9sZCAnICsgKCB0aGlzLmZvbnRTaXplIHx8IHN1YkNhbnZhcy5oZWlnaHQgKiAwLjM1ICkgKyAncHggVmVyZGFuYSc7XHJcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHRcdFx0XHRjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcblx0XHRcdFx0XHRjdHguZmlsbFRleHQoIHRoaXMubGFiZWwsIHN1YkNhbnZhcy5oZWlnaHQgLyAyLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgdGhpcy54LCB0aGlzLnkgKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUJ1dHRvbjtcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlSm95c3RpY2sgPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVKb3lzdGljaywgX19zdXBlciApO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVKb3lzdGljayggb3B0aW9ucyApIC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IgKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmN1cnJlbnRYID0gdGhpcy5jdXJyZW50WCB8fCB0aGlzLng7XHJcblx0XHRcdHRoaXMuY3VycmVudFkgPSB0aGlzLmN1cnJlbnRZIHx8IHRoaXMueTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLnR5cGUgPSAnam95c3RpY2snO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdG91Y2ggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpcyBkaXJlY3Rpb24gXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCB0b3VjaFgsIHRvdWNoWSApIHtcclxuXHRcdFx0aWYoIFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWCAtIHRoaXMueCApIDwgdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgKSAmJlxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWSAtIHRoaXMueSApIDwgdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogZGV0YWlscyBmb3IgdGhlIGpveXN0aWNrIG1vdmUgZXZlbnQsIHN0b3JlZCBoZXJlIHNvIHdlJ3JlIG5vdCBjb25zdGFudGx5IGNyZWF0aW5nIG5ldyBvYmpzIGZvciBnYXJiYWdlLiBUaGUgb2JqZWN0IGhhcyBwYXJhbXM6XHJcblx0XHQgKiBkeCAtIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoZSBjdXJyZW50IGpveXN0aWNrIGNlbnRlciBpcyBmcm9tIHRoZSBiYXNlIGNlbnRlciBpbiB4IGRpcmVjdGlvblxyXG5cdFx0ICogZHkgLSB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGUgY3VycmVudCBqb3lzdGljayBjZW50ZXIgaXMgZnJvbSB0aGUgYmFzZSBjZW50ZXIgaW4geSBkaXJlY3Rpb25cclxuXHRcdCAqIG1heCAtIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwaXhlbHMgZHggb3IgZHkgY2FuIGJlXHJcblx0XHQgKiBub3JtYWxpemVkWCAtIGEgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEgcmVsYXRpbmcgdG8gaG93IGZhciBsZWZ0IG9yIHJpZ2h0IHRoZSBqb3lzdGljayBpc1xyXG5cdFx0ICogbm9ybWFsaXplZFkgLSBhIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxIHJlbGF0aW5nIHRvIGhvdyBmYXIgdXAgb3IgZG93biB0aGUgam95c3RpY2sgaXNcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLm1vdmVEZXRhaWxzID0ge307XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsbGVkIHdoZW4gdGhpcyBqb3lzdGljayBpcyBtb3ZlZFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUudG91Y2hNb3ZlV3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRYID0gR2FtZUNvbnRyb2xsZXIubm9ybWFsaXplVG91Y2hQb3NpdGlvblgoIGUuY2xpZW50WCApO1x0XHJcblx0XHRcdHRoaXMuY3VycmVudFkgPSBHYW1lQ29udHJvbGxlci5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWSggZS5jbGllbnRZICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaE1vdmUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIHRoaXMubW92ZURldGFpbHMuZHggIT0gdGhpcy5jdXJyZW50WCAtIHRoaXMueCAmJiB0aGlzLm1vdmVEZXRhaWxzLmR5ICE9IHRoaXMueSAtIHRoaXMuY3VycmVudFkgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMuZHggPSB0aGlzLmN1cnJlbnRYIC0gdGhpcy54OyAvLyByZXZlcnNlIHNvIHJpZ2h0IGlzIHBvc2l0aXZlXHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLmR5ID0gdGhpcy55IC0gdGhpcy5jdXJyZW50WTtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMubWF4ID0gdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICk7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLm5vcm1hbGl6ZWRYID0gdGhpcy5tb3ZlRGV0YWlscy5keCAvIHRoaXMubW92ZURldGFpbHMubWF4O1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5ub3JtYWxpemVkWSA9IHRoaXMubW92ZURldGFpbHMuZHkgLyB0aGlzLm1vdmVEZXRhaWxzLm1heDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoTW92ZSggdGhpcy5tb3ZlRGV0YWlscyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBpbmFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiggISB0aGlzLmlkICkgLy8gd2FpdCB1bnRpbCBpZCBpcyBzZXRcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdHZhciBjYWNoZUlkID0gdGhpcy50eXBlICsgJycgKyB0aGlzLmlkICsgJycgKyB0aGlzLmFjdGl2ZTtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0aWYoICEgY2FjaGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdHRoaXMuc3Ryb2tlID0gdGhpcy5zdHJva2UgfHwgMjtcclxuXHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSBzdWJDYW52YXMuaGVpZ2h0ID0gMiAqICggdGhpcy5yYWRpdXMgKyB0aGlzLnN0cm9rZSApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRpZiggdGhpcy5hY3RpdmUgKSAvLyBEaXJlY3Rpb24gY3VycmVudGx5IGJlaW5nIHRvdWNoZWRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIDAsIDAsIDEsIDAsIDAsIHRoaXMucmFkaXVzICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyMDAsMjAwLDIwMCwuNSApJyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMjAwLDIwMCwyMDAsLjkgKScgKTtcclxuXHRcdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gU1RZTElORyBGT1IgQlVUVE9OU1xyXG5cdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCAwLCAwLCAxLCAwLCAwLCB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMjAwLDIwMCwyMDAsLjIgKScgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDIwMCwyMDAsMjAwLC40ICknICk7XHJcblx0XHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSggMCwwLDAsLjQgKSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdFx0XHQvLyBBY3R1YWwgam95c3RpY2sgcGFydCB0aGF0IGlzIGJlaW5nIG1vdmVkXHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eC5hcmMoIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHRcdGN0eC5zdHJva2UoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vIERyYXcgdGhlIGJhc2UgdGhhdCBzdGF5cyBzdGF0aWNcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGxTdHlsZSA9ICcjNDQ0JztcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMgKiAwLjcsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGwoKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmRyYXdJbWFnZSggY2FjaGVkLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5yYWRpdXMsIHRoaXMuY3VycmVudFkgLSB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlSm95c3RpY2s7XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0XHJcblx0dmFyIFRvdWNoYWJsZUNpcmNsZSA9ICggZnVuY3Rpb24oIF9fc3VwZXIgKSB7XHJcblx0XHRfX2V4dGVuZHMoIFRvdWNoYWJsZUNpcmNsZSwgX19zdXBlciApO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVDaXJjbGUoIG9wdGlvbnMgKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGkgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd4JyApO1xyXG5cdFx0XHRcdGVsc2UgaWYoIGkgPT0gJ3gnIHx8IGkgPT0gJ3JhZGl1cycgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3knICk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogTm8gdG91Y2ggZm9yIHRoaXMgZmVsbGEgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUNpcmNsZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUNpcmNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0XHQvLyBTVFlMSU5HIEZPUiBCVVRUT05TXHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsU3R5bGUgPSAncmdiYSggMCwgMCwgMCwgMC41ICknO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQWN0dWFsIGpveXN0aWNrIHBhcnQgdGhhdCBpcyBiZWluZyBtb3ZlZFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZmlsbCgpO1xyXG5cdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUNpcmNsZTtcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBTaGltIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHJcblx0ICovXHJcblx0KCBmdW5jdGlvbigpIHtcclxuXHQgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm5cclxuXHRcdHZhciBsYXN0VGltZSA9IDA7XHJcblx0XHR2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XHJcblx0XHRmb3IoIHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3ggKVxyXG5cdFx0e1xyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0fVxyXG5cdCBcclxuXHRcdGlmICggIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKVxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBlbGVtZW50ICkge1xyXG5cdFx0XHRcdHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoIDAsIDE2IC0gKCBjdXJyVGltZSAtIGxhc3RUaW1lICkgKTtcclxuXHRcdFx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxyXG5cdFx0XHRcdFx0dGltZVRvQ2FsbCApO1xyXG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG5cdFx0XHRcdHJldHVybiBpZDtcclxuXHRcdFx0fTtcclxuXHQgXHJcblx0XHRpZiAoICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgKVxyXG5cdFx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiggaWQgKSB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCBpZCApO1xyXG5cdFx0XHR9O1xyXG5cdH0oKSApO1xyXG59ICkodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiA/IG1vZHVsZS5leHBvcnRzIDogd2luZG93KSIsInZhciBnbG9iYWxzID0ge1xyXG4gICAgYnVsbGV0czogbnVsbCxcclxuICAgIGVuZW1pZXM6IG51bGwsXHJcbiAgICBwbGF5ZXI6IG51bGxcclxufVxyXG52YXIgdXBkYXRlID0gcmVxdWlyZSgnLi9nYW1lL3VwZGF0ZScpO1xyXG52YXIgcHJlbG9hZCA9IHJlcXVpcmUoJy4vZ2FtZS9wcmVsb2FkJykgO1xyXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9nYW1lL2NyZWF0ZScpO1xyXG4gXHJcbnZhciBnYW1lID0gd2luZG93LmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA2MDAsIFBoYXNlci5BVVRPLCAnJywgeyBwcmVsb2FkOiBwcmVsb2FkLCBjcmVhdGU6IGNyZWF0ZSwgdXBkYXRlOiB1cGRhdGUgfSk7XHJcbiIsIiBmdW5jdGlvbiByZXNldEJ1bGxldCAoYnVsbGV0KSB7XHJcblxyXG4gICAgYnVsbGV0LmtpbGwoKTtcclxuXHJcbn1cclxuO1xyXG5mdW5jdGlvbiBzZXR1cEVuZW15IChlbmVteSkge1xyXG5cclxuICAgIGVuZW15LmFuY2hvci54ID0gMC41O1xyXG4gICAgZW5lbXkuYW5jaG9yLnkgPSAwLjU7XHJcbiAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnZXhwbG9kZScpO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gICAgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcclxuXHJcbiAgICB0aGlzLnNwYWNlQkcgPSAgdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDYwMCwgJ2JnJyk7ICBcclxuICAgIHRoaXMuc3BhY2VCRy5hdXRvU2Nyb2xsKDAsIDc1KTsgXHJcblxyXG5cclxuICAgIGdhbWUuaW5wdXQuZ2FtZXBhZC5zdGFydCgpO1xyXG5cclxuICAgIC8vIFRvIGxpc3RlbiB0byBidXR0b25zIGZyb20gYSBzcGVjaWZpYyBwYWQgbGlzdGVuIGRpcmVjdGx5IG9uIHRoYXQgcGFkIGdhbWUuaW5wdXQuZ2FtZXBhZC5wYWRYLCB3aGVyZSBYID0gcGFkIDEtNFxyXG4gICAgLy92YXIgcGFkMSA9IGdhbWUuaW5wdXQuZ2FtZXBhZC5wYWQxO1xyXG5cclxuICAgIFxyXG4gICAgdmFyIEdhbWVDb250cm9sbGVyID0gd2luZG93LkdhbWVDb250cm9sbGVyID0gcmVxdWlyZSgnZ2FtZS1jb250cm9sbGVyJykuR2FtZUNvbnRyb2xsZXI7XHJcblxyXG5cclxuICAgIEdhbWVDb250cm9sbGVyLmluaXQoe1xyXG4gICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2pveXN0aWNrJyxcclxuICAgICAgICAgICAgam95c3RpY2s6IHtcclxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IG5lZWQgdGhpcywgYnV0IHRoZSBldmVudCBpcyBoZXJlIGlmIHlvdSB3YW50IGl0LlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogZnVuY3Rpb24oam95c3RpY2tfZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuaW5wdXQuam95c3RpY2tMZWZ0ID0gam95c3RpY2tfZGV0YWlscztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBub3QgdXNpbmcgYW55dGhpbmcgb24gdGhlIHJpZ2h0IGZvciB0aGlzIGRlbW8sIGJ1dCB5b3UgY2FuIGFkZCBidXR0b25zLCBldGMuXHJcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXVzdGluaGFsbG9jay9odG1sNS12aXJ0dWFsLWdhbWUtY29udHJvbGxlci8gZm9yIGV4YW1wbGVzLlxyXG4gICAgICAgICAgICB0eXBlOiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cucGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKShnYW1lKTtcclxuICAgIHBsYXllci5pbml0KCk7XHJcbiAgICB2YXIgYnVsbGV0cyA9IHdpbmRvdy5idWxsZXRzID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuXHJcbiAgICBidWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG5cclxuICAgIGJ1bGxldHMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG5cclxuICAgIGJ1bGxldHMuY3JlYXRlTXVsdGlwbGUoMTAsICdidWxsZXRzJywgJ2J1bGxldC1ncmVlbi5wbmcnKTtcclxuICAgIGJ1bGxldHMuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnYW5jaG9yLnknLCAxKTtcclxuICAgIGJ1bGxldHMuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcclxuICAgIGJ1bGxldHMuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHdpbmRvdy5leHBsb3Npb25zID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIGV4cGxvc2lvbnMuY3JlYXRlTXVsdGlwbGUoMzAsICdleHBsb2RlJyk7XHJcbiAgICBleHBsb3Npb25zLmZvckVhY2goc2V0dXBFbmVteSwgdGhpcyk7XHJcbiAgICB3aW5kb3cubXVzaWMgPSBnYW1lLmFkZC5hdWRpbygnc3RhZ2UtMScpOyBcclxuICAgIHdpbmRvdy5leHBsb3Npb25zU21hbGxlc3QgPSBnYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgZXhwbG9zaW9uc1NtYWxsZXN0LmNyZWF0ZU11bHRpcGxlKDMwLCAnZXhwbG9kZS1zbWFsbGVzdCcpO1xyXG4gICAgZXhwbG9zaW9uc1NtYWxsZXN0LmZvckVhY2goc2V0dXBFbmVteSwgdGhpcyk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgd2luZG93LmJvb20gPSBnYW1lLmFkZC5hdWRpbygnYm9vbScpO1xyXG4gICAgd2luZG93LmxhemVyID0gZ2FtZS5hZGQuYXVkaW8oJ2xhemVyJyk7XHJcblxyXG4gICAgXHJcbiAgICB3aW5kb3cuc3RhZ2UxID0gcmVxdWlyZSgnLi9zY2VuZXMvc2NlbmUtMScpKGdhbWUpO1xyXG4gICAgc3RhZ2UxLmluaXQoKTtcclxufVxyXG5cclxuICIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHR2YXIgcGxheWVyLCBjdXJzb3JzO1xyXG5cdHZhciByaWdodF9idWxsZXRUaW1lID0gMCwgbGVmdF9idWxsZXRUaW1lID0gMDsgXHJcbiAgICB2YXIgcGxheWVyU3BlZWQgPSAyMDA7IC8vZHVubm9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmlyZUJ1bGxldCAoKSB7IFxyXG4gICAgICAgICAgICBpZiAoIGdhbWUudGltZS5ub3cgPiByaWdodF9idWxsZXRUaW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRfYnVsbGV0ID0gYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRfYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBBbmQgZmlyZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X2J1bGxldC5yZXNldChwbGF5ZXIueCwgcGxheWVyLnkgKyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0VGltZSA9IGdhbWUudGltZS5ub3cgKyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbGF6ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZ2FtZS50aW1lLm5vdyA+IGxlZnRfYnVsbGV0VGltZSArIDIwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdF9idWxsZXQgPSBidWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0X2J1bGxldClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgQW5kIGZpcmUgaXRcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2J1bGxldC5yZXNldChwbGF5ZXIueCArIDI2LCBwbGF5ZXIueSArIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2J1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAtMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0VGltZSA9IGdhbWUudGltZS5ub3cgKyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbGF6ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdCA6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cGxheWVyID0gZ2FtZS5hZGQuc3ByaXRlKCg0MDAgLSAxNiksIDUwMCwgJ3NoaXAnKTtcclxuICAgIFx0XHRnYW1lLnBoeXNpY3MuZW5hYmxlKHBsYXllciwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcclxuICAgIFx0XHRjdXJzb3JzID0gIGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0tFWUJPQVJEIE1PVkVNRU5UXHJcblx0ICAgICAgICBpZiAoY3Vyc29ycy51cC5pc0Rvd24pXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgLy8gIElmIHRoZSBzaGlmdCBrZXkgaXMgYWxzbyBwcmVzc2VkIHRoZW4gdGhlIHdvcmxkIGlzIHJvdGF0ZWRcclxuXHQgICAgICAgICAgICBpZiAoY3Vyc29ycy51cC5zaGlmdEtleSlcclxuXHQgICAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiArPSAwLjA1O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBlbHNlXHJcblx0ICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICBpZihwbGF5ZXIueSA+IDM1MCkgcGxheWVyLnkgLT0gNDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBlbHNlIGlmIChjdXJzb3JzLmRvd24uaXNEb3duKVxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIGlmIChjdXJzb3JzLmRvd24uc2hpZnRLZXkpXHJcblx0ICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICAvL2dhbWUud29ybGQucm90YXRpb24gLT0gMC4wNTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgZWxzZVxyXG5cdCAgICAgICAgICAgIHtcclxuXHQgICAgICAgICAgICAgICAgcGxheWVyLnkgKz0gNDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICBwbGF5ZXIueCAtPSA0O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICBwbGF5ZXIueCArPSA0O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgaWYgKGdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUikpXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgZmlyZUJ1bGxldCgpIDtcclxuXHQgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvL0dBTUVQQUQgU1VQUE9SVFxyXG4gICAgICAgICAgICBpZiAoZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgdGhlIHVmbyB1c2luZyB0aGUgam95c3RpY2sncyBub3JtYWxpemVkWCBhbmQgWSB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCByYW5nZSBmcm9tIC0xIHRvIDEuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYm9keS52ZWxvY2l0eS5zZXRUbyhnYW1lLmlucHV0LmpveXN0aWNrTGVmdC5ub3JtYWxpemVkWCAqIDIwMCwgZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQubm9ybWFsaXplZFkgKiBwbGF5ZXJTcGVlZCAqIC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2J1bGxldHMnLCAnaW1nL2Fzc2V0cy9idWxsZXRzLnBuZycsICdzaGVldHMvYnVsbGV0cycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdibHVlX2J1bGxldCcsICdpbWcvYXNzZXRzL2JsdWUtYnVsbGV0LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiZycsICdpbWcvYmFja2dyb3VuZHMvYmcucG5nJyk7IFxyXG4gICAgdGhpcy5sb2FkLmF0bGFzKCdhdGxhcycsICdpbWcvZW5lbXktZmlnaHRlcnMvZW5lbXktZmlnaHRlcnMucG5nJywgJ3NoZWV0cy9lbmVteS1maWdodGVycycpO1xyXG4gICAgdGhpcy5sb2FkLmF0bGFzKCdib3NzZXMnLCAnaW1nL2VuZW15LWJvc3Nlcy9lbmVteS1ib3NzZXMucG5nJywgJ3NoZWV0cy9ib3NzZXMnKTtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2hpcCcsICdpbWcvc3BhY2Vfc2hpcF9iYXNlLnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb2RlJywgJ2ltZy9hc3NldHMvZXhwbG9kZS5wbmcnLCAxMjgsIDEyOCk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb2RlLXNtYWxsJywgJ2ltZy9hc3NldHMvZXhwbG9kZS1zbWFsbC5wbmcnLCAzMiwgMzIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb2RlLXNtYWxsZXN0JywgJ2ltZy9hc3NldHMvZXhwbG9kZS1zbWFsbGVzdC5wbmcnLCAxNiwgMTYpO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdib29tJywgWydhdWRpby9lZmZlY3RzL2V4cGxvZGUud2F2J10pO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdsYXplcicsIFsnYXVkaW8vZWZmZWN0cy9sYXplci53YXYnXSk7XHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3N0YWdlLTEnLCBbJ2F1ZGlvL2JhY2tncm91bmQvc3RhZ2UtMS5tcDMnLCAnYXVkaW8vYmFja2dyb3VuZC9zdGFnZS0xLm9nZyddKTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoZ2FtZSkge1xyXG5cdHZhciByYXB0b3JzLG1pbmlCb3NzZXM7XHJcbiAgICB2YXIgc3Bhd24gPSBmdW5jdGlvbiAoKSB7IFxyXG5cclxuICAgICAgICB2YXIgeCA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDQwLCA2MDApICAsIHkgPSBnYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLCAxMCk7XHJcbiAgICAgICAgdmFyIF9hbGllbiA9IGFsaWVucy5jcmVhdGUoeCwgeSwgJ2F0bGFzJywgJ2JhZC1ndXkxLnBuZycpO1xyXG4gICAgICAgIF9hbGllbi5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gXHJcbiAgICAgICAgX2FsaWVuLmJvZHkubW92ZXMgPSB0cnVlO1xyXG4gICAgICAgIF9hbGllbi5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDEwMCkgOyBcclxuICAgIH07XHJcblxyXG5cdHZhciBjb2xsaXNpb25IYW5kbGVyID0gZnVuY3Rpb24gIChidWxsZXQsIGFsaWVuKSB7XHJcblxyXG5cdCAgICBidWxsZXQua2lsbCgpO1xyXG5cdCAgICBhbGllbi5raWxsKCk7XHJcblx0ICAgIC8vd2luZG93LmJvb20ucGxheSgpO1xyXG5cdCAgICB2YXIgeCA9IGFsaWVuLmJvZHkueCwgeSA9YWxpZW4uYm9keS55XHJcblx0ICAgIHZhciBleHBsb3Npb24gPSBleHBsb3Npb25zLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuXHQgICAgZXhwbG9zaW9uLnJlc2V0KGFsaWVuLmJvZHkueCwgYWxpZW4uYm9keS55KTtcclxuXHQgICAgZXhwbG9zaW9uLnBsYXkoJ2V4cGxvZGUnLCAzMCwgZmFsc2UsIHRydWUpO1xyXG5cdH07XHJcbiAgICB2YXIgYm9zc0NvbGxpc2lvbkhhbmRsZXIgPSBmdW5jdGlvbiAgKGJ1bGxldCwgYm9zcykge1xyXG5cclxuICAgICAgICBcclxuICAgICAgIC8vIHdpbmRvdy5ib29tLnBsYXkoKTtcclxuICAgICAgICB2YXIgeCA9IGJvc3MuYm9keS54LCB5ID1ib3NzLmJvZHkueTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib3NzLmhpdENvdW50KVxyXG4gICAgICAgIGJvc3MuaGl0Q291bnQgPSBib3NzLmhpdENvdW50IC0gMTtcclxuICAgICAgICB2YXIgZXggPSBleHBsb3Npb25zU21hbGxlc3QuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgICAgIGV4LnJlc2V0KGJ1bGxldC5ib2R5LngsIGJ1bGxldC5ib2R5LnkpO1xyXG4gICAgICAgIGJ1bGxldC5raWxsKCk7IFxyXG4gICAgICAgIGV4LnBsYXkoJ2V4cGxvZGUtc21hbGxlc3QnLCAzMCwgZmFsc2UsIHRydWUpOyBcclxuICAgICAgICBpZiAoYm9zcy5oaXRDb3VudCA8PSAwKXtcclxuICAgICAgICAgICAgdmFyIGV4cGxvc2lvbiA9IGV4cGxvc2lvbnMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgICAgICAgICBleHBsb3Npb24ucmVzZXQoYm9zcy5ib2R5LngsIGJvc3MuYm9keS55KTtcclxuICAgICAgICAgICAgZXhwbG9zaW9uLnBsYXkoJ2V4cGxvZGUnLCAzMCwgZmFsc2UsIHRydWUpOyBcclxuICAgICAgICAgICAgYm9zcy5raWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICB2YXIgc3Bhd25SYXB0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcdHZhciB4ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsIDYwMCkgICwgeSA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsIDEwKTtcclxuICAgICAgICB2YXIgX2FsaWVuID0gcmFwdG9ycy5jcmVhdGUoeCwgeSwgJ2F0bGFzJywgJ3JhcHRvci0xLnBuZycpO1xyXG4gICAgICAgIF9hbGllbi5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gXHJcbiAgICAgICAgX2FsaWVuLmJvZHkubW92ZXMgPSB0cnVlO1xyXG4gICAgICAgIF9hbGllbi5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDE1MCkgOyBcclxuICAgIH1cclxuICAgIHZhciBzcGF3bk1pbmlCb3NzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB4ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsIDYwMCkgICwgeSA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsIDEwKTtcclxuICAgICAgICB2YXIgX2FsaWVuID0gbWluaUJvc3Nlcy5jcmVhdGUoeCwgeSwgJ2Jvc3NlcycsICdib3NzLTEucG5nJyk7XHJcbiAgICAgICAgX2FsaWVuLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiBcclxuICAgICAgICBfYWxpZW4uYm9keS5tb3ZlcyA9IHRydWU7XHJcbiAgICAgICAgX2FsaWVuLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgNzApIDsgXHJcbiAgICAgICAgX2FsaWVuLmhpdENvdW50ID0gNTtcclxuICAgIH1cclxuXHJcblx0dmFyIGVuZW15RmFjdG9yeTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0d2luZG93LmFsaWVucyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBcdFx0YWxpZW5zLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG4gICAgXHRcdGFsaWVucy5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XHJcbiAgICBcdFx0cmFwdG9ycyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBcdFx0cmFwdG9ycy5lbmFibGVCb2R5ID0gdHJ1ZTtcclxuICAgIFx0XHRyYXB0b3JzLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuICAgICAgICAgICAgbWluaUJvc3NlcyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICAgICAgICAgIG1pbmlCb3NzZXMuZW5hYmxlQm9keSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1pbmlCb3NzZXMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG5cdFx0ICAgIC8vbXVzaWMucGxheSgnJywgMCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXVzaWMudm9sdW1lKTtcclxuICAgICAgICAgICAgLy9tdXNpYy52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXVzaWMudm9sdW1lKTtcclxuICAgIFx0XHRnYW1lLnRpbWUuZXZlbnRzLnJlcGVhdChQaGFzZXIuVGltZXIuU0VDT05EICogMiwgMTA1LCBzcGF3biwgdGhpcyk7XHJcblxyXG4gICAgXHRcdGdhbWUudGltZS5ldmVudHMucmVwZWF0KFBoYXNlci5UaW1lci5TRUNPTkQgKiA1LCAyNSwgc3Bhd25SYXB0b3IsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDIsIDEwLCBzcGF3bk1pbmlCb3NzLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHR1cGRhdGUgOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdC8vZ2FtZSBsb29wIGZvciB0aGUgc3RhZ2VcclxuXHRcdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsIGFsaWVucywgY29sbGlzaW9uSGFuZGxlciwgbnVsbCwgdGhpcyk7XHJcblx0XHRcdGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChidWxsZXRzLCByYXB0b3JzLCBjb2xsaXNpb25IYW5kbGVyLCBudWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsIG1pbmlCb3NzZXMsIGJvc3NDb2xsaXNpb25IYW5kbGVyLCBudWxsLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufSIsInZhciBidWxsZXRUaW1lID0gMDtcclxuIGZ1bmN0aW9uIHJlc2V0QnVsbGV0IChidWxsZXQpIHtcclxuXHJcbiAgICBidWxsZXQua2lsbCgpO1xyXG5cclxufTtcclxuXHJcbiBcclxuICAgIHZhciByaWdodF9idWxsZXRUaW1lID0gMCwgbGVmdF9idWxsZXRUaW1lID0gMDsgXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYnVsbGV0cyA9IHdpbmRvdy5idWxsZXRzO1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGN1cnNvcnMgPSB3aW5kb3cuY3Vyc29yczsgXHJcblxyXG5cclxuXHJcbiAgICBwbGF5ZXIudXBkYXRlKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJzb3JzKTtcclxuICAgICAgICBzdGFnZTEudXBkYXRlKCk7XHJcbiAgICAgICAgXHJcbn07XHJcbiJdfQ==
