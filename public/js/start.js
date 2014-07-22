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
function setupEnemyBoss(enemy) {
  enemy.anchor.x = 0.5;
  enemy.anchor.y = 0.5;
  enemy.animations.add('explode-smallest');
}
;
module.exports = function() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  this.spaceBG = this.add.tileSprite(0, 0, 800, 600, 'bg');
  this.spaceBG.autoScroll(0, 75);
  game.input.gamepad.start();
  console.log('ontouchstart' in document.documentElement);
  if ('ontouchstart' in document.documentElement) {
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
  }
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
  explosionsSmallest.forEach(setupEnemyBoss, this);
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
    ex.play('explode-smallest', 60, false, true);
    if (boss.hitCount <= 0) {
      var explosion = explosions.getFirstExists(false);
      explosion.reset(boss.body.x, boss.body.y);
      explosion.play('explode', 30, false, true);
      boss.kill();
    }
  };
  var spawnRaptorFormation = function() {
    var x = game.rnd.integerInRange(40, 600),
        y = game.rnd.integerInRange(0, 10);
    spawnRaptor(x - 32, y);
    spawnRaptor(x + 32, y);
    spawnRaptor(x, y + 32);
  };
  var spawnRaptor = function(x, y) {
    var _alien = raptors.create(x, y, 'atlas', 'raptor-1.png');
    _alien.anchor.setTo(0.5, 0.5);
    _alien.body.moves = true;
    _alien.body.velocity.setTo(0, 150);
    game.time.events.add(Phaser.Timer.SECOND * 1.25, function() {
      _alien.body.velocity.setTo(350, 350);
      game.time.events.add(Phaser.Timer.SECOND * 0.65, function() {
        _alien.body.velocity.setTo(-350, 350);
      }, _alien);
    }, _alien);
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
      game.time.events.repeat(Phaser.Timer.SECOND * 5, 25, spawnRaptorFormation, this);
      game.time.events.repeat(Phaser.Timer.SECOND * 12, 10, spawnMiniBoss, this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxcbm9kZV9tb2R1bGVzXFxnYW1lLWNvbnRyb2xsZXJcXGdhbWVjb250cm9sbGVyLmpzIiwiQzpcXFVzZXJzXFxLZXZpblxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWUuanMiLCJDOlxcVXNlcnNcXEtldmluXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxcY3JlYXRlLmpzIiwiQzpcXFVzZXJzXFxLZXZpblxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHBsYXllci5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFxwcmVsb2FkLmpzIiwiQzpcXFVzZXJzXFxLZXZpblxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHNjZW5lc1xcc2NlbmUtMS5qcyIsIkM6XFxVc2Vyc1xcS2V2aW5cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lXFx1cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNHQTtBQUFBLENBQUEsQUFBRSxTQUFTLE9BQU8sQ0FBRTtBQUNmLENBQUosSUFBSSxDQUFBLE9BQU8sRUFBRyxDQUFBLEVBQUUsTUFBTSxDQUFDO0FBQ25CLENBQUosSUFBSSxDQUFBLFNBQVMsRUFBRyxDQUFBLEVBQUUsZUFBZSxDQUFDO0FBQzlCLENBQUosSUFBSSxDQUFBLFNBQVMsRUFBRyxVQUFTLEtBQUssQ0FB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LENBQUEsQ0FBQyxFQUFHLEVBQUM7QUFBRSxDQUFBLFVBQUMsRUFBRyxDQUFBLE9BQU8sT0FBTyxDQUFFLENBQUEsQ0FBQyxFQUFHLEVBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUM5QztBQUNLLENBQUosVUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ2pDLENBQUosVUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBRXJDLENBQUEsY0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsQ0FBQSxJQUFJLFVBQVUsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFFLElBQUcsQ0FBRSxDQUFDO0FBQ2pFLENBQUEsY0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsQ0FBQSxJQUFJLFVBQVUsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFFLElBQUcsQ0FBRSxDQUFDO0FBRWpFLENBQUEsV0FBSSxVQUFVLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7T0FDN0I7Q0FBQSxJQUNEO0FBRUQsQ0FBQSxXQUFRLENBQUUsVUFBVSxJQUFJLENBQUc7QUFDdEIsQ0FBSixRQUFJLENBQUEsSUFBSSxFQUFHLENBQUEsSUFBSSxRQUFRLENBQUUsSUFBSSxDQUFFLEtBQUssR0FBSSxHQUFFLENBQUM7QUFJdkMsQ0FBSixRQUFJLENBQUEsS0FBSyxFQUFHLEtBQUksQ0FBQztBQUViLENBQUosUUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ2pDLENBQUosUUFBSSxDQUFBLElBQUksRUFBRyxDQUFBLElBQUksYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0NBSXJDLFNBQUksSUFBSSxHQUFHLEdBQUksQ0FBQSxJQUFJLEtBQUssQ0FBQSxFQUFJLENBQUEsSUFBSSxLQUFLLENBQUEsRUFBSSxDQUFBLElBQUksTUFBTSxDQUNuRDtBQUNLLENBQUosVUFBSSxDQUFBLE9BQU8sRUFBRztBQUNiLENBQUEsVUFBQyxDQUFFLEtBQUk7QUFDUCxDQUFBLFVBQUMsQ0FBRSxLQUFJO0FBQ1AsQ0FBQSxlQUFNLENBQUUsQ0FBQSxJQUFJLE1BQU0sT0FBTztDQUFBLFFBQ3pCLENBQUE7QUFDRyxDQUFKLFVBQUksQ0FBQSxNQUFNLEVBQUcsSUFBSSxnQkFBZSxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBQzVDLENBQUEsV0FBSSxlQUFlLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztPQUNuQztBQUdELENBSEMsU0FHRyxJQUFJLEdBQUcsSUFBSyxNQUFLLENBQ3JCO0FBQ0MsQ0FBQSxXQUFJLEdBQUcsRUFBRSxFQUFHLENBQUEsSUFBSSxFQUFHLENBQUEsSUFBSSxVQUFVLENBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBRSxJQUFHLENBQUUsQ0FBQSxDQUFHLEVBQUMsQ0FBQztBQUM1RCxDQUFBLFdBQUksR0FBRyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEdBQUcsT0FBTyxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUksQ0FBQSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEtBQUssT0FBTyxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUcsRUFBQyxDQUFFLENBQUM7QUFDNUcsQ0FBQSxXQUFJLEdBQUcsVUFBVSxFQUFHLEtBQUksQ0FBQztBQUN6QixDQUFBLFdBQUksc0JBQXNCLENBQUUsSUFBSSxHQUFHLENBQUUsQ0FBQztPQUN0QztBQUdELENBSEMsU0FHRyxJQUFJLEtBQUssSUFBSyxNQUFLLENBQ3ZCO0FBQ0MsQ0FBQSxXQUFJLEtBQUssRUFBRSxFQUFHLENBQUEsSUFBSSxFQUFHLEVBQUUsSUFBSSxVQUFVLENBQUUsSUFBSSxLQUFLLE1BQU0sQ0FBRSxJQUFHLENBQUUsQ0FBQSxDQUFHLENBQUEsSUFBSSxVQUFVLENBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBRSxJQUFHLENBQUUsQ0FBQSxDQUFHLEVBQUMsQ0FBRSxDQUFDO0FBQzNHLENBQUEsV0FBSSxLQUFLLEVBQUUsRUFBRyxDQUFBLElBQUksRUFBRyxFQUFFLElBQUksVUFBVSxDQUFFLElBQUksS0FBSyxPQUFPLENBQUUsSUFBRyxDQUFFLENBQUEsQ0FBRyxFQUFDLENBQUUsQ0FBQztBQUNyRSxDQUFBLFdBQUksS0FBSyxVQUFVLEVBQUcsT0FBTSxDQUFDO0FBQzdCLENBQUEsV0FBSSxzQkFBc0IsQ0FBRSxJQUFJLEtBQUssQ0FBRSxDQUFDO09BQ3hDO0FBR0QsQ0FIQyxTQUdHLElBQUksS0FBSyxJQUFLLE1BQUssQ0FDdkI7QUFDQyxDQUFBLFdBQUksS0FBSyxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsQ0FBQSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEtBQUssTUFBTSxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUcsRUFBQyxDQUFDO0FBQ2hFLENBQUEsV0FBSSxLQUFLLEVBQUUsRUFBRyxDQUFBLElBQUksRUFBRyxFQUFFLElBQUksVUFBVSxDQUFFLElBQUksS0FBSyxPQUFPLENBQUUsSUFBRyxDQUFFLENBQUEsQ0FBRyxFQUFDLENBQUUsQ0FBQztBQUNyRSxDQUFBLFdBQUksS0FBSyxVQUFVLEVBQUcsT0FBTSxDQUFDO0FBQzdCLENBQUEsV0FBSSxzQkFBc0IsQ0FBRSxJQUFJLEtBQUssQ0FBRSxDQUFDO09BQ3hDO0FBR0QsQ0FIQyxTQUdHLElBQUksTUFBTSxJQUFLLE1BQUssQ0FDeEI7QUFDQyxDQUFBLFdBQUksTUFBTSxFQUFFLEVBQUcsQ0FBQSxJQUFJLEVBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFFLElBQUcsQ0FBRSxDQUFBLENBQUcsRUFBQyxDQUFFLENBQUM7QUFDbkUsQ0FBQSxXQUFJLE1BQU0sRUFBRSxFQUFHLENBQUEsSUFBSSxFQUFHLENBQUEsSUFBSSxVQUFVLENBQUUsSUFBSSxNQUFNLE9BQU8sQ0FBRSxJQUFHLENBQUUsQ0FBQSxD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Q0FBQyxDQUFDO0FBQ25FLENBQUEsU0FBSSxRQUFRLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBRSxXQUFVLENBQUUscUJBQW9CLENBQUUsS0FBSSxDQUFFLEtBQUksQ0FBQyxDQUFDO0tBQzVGO0FBQ0QsQ0FBQSxVQUFPLENBQUUsVUFBVSxDQUFFLEdBRXBCO0NBQUEsRUFDRCxDQUFBO0NBQ0QsQ0FBQTtDQUFBOzs7QUMzR0Q7QUFBSSxDQUFKLEVBQUksQ0FBQSxVQUFVLEVBQUcsRUFBQyxDQUFDO0NBQ2xCLE9BQVMsWUFBVyxDQUFFLE1BQU0sQ0FBRTtBQUUzQixDQUFBLE9BQU0sS0FBSyxFQUFFLENBQUM7Q0FFakI7QUFBQSxDQUFBLEFBQUM7QUFHTSxDQUFKLEVBQUksQ0FBQSxnQkFBZ0IsRUFBRyxFQUFDO0FBQUUsQ0FBQSxrQkFBZSxFQUFHLEVBQUMsQ0FBQztBQUVsRCxDQUFBLEtBQU0sUUFBUSxFQUFJLFVBQVUsQ0FBRTtBQUN0QixDQUFKLElBQUksQ0FBQSxPQUFPLEVBQUcsQ0FBQSxNQUFNLFFBQVEsQ0FBQztBQUd6QixDQUFKLElBQUksQ0FBQSxPQUFPLEVBQUcsQ0FBQSxNQUFNLFFBQVEsQ0FBQztBQUk3QixDQUFBLE9BQU0sT0FBTyxFQUFFLENBQUM7QUFFWixDQUFBLE9BQU0sT0FBTyxFQUFFLENBQUM7Q0FFdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogSGVscGVycyBcclxuICovXHJcbiggZnVuY3Rpb24oZXhwb3J0cykge1xyXG5cdHZhciBfX3NsaWNlID0gW10uc2xpY2U7XHJcblx0dmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xyXG5cdHZhciBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcclxuXHQvKiAkLmV4dGVuZCBmdW5jdGlvbmFsaXR5ICovXHJcblx0ZnVuY3Rpb24gZXh0ZW5kKCB0YXJnZXQsIHNyYyApXHJcblx0e1xyXG5cdFx0dmFyIG9wdGlvbnMsIG5hbWUsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcclxuXHRcdFx0aSA9IDEsXHJcblx0XHRcdGxlbmd0aCA9IDIsXHJcblx0XHRcdGRlZXAgPSB0cnVlO1xyXG5cdFxyXG5cdFx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxyXG5cdFx0aWYoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiIClcclxuXHRcdHtcclxuXHRcdFx0ZGVlcCA9IHRhcmdldDtcclxuXHRcdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxyXG5cdFx0XHRpID0gMjtcclxuXHRcdH1cclxuXHRcclxuXHRcdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyggcG9zc2libGUgaW4gZGVlcCBjb3B5IClcclxuXHRcdGlmKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICF0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nIClcclxuXHRcdHtcclxuXHRcdFx0dGFyZ2V0ID0ge307XHJcblx0XHR9XHJcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXHJcblx0XHRpZiggb3B0aW9ucyA9IHNyYyApXHJcblx0XHR7XHJcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3RcclxuXHRcdFx0Zm9yKCBuYW1lIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xyXG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xyXG5cdFxyXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3BcclxuXHRcdFx0XHRpZiggdGFyZ2V0ID09PSBjb3B5IClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXHJcblx0XHRcdFx0aWYoIGRlZXAgJiYoIHR5cGVvZiBjb3B5ID09ICdvYmplY3QnIHx8KCBjb3B5SXNBcnJheSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggIGNvcHkgICkgPT09ICdbb2JqZWN0IEFycmF5XScgKSApICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoIGNvcHlJc0FycmF5ICkgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggIHNyYyAgKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA/IHNyYyA6IFtdO1xyXG5cdFxyXG5cdFx0XHRcdFx0fSBcclxuXHRcdFx0XHRcdGVsc2UgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIHR5cGVvZiBzcmMgPT0gJ29iamVjdCcgPyBzcmMgOiB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxyXG5cdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKCBjbG9uZSwgY29weSApO1xyXG5cdFxyXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xyXG5cdFx0XHRcdH0gXHJcblx0XHRcdFx0ZWxzZSBpZiggdHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG5cdFxyXG5cdC8vIE1ha2UgYXZhaWxhYmxlIHRvIHdpbmRvd1xyXG5cdGV4cG9ydHMuR2FtZUNvbnRyb2xsZXIgPSB7XHJcblx0XHRcclxuXHRcdC8vIERlZmF1bHQgb3B0aW9ucyxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0bGVmdDogeyBcclxuXHRcdFx0XHR0eXBlOiAnZHBhZCcsIFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7IGxlZnQ6ICcxMyUnLCBib3R0b206ICcyMiUnIH0sXHJcblx0XHRcdFx0ZHBhZDoge1xyXG5cdFx0XHRcdFx0dXA6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzggKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM4ICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOCApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bGVmdDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE1JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzclJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyLFxyXG5cdFx0XHRcdFx0XHR0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzNyApO1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzcgKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM3ICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkb3duOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDQwICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCA0MCApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgNDAgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHJpZ2h0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM5ICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOSApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzkgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0am95c3RpY2s6IHtcclxuXHRcdFx0XHRcdHJhZGl1czogNjAsXHJcblx0XHRcdFx0XHR0b3VjaE1vdmU6IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyggZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cmlnaHQ6IHsgXHJcblx0XHRcdFx0dHlwZTogJ2J1dHRvbnMnLCBcclxuXHRcdFx0XHRwb3NpdGlvbjogeyByaWdodDogJzE3JScsIGJvdHRvbTogJzI4JScgfSwgXHJcblx0XHRcdFx0YnV0dG9uczogW1xyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogJy0xMyUnLCB5OiAwIH0sIGxhYmVsOiAnWCcsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJywgZm9udENvbG9yOiAnI2ZmZicsIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBCbHVlIGlzIGN1cnJlbnRseSBtYXBwZWQgdG8gdXAgYnV0dG9uXHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM4ICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzggKTtcclxuXHRcdFx0XHRcdH0sIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzggKTtcdFxyXG5cdFx0XHRcdFx0fSB9LFxyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogMCwgeTogJy0xMSUnIH0sIGxhYmVsOiAnWScsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLCBmb250Q29sb3I6ICcjZmZmJyB9LFxyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogJzEzJScsIHk6IDAgfSwgbGFiZWw6ICdCJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsIGZvbnRDb2xvcjogJyNmZmYnLCB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUmVkIGlzIGN1cnJlbnRseSBtYXBwZWQgdG8gZG93biBidXR0b24sIGFuZCBzcGFjZSBidXR0b25cclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzIgKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzMiApO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCA0MCApO1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDQwICk7XHJcblx0XHRcdFx0XHR9LCB0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDMyICk7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDQwICk7XHJcblx0XHRcdFx0XHR9IH0sXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAwLCB5OiAnMTElJyB9LCBsYWJlbDogJ0EnLCByYWRpdXM6ICc3JScsIHN0cm9rZTogMiwgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLCBmb250Q29sb3I6ICcjZmZmJywgdG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdC8vIEdyZWVuIGlzIGN1cnJlbnRseSBtYXBwZWQgdG8gdXAgYnV0dG9uXHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM4ICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzggKTtcclxuXHRcdFx0XHRcdH0sIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzggKTtcdFxyXG5cdFx0XHRcdFx0fSAgfVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0ZHBhZDoge1xyXG5cdFx0XHRcdFx0dXA6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxlZnQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHJpZ2h0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGpveXN0aWNrOiB7XHJcblx0XHRcdFx0XHRyYWRpdXM6IDYwLFxyXG5cdFx0XHRcdFx0dG91Y2hNb3ZlOiBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coIGUgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoUmFkaXVzOiA0NVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8gQXJlYXMgKG9iamVjdHMpIG9uIHRoZSBzY3JlZW4gdGhhdCBjYW4gYmUgdG91Y2hlZFxyXG5cdFx0dG91Y2hhYmxlQXJlYXM6IFtdLFxyXG5cdFx0XHJcblx0XHQvLyBNdWx0aS10b3VjaFxyXG5cdFx0dG91Y2hlczogW10sXHJcblx0XHRcclxuXHRcdC8vIEhlYXZ5IHNwcml0ZXMgKHdpdGggZ3JhZGllbnRzKSBhcmUgY2FjaGVkIGFzIGEgY2FudmFzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcclxuXHRcdGNhY2hlZFNwcml0ZXM6IHt9LFxyXG5cdFx0XHJcblx0XHRwYXVzZWQ6IGZhbHNlLFxyXG5cdFx0XHJcblx0XHRpbml0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZXJlJ3Mgbm8gdG91Y2ggc3VwcG9ydFxyXG5cdFx0XHRpZiggISAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcclxuXHRcclxuXHRcdFx0Ly8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBzcGVjaWZpZWQgb3B0aW9uc1xyXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdFx0ZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gR3JhYiB0aGUgY2FudmFzIGlmIG9uZSB3YXNuJ3QgcGFzc2VkXHJcblx0XHRcdHZhciBlbGU7XHJcblx0XHRcdGlmKCAhdGhpcy5vcHRpb25zLmNhbnZhcyB8fCAhKCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggdGhpcy5vcHRpb25zLmNhbnZhcyApICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnY2FudmFzJyApWzBdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoIGVsZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2FudmFzID0gZWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY3R4ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBDcmVhdGUgYSBjYW52YXMgdGhhdCBnb2VzIGRpcmVjdGx5IG9uIHRvcCBvZiB0aGUgZ2FtZSBjYW52YXNcclxuXHRcdFx0dGhpcy5jcmVhdGVPdmVybGF5Q2FudmFzKCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENyZWF0ZXMgdGhlIGNhbnZhcyB0aGF0IHNpdHMgb24gdG9wIG9mIHRoZSBnYW1lJ3MgY2FudmFzIGFuZCBob2xkcyBnYW1lIGNvbnRyb2xzIFxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGVPdmVybGF5Q2FudmFzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gU2NhbGUgdG8gc2FtZSBzaXplIGFzIG9yaWdpbmFsIGNhbnZhc1xyXG5cdFx0XHR0aGlzLnJlc2l6ZSggdHJ1ZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdib2R5JyApWzBdLmFwcGVuZENoaWxkKCB0aGlzLmNhbnZhcyApO1xyXG5cdFx0XHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gV2FpdCBmb3IgYW55IG90aGVyIGV2ZW50cyB0byBmaW5pc2hcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgR2FtZUNvbnRyb2xsZXIucmVzaXplLmNhbGwoIF90aGlzICk7IH0sIDEgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIFNldCB0aGUgdG91Y2ggZXZlbnRzIGZvciB0aGlzIG5ldyBjYW52YXNcclxuXHRcdFx0dGhpcy5zZXRUb3VjaEV2ZW50cygpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTG9hZCBpbiB0aGUgaW5pdGlhbCBVSSBlbGVtZW50c1xyXG5cdFx0XHR0aGlzLmxvYWRTaWRlKCAnbGVmdCcgKTtcclxuXHRcdFx0dGhpcy5sb2FkU2lkZSggJ3JpZ2h0JyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gU3RhcnRzIHVwIHRoZSByZW5kZXJpbmcgLyBkcmF3aW5nXHJcblx0XHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiggISB0aGlzLnRvdWNoZXMgfHwgdGhpcy50b3VjaGVzLmxlbmd0aCA9PSAwIClcclxuXHRcdFx0XHR0aGlzLnBhdXNlZCA9IHRydWU7IC8vIHBhdXNlIHVudGlsIGEgdG91Y2ggZXZlbnRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHBpeGVsUmF0aW86IDEsXHJcblx0XHRyZXNpemU6IGZ1bmN0aW9uKCBmaXJzdFRpbWUgKSB7XHJcblx0XHRcdC8vIFNjYWxlIHRvIHNhbWUgc2l6ZSBhcyBvcmlnaW5hbCBjYW52YXNcclxuXHRcdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLm9wdGlvbnMuY2FudmFzLndpZHRoO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuY2FudmFzLmhlaWdodDtcclxuXHRcdFx0XHJcblx0XHRcdC8vIEdldCBpbiBvbiB0aGlzIHJldGluYSBhY3Rpb25cclxuXHRcdFx0aWYoIHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUud2lkdGggJiYgdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS5oZWlnaHQgJiYgdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS5oZWlnaHQuaW5kZXhPZiggJ3B4JyApICE9PSAtMSApIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLndpZHRoO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUuaGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMucGl4ZWxSYXRpbyA9IHRoaXMuY2FudmFzLndpZHRoIC8gcGFyc2VJbnQoIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdFx0dGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMub3B0aW9ucy5jYW52YXMub2Zmc2V0TGVmdCArICdweCc7XHJcblx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IHRoaXMub3B0aW9ucy5jYW52YXMub2Zmc2V0VG9wICsgJ3B4JztcclxuXHRcdFx0dGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCAnc3R5bGUnLCB0aGlzLmNhbnZhcy5nZXRBdHRyaWJ1dGUoICdzdHlsZScgKSArJyAtbXMtdG91Y2gtYWN0aW9uOiBub25lOycgKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCAhZmlyc3RUaW1lIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFJlbW92ZSBhbGwgY3VycmVudCBidXR0b25zXHJcblx0XHRcdFx0dGhpcy50b3VjaGFibGVBcmVhcyA9IFtdO1xyXG5cdFx0XHRcdC8vIENsZWFyIG91dCB0aGUgY2FjaGVkIHNwcml0ZXNcclxuXHRcdFx0XHR0aGlzLmNhY2hlZFNwcml0ZXMgPSBbXTtcclxuXHRcdFx0XHQvLyBSZWxvYWQgaW4gdGhlIGluaXRpYWwgVUkgZWxlbWVudHNcclxuXHRcdFx0XHR0aGlzLnJlbG9hZFNpZGUoICdsZWZ0JyApO1xyXG5cdFx0XHRcdHRoaXMucmVsb2FkU2lkZSggJ3JpZ2h0JyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIHNjYWxlZCBwaXhlbHMuIEdpdmVuIHRoZSB2YWx1ZSBwYXNzZWRcclxuXHRcdCAqIEBwYXJhbSB7aW50L3N0cmluZ30gdmFsdWUgLSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgIyBvZiBwaXhlbHMsIG9yICd4JScgZm9yIHJlbGF0aXZlXHJcblx0XHQgKiBAcGFyYW0ge2NoYXJ9IGF4aXMgLSB4LCB5XHJcblx0XHQgKi9cclxuXHRcdGdldFBpeGVsczogZnVuY3Rpb24oIHZhbHVlLCBheGlzIClcclxuXHRcdHtcclxuXHRcdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdHJldHVybiAwXHJcblx0XHRcdGVsc2UgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgKVxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0ZWxzZSAvLyBhIHBlcmNlbnRhZ2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCBheGlzID09ICd4JyApXHJcblx0XHRcdFx0XHRyZXR1cm4gKCBwYXJzZUludCggdmFsdWUgKSAvIDEwMCApICogdGhpcy5jYW52YXMud2lkdGg7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuICggcGFyc2VJbnQoIHZhbHVlICkgLyAxMDAgKSAqIHRoaXMuY2FudmFzLmhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTaW11bGF0ZXMgYSBrZXkgcHJlc3NcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSAnZG93bicsICd1cCdcclxuXHRcdCAqIEBwYXJhbSB7Y2hhcn0gY2hhcmFjdGVyXHJcblx0XHQgKi9cclxuXHRcdHNpbXVsYXRlS2V5RXZlbnQ6IGZ1bmN0aW9uKCBldmVudE5hbWUsIGtleUNvZGUgKSB7XHJcblx0XHRcdGlmKCB0eXBlb2Ygd2luZG93Lm9ua2V5ZG93biA9PT0gJ3VuZGVmaW5lZCcgKSAvLyBObyBrZXlib2FyZCwgY2FuJ3Qgc2ltdWxhdGUuLi5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdC8qIElmIHRoZXkgaGF2ZSBqUXVlcnksIHVzZSBpdCBiZWNhdXNlIGl0IHdvcmtzIGJldHRlciBmb3IgbW9iaWxlIHNhZmFyaSAqL1xyXG5cdFx0XHRpZiggalF1ZXJ5IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBwcmVzcyA9IGpRdWVyeS5FdmVudCggJ2tleScgKyBldmVudE5hbWUgKTtcclxuXHRcdFx0XHRwcmVzcy5jdHJsS2V5ID0gZmFsc2U7XHJcblx0XHRcdFx0cHJlc3Mud2hpY2ggPSBrZXlDb2RlO1xyXG5cdFx0XHRcdCQoIGRvY3VtZW50ICkudHJpZ2dlciggcHJlc3MgKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0dmFyIG9FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnS2V5Ym9hcmRFdmVudCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENocm9taXVtIEhhY2tcclxuXHRcdFx0aWYoIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSAhPT0gLTEgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBvRXZlbnQsICdrZXlDb2RlJywge1xyXG5cdFx0XHRcdFx0Z2V0IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmtleUNvZGVWYWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1x0IFxyXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb0V2ZW50LCAnd2hpY2gnLCB7XHJcblx0XHRcdFx0XHRnZXQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMua2V5Q29kZVZhbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0aWYoIG9FdmVudC5pbml0S2V5Ym9hcmRFdmVudCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvRXZlbnQuaW5pdEtleWJvYXJkRXZlbnQoICdrZXknICsgZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBkb2N1bWVudC5kZWZhdWx0VmlldywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGtleUNvZGUsIGtleUNvZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvRXZlbnQuaW5pdEtleUV2ZW50KCAna2V5JyArIGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBrZXlDb2RlLCBrZXlDb2RlICk7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRvRXZlbnQua2V5Q29kZVZhbCA9IGtleUNvZGU7XHJcblx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHNldFRvdWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0dmFyIHRvdWNoU3RhcnQgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRpZiggX3RoaXMucGF1c2VkIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHJcblx0XHRcdFx0Ly8gTWljcm9zb2Z0IGFsd2F5cyBoYXMgdG8gaGF2ZSB0aGVpciBvd24gc3R1ZmYuLi5cclxuXHRcdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmIGUuY2xpZW50WCAmJiBlLnBvaW50ZXJUeXBlID09IGUuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXNbIGUucG9pbnRlcklkIF0gPSB7IGNsaWVudFg6IGUuY2xpZW50WCwgY2xpZW50WTogZS5jbGllbnRZIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzID0gZS50b3VjaGVzIHx8IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcclxuXHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0LCBmYWxzZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHRvdWNoRW5kID0gZnVuY3Rpb24oIGUgKSB7XHRcdFx0XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmIGUucG9pbnRlclR5cGUgPT0gZS5NU1BPSU5URVJfVFlQRV9UT1VDSCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZGVsZXRlIF90aGlzLnRvdWNoZXNbIGUucG9pbnRlcklkIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHRcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXMgPSBlLnRvdWNoZXMgfHwgW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCAhZS50b3VjaGVzIHx8IGUudG91Y2hlcy5sZW5ndGggPT0gMCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gRHJhdyBvbmNlIG1vcmUgdG8gcmVtb3ZlIHRoZSB0b3VjaCBhcmVhXHJcblx0XHRcdFx0XHRfdGhpcy5yZW5kZXIoKTtcclxuXHRcdFx0XHRcdF90aGlzLnBhdXNlZCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaEVuZCApO1xyXG5cdFxyXG5cdFx0XHR2YXIgdG91Y2hNb3ZlID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5jbGllbnRYICYmIGUucG9pbnRlclR5cGUgPT0gZS5NU1BPSU5URVJfVFlQRV9UT1VDSCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlc1sgZS5wb2ludGVySWQgXSA9IHsgY2xpZW50WDogZS5jbGllbnRYLCBjbGllbnRZOiBlLmNsaWVudFkgfTtcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlcyA9IGUudG91Y2hlcyB8fCBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaE1vdmUgKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0ICk7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlclVwJywgdG91Y2hFbmQgKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEFkZHMgdGhlIGFyZWEgdG8gYSBsaXN0IG9mIHRvdWNoYWJsZSBhcmVhcywgZHJhd3NcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHdpdGggcHJvcGVydGllczogeCwgeSwgd2lkdGgsIGhlaWdodCwgdG91Y2hTdGFydCwgdG91Y2hFbmQsIHRvdWNoTW92ZVxyXG5cdFx0ICovXHJcblx0XHRhZGRUb3VjaGFibGVEaXJlY3Rpb246IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGRpcmVjdGlvbiA9IG5ldyBUb3VjaGFibGVEaXJlY3Rpb24oIG9wdGlvbnMgKTtcclxuXHRcdFx0XHJcblx0XHRcdGRpcmVjdGlvbi5pZCA9IHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggZGlyZWN0aW9uICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEFkZHMgdGhlIGNpcmN1bGFyIGFyZWEgdG8gYSBsaXN0IG9mIHRvdWNoYWJsZSBhcmVhcywgZHJhd3NcdFxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCBwcm9wZXJ0aWVzOiB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgdG91Y2hNb3ZlXHJcblx0XHQgKi9cclxuXHRcdGFkZEpveXN0aWNrOiBmdW5jdGlvbiggb3B0aW9ucyApIHsgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciwgdG91Y2hTdGFydCwgdG91Y2hFbmQgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgam95c3RpY2sgPSBuZXcgVG91Y2hhYmxlSm95c3RpY2soIG9wdGlvbnMgKTtcclxuXHRcdFx0XHJcblx0XHRcdGpveXN0aWNrLmlkID0gdGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBqb3lzdGljayApO1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyB0aGUgY2lyY3VsYXIgYXJlYSB0byBhIGxpc3Qgb2YgdG91Y2hhYmxlIGFyZWFzLCBkcmF3c1x0IFxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCBwcm9wZXJ0aWVzOiB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgdG91Y2hNb3ZlXHJcblx0XHQgKi9cclxuXHRcdGFkZEJ1dHRvbjogZnVuY3Rpb24oIG9wdGlvbnMgKSB7IC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IsIHRvdWNoU3RhcnQsIHRvdWNoRW5kICkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGJ1dHRvbiA9IG5ldyBUb3VjaGFibGVCdXR0b24oIG9wdGlvbnMgKTtcclxuXHRcdFx0XHJcblx0XHRcdGJ1dHRvbi5pZCA9IHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggYnV0dG9uICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRhZGRUb3VjaGFibGVBcmVhOiBmdW5jdGlvbiggY2hlY2ssIGNhbGxiYWNrICkge1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZEJ1dHRvbnM6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHR2YXIgYnV0dG9ucyA9IHRoaXMub3B0aW9uc1sgc2lkZSBdLmJ1dHRvbnM7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdGZvciggdmFyIGkgPSAwLCBqID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBqOyBpKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHBvc1ggPSB0aGlzLmdldFBvc2l0aW9uWCggc2lkZSApO1xyXG5cdFx0XHRcdHZhciBwb3NZID0gdGhpcy5nZXRQb3NpdGlvblkoIHNpZGUgKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRidXR0b25zW2ldLnggPSBwb3NYICsgdGhpcy5nZXRQaXhlbHMoIGJ1dHRvbnNbaV0ub2Zmc2V0LngsICd5JyApO1xyXG5cdFx0XHRcdGJ1dHRvbnNbaV0ueSA9IHBvc1kgKyB0aGlzLmdldFBpeGVscyggYnV0dG9uc1tpXS5vZmZzZXQueSwgJ3knICk7XHJcblx0XHJcblx0XHRcdFx0dGhpcy5hZGRCdXR0b24oIGJ1dHRvbnNbaV0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZERQYWQ6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHR2YXIgZHBhZCA9IHRoaXMub3B0aW9uc1sgc2lkZSBdLmRwYWQgfHwge307XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBDZW50ZXJlZCB2YWx1ZSBpcyBhdCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvblxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdHZhciBwb3NYID0gdGhpcy5nZXRQb3NpdGlvblgoIHNpZGUgKTtcclxuXHRcdFx0dmFyIHBvc1kgPSB0aGlzLmdldFBvc2l0aW9uWSggc2lkZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIElmIHRoZXkgaGF2ZSBhbGwgNCBkaXJlY3Rpb25zLCBhZGQgYSBjaXJjbGUgdG8gdGhlIGNlbnRlciBmb3IgbG9va3NcclxuXHRcdFx0aWYoIGRwYWQudXAgJiYgZHBhZC5sZWZ0ICYmIGRwYWQuZG93biAmJiBkcGFkLnJpZ2h0IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0eDogcG9zWCxcclxuXHRcdFx0XHRcdHk6IHBvc1ksXHJcblx0XHRcdFx0XHRyYWRpdXM6IGRwYWQucmlnaHQuaGVpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBjZW50ZXIgPSBuZXcgVG91Y2hhYmxlQ2lyY2xlKCBvcHRpb25zICk7IFxyXG5cdFx0XHRcdHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggY2VudGVyICk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0Ly8gVXAgYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQudXAgIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQudXAueCA9IHBvc1ggLSB0aGlzLmdldFBpeGVscyggZHBhZC51cC53aWR0aCwgJ3knICkgLyAyO1xyXG5cdFx0XHRcdGRwYWQudXAueSA9IHBvc1kgLSAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLmhlaWdodCwgJ3knICkgKyAgdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC5oZWlnaHQsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQudXAuZGlyZWN0aW9uID0gJ3VwJztcclxuXHRcdFx0XHR0aGlzLmFkZFRvdWNoYWJsZURpcmVjdGlvbiggZHBhZC51cCApO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdC8vIExlZnQgYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQubGVmdCAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC5sZWZ0LnggPSBwb3NYIC0gKCB0aGlzLmdldFBpeGVscyggZHBhZC5sZWZ0LndpZHRoLCAneScgKSArIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLndpZHRoLCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLmxlZnQueSA9IHBvc1kgLSAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQuaGVpZ2h0LCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLmxlZnQuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLmxlZnQgKTtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHQvLyBEb3duIGFycm93XHJcblx0XHRcdGlmKCBkcGFkLmRvd24gIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQuZG93bi54ID0gcG9zWCAtIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmRvd24ud2lkdGgsICd5JyApIC8gMjtcclxuXHRcdFx0XHRkcGFkLmRvd24ueSA9IHBvc1kgKyAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQuaGVpZ2h0LCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLmRvd24uZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLmRvd24gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUmlnaHQgYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQucmlnaHQgIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQucmlnaHQueCA9IHBvc1ggKyAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLndpZHRoLCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLnJpZ2h0LnkgPSBwb3NZIC0gdGhpcy5nZXRQaXhlbHMoIGRwYWQucmlnaHQuaGVpZ2h0LCAneScgKSAvIDI7XHJcblx0XHRcdFx0ZHBhZC5yaWdodC5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLnJpZ2h0ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkSm95c3RpY2s6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHR2YXIgam95c3RpY2sgPSB0aGlzLm9wdGlvbnNbIHNpZGUgXS5qb3lzdGljaztcclxuXHRcdFx0am95c3RpY2sueCA9IHRoaXMuZ2V0UG9zaXRpb25YKCBzaWRlICk7XHJcblx0XHRcdGpveXN0aWNrLnkgPSB0aGlzLmdldFBvc2l0aW9uWSggc2lkZSApO1xyXG5cdFxyXG5cdFx0XHR0aGlzLmFkZEpveXN0aWNrKCBqb3lzdGljayApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBVc2VkIGZvciByZXNpemluZy4gQ3VycmVudGx5IGlzIGp1c3QgYW4gYWxpYXMgZm9yIGxvYWRTaWRlXHJcblx0XHQgKi9cclxuXHRcdHJlbG9hZFNpZGU6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHQvLyBMb2FkIGluIG5ldyBvbmVzXHJcblx0XHRcdHRoaXMubG9hZFNpZGUoIHNpZGUgKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxvYWRTaWRlOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0aWYoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnR5cGUgPT09ICdkcGFkJyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmxvYWREUGFkKCBzaWRlICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiggdGhpcy5vcHRpb25zWyBzaWRlIF0udHlwZSA9PT0gJ2pveXN0aWNrJyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmxvYWRKb3lzdGljayggc2lkZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnR5cGUgPT09ICdidXR0b25zJyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmxvYWRCdXR0b25zKCBzaWRlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogTm9ybWFsaXplIHRvdWNoIHBvc2l0aW9ucyBieSB0aGUgbGVmdCBhbmQgdG9wIG9mZnNldHNcclxuXHRcdCAqIEBwYXJhbSB7aW50fSB4XHJcblx0XHQgKi9cclxuXHRcdG5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YOiBmdW5jdGlvbiggeCApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAoIHggLSBHYW1lQ29udHJvbGxlci5vcHRpb25zLmNhbnZhcy5vZmZzZXRMZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICkgKiAoIHRoaXMucGl4ZWxSYXRpbyApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBOb3JtYWxpemUgdG91Y2ggcG9zaXRpb25zIGJ5IHRoZSBsZWZ0IGFuZCB0b3Agb2Zmc2V0c1xyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHlcclxuXHRcdCAqL1xyXG5cdFx0bm9ybWFsaXplVG91Y2hQb3NpdGlvblk6IGZ1bmN0aW9uKCB5IClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICggeSAtIEdhbWVDb250cm9sbGVyLm9wdGlvbnMuY2FudmFzLm9mZnNldFRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICkgKiAoIHRoaXMucGl4ZWxSYXRpbyApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB4IHBvc2l0aW9uIHdoZW4gZ2l2ZW4gIyBvZiBwaXhlbHMgZnJvbSByaWdodCAoYmFzZWQgb24gY2FudmFzIHNpemUpXHJcblx0XHQgKiBAcGFyYW0ge2ludH0gcmlnaHQgXHJcblx0XHQgKi9cclxuXHRcdGdldFhGcm9tUmlnaHQ6IGZ1bmN0aW9uKCByaWdodCApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgeSBwb3NpdGlvbiB3aGVuIGdpdmVuICMgb2YgcGl4ZWxzIGZyb20gYm90dG9tIChiYXNlZCBvbiBjYW52YXMgc2l6ZSlcclxuXHRcdCAqIEBwYXJhbSB7aW50fSByaWdodCBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0WUZyb21Cb3R0b206IGZ1bmN0aW9uKCBib3R0b20gKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQgLSBib3R0b207XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEdyYWJzIHRoZSB4IHBvc2l0aW9uIG9mIGVpdGhlciB0aGUgbGVmdCBvciByaWdodCBzaWRlL2NvbnRyb2xzXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc2lkZSAtICdsZWZ0JywgJ3JpZ2h0JyBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UG9zaXRpb25YOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0aWYoIHR5cGVvZiB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5sZWZ0ICE9PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5sZWZ0LCAneCcgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFhGcm9tUmlnaHQoIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5yaWdodCwgJ3gnICkgKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogR3JhYnMgdGhlIHkgcG9zaXRpb24gb2YgZWl0aGVyIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGUvY29udHJvbHNcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzaWRlIC0gJ2xlZnQnLCAncmlnaHQnIFxyXG5cdFx0ICovXHJcblx0XHRnZXRQb3NpdGlvblk6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHRpZiggdHlwZW9mIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLnRvcCAhPT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBpeGVscyggdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24udG9wLCAneScgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFlGcm9tQm90dG9tKCB0aGlzLmdldFBpeGVscyggdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24uYm90dG9tLCAneScgKSApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdFx0dGhpcy5jdHguY2xlYXJSZWN0KCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdC8vIFdoZW4gbm8gdG91Y2ggZXZlbnRzIGFyZSBoYXBwZW5pbmcsIHRoaXMgZW5hYmxlcyAncGF1c2VkJyBtb2RlLCB3aGljaCBvbmx5IHNraXBzIHRoaXMgc21hbGwgcGFydC5cclxuXHRcdFx0Ly8gU2tpcHBpbmcgdGhlIGNsZWFyUmVjdCBhbmQgZHJhdygpcyB3b3VsZCBiZSBuaWNlLCBidXQgaXQgbWVzc2VzIHdpdGggdGhlIHRyYW5zcGFyZW50IGdyYWRpZW50c1xyXG5cdFx0XHRpZiggISB0aGlzLnBhdXNlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY2FjaGVJZCA9ICd0b3VjaC1jaXJjbGUnO1xyXG5cdFx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdFx0aWYoICEgY2FjaGVkICYmIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IDIgKiB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXM7XHJcblx0XHRcdFx0XHRzdWJDYW52YXMuaGVpZ2h0ID0gMiAqIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cztcclxuXHRcdFxyXG5cdFx0XHRcdFx0dmFyIGNlbnRlciA9IHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cztcclxuXHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggY2VudGVyLCBjZW50ZXIsIDEsIGNlbnRlciwgY2VudGVyLCB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMgKTsgLy8gMTAgPSBlbmQgcmFkaXVzXHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyMDAsIDIwMCwgMjAwLCAxICknICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAyMDAsIDIwMCwgMjAwLCAwICknICk7XHJcblx0XHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcdFx0XHRjdHguYXJjKCBjZW50ZXIsIGNlbnRlciwgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBEcmF3IHRoZSBjdXJyZW50IHRvdWNoIHBvc2l0aW9ucyBpZiBhbnlcclxuXHRcdFx0XHRmb3IoIHZhciBpID0gMCwgaiA9IHRoaXMudG91Y2hlcy5sZW5ndGg7IGkgPCBqOyBpKysgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciB0b3VjaCA9IHRoaXMudG91Y2hlc1sgaSBdO1xyXG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB0b3VjaCA9PT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdHZhciB4ID0gdGhpcy5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWCggdG91Y2guY2xpZW50WCApLCB5ID0gdGhpcy5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWSggdG91Y2guY2xpZW50WSApO1xyXG5cdFx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHggLSB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsIHkgLSB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGZvciggdmFyIGkgPSAwLCBqID0gdGhpcy50b3VjaGFibGVBcmVhcy5sZW5ndGg7IGkgPCBqOyBpKysgKVxyXG5cdFx0XHR7XHRcclxuXHRcdFx0XHR0aGlzLnRvdWNoYWJsZUFyZWFzWyBpIF0uZHJhdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBhcmVhID0gdGhpcy50b3VjaGFibGVBcmVhc1sgaSBdO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gR28gdGhyb3VnaCBhbGwgdG91Y2hlcyB0byBzZWUgaWYgYW55IGhpdCB0aGlzIGFyZWFcclxuXHRcdFx0XHR2YXIgdG91Y2hlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGZvciggdmFyIGsgPSAwLCBsID0gdGhpcy50b3VjaGVzLmxlbmd0aDsgayA8IGw7IGsrKyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHRvdWNoID0gdGhpcy50b3VjaGVzWyBrIF07XHJcblx0XHRcdFx0XHRpZiggdHlwZW9mIHRvdWNoID09PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFxyXG5cdFx0XHRcdFx0dmFyIHggPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YKCB0b3VjaC5jbGllbnRYICksIHkgPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25ZKCB0b3VjaC5jbGllbnRZICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyBDaGVjayB0aGF0IGl0J3MgaW4gdGhlIGJvdW5kaW5nIGJveC9jaXJjbGVcclxuXHRcdFx0XHRcdGlmKCAoIGFyZWEuY2hlY2soIHgsIHkgKSApICE9PSBmYWxzZSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmKCAhdG91Y2hlZCApXHJcblx0XHRcdFx0XHRcdFx0dG91Y2hlZCA9IHRoaXMudG91Y2hlc1sgayBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiggdG91Y2hlZCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoICFhcmVhLmFjdGl2ZSApXHJcblx0XHRcdFx0XHRcdGFyZWEudG91Y2hTdGFydFdyYXBwZXIoIHRvdWNoZWQgKTtcclxuXHRcdFx0XHRcdGFyZWEudG91Y2hNb3ZlV3JhcHBlciggdG91Y2hlZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKCBhcmVhLmFjdGl2ZSApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXJlYS50b3VjaEVuZFdyYXBwZXIoIHRvdWNoZWQgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMucmVuZGVyV3JhcHBlciApO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogU28gd2UgY2FuIGtlZXAgc2NvcGUsIGFuZCBkb24ndCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBvYmogZXZlcnkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChiYWQgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbikgXHJcblx0XHQgKi9cclxuXHRcdHJlbmRlcldyYXBwZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5yZW5kZXIoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBTdXBlcmNsYXNzIGZvciB0b3VjaGFibGUgc3R1ZmYgXHJcblx0ICovXHJcblx0dmFyIFRvdWNoYWJsZUFyZWEgPSAoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVBcmVhKCkgXHJcblx0XHR7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIGJlaW5nIHRvdWNoZWRcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoU3RhcnQgPSBudWxsO1xyXG5cdFx0XHJcblx0XHQvLyBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBiZWluZyBtb3ZlZFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hNb3ZlID0gbnVsbDtcclxuXHRcdFxyXG5cdFx0Ly8gQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgbm8gbG9uZ2VyIGJlaW5nIHRvdWNoZWRcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoRW5kID0gbnVsbDtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudHlwZSA9ICdhcmVhJztcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmlkID0gZmFsc2U7XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSB1c2VyLXNwZWNpZmllZCBjYWxsYmFjayBmb3IgdGhpcyBkaXJlY3Rpb24gYmVpbmcgdG91Y2hlZFxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnNldFRvdWNoU3RhcnQgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XHJcblx0XHRcdHRoaXMudG91Y2hTdGFydCA9IGNhbGxiYWNrO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBubyBsb25nZXIgdG91Y2hlZCBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hTdGFydFdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hTdGFydCApXHJcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBNYXJrIHRoaXMgZGlyZWN0aW9uIGFzIGFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIGZvciB0aGlzIGRpcmVjdGlvbiBubyBsb25nZXIgYmVpbmcgdG91Y2hlZFxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnNldFRvdWNoTW92ZSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcclxuXHRcdFx0dGhpcy50b3VjaE1vdmUgPSBjYWxsYmFjaztcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgbW92ZWQuIE1ha2Ugc3VyZSBpdCdzIGFjdHVhbGx5IGNoYW5nZWQgYmVmb3JlIHBhc3NpbmcgdG8gZGV2ZWxvcGVyXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NYID0gMDtcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NZID0gMDtcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoTW92ZVdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hNb3ZlICYmICggZS5jbGllbnRYICE9IFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NYIHx8IGUuY2xpZW50WSAhPSBUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5sYXN0UG9zWSApIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudG91Y2hNb3ZlKCk7XHJcblx0XHRcdFx0dGhpcy5sYXN0UG9zWCA9IGUuY2xpZW50WDtcclxuXHRcdFx0XHR0aGlzLmxhc3RQb3NZID0gZS5jbGllbnRZO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgaW5hY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSB1c2VyLXNwZWNpZmllZCBjYWxsYmFjayBmb3IgdGhpcyBkaXJlY3Rpb24gbm8gbG9uZ2VyIGJlaW5nIHRvdWNoZWRcclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5zZXRUb3VjaEVuZCA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcclxuXHRcdFx0dGhpcy50b3VjaEVuZCA9IGNhbGxiYWNrO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBmaXJzdCB0b3VjaGVkIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaEVuZFdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hFbmQgKVxyXG5cdFx0XHRcdHRoaXMudG91Y2hFbmQoKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgaW5hY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLnJlbmRlcigpO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUFyZWE7XHJcblx0XHRcclxuXHR9ICkoKTtcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlRGlyZWN0aW9uID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlRGlyZWN0aW9uLCBfX3N1cGVyICk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZURpcmVjdGlvbiggb3B0aW9ucyApIFxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGkgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd4JyApO1xyXG5cdFx0XHRcdGVsc2UgaWYoIGkgPT0gJ3knIHx8IGkgPT0gJ2hlaWdodCcgfHwgaSA9PSAnd2lkdGgnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd5JyApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdH1cclxuXHRcclxuXHRcdFRvdWNoYWJsZURpcmVjdGlvbi5wcm90b3R5cGUudHlwZSA9ICdkaXJlY3Rpb24nO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdG91Y2ggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpcyBkaXJlY3Rpb24gXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZURpcmVjdGlvbi5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdHZhciBkaXN0YW5jZVgsIGRpc3RhbmNlWTtcclxuXHRcdFx0aWYoICggTWF0aC5hYnMoIHRvdWNoWCAtIHRoaXMueCApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hYID4gdGhpcy54ICkgKSAmJiAvLyBsZWZ0XHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hYIC0gKCB0aGlzLnggKyB0aGlzLndpZHRoICkgKSA8ICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSB8fCAoIHRvdWNoWCA8IHRoaXMueCArIHRoaXMud2lkdGggKSApICYmIC8vIHJpZ2h0XHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gdGhpcy55ICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFkgPiB0aGlzLnkgKSApICYmIC8vIHRvcFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWSAtICggdGhpcy55ICsgdGhpcy5oZWlnaHQgKSApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hZIDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgKSApIC8vIGJvdHRvbVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZURpcmVjdGlvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgY2FjaGVJZCA9IHRoaXMudHlwZSArICcnICsgdGhpcy5pZCArICcnICsgdGhpcy5hY3RpdmU7XHJcblx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdGlmKCAhIGNhY2hlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSB0aGlzLndpZHRoICsgMiAqIHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodCArIDIgKiB0aGlzLnN0cm9rZTtcclxuXHRcclxuXHRcdFx0XHR2YXIgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSB8fCAwLjk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoICEgdGhpcy5hY3RpdmUgKSAvLyBEaXJlY3Rpb24gY3VycmVudGx5IGJlaW5nIHRvdWNoZWRcclxuXHRcdFx0XHRcdG9wYWNpdHkgKj0gMC41O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0c3dpdGNoKCB0aGlzLmRpcmVjdGlvbiApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2FzZSAndXAnOlxyXG5cdFx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoIDAsIDAsIDAsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7ICAgXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgdGhpcy53aWR0aCwgMCApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAwLCAwLCAwLCAnICsgKCBvcGFjaXR5ICogMC41ICkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyBvcGFjaXR5ICsgJyApJyApOyAgIFxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCB0aGlzLndpZHRoLCAwICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyBvcGFjaXR5ICsgJyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAwLCAwLCAwLCAnICsgKCBvcGFjaXR5ICogMC41ICkgKyAnICknICk7ICBcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdkb3duJzpcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgMCwgdGhpcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTsgICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFx0XHJcblx0XHRcdFx0Y3R4LmZpbGxSZWN0KCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xICknO1xyXG5cdFx0XHRcdGN0eC5zdHJva2VSZWN0KCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXSA9IHN1YkNhbnZhcztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmRyYXdJbWFnZSggY2FjaGVkLCB0aGlzLngsIHRoaXMueSApO1xyXG5cdFx0XHRcdFxyXG5cdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZURpcmVjdGlvbjtcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlQnV0dG9uID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlQnV0dG9uLCBfX3N1cGVyICk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZUJ1dHRvbiggb3B0aW9ucyApIC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IgKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGkgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd4JyApO1xyXG5cdFx0XHRcdGVsc2UgaWYoIGkgPT0gJ3gnIHx8IGkgPT0gJ3JhZGl1cycgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3knICk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVCdXR0b24ucHJvdG90eXBlLnR5cGUgPSAnYnV0dG9uJztcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgaWYgdGhlIHRvdWNoIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoaXMgZGlyZWN0aW9uIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVCdXR0b24ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oIHRvdWNoWCwgdG91Y2hZICkge1xyXG5cdFx0XHRpZiggXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hYIC0gdGhpcy54ICkgPCB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSApICYmXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gdGhpcy55ICkgPCB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSApXHJcblx0XHRcdClcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBjYWNoZUlkID0gdGhpcy50eXBlICsgJycgKyB0aGlzLmlkICsgJycgKyB0aGlzLmFjdGl2ZTtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0aWYoICEgY2FjaGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSBzdWJDYW52YXMuaGVpZ2h0ID0gMiAqICggdGhpcy5yYWRpdXMgKyBjdHgubGluZVdpZHRoICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIDEsIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHR2YXIgdGV4dFNoYWRvd0NvbG9yO1xyXG5cdFx0XHRcdHN3aXRjaCggdGhpcy5iYWNrZ3JvdW5kQ29sb3IgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNhc2UgJ2JsdWUnOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDEyMywgMTgxLCAxOTcsIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyMxMDVhNzgnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjMEE0ODYxJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdncmVlbic6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMjksIDIwMSwgMzYsIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyMxMDc4MTQnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjMDg1QzBCJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdyZWQnOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDE2NSwgMzQsIDM0LCAwLjYpJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjNTIwMTAxJyApO1xyXG5cdFx0XHRcdFx0XHR0ZXh0U2hhZG93Q29sb3IgPSAnIzMzMDAwMCc7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAneWVsbG93JzpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSgyMTksIDIxNywgNTksIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyNFOEUxMEUnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjQkRCNjAwJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGl0ZSc6XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyNTUsMjU1LDI1NSwuMyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjZWVlJyApO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRpZiggdGhpcy5hY3RpdmUgKVx0XHRcdFxyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRleHRTaGFkb3dDb2xvcjtcclxuXHRcdFx0XHRlbHNlXHRcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcclxuXHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSB0ZXh0U2hhZG93Q29sb3I7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0Ly9jdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRjdHguYXJjKCBzdWJDYW52YXMud2lkdGggLyAyLCBzdWJDYW52YXMud2lkdGggLyAyLCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB0aGlzLmxhYmVsIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBUZXh0IFNoYWRvd1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRleHRTaGFkb3dDb2xvcjtcclxuXHRcdFx0XHRcdGN0eC5mb250ID0gJ2JvbGQgJyArICggdGhpcy5mb250U2l6ZSB8fCBzdWJDYW52YXMuaGVpZ2h0ICogMC4zNSApICsgJ3B4IFZlcmRhbmEnO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KCB0aGlzLmxhYmVsLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiArIDIsIHN1YkNhbnZhcy5oZWlnaHQgLyAyICsgMiApO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmZvbnRDb2xvcjtcclxuXHRcdFx0XHRcdGN0eC5mb250ID0gJ2JvbGQgJyArICggdGhpcy5mb250U2l6ZSB8fCBzdWJDYW52YXMuaGVpZ2h0ICogMC4zNSApICsgJ3B4IFZlcmRhbmEnO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KCB0aGlzLmxhYmVsLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiwgc3ViQ2FudmFzLmhlaWdodCAvIDIgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHRoaXMueCwgdGhpcy55ICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVCdXR0b247XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0dmFyIFRvdWNoYWJsZUpveXN0aWNrID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlSm95c3RpY2ssIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlSm95c3RpY2soIG9wdGlvbnMgKSAvL3gsIHksIHJhZGl1cywgYmFja2dyb3VuZENvbG9yIClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBvcHRpb25zIClcclxuXHRcdFx0XHR0aGlzW2ldID0gb3B0aW9uc1tpXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5jdXJyZW50WCA9IHRoaXMuY3VycmVudFggfHwgdGhpcy54O1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRZID0gdGhpcy5jdXJyZW50WSB8fCB0aGlzLnk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS50eXBlID0gJ2pveXN0aWNrJztcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgaWYgdGhlIHRvdWNoIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoaXMgZGlyZWN0aW9uIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdGlmKCBcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFggLSB0aGlzLnggKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApICkgJiZcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSB0aGlzLnkgKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIClcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIGRldGFpbHMgZm9yIHRoZSBqb3lzdGljayBtb3ZlIGV2ZW50LCBzdG9yZWQgaGVyZSBzbyB3ZSdyZSBub3QgY29uc3RhbnRseSBjcmVhdGluZyBuZXcgb2JqcyBmb3IgZ2FyYmFnZS4gVGhlIG9iamVjdCBoYXMgcGFyYW1zOlxyXG5cdFx0ICogZHggLSB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGUgY3VycmVudCBqb3lzdGljayBjZW50ZXIgaXMgZnJvbSB0aGUgYmFzZSBjZW50ZXIgaW4geCBkaXJlY3Rpb25cclxuXHRcdCAqIGR5IC0gdGhlIG51bWJlciBvZiBwaXhlbHMgdGhlIGN1cnJlbnQgam95c3RpY2sgY2VudGVyIGlzIGZyb20gdGhlIGJhc2UgY2VudGVyIGluIHkgZGlyZWN0aW9uXHJcblx0XHQgKiBtYXggLSB0aGUgbWF4aW11bSBudW1iZXIgb2YgcGl4ZWxzIGR4IG9yIGR5IGNhbiBiZVxyXG5cdFx0ICogbm9ybWFsaXplZFggLSBhIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxIHJlbGF0aW5nIHRvIGhvdyBmYXIgbGVmdCBvciByaWdodCB0aGUgam95c3RpY2sgaXNcclxuXHRcdCAqIG5vcm1hbGl6ZWRZIC0gYSBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMSByZWxhdGluZyB0byBob3cgZmFyIHVwIG9yIGRvd24gdGhlIGpveXN0aWNrIGlzXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS5tb3ZlRGV0YWlscyA9IHt9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgam95c3RpY2sgaXMgbW92ZWRcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLnRvdWNoTW92ZVdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50WCA9IEdhbWVDb250cm9sbGVyLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YKCBlLmNsaWVudFggKTtcdFxyXG5cdFx0XHR0aGlzLmN1cnJlbnRZID0gR2FtZUNvbnRyb2xsZXIubm9ybWFsaXplVG91Y2hQb3NpdGlvblkoIGUuY2xpZW50WSApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hNb3ZlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCB0aGlzLm1vdmVEZXRhaWxzLmR4ICE9IHRoaXMuY3VycmVudFggLSB0aGlzLnggJiYgdGhpcy5tb3ZlRGV0YWlscy5keSAhPSB0aGlzLnkgLSB0aGlzLmN1cnJlbnRZIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLmR4ID0gdGhpcy5jdXJyZW50WCAtIHRoaXMueDsgLy8gcmV2ZXJzZSBzbyByaWdodCBpcyBwb3NpdGl2ZVxyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5keSA9IHRoaXMueSAtIHRoaXMuY3VycmVudFk7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLm1heCA9IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApO1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5ub3JtYWxpemVkWCA9IHRoaXMubW92ZURldGFpbHMuZHggLyB0aGlzLm1vdmVEZXRhaWxzLm1heDtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMubm9ybWFsaXplZFkgPSB0aGlzLm1vdmVEZXRhaWxzLmR5IC8gdGhpcy5tb3ZlRGV0YWlscy5tYXg7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaE1vdmUoIHRoaXMubW92ZURldGFpbHMgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgaW5hY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoICEgdGhpcy5pZCApIC8vIHdhaXQgdW50aWwgaWQgaXMgc2V0XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR2YXIgY2FjaGVJZCA9IHRoaXMudHlwZSArICcnICsgdGhpcy5pZCArICcnICsgdGhpcy5hY3RpdmU7XHJcblx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdGlmKCAhIGNhY2hlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHR0aGlzLnN0cm9rZSA9IHRoaXMuc3Ryb2tlIHx8IDI7XHJcblx0XHRcdFx0c3ViQ2FudmFzLndpZHRoID0gc3ViQ2FudmFzLmhlaWdodCA9IDIgKiAoIHRoaXMucmFkaXVzICsgdGhpcy5zdHJva2UgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5zdHJva2U7XHJcblx0XHRcdFx0aWYoIHRoaXMuYWN0aXZlICkgLy8gRGlyZWN0aW9uIGN1cnJlbnRseSBiZWluZyB0b3VjaGVkXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCAwLCAwLCAxLCAwLCAwLCB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMjAwLDIwMCwyMDAsLjUgKScgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDIwMCwyMDAsMjAwLC45ICknICk7XHJcblx0XHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFNUWUxJTkcgRk9SIEJVVFRPTlNcclxuXHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggMCwgMCwgMSwgMCwgMCwgdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDIwMCwyMDAsMjAwLC4yICknICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAyMDAsMjAwLDIwMCwuNCApJyApO1xyXG5cdFx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoIDAsMCwwLC40ICknO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcdFx0Ly8gQWN0dWFsIGpveXN0aWNrIHBhcnQgdGhhdCBpcyBiZWluZyBtb3ZlZFxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguYXJjKCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0Y3R4LmZpbGwoKTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEcmF3IHRoZSBiYXNlIHRoYXQgc3RheXMgc3RhdGljXHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsU3R5bGUgPSAnIzQ0NCc7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzICogMC43LCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsKCk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5zdHJva2UoKTtcclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgdGhpcy5jdXJyZW50WCAtIHRoaXMucmFkaXVzLCB0aGlzLmN1cnJlbnRZIC0gdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUpveXN0aWNrO1xyXG5cdH0gKSggVG91Y2hhYmxlQXJlYSApO1xyXG5cdFxyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVDaXJjbGUgPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVDaXJjbGUsIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlQ2lyY2xlKCBvcHRpb25zIClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBvcHRpb25zIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCBpID09ICd4JyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneCcgKTtcclxuXHRcdFx0XHRlbHNlIGlmKCBpID09ICd4JyB8fCBpID09ICdyYWRpdXMnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd5JyApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIE5vIHRvdWNoIGZvciB0aGlzIGZlbGxhIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVDaXJjbGUucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oIHRvdWNoWCwgdG91Y2hZICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVDaXJjbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdFx0Ly8gU1RZTElORyBGT1IgQlVUVE9OU1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZmlsbFN0eWxlID0gJ3JnYmEoIDAsIDAsIDAsIDAuNSApJztcclxuXHRcdFx0XHJcblx0XHRcdC8vIEFjdHVhbCBqb3lzdGljayBwYXJ0IHRoYXQgaXMgYmVpbmcgbW92ZWRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGwoKTtcclxuXHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVDaXJjbGU7XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0LyoqXHJcblx0ICogU2hpbSBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxyXG5cdCAqL1xyXG5cdCggZnVuY3Rpb24oKSB7XHJcblx0ICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuXHJcblx0XHR2YXIgbGFzdFRpbWUgPSAwO1xyXG5cdFx0dmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cdFx0Zm9yKCB2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4IClcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdH1cclxuXHQgXHJcblx0XHRpZiAoICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIClcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKCBjYWxsYmFjaywgZWxlbWVudCApIHtcclxuXHRcdFx0XHR2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHR2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KCAwLCAxNiAtICggY3VyclRpbWUgLSBsYXN0VGltZSApICk7XHJcblx0XHRcdFx0dmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCBcclxuXHRcdFx0XHRcdHRpbWVUb0NhbGwgKTtcclxuXHRcdFx0XHRsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuXHRcdFx0XHRyZXR1cm4gaWQ7XHJcblx0XHRcdH07XHJcblx0IFxyXG5cdFx0aWYgKCAhd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIClcclxuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oIGlkICkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCggaWQgKTtcclxuXHRcdFx0fTtcclxuXHR9KCkgKTtcclxufSApKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgPyBtb2R1bGUuZXhwb3J0cyA6IHdpbmRvdykiLCJ2YXIgZ2xvYmFscyA9IHtcclxuICAgIGJ1bGxldHM6IG51bGwsXHJcbiAgICBlbmVtaWVzOiBudWxsLFxyXG4gICAgcGxheWVyOiBudWxsXHJcbn1cclxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJy4vZ2FtZS91cGRhdGUnKTtcclxudmFyIHByZWxvYWQgPSByZXF1aXJlKCcuL2dhbWUvcHJlbG9hZCcpIDtcclxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vZ2FtZS9jcmVhdGUnKTtcclxuIFxyXG52YXIgZ2FtZSA9IHdpbmRvdy5nYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQVVUTywgJycsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlIH0pO1xyXG4iLCIgZnVuY3Rpb24gcmVzZXRCdWxsZXQgKGJ1bGxldCkge1xyXG5cclxuICAgIGJ1bGxldC5raWxsKCk7XHJcblxyXG59XHJcbjtcclxuZnVuY3Rpb24gc2V0dXBFbmVteSAoZW5lbXkpIHtcclxuXHJcbiAgICBlbmVteS5hbmNob3IueCA9IDAuNTtcclxuICAgIGVuZW15LmFuY2hvci55ID0gMC41O1xyXG4gICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2V4cGxvZGUnKTtcclxuXHJcbn07XHJcbmZ1bmN0aW9uIHNldHVwRW5lbXlCb3NzIChlbmVteSkge1xyXG5cclxuICAgIGVuZW15LmFuY2hvci54ID0gMC41O1xyXG4gICAgZW5lbXkuYW5jaG9yLnkgPSAwLjU7XHJcbiAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnZXhwbG9kZS1zbWFsbGVzdCcpO1xyXG5cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSAgICBmdW5jdGlvbigpe1xyXG5cclxuICAgIGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xyXG5cclxuICAgIHRoaXMuc3BhY2VCRyA9ICB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDgwMCwgNjAwLCAnYmcnKTsgIFxyXG4gICAgdGhpcy5zcGFjZUJHLmF1dG9TY3JvbGwoMCwgNzUpOyBcclxuXHJcblxyXG4gICAgZ2FtZS5pbnB1dC5nYW1lcGFkLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gVG8gbGlzdGVuIHRvIGJ1dHRvbnMgZnJvbSBhIHNwZWNpZmljIHBhZCBsaXN0ZW4gZGlyZWN0bHkgb24gdGhhdCBwYWQgZ2FtZS5pbnB1dC5nYW1lcGFkLnBhZFgsIHdoZXJlIFggPSBwYWQgMS00XHJcbiAgICAvL3ZhciBwYWQxID0gZ2FtZS5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcbiAgICBjb25zb2xlLmxvZygnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gICAgaWYoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgR2FtZUNvbnRyb2xsZXIgPSB3aW5kb3cuR2FtZUNvbnRyb2xsZXIgPSByZXF1aXJlKCdnYW1lLWNvbnRyb2xsZXInKS5HYW1lQ29udHJvbGxlcjtcclxuXHJcblxyXG4gICAgICAgIEdhbWVDb250cm9sbGVyLmluaXQoe1xyXG4gICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnam95c3RpY2snLFxyXG4gICAgICAgICAgICAgICAgam95c3RpY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgbmVlZCB0aGlzLCBidXQgdGhlIGV2ZW50IGlzIGhlcmUgaWYgeW91IHdhbnQgaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IGZ1bmN0aW9uKGpveXN0aWNrX2RldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQgPSBqb3lzdGlja19kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmlucHV0LmpveXN0aWNrTGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UncmUgbm90IHVzaW5nIGFueXRoaW5nIG9uIHRoZSByaWdodCBmb3IgdGhpcyBkZW1vLCBidXQgeW91IGNhbiBhZGQgYnV0dG9ucywgZXRjLlxyXG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hdXN0aW5oYWxsb2NrL2h0bWw1LXZpcnR1YWwtZ2FtZS1jb250cm9sbGVyLyBmb3IgZXhhbXBsZXMuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykoZ2FtZSk7XHJcbiAgICBwbGF5ZXIuaW5pdCgpO1xyXG4gICAgdmFyIGJ1bGxldHMgPSB3aW5kb3cuYnVsbGV0cyA9IHRoaXMuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcclxuXHJcbiAgICBidWxsZXRzLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuXHJcbiAgICBidWxsZXRzLmNyZWF0ZU11bHRpcGxlKDEwLCAnYnVsbGV0cycsICdidWxsZXQtZ3JlZW4ucG5nJyk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xyXG4gICAgYnVsbGV0cy5zZXRBbGwoJ2FuY2hvci55JywgMSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICB3aW5kb3cuZXhwbG9zaW9ucyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBleHBsb3Npb25zLmNyZWF0ZU11bHRpcGxlKDMwLCAnZXhwbG9kZScpO1xyXG4gICAgZXhwbG9zaW9ucy5mb3JFYWNoKHNldHVwRW5lbXksIHRoaXMpO1xyXG4gICAgd2luZG93Lm11c2ljID0gZ2FtZS5hZGQuYXVkaW8oJ3N0YWdlLTEnKTsgXHJcbiAgICB3aW5kb3cuZXhwbG9zaW9uc1NtYWxsZXN0ID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIGV4cGxvc2lvbnNTbWFsbGVzdC5jcmVhdGVNdWx0aXBsZSgzMCwgJ2V4cGxvZGUtc21hbGxlc3QnKTtcclxuICAgIGV4cGxvc2lvbnNTbWFsbGVzdC5mb3JFYWNoKHNldHVwRW5lbXlCb3NzLCB0aGlzKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICB3aW5kb3cuYm9vbSA9IGdhbWUuYWRkLmF1ZGlvKCdib29tJyk7XHJcbiAgICB3aW5kb3cubGF6ZXIgPSBnYW1lLmFkZC5hdWRpbygnbGF6ZXInKTtcclxuXHJcbiAgICBcclxuICAgIHdpbmRvdy5zdGFnZTEgPSByZXF1aXJlKCcuL3NjZW5lcy9zY2VuZS0xJykoZ2FtZSk7XHJcbiAgICBzdGFnZTEuaW5pdCgpO1xyXG59XHJcblxyXG4gIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZ2FtZSkge1xyXG5cdHZhciBwbGF5ZXIsIGN1cnNvcnM7XHJcblx0dmFyIHJpZ2h0X2J1bGxldFRpbWUgPSAwLCBsZWZ0X2J1bGxldFRpbWUgPSAwOyBcclxuICAgIHZhciBwbGF5ZXJTcGVlZCA9IDIwMDsgLy9kdW5ub1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXJlQnVsbGV0ICgpIHsgXHJcbiAgICAgICAgICAgIGlmICggZ2FtZS50aW1lLm5vdyA+IHJpZ2h0X2J1bGxldFRpbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodF9idWxsZXQgPSBidWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyaWdodF9idWxsZXQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIEFuZCBmaXJlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0LnJlc2V0KHBsYXllci54LCBwbGF5ZXIueSArIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9idWxsZXQuYm9keS52ZWxvY2l0eS55ID0gLTMwMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9idWxsZXRUaW1lID0gZ2FtZS50aW1lLm5vdyArIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sYXplci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBnYW1lLnRpbWUubm93ID4gbGVmdF9idWxsZXRUaW1lICsgMjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0X2J1bGxldCA9IGJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRfYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBBbmQgZmlyZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LnJlc2V0KHBsYXllci54ICsgMjYsIHBsYXllci55ICsgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9idWxsZXRUaW1lID0gZ2FtZS50aW1lLm5vdyArIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sYXplci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0IDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRwbGF5ZXIgPSBnYW1lLmFkZC5zcHJpdGUoKDQwMCAtIDE2KSwgNTAwLCAnc2hpcCcpO1xyXG4gICAgXHRcdGdhbWUucGh5c2ljcy5lbmFibGUocGxheWVyLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xyXG4gICAgXHRcdGN1cnNvcnMgPSAgZ2FtZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vS0VZQk9BUkQgTU9WRU1FTlRcclxuXHQgICAgICAgIGlmIChjdXJzb3JzLnVwLmlzRG93bilcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICAvLyAgSWYgdGhlIHNoaWZ0IGtleSBpcyBhbHNvIHByZXNzZWQgdGhlbiB0aGUgd29ybGQgaXMgcm90YXRlZFxyXG5cdCAgICAgICAgICAgIGlmIChjdXJzb3JzLnVwLnNoaWZ0S2V5KVxyXG5cdCAgICAgICAgICAgIHtcclxuXHQgICAgICAgICAgICAgICAgLy9nYW1lLndvcmxkLnJvdGF0aW9uICs9IDAuMDU7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIGVsc2VcclxuXHQgICAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgICAgIGlmKHBsYXllci55ID4gMzUwKSBwbGF5ZXIueSAtPSA0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIGVsc2UgaWYgKGN1cnNvcnMuZG93bi5pc0Rvd24pXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgaWYgKGN1cnNvcnMuZG93bi5zaGlmdEtleSlcclxuXHQgICAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiAtPSAwLjA1O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBlbHNlXHJcblx0ICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICBwbGF5ZXIueSArPSA0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIGlmIChjdXJzb3JzLmxlZnQuaXNEb3duKVxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIHBsYXllci54IC09IDQ7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBlbHNlIGlmIChjdXJzb3JzLnJpZ2h0LmlzRG93bilcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgIHBsYXllci54ICs9IDQ7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBpZiAoZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKSlcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICBmaXJlQnVsbGV0KCkgO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vR0FNRVBBRCBTVVBQT1JUXHJcbiAgICAgICAgICAgIGlmIChnYW1lLmlucHV0LmpveXN0aWNrTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0aGUgdWZvIHVzaW5nIHRoZSBqb3lzdGljaydzIG5vcm1hbGl6ZWRYIGFuZCBZIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIHJhbmdlIGZyb20gLTEgdG8gMS5cclxuICAgICAgICAgICAgICAgIHBsYXllci5ib2R5LnZlbG9jaXR5LnNldFRvKGdhbWUuaW5wdXQuam95c3RpY2tMZWZ0Lm5vcm1hbGl6ZWRYICogMjAwLCBnYW1lLmlucHV0LmpveXN0aWNrTGVmdC5ub3JtYWxpemVkWSAqIHBsYXllclNwZWVkICogLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICAgIHRoaXMubG9hZC5hdGxhcygnYnVsbGV0cycsICdpbWcvYXNzZXRzL2J1bGxldHMucG5nJywgJ3NoZWV0cy9idWxsZXRzJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JsdWVfYnVsbGV0JywgJ2ltZy9hc3NldHMvYmx1ZS1idWxsZXQucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnJywgJ2ltZy9iYWNrZ3JvdW5kcy9iZy5wbmcnKTsgXHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2F0bGFzJywgJ2ltZy9lbmVteS1maWdodGVycy9lbmVteS1maWdodGVycy5wbmcnLCAnc2hlZXRzL2VuZW15LWZpZ2h0ZXJzJyk7XHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2Jvc3NlcycsICdpbWcvZW5lbXktYm9zc2VzL2VuZW15LWJvc3Nlcy5wbmcnLCAnc2hlZXRzL2Jvc3NlcycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGlwJywgJ2ltZy9zcGFjZV9zaGlwX2Jhc2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2V4cGxvZGUnLCAnaW1nL2Fzc2V0cy9leHBsb2RlLnBuZycsIDEyOCwgMTI4KTtcclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9kZS1zbWFsbCcsICdpbWcvYXNzZXRzL2V4cGxvZGUtc21hbGwucG5nJywgMzIsIDMyKTtcclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9kZS1zbWFsbGVzdCcsICdpbWcvYXNzZXRzL2V4cGxvZGUtc21hbGxlc3QucG5nJywgMTYsIDE2KTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygnYm9vbScsIFsnYXVkaW8vZWZmZWN0cy9leHBsb2RlLndhdiddKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygnbGF6ZXInLCBbJ2F1ZGlvL2VmZmVjdHMvbGF6ZXIud2F2J10pO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdzdGFnZS0xJywgWydhdWRpby9iYWNrZ3JvdW5kL3N0YWdlLTEubXAzJywgJ2F1ZGlvL2JhY2tncm91bmQvc3RhZ2UtMS5vZ2cnXSk7XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKGdhbWUpIHtcclxuXHR2YXIgcmFwdG9ycyxtaW5pQm9zc2VzO1xyXG4gICAgdmFyIHNwYXduID0gZnVuY3Rpb24gKCkgeyBcclxuXHJcbiAgICAgICAgdmFyIHggPSBnYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg0MCwgNjAwKSAgLCB5ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMCwgMTApO1xyXG4gICAgICAgIHZhciBfYWxpZW4gPSBhbGllbnMuY3JlYXRlKHgsIHksICdhdGxhcycsICdiYWQtZ3V5MS5wbmcnKTtcclxuICAgICAgICBfYWxpZW4uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuIFxyXG4gICAgICAgIF9hbGllbi5ib2R5Lm1vdmVzID0gdHJ1ZTtcclxuICAgICAgICBfYWxpZW4uYm9keS52ZWxvY2l0eS5zZXRUbygwLCAxMDApIDsgXHJcbiAgICB9O1xyXG5cclxuXHR2YXIgY29sbGlzaW9uSGFuZGxlciA9IGZ1bmN0aW9uICAoYnVsbGV0LCBhbGllbikge1xyXG5cclxuXHQgICAgYnVsbGV0LmtpbGwoKTtcclxuXHQgICAgYWxpZW4ua2lsbCgpO1xyXG5cdCAgICAvL3dpbmRvdy5ib29tLnBsYXkoKTtcclxuXHQgICAgdmFyIHggPSBhbGllbi5ib2R5LngsIHkgPWFsaWVuLmJvZHkueVxyXG5cdCAgICB2YXIgZXhwbG9zaW9uID0gZXhwbG9zaW9ucy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XHJcblx0ICAgIGV4cGxvc2lvbi5yZXNldChhbGllbi5ib2R5LngsIGFsaWVuLmJvZHkueSk7XHJcblx0ICAgIGV4cGxvc2lvbi5wbGF5KCdleHBsb2RlJywgMzAsIGZhbHNlLCB0cnVlKTtcclxuXHR9O1xyXG4gICAgdmFyIGJvc3NDb2xsaXNpb25IYW5kbGVyID0gZnVuY3Rpb24gIChidWxsZXQsIGJvc3MpIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAvLyB3aW5kb3cuYm9vbS5wbGF5KCk7XHJcbiAgICAgICAgdmFyIHggPSBib3NzLmJvZHkueCwgeSA9Ym9zcy5ib2R5Lnk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9zcy5oaXRDb3VudClcclxuICAgICAgICBib3NzLmhpdENvdW50ID0gYm9zcy5oaXRDb3VudCAtIDE7XHJcbiAgICAgICAgdmFyIGV4ID0gZXhwbG9zaW9uc1NtYWxsZXN0LmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuICAgICAgICBleC5yZXNldChidWxsZXQuYm9keS54LCBidWxsZXQuYm9keS55KTtcclxuICAgICAgICBidWxsZXQua2lsbCgpOyBcclxuICAgICAgICBleC5wbGF5KCdleHBsb2RlLXNtYWxsZXN0JywgNjAsIGZhbHNlLCB0cnVlKTsgXHJcbiAgICAgICAgaWYgKGJvc3MuaGl0Q291bnQgPD0gMCl7XHJcbiAgICAgICAgICAgIHZhciBleHBsb3Npb24gPSBleHBsb3Npb25zLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgZXhwbG9zaW9uLnJlc2V0KGJvc3MuYm9keS54LCBib3NzLmJvZHkueSk7XHJcbiAgICAgICAgICAgIGV4cGxvc2lvbi5wbGF5KCdleHBsb2RlJywgMzAsIGZhbHNlLCB0cnVlKTsgXHJcbiAgICAgICAgICAgIGJvc3Mua2lsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG4gICAgdmFyIHNwYXduUmFwdG9yRm9ybWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB4ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsIDYwMCkgICwgeSA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsIDEwKTtcclxuICAgICAgICBzcGF3blJhcHRvcih4IC0gMzIsIHkpO1xyXG4gICAgICAgIHNwYXduUmFwdG9yKHggKyAzMiwgeSk7XHJcbiAgICAgICAgc3Bhd25SYXB0b3IoeCwgeSArIDMyKTtcclxuICAgIH1cclxuICAgIHZhciBzcGF3blJhcHRvciA9IGZ1bmN0aW9uICh4LHkpIHtcclxuICAgIFx0XHJcbiAgICAgICAgdmFyIF9hbGllbiA9IHJhcHRvcnMuY3JlYXRlKHgsIHksICdhdGxhcycsICdyYXB0b3ItMS5wbmcnKTtcclxuICAgICAgICBfYWxpZW4uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuIFxyXG4gICAgICAgIF9hbGllbi5ib2R5Lm1vdmVzID0gdHJ1ZTtcclxuICAgICAgICBfYWxpZW4uYm9keS52ZWxvY2l0eS5zZXRUbygwLCAxNTApIDsgXHJcbiAgICAgICAgZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDEuMjUsIGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgIF9hbGllbi5ib2R5LnZlbG9jaXR5LnNldFRvKDM1MCwgMzUwKSA7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgd291bGQgYmUgcmFkIGlmIHJhbmRvbVxyXG4gICAgICAgICAgICBnYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC42NSAgLCBmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgX2FsaWVuLmJvZHkudmVsb2NpdHkuc2V0VG8oLTM1MCwgMzUwKSA7XHJcbiAgICAgICAgICAgIH0sIF9hbGllbik7XHJcblxyXG4gICAgICAgIH0sIF9hbGllbik7XHJcblxyXG4gICAgfVxyXG4gICAgdmFyIHNwYXduTWluaUJvc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHggPSBnYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg0MCwgNjAwKSAgLCB5ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMCwgMTApO1xyXG4gICAgICAgIHZhciBfYWxpZW4gPSBtaW5pQm9zc2VzLmNyZWF0ZSh4LCB5LCAnYm9zc2VzJywgJ2Jvc3MtMS5wbmcnKTtcclxuICAgICAgICBfYWxpZW4uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuIFxyXG4gICAgICAgIF9hbGllbi5ib2R5Lm1vdmVzID0gdHJ1ZTtcclxuICAgICAgICBfYWxpZW4uYm9keS52ZWxvY2l0eS5zZXRUbygwLCA3MCkgOyBcclxuICAgICAgICBfYWxpZW4uaGl0Q291bnQgPSA1O1xyXG4gICAgfVxyXG5cclxuXHR2YXIgZW5lbXlGYWN0b3J5O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR3aW5kb3cuYWxpZW5zID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIFx0XHRhbGllbnMuZW5hYmxlQm9keSA9IHRydWU7XHJcbiAgICBcdFx0YWxpZW5zLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuICAgIFx0XHRyYXB0b3JzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIFx0XHRyYXB0b3JzLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG4gICAgXHRcdHJhcHRvcnMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG4gICAgICAgICAgICBtaW5pQm9zc2VzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgICAgICAgICAgbWluaUJvc3Nlcy5lbmFibGVCb2R5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWluaUJvc3Nlcy5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XHJcblx0XHQgICAgLy9tdXNpYy5wbGF5KCcnLCAwLCAxLCB0cnVlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtdXNpYy52b2x1bWUpO1xyXG4gICAgICAgICAgICAvL211c2ljLnZvbHVtZSA9IDAuNTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtdXNpYy52b2x1bWUpO1xyXG4gICAgXHRcdGdhbWUudGltZS5ldmVudHMucmVwZWF0KFBoYXNlci5UaW1lci5TRUNPTkQgKiAyLCAxMDUsIHNwYXduLCB0aGlzKTtcclxuXHJcbiAgICBcdFx0Z2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDUsIDI1LCBzcGF3blJhcHRvckZvcm1hdGlvbiwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBnYW1lLnRpbWUuZXZlbnRzLnJlcGVhdChQaGFzZXIuVGltZXIuU0VDT05EICogMTIsIDEwLCBzcGF3bk1pbmlCb3NzLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHR1cGRhdGUgOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdC8vZ2FtZSBsb29wIGZvciB0aGUgc3RhZ2VcclxuXHRcdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsIGFsaWVucywgY29sbGlzaW9uSGFuZGxlciwgbnVsbCwgdGhpcyk7XHJcblx0XHRcdGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChidWxsZXRzLCByYXB0b3JzLCBjb2xsaXNpb25IYW5kbGVyLCBudWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsIG1pbmlCb3NzZXMsIGJvc3NDb2xsaXNpb25IYW5kbGVyLCBudWxsLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufSIsInZhciBidWxsZXRUaW1lID0gMDtcclxuIGZ1bmN0aW9uIHJlc2V0QnVsbGV0IChidWxsZXQpIHtcclxuXHJcbiAgICBidWxsZXQua2lsbCgpO1xyXG5cclxufTtcclxuXHJcbiBcclxuICAgIHZhciByaWdodF9idWxsZXRUaW1lID0gMCwgbGVmdF9idWxsZXRUaW1lID0gMDsgXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYnVsbGV0cyA9IHdpbmRvdy5idWxsZXRzO1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGN1cnNvcnMgPSB3aW5kb3cuY3Vyc29yczsgXHJcblxyXG5cclxuXHJcbiAgICBwbGF5ZXIudXBkYXRlKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJzb3JzKTtcclxuICAgICAgICBzdGFnZTEudXBkYXRlKCk7XHJcbiAgICAgICAgXHJcbn07XHJcbiJdfQ==
