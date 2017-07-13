(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Helpers 
 */
( function(exports) {
	var __slice = [].slice;
	var __hasProp = {}.hasOwnProperty;
	var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
	/* $.extend functionality */
	function extend( target, src )
	{
		var options, name, copy, copyIsArray, clone,
			i = 1,
			length = 2,
			deep = true;
	
		// Handle a deep copy situation
		if( typeof target === "boolean" )
		{
			deep = target;
			// skip the boolean and the target
			i = 2;
		}
	
		// Handle case when target is a string or something( possible in deep copy )
		if( typeof target !== "object" && !typeof target === 'function' )
		{
			target = {};
		}
		// Only deal with non-null/undefined values
		if( options = src )
		{
			// Extend the base object
			for( name in options )
			{
				src = target[name];
				copy = options[name];
	
				// Prevent never-ending loop
				if( target === copy )
				{
					continue;
				}
				// Recurse if we're merging plain objects or arrays
				if( deep &&( typeof copy == 'object' ||( copyIsArray = Object.prototype.toString.call(  copy  ) === '[object Array]' ) ) ) 
				{
					if( copyIsArray ) 
					{
						copyIsArray = false;
						clone = src && Object.prototype.toString.call(  src  ) === '[object Array]' ? src : [];
	
					} 
					else 
					{
						clone = src && typeof src == 'object' ? src : {};
					}
					// Never move original objects, clone them
					target[name] = extend( clone, copy );
	
					// Don't bring in undefined values
				} 
				else if( typeof copy !== 'undefined' ) 
				{
					target[name] = copy;
				}
			}
		}
		return target;
	}
	
	// Make available to window
	exports.GameController = {
		
		// Default options,
		options: {
			left: { 
				type: 'dpad', 
				position: { left: '13%', bottom: '22%' },
				dpad: {
					up: {
						width: '7%',
						height: '15%',
						stroke: 2,
						touchStart: function() {
							GameController.simulateKeyEvent( 'press', 38 );
							GameController.simulateKeyEvent( 'down', 38 );
						},
						touchEnd: function() {
							GameController.simulateKeyEvent( 'up', 38 );
						}
					},
					left: {
						width: '15%',
						height: '7%',
						stroke: 2,
						touchStart: function() {
							GameController.simulateKeyEvent( 'press', 37 );
							GameController.simulateKeyEvent( 'down', 37 );
						},
						touchEnd: function() {
							GameController.simulateKeyEvent( 'up', 37 );
						}
					},
					down: {
						width: '7%',
						height: '15%',
						stroke: 2,
						touchStart: function() {
							GameController.simulateKeyEvent( 'press', 40 );
							GameController.simulateKeyEvent( 'down', 40 );
						},
						touchEnd: function() {
							GameController.simulateKeyEvent( 'up', 40 );
						}
					},
					right: {
						width: '15%',
						height: '7%',
						stroke: 2,
						touchStart: function() {
							GameController.simulateKeyEvent( 'press', 39 );
							GameController.simulateKeyEvent( 'down', 39 );
						},
						touchEnd: function() {
							GameController.simulateKeyEvent( 'up', 39 );
						}
					}
				},
				joystick: {
					radius: 60,
					touchMove: function( e ) {
						console.log( e );
					}
				}
			},
			right: { 
				type: 'buttons', 
				position: { right: '17%', bottom: '28%' }, 
				buttons: [
					{ offset: { x: '-13%', y: 0 }, label: 'X', radius: '7%', stroke: 2, backgroundColor: 'blue', fontColor: '#fff', touchStart: function() {
						// Blue is currently mapped to up button
						GameController.simulateKeyEvent( 'press', 38 );
						GameController.simulateKeyEvent( 'down', 38 );
					}, touchEnd: function() {
						GameController.simulateKeyEvent( 'up', 38 );	
					} },
					{ offset: { x: 0, y: '-11%' }, label: 'Y', radius: '7%', stroke: 2, backgroundColor: 'yellow', fontColor: '#fff' },
					{ offset: { x: '13%', y: 0 }, label: 'B', radius: '7%', stroke: 2, backgroundColor: 'red', fontColor: '#fff', touchStart: function() {
						// Red is currently mapped to down button, and space button
						GameController.simulateKeyEvent( 'press', 32 );
						GameController.simulateKeyEvent( 'down', 32 );
	
						GameController.simulateKeyEvent( 'press', 40 );
						GameController.simulateKeyEvent( 'down', 40 );
					}, touchEnd: function() {
						GameController.simulateKeyEvent( 'up', 32 );						
						GameController.simulateKeyEvent( 'up', 40 );
					} },
					{ offset: { x: 0, y: '11%' }, label: 'A', radius: '7%', stroke: 2, backgroundColor: 'green', fontColor: '#fff', touchStart: function() {
						// Green is currently mapped to up button
						GameController.simulateKeyEvent( 'press', 38 );
						GameController.simulateKeyEvent( 'down', 38 );
					}, touchEnd: function() {
						GameController.simulateKeyEvent( 'up', 38 );	
					}  }
				],
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
					touchMove: function( e ) {
						console.log( e );
					}
				}
			},
			touchRadius: 45
		},
		
		// Areas (objects) on the screen that can be touched
		touchableAreas: [],
		
		// Multi-touch
		touches: [],
		
		// Heavy sprites (with gradients) are cached as a canvas to improve performance
		cachedSprites: {},
		
		paused: false,
		
		init: function( options ) {
			
			// Don't do anything if there's no touch support
			if( ! 'ontouchstart' in document.documentElement )
				return;
				
	
			// Merge default options and specified options
			options = options || {};
			extend( this.options, options );	
			
			// Grab the canvas if one wasn't passed
			var ele;
			if( !this.options.canvas || !( ele = document.getElementById( this.options.canvas ) ) )
			{
				this.options.canvas = document.getElementsByTagName( 'canvas' )[0];
			}
			else if( ele )
			{
				this.options.canvas = ele;
			}
			
			this.options.ctx = this.options.canvas.getContext( '2d' );
			
			// Create a canvas that goes directly on top of the game canvas
			this.createOverlayCanvas();
		},
		
		/**
		 * Creates the canvas that sits on top of the game's canvas and holds game controls 
		 */
		createOverlayCanvas: function() {
			this.canvas = document.createElement( 'canvas' );
			
			// Scale to same size as original canvas
			this.resize( true );
			
			document.getElementsByTagName( 'body' )[0].appendChild( this.canvas );
			this.ctx = this.canvas.getContext( '2d' );
			
			var _this = this;
			window.addEventListener( 'resize', function() {
				// Wait for any other events to finish
				setTimeout( function() { GameController.resize.call( _this ); }, 1 );
			} );
			
			
			// Set the touch events for this new canvas
			this.setTouchEvents();
			
			// Load in the initial UI elements
			this.loadSide( 'left' );
			this.loadSide( 'right' );
			
			// Starts up the rendering / drawing
			this.render();
			
			if( ! this.touches || this.touches.length == 0 )
				this.paused = true; // pause until a touch event
		},
		
		pixelRatio: 1,
		resize: function( firstTime ) {
			// Scale to same size as original canvas
			this.canvas.width = this.options.canvas.width;
			this.canvas.height = this.options.canvas.height;
			
			// Get in on this retina action
			if( this.options.canvas.style.width && this.options.canvas.style.height && this.options.canvas.style.height.indexOf( 'px' ) !== -1 ) 
			{
				this.canvas.style.width = this.options.canvas.style.width;
				this.canvas.style.height = this.options.canvas.style.height;
				this.pixelRatio = this.canvas.width / parseInt( this.canvas.style.width );
			}
			
			this.canvas.style.position = 'absolute';
			this.canvas.style.left = this.options.canvas.offsetLeft + 'px';
			this.canvas.style.top = this.options.canvas.offsetTop + 'px';
			this.canvas.setAttribute( 'style', this.canvas.getAttribute( 'style' ) +' -ms-touch-action: none;' );
			
			if( !firstTime )
			{
				// Remove all current buttons
				this.touchableAreas = [];
				// Clear out the cached sprites
				this.cachedSprites = [];
				// Reload in the initial UI elements
				this.reloadSide( 'left' );
				this.reloadSide( 'right' );
			}
		},
		
		/**
		 * Returns the scaled pixels. Given the value passed
		 * @param {int/string} value - either an integer for # of pixels, or 'x%' for relative
		 * @param {char} axis - x, y
		 */
		getPixels: function( value, axis )
		{
			if( typeof value === 'undefined' )
				return 0
			else if( typeof value === 'number' )
				return value;
			else // a percentage
			{
				if( axis == 'x' )
					return ( parseInt( value ) / 100 ) * this.canvas.width;
				else
					return ( parseInt( value ) / 100 ) * this.canvas.height;
			}
		},
		
		/**
		 * Simulates a key press
		 * @param {string} eventName - 'down', 'up'
		 * @param {char} character
		 */
		simulateKeyEvent: function( eventName, keyCode ) {
			if( typeof window.onkeydown === 'undefined' ) // No keyboard, can't simulate...
				return false;
				
			/* If they have jQuery, use it because it works better for mobile safari */
			if( jQuery )
			{
				var press = jQuery.Event( 'key' + eventName );
				press.ctrlKey = false;
				press.which = keyCode;
				$( document ).trigger( press );
				return;
			}
	
			var oEvent = document.createEvent( 'KeyboardEvent' );
			
			// Chromium Hack
			if( navigator.userAgent.toLowerCase().indexOf('chrome') !== -1 )
			{
				Object.defineProperty( oEvent, 'keyCode', {
					get : function() {
						return this.keyCodeVal;
					}
				} );	 
				Object.defineProperty( oEvent, 'which', {
					get : function() {
						return this.keyCodeVal;
					}
				} );
			}
				
			if( oEvent.initKeyboardEvent )
			{
				oEvent.initKeyboardEvent( 'key' + eventName, true, true, document.defaultView, false, false, false, false, keyCode, keyCode );
			}
			else
			{
				oEvent.initKeyEvent( 'key' + eventName, true, true, document.defaultView, false, false, false, false, keyCode, keyCode );
			}
		
			oEvent.keyCodeVal = keyCode;
		
		},
		
		setTouchEvents: function() {
			var _this = this;
			var touchStart = function( e ) {
				if( _this.paused )
				{
					_this.paused = false;
				}
					
				e.preventDefault();
	
				// Microsoft always has to have their own stuff...
				if( window.navigator.msPointerEnabled && e.clientX && e.pointerType == e.MSPOINTER_TYPE_TOUCH )
				{
					_this.touches[ e.pointerId ] = { clientX: e.clientX, clientY: e.clientY };
				}
				else
				{
					_this.touches = e.touches || [];
				}
			};
	
			this.canvas.addEventListener( 'touchstart', touchStart, false );
			
			var touchEnd = function( e ) {			
				e.preventDefault();
			
				if( window.navigator.msPointerEnabled && e.pointerType == e.MSPOINTER_TYPE_TOUCH )
				{
					delete _this.touches[ e.pointerId ];
				}
				else
				{	
					_this.touches = e.touches || [];
				}
				
				if( !e.touches || e.touches.length == 0 )
				{
					// Draw once more to remove the touch area
					_this.render();
					_this.paused = true;
				}
			};
			this.canvas.addEventListener( 'touchend', touchEnd );
	
			var touchMove = function( e ) {
				e.preventDefault();
				
				if( window.navigator.msPointerEnabled && e.clientX && e.pointerType == e.MSPOINTER_TYPE_TOUCH )
				{
					_this.touches[ e.pointerId ] = { clientX: e.clientX, clientY: e.clientY };				
				}
				else
				{
					_this.touches = e.touches || [];
				}
			};
			this.canvas.addEventListener( 'touchmove', touchMove );
			
			if( window.navigator.msPointerEnabled )
			{
				this.canvas.addEventListener( 'MSPointerDown', touchStart );
				this.canvas.addEventListener( 'MSPointerUp', touchEnd );
				this.canvas.addEventListener( 'MSPointerMove', touchMove );
			}
		},
		
		/**
		 * Adds the area to a list of touchable areas, draws
		 * @param {object} options with properties: x, y, width, height, touchStart, touchEnd, touchMove
		 */
		addTouchableDirection: function( options ) {
			
			var direction = new TouchableDirection( options );
			
			direction.id = this.touchableAreas.push( direction );
		},
		
		/**
		 * Adds the circular area to a list of touchable areas, draws	
		 * @param {object} options with properties: x, y, width, height, touchStart, touchEnd, touchMove
		 */
		addJoystick: function( options ) { //x, y, radius, backgroundColor, touchStart, touchEnd ) {
			
			var joystick = new TouchableJoystick( options );
			
			joystick.id = this.touchableAreas.push( joystick );
			
		},
		
		/**
		 * Adds the circular area to a list of touchable areas, draws	 
		 * @param {object} options with properties: x, y, width, height, touchStart, touchEnd, touchMove
		 */
		addButton: function( options ) { //x, y, radius, backgroundColor, touchStart, touchEnd ) {
			
			var button = new TouchableButton( options );
			
			button.id = this.touchableAreas.push( button );
		},
		
		addTouchableArea: function( check, callback ) {
		},
		
		loadButtons: function( side ) {
			var buttons = this.options[ side ].buttons;
			var _this = this;
			for( var i = 0, j = buttons.length; i < j; i++ )
			{
				var posX = this.getPositionX( side );
				var posY = this.getPositionY( side );
							
				buttons[i].x = posX + this.getPixels( buttons[i].offset.x, 'y' );
				buttons[i].y = posY + this.getPixels( buttons[i].offset.y, 'y' );
	
				this.addButton( buttons[i] );
			}
		},
		
		loadDPad: function( side ) {
			var dpad = this.options[ side ].dpad || {};
			
			// Centered value is at this.options[ side ].position
			
			var _this = this;
			
			var posX = this.getPositionX( side );
			var posY = this.getPositionY( side );
			
			
			// If they have all 4 directions, add a circle to the center for looks
			if( dpad.up && dpad.left && dpad.down && dpad.right )
			{
				var options = {
					x: posX,
					y: posY,
					radius: dpad.right.height
				}
				var center = new TouchableCircle( options ); 
				this.touchableAreas.push( center );
			}
	
			// Up arrow
			if( dpad.up !== false )
			{
				dpad.up.x = posX - this.getPixels( dpad.up.width, 'y' ) / 2;
				dpad.up.y = posY - ( this.getPixels( dpad.up.height, 'y' ) +  this.getPixels( dpad.left.height, 'y' ) / 2 );
				dpad.up.direction = 'up';
				this.addTouchableDirection( dpad.up );
			}
	
			// Left arrow
			if( dpad.left !== false )
			{
				dpad.left.x = posX - ( this.getPixels( dpad.left.width, 'y' ) + this.getPixels( dpad.up.width, 'y' ) / 2 );
				dpad.left.y = posY - ( this.getPixels( dpad.left.height, 'y' ) / 2 );
				dpad.left.direction = 'left';
				this.addTouchableDirection( dpad.left );
			}
	
			// Down arrow
			if( dpad.down !== false )
			{
				dpad.down.x = posX - this.getPixels( dpad.down.width, 'y' ) / 2;
				dpad.down.y = posY + ( this.getPixels( dpad.left.height, 'y' ) / 2 );
				dpad.down.direction = 'down';
				this.addTouchableDirection( dpad.down );
			}
			
			// Right arrow
			if( dpad.right !== false )
			{
				dpad.right.x = posX + ( this.getPixels( dpad.up.width, 'y' ) / 2 );
				dpad.right.y = posY - this.getPixels( dpad.right.height, 'y' ) / 2;
				dpad.right.direction = 'right';
				this.addTouchableDirection( dpad.right );
			}
			
		},
		
		loadJoystick: function( side ) {
			var joystick = this.options[ side ].joystick;
			joystick.x = this.getPositionX( side );
			joystick.y = this.getPositionY( side );
	
			this.addJoystick( joystick );
		},
		
		/**
		 * Used for resizing. Currently is just an alias for loadSide
		 */
		reloadSide: function( side ) {
			// Load in new ones
			this.loadSide( side );
		},
		
		loadSide: function( side ) {
			if( this.options[ side ].type === 'dpad' )
			{
				this.loadDPad( side );
			}
			else if( this.options[ side ].type === 'joystick' )
			{
				this.loadJoystick( side );
			}
			else if( this.options[ side ].type === 'buttons' )
			{
				this.loadButtons( side );
			}
		},
		
		/**
		 * Normalize touch positions by the left and top offsets
		 * @param {int} x
		 */
		normalizeTouchPositionX: function( x )
		{
			return ( x - GameController.options.canvas.offsetLeft + document.body.scrollLeft ) * ( this.pixelRatio );
		},
		
		/**
		 * Normalize touch positions by the left and top offsets
		 * @param {int} y
		 */
		normalizeTouchPositionY: function( y )
		{
			return ( y - GameController.options.canvas.offsetTop + document.body.scrollTop ) * ( this.pixelRatio );
		},
		
		/**
		 * Returns the x position when given # of pixels from right (based on canvas size)
		 * @param {int} right 
		 */
		getXFromRight: function( right ) {
			return this.canvas.width - right;
		},
		
		
		/**
		 * Returns the y position when given # of pixels from bottom (based on canvas size)
		 * @param {int} right 
		 */
		getYFromBottom: function( bottom ) {
			return this.canvas.height - bottom;
		},
		
		/**
		 * Grabs the x position of either the left or right side/controls
		 * @param {string} side - 'left', 'right' 
		 */
		getPositionX: function( side ) {
			if( typeof this.options[ side ].position.left !== 'undefined' )
				return this.getPixels( this.options[ side ].position.left, 'x' );
			else
				return this.getXFromRight( this.getPixels( this.options[ side ].position.right, 'x' ) );
		},
		
		/**
		 * Grabs the y position of either the left or right side/controls
		 * @param {string} side - 'left', 'right' 
		 */
		getPositionY: function( side ) {
			if( typeof this.options[ side ].position.top !== 'undefined' )
				return this.getPixels( this.options[ side ].position.top, 'y' );
			else
				return this.getYFromBottom( this.getPixels( this.options[ side ].position.bottom, 'y' ) );
		},
		
		render: function() {
	
			this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
				
			// When no touch events are happening, this enables 'paused' mode, which only skips this small part.
			// Skipping the clearRect and draw()s would be nice, but it messes with the transparent gradients
			if( ! this.paused )
			{
				var cacheId = 'touch-circle';
				var cached = GameController.cachedSprites[ cacheId ];
				if( ! cached && this.options.touchRadius )
				{
					var subCanvas = document.createElement( 'canvas' );
					var ctx = subCanvas.getContext( '2d' );
					subCanvas.width = 2 * this.options.touchRadius;
					subCanvas.height = 2 * this.options.touchRadius;
		
					var center = this.options.touchRadius;
					var gradient = ctx.createRadialGradient( center, center, 1, center, center, this.options.touchRadius ); // 10 = end radius
					gradient.addColorStop( 0, 'rgba( 200, 200, 200, 1 )' );
					gradient.addColorStop( 1, 'rgba( 200, 200, 200, 0 )' );
					ctx.beginPath();
					ctx.fillStyle = gradient;
					ctx.arc( center, center, this.options.touchRadius, 0 , 2 * Math.PI, false );
					ctx.fill();
				
					cached = GameController.cachedSprites[ cacheId ] = subCanvas;
				}
				
				// Draw the current touch positions if any
				for( var i = 0, j = this.touches.length; i < j; i++ )
				{
					var touch = this.touches[ i ];
					if( typeof touch === 'undefined' )
						continue;
					var x = this.normalizeTouchPositionX( touch.clientX ), y = this.normalizeTouchPositionY( touch.clientY );
					this.ctx.drawImage( cached, x - this.options.touchRadius, y - this.options.touchRadius );
				}
			}
			
			for( var i = 0, j = this.touchableAreas.length; i < j; i++ )
			{	
				this.touchableAreas[ i ].draw();
				
				var area = this.touchableAreas[ i ];
					
				// Go through all touches to see if any hit this area
				var touched = false;
				for( var k = 0, l = this.touches.length; k < l; k++ )
				{
					var touch = this.touches[ k ];
					if( typeof touch === 'undefined' )
						continue;
	
					var x = this.normalizeTouchPositionX( touch.clientX ), y = this.normalizeTouchPositionY( touch.clientY );
													
					// Check that it's in the bounding box/circle
					if( ( area.check( x, y ) ) !== false )
					{
						if( !touched )
							touched = this.touches[ k ];
					}
				}
				if( touched )
				{
					if( !area.active )
						area.touchStartWrapper( touched );
					area.touchMoveWrapper( touched );
				}
				else if( area.active )
				{
					area.touchEndWrapper( touched );
				}
			}
			
			window.requestAnimationFrame( this.renderWrapper );
		},
		/**
		 * So we can keep scope, and don't have to create a new obj every requestAnimationFrame (bad for garbage collection) 
		 */
		renderWrapper: function() {
			GameController.render();
		}
		
	}
	
	/**
	 * Superclass for touchable stuff 
	 */
	var TouchableArea = ( function() {
		
		function TouchableArea() 
		{
		}
		
		// Called when this direction is being touched
		TouchableArea.prototype.touchStart = null;
		
		// Called when this direction is being moved
		TouchableArea.prototype.touchMove = null;
		
		// Called when this direction is no longer being touched
		TouchableArea.prototype.touchEnd = null;
		
		TouchableArea.prototype.type = 'area';
		TouchableArea.prototype.id = false;
		TouchableArea.prototype.active = false;
		
		/**
		 * Sets the user-specified callback for this direction being touched
		 * @param {function} callback 
		 */
		TouchableArea.prototype.setTouchStart = function( callback ) {
			this.touchStart = callback;
		};
		
		/**
		 * Called when this direction is no longer touched 
		 */
		TouchableArea.prototype.touchStartWrapper = function( e ) {
			// Fire the user specified callback
			if( this.touchStart )
				this.touchStart();
			
			// Mark this direction as active
			this.active = true;
		};
		
		/**
		 * Sets the user-specified callback for this direction no longer being touched
		 * @param {function} callback 
		 */
		TouchableArea.prototype.setTouchMove = function( callback ) {
			this.touchMove = callback;
		};
		
		/**
		 * Called when this direction is moved. Make sure it's actually changed before passing to developer
		 */
		TouchableArea.prototype.lastPosX = 0;
		TouchableArea.prototype.lastPosY = 0;
		TouchableArea.prototype.touchMoveWrapper = function( e ) {
			// Fire the user specified callback
			if( this.touchMove && ( e.clientX != TouchableArea.prototype.lastPosX || e.clientY != TouchableArea.prototype.lastPosY ) )
			{
				this.touchMove();
				this.lastPosX = e.clientX;
				this.lastPosY = e.clientY;
			}
			// Mark this direction as inactive
			this.active = true;
		};
		
		/**
		 * Sets the user-specified callback for this direction no longer being touched
		 * @param {function} callback 
		 */
		TouchableArea.prototype.setTouchEnd = function( callback ) {
			this.touchEnd = callback;
		};
		
		/**
		 * Called when this direction is first touched 
		 */
		TouchableArea.prototype.touchEndWrapper = function( e ) {
			// Fire the user specified callback
			if( this.touchEnd )
				this.touchEnd();
			
			// Mark this direction as inactive
			this.active = false;
			
			GameController.render();
		};
		
		return TouchableArea;
		
	} )();
	
	var TouchableDirection = ( function( __super ) {
		__extends( TouchableDirection, __super );
		
		function TouchableDirection( options ) 
		{
			for( var i in options )
			{
				if( i == 'x' )
					this[i] = GameController.getPixels( options[i], 'x' );
				else if( i == 'y' || i == 'height' || i == 'width' )
					this[i] = GameController.getPixels( options[i], 'y' );
				else
					this[i] = options[i];
			}
			
			this.draw();
		}
	
		TouchableDirection.prototype.type = 'direction';
		
		/**
		 * Checks if the touch is within the bounds of this direction 
		 */
		TouchableDirection.prototype.check = function( touchX, touchY ) {
			var distanceX, distanceY;
			if( ( Math.abs( touchX - this.x ) < ( GameController.options.touchRadius / 2 ) || ( touchX > this.x ) ) && // left
				( Math.abs( touchX - ( this.x + this.width ) ) < ( GameController.options.touchRadius / 2 ) || ( touchX < this.x + this.width ) ) && // right
				( Math.abs( touchY - this.y ) < ( GameController.options.touchRadius / 2 ) || ( touchY > this.y ) ) && // top
				( Math.abs( touchY - ( this.y + this.height ) ) < ( GameController.options.touchRadius / 2 ) || ( touchY < this.y + this.height ) ) // bottom
			)
				return true;
				
			return false;
		};
		
		TouchableDirection.prototype.draw = function() {
			var cacheId = this.type + '' + this.id + '' + this.active;
			var cached = GameController.cachedSprites[ cacheId ];
			if( ! cached )
			{
				var subCanvas = document.createElement( 'canvas' );
				var ctx = subCanvas.getContext( '2d' );
				subCanvas.width = this.width + 2 * this.stroke;
				subCanvas.height = this.height + 2 * this.stroke;
	
				var opacity = this.opacity || 0.9;
				
				if( ! this.active ) // Direction currently being touched
					opacity *= 0.5;
					
				switch( this.direction )
				{
					case 'up':
						var gradient = ctx.createLinearGradient( 0, 0, 0, this.height );
						gradient.addColorStop( 0, 'rgba( 0, 0, 0, ' + ( opacity * 0.5 ) + ' )' );
						gradient.addColorStop( 1, 'rgba( 0, 0, 0, ' + opacity + ' )' );   
						break;
					case 'left':
						var gradient = ctx.createLinearGradient( 0, 0, this.width, 0 );
						gradient.addColorStop( 0, 'rgba( 0, 0, 0, ' + ( opacity * 0.5 ) + ' )' );
						gradient.addColorStop( 1, 'rgba( 0, 0, 0, ' + opacity + ' )' );   
						break;
					case 'right':
						var gradient = ctx.createLinearGradient( 0, 0, this.width, 0 );
						gradient.addColorStop( 0, 'rgba( 0, 0, 0, ' + opacity + ' )' );
						gradient.addColorStop( 1, 'rgba( 0, 0, 0, ' + ( opacity * 0.5 ) + ' )' );  
						break;
					case 'down':
					default:
						var gradient = ctx.createLinearGradient( 0, 0, 0, this.height );
						gradient.addColorStop( 0, 'rgba( 0, 0, 0, ' + opacity + ' )' );
						gradient.addColorStop( 1, 'rgba( 0, 0, 0, ' + ( opacity * 0.5 ) + ' )' );   
				}
				ctx.fillStyle = gradient;
		
				ctx.fillRect( 0, 0, this.width, this.height );
				ctx.lineWidth = this.stroke;
				ctx.strokeStyle = 'rgba( 255, 255, 255, 0.1 )';
				ctx.strokeRect( 0, 0, this.width, this.height );
				
				cached = GameController.cachedSprites[ cacheId ] = subCanvas;
			}
			
			GameController.ctx.drawImage( cached, this.x, this.y );
				
	
		};
		
		return TouchableDirection;
	} )( TouchableArea );
	
	var TouchableButton = ( function( __super ) {
		__extends( TouchableButton, __super );
		
		function TouchableButton( options ) //x, y, radius, backgroundColor )
		{
			for( var i in options )
			{
				if( i == 'x' )
					this[i] = GameController.getPixels( options[i], 'x' );
				else if( i == 'x' || i == 'radius' )
					this[i] = GameController.getPixels( options[i], 'y' );
				else
					this[i] = options[i];
			}
			
			this.draw();
		}
		
		TouchableButton.prototype.type = 'button';
		
		/**
		 * Checks if the touch is within the bounds of this direction 
		 */
		TouchableButton.prototype.check = function( touchX, touchY ) {
			if( 
				( Math.abs( touchX - this.x ) < this.radius + ( GameController.options.touchRadius / 2 ) ) &&
				( Math.abs( touchY - this.y ) < this.radius + ( GameController.options.touchRadius / 2 ) )
			)
				return true;
				
			return false;
		};
		
		TouchableButton.prototype.draw = function() {
			var cacheId = this.type + '' + this.id + '' + this.active;
			var cached = GameController.cachedSprites[ cacheId ];
			if( ! cached )
			{
				var subCanvas = document.createElement( 'canvas' );
				var ctx = subCanvas.getContext( '2d' );
				ctx.lineWidth = this.stroke;
				subCanvas.width = subCanvas.height = 2 * ( this.radius + ctx.lineWidth );
				
				
				var gradient = ctx.createRadialGradient( this.radius, this.radius, 1, this.radius, this.radius, this.radius );
				var textShadowColor;
				switch( this.backgroundColor )
				{
					case 'blue':
						gradient.addColorStop( 0, 'rgba(123, 181, 197, 0.6)' );
						gradient.addColorStop( 1, '#105a78' );
						textShadowColor = '#0A4861';
						break;
					case 'green':
						gradient.addColorStop( 0, 'rgba(29, 201, 36, 0.6)' );
						gradient.addColorStop( 1, '#107814' );
						textShadowColor = '#085C0B';
						break;
					case 'red':
						gradient.addColorStop( 0, 'rgba(165, 34, 34, 0.6)' );
						gradient.addColorStop( 1, '#520101' );
						textShadowColor = '#330000';
						break;
					case 'yellow':
						gradient.addColorStop( 0, 'rgba(219, 217, 59, 0.6)' );
						gradient.addColorStop( 1, '#E8E10E' );
						textShadowColor = '#BDB600';
						break;
					case 'white':
					default:
						gradient.addColorStop( 0, 'rgba( 255,255,255,.3 )' );
						gradient.addColorStop( 1, '#eee' );
						break;
				}
					
				if( this.active )			
					ctx.fillStyle = textShadowColor;
				else	
					ctx.fillStyle = gradient;
	
				ctx.strokeStyle = textShadowColor;			
		
				ctx.beginPath();
				//ctx.arc( this.x, this.y, this.radius, 0 , 2 * Math.PI, false );
				ctx.arc( subCanvas.width / 2, subCanvas.width / 2, this.radius, 0 , 2 * Math.PI, false );
				ctx.fill();
				ctx.stroke();
				
				if( this.label )
				{
					// Text Shadow
					ctx.fillStyle = textShadowColor;
					ctx.font = 'bold ' + ( this.fontSize || subCanvas.height * 0.35 ) + 'px Verdana';
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText( this.label, subCanvas.height / 2 + 2, subCanvas.height / 2 + 2 );
		
		
					ctx.fillStyle = this.fontColor;
					ctx.font = 'bold ' + ( this.fontSize || subCanvas.height * 0.35 ) + 'px Verdana';
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText( this.label, subCanvas.height / 2, subCanvas.height / 2 );
				}
				
				cached = GameController.cachedSprites[ cacheId ] = subCanvas;
			}
			
			GameController.ctx.drawImage( cached, this.x, this.y );
			
			
		};
		
		return TouchableButton;
	} )( TouchableArea );
	
	var TouchableJoystick = ( function( __super ) {
		__extends( TouchableJoystick, __super );
		
		function TouchableJoystick( options ) //x, y, radius, backgroundColor )
		{
			for( var i in options )
				this[i] = options[i];
				
			this.currentX = this.currentX || this.x;
			this.currentY = this.currentY || this.y;
		}
		
		TouchableJoystick.prototype.type = 'joystick';
		
		/**
		 * Checks if the touch is within the bounds of this direction 
		 */
		TouchableJoystick.prototype.check = function( touchX, touchY ) {
			if( 
				( Math.abs( touchX - this.x ) < this.radius + ( GameController.options.touchRadius / 2 ) ) &&
				( Math.abs( touchY - this.y ) < this.radius + ( GameController.options.touchRadius / 2 ) )
			)
				return true;
				
			return false;
		};
		
		/**
		 * details for the joystick move event, stored here so we're not constantly creating new objs for garbage. The object has params:
		 * dx - the number of pixels the current joystick center is from the base center in x direction
		 * dy - the number of pixels the current joystick center is from the base center in y direction
		 * max - the maximum number of pixels dx or dy can be
		 * normalizedX - a number between -1 and 1 relating to how far left or right the joystick is
		 * normalizedY - a number between -1 and 1 relating to how far up or down the joystick is
		 */
		TouchableJoystick.prototype.moveDetails = {};
		
		/**
		 * Called when this joystick is moved
		 */
		TouchableJoystick.prototype.touchMoveWrapper = function( e ) {
			this.currentX = GameController.normalizeTouchPositionX( e.clientX );	
			this.currentY = GameController.normalizeTouchPositionY( e.clientY );
			
			// Fire the user specified callback
			if( this.touchMove )
			{
				if( this.moveDetails.dx != this.currentX - this.x && this.moveDetails.dy != this.y - this.currentY )
				{
					this.moveDetails.dx = this.currentX - this.x; // reverse so right is positive
					this.moveDetails.dy = this.y - this.currentY;
					this.moveDetails.max = this.radius + ( GameController.options.touchRadius / 2 );
					this.moveDetails.normalizedX = this.moveDetails.dx / this.moveDetails.max;
					this.moveDetails.normalizedY = this.moveDetails.dy / this.moveDetails.max;
						
					this.touchMove( this.moveDetails );
				}
			}
				
			
			// Mark this direction as inactive
			this.active = true;
		};
		
		TouchableJoystick.prototype.draw = function() {
			if( ! this.id ) // wait until id is set
				return false;
				
			var cacheId = this.type + '' + this.id + '' + this.active;
			var cached = GameController.cachedSprites[ cacheId ];
			if( ! cached )
			{
				var subCanvas = document.createElement( 'canvas' );
				this.stroke = this.stroke || 2;
				subCanvas.width = subCanvas.height = 2 * ( this.radius + this.stroke );
				
				var ctx = subCanvas.getContext( '2d' );
				ctx.lineWidth = this.stroke;
				if( this.active ) // Direction currently being touched
				{
					var gradient = ctx.createRadialGradient( 0, 0, 1, 0, 0, this.radius );
					gradient.addColorStop( 0, 'rgba( 200,200,200,.5 )' );
					gradient.addColorStop( 1, 'rgba( 200,200,200,.9 )' );
					ctx.strokeStyle = '#000';
				}	
				else
				{
					// STYLING FOR BUTTONS
					var gradient = ctx.createRadialGradient( 0, 0, 1, 0, 0, this.radius );
					gradient.addColorStop( 0, 'rgba( 200,200,200,.2 )' );
					gradient.addColorStop( 1, 'rgba( 200,200,200,.4 )' );
					ctx.strokeStyle = 'rgba( 0,0,0,.4 )';
				}
				ctx.fillStyle = gradient;
				// Actual joystick part that is being moved
				ctx.beginPath();
				ctx.arc( this.radius, this.radius, this.radius, 0 , 2 * Math.PI, false );
				ctx.fill();
				ctx.stroke();
				
				cached = GameController.cachedSprites[ cacheId ] = subCanvas;
			}
			
			// Draw the base that stays static
			GameController.ctx.fillStyle = '#444';
			GameController.ctx.beginPath();
			GameController.ctx.arc( this.x, this.y, this.radius * 0.7, 0 , 2 * Math.PI, false );
			GameController.ctx.fill();
			GameController.ctx.stroke();
			
			GameController.ctx.drawImage( cached, this.currentX - this.radius, this.currentY - this.radius );
			
			
		};
		
		return TouchableJoystick;
	} )( TouchableArea );
	
	
	var TouchableCircle = ( function( __super ) {
		__extends( TouchableCircle, __super );
		
		function TouchableCircle( options )
		{
			for( var i in options )
			{
				if( i == 'x' )
					this[i] = GameController.getPixels( options[i], 'x' );
				else if( i == 'x' || i == 'radius' )
					this[i] = GameController.getPixels( options[i], 'y' );
				else
					this[i] = options[i];
			}
	
			this.draw();
		}
		
		/**
		 * No touch for this fella 
		 */
		TouchableCircle.prototype.check = function( touchX, touchY ) {
			return false;
		};
		
		TouchableCircle.prototype.draw = function() {
	
			// STYLING FOR BUTTONS
			GameController.ctx.fillStyle = 'rgba( 0, 0, 0, 0.5 )';
			
			// Actual joystick part that is being moved
			GameController.ctx.beginPath();
			GameController.ctx.arc( this.x, this.y, this.radius, 0 , 2 * Math.PI, false );
			GameController.ctx.fill();
	
		};
		
		return TouchableCircle;
	} )( TouchableArea );
	
	/**
	 * Shim for requestAnimationFrame 
	 */
	( function() {
	  if (typeof module !== "undefined") return
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x )
		{
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										 || window[vendors[x]+'CancelRequestAnimationFrame'];
		}
	 
		if ( !window.requestAnimationFrame )
			window.requestAnimationFrame = function( callback, element ) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
				var id = window.setTimeout( function() { callback(currTime + timeToCall); }, 
					timeToCall );
				lastTime = currTime + timeToCall;
				return id;
			};
	 
		if ( !window.cancelAnimationFrame )
			window.cancelAnimationFrame = function( id ) {
				clearTimeout( id );
			};
	}() );
} )(typeof module !== "undefined" ? module.exports : window)
},{}],2:[function(require,module,exports){
"use strict";var globals={bullets:null,enemies:null,player:null},update=require("./game/update"),preload=require("./game/preload"),create=require("./game/create"),game=window.game=new Phaser.Game(800,600,Phaser.AUTO,"",{preload:preload,create:create,update:update});
},{"./game/create":3,"./game/preload":5,"./game/update":7}],3:[function(require,module,exports){
"use strict";function resetBullet(e){e.kill()}function setupEnemy(e){e.anchor.x=.5,e.anchor.y=.5,e.animations.add("explode")}function setupEnemyBoss(e){e.anchor.x=.5,e.anchor.y=.5,e.animations.add("explode-smallest")}module.exports=function(){if(game.physics.startSystem(Phaser.Physics.ARCADE),this.spaceBG=this.add.tileSprite(0,0,800,600,"bg"),this.spaceBG.autoScroll(0,75),game.input.gamepad.start(),"ontouchstart"in document.documentElement){var e=window.GameController=require("game-controller").GameController;e.init({left:{type:"joystick",joystick:{touchStart:function(){},touchMove:function(e){game.input.joystickLeft=e},touchEnd:function(){game.input.joystickLeft=null}}},right:{type:"none"}})}window.player=require("./player")(game),player.init();var t=window.bullets=this.add.group();t.enableBody=!0,t.physicsBodyType=Phaser.Physics.ARCADE,t.createMultiple(10,"bullets","bullet-green.png"),t.setAll("anchor.x",.5),t.setAll("anchor.y",1),t.setAll("outOfBoundsKill",!0),t.setAll("checkWorldBounds",!0),window.explosions=game.add.group(),explosions.createMultiple(30,"explode"),explosions.forEach(setupEnemy,this),window.music=game.add.audio("stage-1"),window.explosionsSmallest=game.add.group(),explosionsSmallest.createMultiple(30,"explode-smallest"),explosionsSmallest.forEach(setupEnemyBoss,this),window.boom=game.add.audio("boom"),window.lazer=game.add.audio("lazer"),window.stage1=require("./scenes/scene-1")(game),stage1.init()};
},{"./player":4,"./scenes/scene-1":6,"game-controller":1}],4:[function(require,module,exports){
"use strict";module.exports=function(t){function e(){if(t.time.now>s){var e=bullets.getFirstExists(!1);e&&(e.reset(i.x,i.y+16),e.body.velocity.y=-300,s=t.time.now+1e3)}if(t.time.now>n+20){var o=bullets.getFirstExists(!1);o&&(o.reset(i.x+26,i.y+16),o.body.velocity.y=-300,n=t.time.now+1e3)}}var i,o,s=0,n=0,y=200;return{init:function(){i=t.add.sprite(384,500,"ship"),t.physics.enable(i,Phaser.Physics.ARCADE),o=t.input.keyboard.createCursorKeys()},update:function(){o.up.isDown?o.up.shiftKey||i.y>350&&(i.y-=4):o.down.isDown&&(o.down.shiftKey||(i.y+=4)),o.left.isDown?i.x-=4:o.right.isDown&&(i.x+=4),t.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)&&e(),t.input.joystickLeft?i.body.velocity.setTo(200*t.input.joystickLeft.normalizedX,t.input.joystickLeft.normalizedY*y*-1):i.body.velocity.setTo(0,0)}}};
},{}],5:[function(require,module,exports){
"use strict";module.exports=function(){this.load.atlas("bullets","img/assets/bullets.png","sheets/bullets"),this.load.image("blue_bullet","img/assets/blue-bullet.png"),this.load.image("bg","img/backgrounds/bg.png"),this.load.atlas("atlas","img/enemy-fighters/enemy-fighters.png","sheets/enemy-fighters"),this.load.atlas("bosses","img/enemy-bosses/enemy-bosses.png","sheets/bosses"),this.load.image("ship","img/space_ship_base.png"),this.load.spritesheet("explode","img/assets/explode.png",128,128),this.load.spritesheet("explode-small","img/assets/explode-small.png",32,32),this.load.spritesheet("explode-smallest","img/assets/explode-smallest.png",16,16),this.load.audio("boom",["audio/effects/explode.wav"]),this.load.audio("lazer",["audio/effects/lazer.wav"]),this.load.audio("stage-1",["audio/background/stage-1.mp3","audio/background/stage-1.ogg"])};
},{}],6:[function(require,module,exports){
"use strict";module.exports=function(e){var s,t,o=function(){var s=e.rnd.integerInRange(40,600),t=e.rnd.integerInRange(0,10),o=aliens.create(s,t,"atlas","bad-guy1.png");o.anchor.setTo(.5,.5),o.body.moves=!0,o.body.velocity.setTo(0,100)},n=function(e,s){e.kill(),s.kill();var t=(s.body.x,s.body.y,explosions.getFirstExists(!1));t.reset(s.body.x,s.body.y),t.play("explode",30,!1,!0)},i=function(e,s){s.body.x,s.body.y;s.hitCount=s.hitCount-1;var t=explosionsSmallest.getFirstExists(!1);if(t.reset(e.body.x,e.body.y),e.kill(),t.play("explode-smallest",60,!1,!0),s.hitCount<=0){var o=explosions.getFirstExists(!1);o.reset(s.body.x,s.body.y),o.play("explode",30,!1,!0),s.kill()}},a=function(){var s=e.rnd.integerInRange(40,600),t=e.rnd.integerInRange(0,10);r(s-32,t),r(s+32,t),r(s,t+32)},r=function(t,o){var n=s.create(t,o,"atlas","raptor-1.png");n.anchor.setTo(.5,.5),n.body.moves=!0,n.body.velocity.setTo(0,150),e.time.events.add(1.25*Phaser.Timer.SECOND,function(){n.body.velocity.setTo(350,350),e.time.events.add(.65*Phaser.Timer.SECOND,function(){n.body.velocity.setTo(-350,350)},n)},n)},l=function(){var s=e.rnd.integerInRange(40,600),o=e.rnd.integerInRange(0,10),n=t.create(s,o,"bosses","boss-1.png");n.anchor.setTo(.5,.5),n.body.moves=!0,n.body.velocity.setTo(0,70),n.hitCount=5};return{init:function(){window.aliens=e.add.group(),aliens.enableBody=!0,aliens.physicsBodyType=Phaser.Physics.ARCADE,s=e.add.group(),s.enableBody=!0,s.physicsBodyType=Phaser.Physics.ARCADE,t=e.add.group(),t.enableBody=!0,t.physicsBodyType=Phaser.Physics.ARCADE,e.time.events.repeat(2*Phaser.Timer.SECOND,105,o,this),e.time.events.repeat(5*Phaser.Timer.SECOND,25,a,this),e.time.events.repeat(12*Phaser.Timer.SECOND,10,l,this)},update:function(){e.physics.arcade.overlap(bullets,aliens,n,null,this),e.physics.arcade.overlap(bullets,s,n,null,this),e.physics.arcade.overlap(bullets,t,i,null,this)},destroy:function(){}}};
},{}],7:[function(require,module,exports){
"use strict";function resetBullet(e){e.kill()}var bulletTime=0,right_bulletTime=0,left_bulletTime=0;module.exports=function(){window.bullets,window.cursors;player.update(),stage1.update()};
},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbmlzb20vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2tldmluaXNvbS9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL25vZGVfbW9kdWxlcy9nYW1lLWNvbnRyb2xsZXIvZ2FtZWNvbnRyb2xsZXIuanMiLCIvVXNlcnMva2V2aW5pc29tL1Byb2plY3RzL3NwYWNlLWRlZmVuc2UvcHVibGljL2pzL2dhbWUuanMiLCIvVXNlcnMva2V2aW5pc29tL1Byb2plY3RzL3NwYWNlLWRlZmVuc2UvcHVibGljL2pzL2dhbWUvY3JlYXRlLmpzIiwiL1VzZXJzL2tldmluaXNvbS9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3BsYXllci5qcyIsIi9Vc2Vycy9rZXZpbmlzb20vUHJvamVjdHMvc3BhY2UtZGVmZW5zZS9wdWJsaWMvanMvZ2FtZS9wcmVsb2FkLmpzIiwiL1VzZXJzL2tldmluaXNvbS9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3NjZW5lcy9zY2VuZS0xLmpzIiwiL1VzZXJzL2tldmluaXNvbS9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL3B1YmxpYy9qcy9nYW1lL3VwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMXJDQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogSGVscGVycyBcclxuICovXHJcbiggZnVuY3Rpb24oZXhwb3J0cykge1xyXG5cdHZhciBfX3NsaWNlID0gW10uc2xpY2U7XHJcblx0dmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xyXG5cdHZhciBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcclxuXHQvKiAkLmV4dGVuZCBmdW5jdGlvbmFsaXR5ICovXHJcblx0ZnVuY3Rpb24gZXh0ZW5kKCB0YXJnZXQsIHNyYyApXHJcblx0e1xyXG5cdFx0dmFyIG9wdGlvbnMsIG5hbWUsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcclxuXHRcdFx0aSA9IDEsXHJcblx0XHRcdGxlbmd0aCA9IDIsXHJcblx0XHRcdGRlZXAgPSB0cnVlO1xyXG5cdFxyXG5cdFx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxyXG5cdFx0aWYoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiIClcclxuXHRcdHtcclxuXHRcdFx0ZGVlcCA9IHRhcmdldDtcclxuXHRcdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxyXG5cdFx0XHRpID0gMjtcclxuXHRcdH1cclxuXHRcclxuXHRcdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyggcG9zc2libGUgaW4gZGVlcCBjb3B5IClcclxuXHRcdGlmKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICF0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nIClcclxuXHRcdHtcclxuXHRcdFx0dGFyZ2V0ID0ge307XHJcblx0XHR9XHJcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXHJcblx0XHRpZiggb3B0aW9ucyA9IHNyYyApXHJcblx0XHR7XHJcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3RcclxuXHRcdFx0Zm9yKCBuYW1lIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xyXG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xyXG5cdFxyXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3BcclxuXHRcdFx0XHRpZiggdGFyZ2V0ID09PSBjb3B5IClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXHJcblx0XHRcdFx0aWYoIGRlZXAgJiYoIHR5cGVvZiBjb3B5ID09ICdvYmplY3QnIHx8KCBjb3B5SXNBcnJheSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggIGNvcHkgICkgPT09ICdbb2JqZWN0IEFycmF5XScgKSApICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoIGNvcHlJc0FycmF5ICkgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggIHNyYyAgKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA/IHNyYyA6IFtdO1xyXG5cdFxyXG5cdFx0XHRcdFx0fSBcclxuXHRcdFx0XHRcdGVsc2UgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIHR5cGVvZiBzcmMgPT0gJ29iamVjdCcgPyBzcmMgOiB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxyXG5cdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKCBjbG9uZSwgY29weSApO1xyXG5cdFxyXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xyXG5cdFx0XHRcdH0gXHJcblx0XHRcdFx0ZWxzZSBpZiggdHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG5cdFxyXG5cdC8vIE1ha2UgYXZhaWxhYmxlIHRvIHdpbmRvd1xyXG5cdGV4cG9ydHMuR2FtZUNvbnRyb2xsZXIgPSB7XHJcblx0XHRcclxuXHRcdC8vIERlZmF1bHQgb3B0aW9ucyxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0bGVmdDogeyBcclxuXHRcdFx0XHR0eXBlOiAnZHBhZCcsIFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7IGxlZnQ6ICcxMyUnLCBib3R0b206ICcyMiUnIH0sXHJcblx0XHRcdFx0ZHBhZDoge1xyXG5cdFx0XHRcdFx0dXA6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzggKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM4ICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOCApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bGVmdDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE1JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzclJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyLFxyXG5cdFx0XHRcdFx0XHR0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzNyApO1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzcgKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM3ICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkb3duOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDQwICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCA0MCApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgNDAgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHJpZ2h0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM5ICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOSApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzkgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0am95c3RpY2s6IHtcclxuXHRcdFx0XHRcdHJhZGl1czogNjAsXHJcblx0XHRcdFx0XHR0b3VjaE1vdmU6IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyggZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cmlnaHQ6IHsgXHJcblx0XHRcdFx0dHlwZTogJ2J1dHRvbnMnLCBcclxuXHRcdFx0XHRwb3NpdGlvbjogeyByaWdodDogJzE3JScsIGJvdHRvbTogJzI4JScgfSwgXHJcblx0XHRcdFx0YnV0dG9uczogW1xyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogJy0xMyUnLCB5OiAwIH0sIGxhYmVsOiAnWCcsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJywgZm9udENvbG9yOiAnI2ZmZicsIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBCbHVlIGlzIGN1cnJlbnRseSBtYXBwZWQgdG8gdXAgYnV0dG9uXHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM4ICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzggKTtcclxuXHRcdFx0XHRcdH0sIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzggKTtcdFxyXG5cdFx0XHRcdFx0fSB9LFxyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogMCwgeTogJy0xMSUnIH0sIGxhYmVsOiAnWScsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLCBmb250Q29sb3I6ICcjZmZmJyB9LFxyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogJzEzJScsIHk6IDAgfSwgbGFiZWw6ICdCJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsIGZvbnRDb2xvcjogJyNmZmYnLCB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUmVkIGlzIGN1cnJlbnRseSBtYXBwZWQgdG8gZG93biBidXR0b24sIGFuZCBzcGFjZSBidXR0b25cclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzIgKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzMiApO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCA0MCApO1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDQwICk7XHJcblx0XHRcdFx0XHR9LCB0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDMyICk7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDQwICk7XHJcblx0XHRcdFx0XHR9IH0sXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAwLCB5OiAnMTElJyB9LCBsYWJlbDogJ0EnLCByYWRpdXM6ICc3JScsIHN0cm9rZTogMiwgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLCBmb250Q29sb3I6ICcjZmZmJywgdG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdC8vIEdyZWVuIGlzIGN1cnJlbnRseSBtYXBwZWQgdG8gdXAgYnV0dG9uXHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM4ICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzggKTtcclxuXHRcdFx0XHRcdH0sIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzggKTtcdFxyXG5cdFx0XHRcdFx0fSAgfVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0ZHBhZDoge1xyXG5cdFx0XHRcdFx0dXA6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxlZnQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHJpZ2h0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGpveXN0aWNrOiB7XHJcblx0XHRcdFx0XHRyYWRpdXM6IDYwLFxyXG5cdFx0XHRcdFx0dG91Y2hNb3ZlOiBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coIGUgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoUmFkaXVzOiA0NVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8gQXJlYXMgKG9iamVjdHMpIG9uIHRoZSBzY3JlZW4gdGhhdCBjYW4gYmUgdG91Y2hlZFxyXG5cdFx0dG91Y2hhYmxlQXJlYXM6IFtdLFxyXG5cdFx0XHJcblx0XHQvLyBNdWx0aS10b3VjaFxyXG5cdFx0dG91Y2hlczogW10sXHJcblx0XHRcclxuXHRcdC8vIEhlYXZ5IHNwcml0ZXMgKHdpdGggZ3JhZGllbnRzKSBhcmUgY2FjaGVkIGFzIGEgY2FudmFzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcclxuXHRcdGNhY2hlZFNwcml0ZXM6IHt9LFxyXG5cdFx0XHJcblx0XHRwYXVzZWQ6IGZhbHNlLFxyXG5cdFx0XHJcblx0XHRpbml0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZXJlJ3Mgbm8gdG91Y2ggc3VwcG9ydFxyXG5cdFx0XHRpZiggISAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcclxuXHRcclxuXHRcdFx0Ly8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBzcGVjaWZpZWQgb3B0aW9uc1xyXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdFx0ZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gR3JhYiB0aGUgY2FudmFzIGlmIG9uZSB3YXNuJ3QgcGFzc2VkXHJcblx0XHRcdHZhciBlbGU7XHJcblx0XHRcdGlmKCAhdGhpcy5vcHRpb25zLmNhbnZhcyB8fCAhKCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggdGhpcy5vcHRpb25zLmNhbnZhcyApICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnY2FudmFzJyApWzBdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoIGVsZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2FudmFzID0gZWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9wdGlvbnMuY3R4ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBDcmVhdGUgYSBjYW52YXMgdGhhdCBnb2VzIGRpcmVjdGx5IG9uIHRvcCBvZiB0aGUgZ2FtZSBjYW52YXNcclxuXHRcdFx0dGhpcy5jcmVhdGVPdmVybGF5Q2FudmFzKCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENyZWF0ZXMgdGhlIGNhbnZhcyB0aGF0IHNpdHMgb24gdG9wIG9mIHRoZSBnYW1lJ3MgY2FudmFzIGFuZCBob2xkcyBnYW1lIGNvbnRyb2xzIFxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGVPdmVybGF5Q2FudmFzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gU2NhbGUgdG8gc2FtZSBzaXplIGFzIG9yaWdpbmFsIGNhbnZhc1xyXG5cdFx0XHR0aGlzLnJlc2l6ZSggdHJ1ZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdib2R5JyApWzBdLmFwcGVuZENoaWxkKCB0aGlzLmNhbnZhcyApO1xyXG5cdFx0XHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gV2FpdCBmb3IgYW55IG90aGVyIGV2ZW50cyB0byBmaW5pc2hcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgR2FtZUNvbnRyb2xsZXIucmVzaXplLmNhbGwoIF90aGlzICk7IH0sIDEgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIFNldCB0aGUgdG91Y2ggZXZlbnRzIGZvciB0aGlzIG5ldyBjYW52YXNcclxuXHRcdFx0dGhpcy5zZXRUb3VjaEV2ZW50cygpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTG9hZCBpbiB0aGUgaW5pdGlhbCBVSSBlbGVtZW50c1xyXG5cdFx0XHR0aGlzLmxvYWRTaWRlKCAnbGVmdCcgKTtcclxuXHRcdFx0dGhpcy5sb2FkU2lkZSggJ3JpZ2h0JyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gU3RhcnRzIHVwIHRoZSByZW5kZXJpbmcgLyBkcmF3aW5nXHJcblx0XHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiggISB0aGlzLnRvdWNoZXMgfHwgdGhpcy50b3VjaGVzLmxlbmd0aCA9PSAwIClcclxuXHRcdFx0XHR0aGlzLnBhdXNlZCA9IHRydWU7IC8vIHBhdXNlIHVudGlsIGEgdG91Y2ggZXZlbnRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHBpeGVsUmF0aW86IDEsXHJcblx0XHRyZXNpemU6IGZ1bmN0aW9uKCBmaXJzdFRpbWUgKSB7XHJcblx0XHRcdC8vIFNjYWxlIHRvIHNhbWUgc2l6ZSBhcyBvcmlnaW5hbCBjYW52YXNcclxuXHRcdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLm9wdGlvbnMuY2FudmFzLndpZHRoO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuY2FudmFzLmhlaWdodDtcclxuXHRcdFx0XHJcblx0XHRcdC8vIEdldCBpbiBvbiB0aGlzIHJldGluYSBhY3Rpb25cclxuXHRcdFx0aWYoIHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUud2lkdGggJiYgdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS5oZWlnaHQgJiYgdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS5oZWlnaHQuaW5kZXhPZiggJ3B4JyApICE9PSAtMSApIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLndpZHRoO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUuaGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMucGl4ZWxSYXRpbyA9IHRoaXMuY2FudmFzLndpZHRoIC8gcGFyc2VJbnQoIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdFx0dGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMub3B0aW9ucy5jYW52YXMub2Zmc2V0TGVmdCArICdweCc7XHJcblx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IHRoaXMub3B0aW9ucy5jYW52YXMub2Zmc2V0VG9wICsgJ3B4JztcclxuXHRcdFx0dGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCAnc3R5bGUnLCB0aGlzLmNhbnZhcy5nZXRBdHRyaWJ1dGUoICdzdHlsZScgKSArJyAtbXMtdG91Y2gtYWN0aW9uOiBub25lOycgKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCAhZmlyc3RUaW1lIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFJlbW92ZSBhbGwgY3VycmVudCBidXR0b25zXHJcblx0XHRcdFx0dGhpcy50b3VjaGFibGVBcmVhcyA9IFtdO1xyXG5cdFx0XHRcdC8vIENsZWFyIG91dCB0aGUgY2FjaGVkIHNwcml0ZXNcclxuXHRcdFx0XHR0aGlzLmNhY2hlZFNwcml0ZXMgPSBbXTtcclxuXHRcdFx0XHQvLyBSZWxvYWQgaW4gdGhlIGluaXRpYWwgVUkgZWxlbWVudHNcclxuXHRcdFx0XHR0aGlzLnJlbG9hZFNpZGUoICdsZWZ0JyApO1xyXG5cdFx0XHRcdHRoaXMucmVsb2FkU2lkZSggJ3JpZ2h0JyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIHNjYWxlZCBwaXhlbHMuIEdpdmVuIHRoZSB2YWx1ZSBwYXNzZWRcclxuXHRcdCAqIEBwYXJhbSB7aW50L3N0cmluZ30gdmFsdWUgLSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgIyBvZiBwaXhlbHMsIG9yICd4JScgZm9yIHJlbGF0aXZlXHJcblx0XHQgKiBAcGFyYW0ge2NoYXJ9IGF4aXMgLSB4LCB5XHJcblx0XHQgKi9cclxuXHRcdGdldFBpeGVsczogZnVuY3Rpb24oIHZhbHVlLCBheGlzIClcclxuXHRcdHtcclxuXHRcdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdHJldHVybiAwXHJcblx0XHRcdGVsc2UgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgKVxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0ZWxzZSAvLyBhIHBlcmNlbnRhZ2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCBheGlzID09ICd4JyApXHJcblx0XHRcdFx0XHRyZXR1cm4gKCBwYXJzZUludCggdmFsdWUgKSAvIDEwMCApICogdGhpcy5jYW52YXMud2lkdGg7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuICggcGFyc2VJbnQoIHZhbHVlICkgLyAxMDAgKSAqIHRoaXMuY2FudmFzLmhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTaW11bGF0ZXMgYSBrZXkgcHJlc3NcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSAnZG93bicsICd1cCdcclxuXHRcdCAqIEBwYXJhbSB7Y2hhcn0gY2hhcmFjdGVyXHJcblx0XHQgKi9cclxuXHRcdHNpbXVsYXRlS2V5RXZlbnQ6IGZ1bmN0aW9uKCBldmVudE5hbWUsIGtleUNvZGUgKSB7XHJcblx0XHRcdGlmKCB0eXBlb2Ygd2luZG93Lm9ua2V5ZG93biA9PT0gJ3VuZGVmaW5lZCcgKSAvLyBObyBrZXlib2FyZCwgY2FuJ3Qgc2ltdWxhdGUuLi5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdC8qIElmIHRoZXkgaGF2ZSBqUXVlcnksIHVzZSBpdCBiZWNhdXNlIGl0IHdvcmtzIGJldHRlciBmb3IgbW9iaWxlIHNhZmFyaSAqL1xyXG5cdFx0XHRpZiggalF1ZXJ5IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBwcmVzcyA9IGpRdWVyeS5FdmVudCggJ2tleScgKyBldmVudE5hbWUgKTtcclxuXHRcdFx0XHRwcmVzcy5jdHJsS2V5ID0gZmFsc2U7XHJcblx0XHRcdFx0cHJlc3Mud2hpY2ggPSBrZXlDb2RlO1xyXG5cdFx0XHRcdCQoIGRvY3VtZW50ICkudHJpZ2dlciggcHJlc3MgKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0dmFyIG9FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnS2V5Ym9hcmRFdmVudCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENocm9taXVtIEhhY2tcclxuXHRcdFx0aWYoIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSAhPT0gLTEgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBvRXZlbnQsICdrZXlDb2RlJywge1xyXG5cdFx0XHRcdFx0Z2V0IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmtleUNvZGVWYWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1x0IFxyXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb0V2ZW50LCAnd2hpY2gnLCB7XHJcblx0XHRcdFx0XHRnZXQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMua2V5Q29kZVZhbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0aWYoIG9FdmVudC5pbml0S2V5Ym9hcmRFdmVudCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvRXZlbnQuaW5pdEtleWJvYXJkRXZlbnQoICdrZXknICsgZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBkb2N1bWVudC5kZWZhdWx0VmlldywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGtleUNvZGUsIGtleUNvZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvRXZlbnQuaW5pdEtleUV2ZW50KCAna2V5JyArIGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBrZXlDb2RlLCBrZXlDb2RlICk7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRvRXZlbnQua2V5Q29kZVZhbCA9IGtleUNvZGU7XHJcblx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHNldFRvdWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0dmFyIHRvdWNoU3RhcnQgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRpZiggX3RoaXMucGF1c2VkIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHJcblx0XHRcdFx0Ly8gTWljcm9zb2Z0IGFsd2F5cyBoYXMgdG8gaGF2ZSB0aGVpciBvd24gc3R1ZmYuLi5cclxuXHRcdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmIGUuY2xpZW50WCAmJiBlLnBvaW50ZXJUeXBlID09IGUuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXNbIGUucG9pbnRlcklkIF0gPSB7IGNsaWVudFg6IGUuY2xpZW50WCwgY2xpZW50WTogZS5jbGllbnRZIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzID0gZS50b3VjaGVzIHx8IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcclxuXHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0LCBmYWxzZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHRvdWNoRW5kID0gZnVuY3Rpb24oIGUgKSB7XHRcdFx0XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmIGUucG9pbnRlclR5cGUgPT0gZS5NU1BPSU5URVJfVFlQRV9UT1VDSCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZGVsZXRlIF90aGlzLnRvdWNoZXNbIGUucG9pbnRlcklkIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHRcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXMgPSBlLnRvdWNoZXMgfHwgW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCAhZS50b3VjaGVzIHx8IGUudG91Y2hlcy5sZW5ndGggPT0gMCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gRHJhdyBvbmNlIG1vcmUgdG8gcmVtb3ZlIHRoZSB0b3VjaCBhcmVhXHJcblx0XHRcdFx0XHRfdGhpcy5yZW5kZXIoKTtcclxuXHRcdFx0XHRcdF90aGlzLnBhdXNlZCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaEVuZCApO1xyXG5cdFxyXG5cdFx0XHR2YXIgdG91Y2hNb3ZlID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5jbGllbnRYICYmIGUucG9pbnRlclR5cGUgPT0gZS5NU1BPSU5URVJfVFlQRV9UT1VDSCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlc1sgZS5wb2ludGVySWQgXSA9IHsgY2xpZW50WDogZS5jbGllbnRYLCBjbGllbnRZOiBlLmNsaWVudFkgfTtcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlcyA9IGUudG91Y2hlcyB8fCBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaE1vdmUgKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0ICk7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlclVwJywgdG91Y2hFbmQgKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEFkZHMgdGhlIGFyZWEgdG8gYSBsaXN0IG9mIHRvdWNoYWJsZSBhcmVhcywgZHJhd3NcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHdpdGggcHJvcGVydGllczogeCwgeSwgd2lkdGgsIGhlaWdodCwgdG91Y2hTdGFydCwgdG91Y2hFbmQsIHRvdWNoTW92ZVxyXG5cdFx0ICovXHJcblx0XHRhZGRUb3VjaGFibGVEaXJlY3Rpb246IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGRpcmVjdGlvbiA9IG5ldyBUb3VjaGFibGVEaXJlY3Rpb24oIG9wdGlvbnMgKTtcclxuXHRcdFx0XHJcblx0XHRcdGRpcmVjdGlvbi5pZCA9IHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggZGlyZWN0aW9uICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEFkZHMgdGhlIGNpcmN1bGFyIGFyZWEgdG8gYSBsaXN0IG9mIHRvdWNoYWJsZSBhcmVhcywgZHJhd3NcdFxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCBwcm9wZXJ0aWVzOiB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgdG91Y2hNb3ZlXHJcblx0XHQgKi9cclxuXHRcdGFkZEpveXN0aWNrOiBmdW5jdGlvbiggb3B0aW9ucyApIHsgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciwgdG91Y2hTdGFydCwgdG91Y2hFbmQgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgam95c3RpY2sgPSBuZXcgVG91Y2hhYmxlSm95c3RpY2soIG9wdGlvbnMgKTtcclxuXHRcdFx0XHJcblx0XHRcdGpveXN0aWNrLmlkID0gdGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBqb3lzdGljayApO1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyB0aGUgY2lyY3VsYXIgYXJlYSB0byBhIGxpc3Qgb2YgdG91Y2hhYmxlIGFyZWFzLCBkcmF3c1x0IFxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCBwcm9wZXJ0aWVzOiB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgdG91Y2hNb3ZlXHJcblx0XHQgKi9cclxuXHRcdGFkZEJ1dHRvbjogZnVuY3Rpb24oIG9wdGlvbnMgKSB7IC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IsIHRvdWNoU3RhcnQsIHRvdWNoRW5kICkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGJ1dHRvbiA9IG5ldyBUb3VjaGFibGVCdXR0b24oIG9wdGlvbnMgKTtcclxuXHRcdFx0XHJcblx0XHRcdGJ1dHRvbi5pZCA9IHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggYnV0dG9uICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRhZGRUb3VjaGFibGVBcmVhOiBmdW5jdGlvbiggY2hlY2ssIGNhbGxiYWNrICkge1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZEJ1dHRvbnM6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHR2YXIgYnV0dG9ucyA9IHRoaXMub3B0aW9uc1sgc2lkZSBdLmJ1dHRvbnM7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdGZvciggdmFyIGkgPSAwLCBqID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBqOyBpKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHBvc1ggPSB0aGlzLmdldFBvc2l0aW9uWCggc2lkZSApO1xyXG5cdFx0XHRcdHZhciBwb3NZID0gdGhpcy5nZXRQb3NpdGlvblkoIHNpZGUgKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRidXR0b25zW2ldLnggPSBwb3NYICsgdGhpcy5nZXRQaXhlbHMoIGJ1dHRvbnNbaV0ub2Zmc2V0LngsICd5JyApO1xyXG5cdFx0XHRcdGJ1dHRvbnNbaV0ueSA9IHBvc1kgKyB0aGlzLmdldFBpeGVscyggYnV0dG9uc1tpXS5vZmZzZXQueSwgJ3knICk7XHJcblx0XHJcblx0XHRcdFx0dGhpcy5hZGRCdXR0b24oIGJ1dHRvbnNbaV0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZERQYWQ6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHR2YXIgZHBhZCA9IHRoaXMub3B0aW9uc1sgc2lkZSBdLmRwYWQgfHwge307XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBDZW50ZXJlZCB2YWx1ZSBpcyBhdCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvblxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdHZhciBwb3NYID0gdGhpcy5nZXRQb3NpdGlvblgoIHNpZGUgKTtcclxuXHRcdFx0dmFyIHBvc1kgPSB0aGlzLmdldFBvc2l0aW9uWSggc2lkZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIElmIHRoZXkgaGF2ZSBhbGwgNCBkaXJlY3Rpb25zLCBhZGQgYSBjaXJjbGUgdG8gdGhlIGNlbnRlciBmb3IgbG9va3NcclxuXHRcdFx0aWYoIGRwYWQudXAgJiYgZHBhZC5sZWZ0ICYmIGRwYWQuZG93biAmJiBkcGFkLnJpZ2h0IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0eDogcG9zWCxcclxuXHRcdFx0XHRcdHk6IHBvc1ksXHJcblx0XHRcdFx0XHRyYWRpdXM6IGRwYWQucmlnaHQuaGVpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBjZW50ZXIgPSBuZXcgVG91Y2hhYmxlQ2lyY2xlKCBvcHRpb25zICk7IFxyXG5cdFx0XHRcdHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggY2VudGVyICk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0Ly8gVXAgYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQudXAgIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQudXAueCA9IHBvc1ggLSB0aGlzLmdldFBpeGVscyggZHBhZC51cC53aWR0aCwgJ3knICkgLyAyO1xyXG5cdFx0XHRcdGRwYWQudXAueSA9IHBvc1kgLSAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLmhlaWdodCwgJ3knICkgKyAgdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC5oZWlnaHQsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQudXAuZGlyZWN0aW9uID0gJ3VwJztcclxuXHRcdFx0XHR0aGlzLmFkZFRvdWNoYWJsZURpcmVjdGlvbiggZHBhZC51cCApO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdC8vIExlZnQgYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQubGVmdCAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC5sZWZ0LnggPSBwb3NYIC0gKCB0aGlzLmdldFBpeGVscyggZHBhZC5sZWZ0LndpZHRoLCAneScgKSArIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLndpZHRoLCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLmxlZnQueSA9IHBvc1kgLSAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQuaGVpZ2h0LCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLmxlZnQuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLmxlZnQgKTtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHQvLyBEb3duIGFycm93XHJcblx0XHRcdGlmKCBkcGFkLmRvd24gIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQuZG93bi54ID0gcG9zWCAtIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmRvd24ud2lkdGgsICd5JyApIC8gMjtcclxuXHRcdFx0XHRkcGFkLmRvd24ueSA9IHBvc1kgKyAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQuaGVpZ2h0LCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLmRvd24uZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLmRvd24gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUmlnaHQgYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQucmlnaHQgIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQucmlnaHQueCA9IHBvc1ggKyAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLndpZHRoLCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLnJpZ2h0LnkgPSBwb3NZIC0gdGhpcy5nZXRQaXhlbHMoIGRwYWQucmlnaHQuaGVpZ2h0LCAneScgKSAvIDI7XHJcblx0XHRcdFx0ZHBhZC5yaWdodC5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLnJpZ2h0ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkSm95c3RpY2s6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHR2YXIgam95c3RpY2sgPSB0aGlzLm9wdGlvbnNbIHNpZGUgXS5qb3lzdGljaztcclxuXHRcdFx0am95c3RpY2sueCA9IHRoaXMuZ2V0UG9zaXRpb25YKCBzaWRlICk7XHJcblx0XHRcdGpveXN0aWNrLnkgPSB0aGlzLmdldFBvc2l0aW9uWSggc2lkZSApO1xyXG5cdFxyXG5cdFx0XHR0aGlzLmFkZEpveXN0aWNrKCBqb3lzdGljayApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBVc2VkIGZvciByZXNpemluZy4gQ3VycmVudGx5IGlzIGp1c3QgYW4gYWxpYXMgZm9yIGxvYWRTaWRlXHJcblx0XHQgKi9cclxuXHRcdHJlbG9hZFNpZGU6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHQvLyBMb2FkIGluIG5ldyBvbmVzXHJcblx0XHRcdHRoaXMubG9hZFNpZGUoIHNpZGUgKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxvYWRTaWRlOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0aWYoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnR5cGUgPT09ICdkcGFkJyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmxvYWREUGFkKCBzaWRlICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiggdGhpcy5vcHRpb25zWyBzaWRlIF0udHlwZSA9PT0gJ2pveXN0aWNrJyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmxvYWRKb3lzdGljayggc2lkZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnR5cGUgPT09ICdidXR0b25zJyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmxvYWRCdXR0b25zKCBzaWRlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogTm9ybWFsaXplIHRvdWNoIHBvc2l0aW9ucyBieSB0aGUgbGVmdCBhbmQgdG9wIG9mZnNldHNcclxuXHRcdCAqIEBwYXJhbSB7aW50fSB4XHJcblx0XHQgKi9cclxuXHRcdG5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YOiBmdW5jdGlvbiggeCApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAoIHggLSBHYW1lQ29udHJvbGxlci5vcHRpb25zLmNhbnZhcy5vZmZzZXRMZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICkgKiAoIHRoaXMucGl4ZWxSYXRpbyApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBOb3JtYWxpemUgdG91Y2ggcG9zaXRpb25zIGJ5IHRoZSBsZWZ0IGFuZCB0b3Agb2Zmc2V0c1xyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHlcclxuXHRcdCAqL1xyXG5cdFx0bm9ybWFsaXplVG91Y2hQb3NpdGlvblk6IGZ1bmN0aW9uKCB5IClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICggeSAtIEdhbWVDb250cm9sbGVyLm9wdGlvbnMuY2FudmFzLm9mZnNldFRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICkgKiAoIHRoaXMucGl4ZWxSYXRpbyApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB4IHBvc2l0aW9uIHdoZW4gZ2l2ZW4gIyBvZiBwaXhlbHMgZnJvbSByaWdodCAoYmFzZWQgb24gY2FudmFzIHNpemUpXHJcblx0XHQgKiBAcGFyYW0ge2ludH0gcmlnaHQgXHJcblx0XHQgKi9cclxuXHRcdGdldFhGcm9tUmlnaHQ6IGZ1bmN0aW9uKCByaWdodCApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgeSBwb3NpdGlvbiB3aGVuIGdpdmVuICMgb2YgcGl4ZWxzIGZyb20gYm90dG9tIChiYXNlZCBvbiBjYW52YXMgc2l6ZSlcclxuXHRcdCAqIEBwYXJhbSB7aW50fSByaWdodCBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0WUZyb21Cb3R0b206IGZ1bmN0aW9uKCBib3R0b20gKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQgLSBib3R0b207XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEdyYWJzIHRoZSB4IHBvc2l0aW9uIG9mIGVpdGhlciB0aGUgbGVmdCBvciByaWdodCBzaWRlL2NvbnRyb2xzXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc2lkZSAtICdsZWZ0JywgJ3JpZ2h0JyBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UG9zaXRpb25YOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0aWYoIHR5cGVvZiB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5sZWZ0ICE9PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5sZWZ0LCAneCcgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFhGcm9tUmlnaHQoIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5yaWdodCwgJ3gnICkgKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogR3JhYnMgdGhlIHkgcG9zaXRpb24gb2YgZWl0aGVyIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGUvY29udHJvbHNcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzaWRlIC0gJ2xlZnQnLCAncmlnaHQnIFxyXG5cdFx0ICovXHJcblx0XHRnZXRQb3NpdGlvblk6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHRpZiggdHlwZW9mIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLnRvcCAhPT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBpeGVscyggdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24udG9wLCAneScgKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFlGcm9tQm90dG9tKCB0aGlzLmdldFBpeGVscyggdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24uYm90dG9tLCAneScgKSApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdFx0dGhpcy5jdHguY2xlYXJSZWN0KCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdC8vIFdoZW4gbm8gdG91Y2ggZXZlbnRzIGFyZSBoYXBwZW5pbmcsIHRoaXMgZW5hYmxlcyAncGF1c2VkJyBtb2RlLCB3aGljaCBvbmx5IHNraXBzIHRoaXMgc21hbGwgcGFydC5cclxuXHRcdFx0Ly8gU2tpcHBpbmcgdGhlIGNsZWFyUmVjdCBhbmQgZHJhdygpcyB3b3VsZCBiZSBuaWNlLCBidXQgaXQgbWVzc2VzIHdpdGggdGhlIHRyYW5zcGFyZW50IGdyYWRpZW50c1xyXG5cdFx0XHRpZiggISB0aGlzLnBhdXNlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY2FjaGVJZCA9ICd0b3VjaC1jaXJjbGUnO1xyXG5cdFx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdFx0aWYoICEgY2FjaGVkICYmIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IDIgKiB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXM7XHJcblx0XHRcdFx0XHRzdWJDYW52YXMuaGVpZ2h0ID0gMiAqIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cztcclxuXHRcdFxyXG5cdFx0XHRcdFx0dmFyIGNlbnRlciA9IHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cztcclxuXHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggY2VudGVyLCBjZW50ZXIsIDEsIGNlbnRlciwgY2VudGVyLCB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMgKTsgLy8gMTAgPSBlbmQgcmFkaXVzXHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyMDAsIDIwMCwgMjAwLCAxICknICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAyMDAsIDIwMCwgMjAwLCAwICknICk7XHJcblx0XHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcdFx0XHRjdHguYXJjKCBjZW50ZXIsIGNlbnRlciwgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBEcmF3IHRoZSBjdXJyZW50IHRvdWNoIHBvc2l0aW9ucyBpZiBhbnlcclxuXHRcdFx0XHRmb3IoIHZhciBpID0gMCwgaiA9IHRoaXMudG91Y2hlcy5sZW5ndGg7IGkgPCBqOyBpKysgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciB0b3VjaCA9IHRoaXMudG91Y2hlc1sgaSBdO1xyXG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB0b3VjaCA9PT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdHZhciB4ID0gdGhpcy5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWCggdG91Y2guY2xpZW50WCApLCB5ID0gdGhpcy5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWSggdG91Y2guY2xpZW50WSApO1xyXG5cdFx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHggLSB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsIHkgLSB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGZvciggdmFyIGkgPSAwLCBqID0gdGhpcy50b3VjaGFibGVBcmVhcy5sZW5ndGg7IGkgPCBqOyBpKysgKVxyXG5cdFx0XHR7XHRcclxuXHRcdFx0XHR0aGlzLnRvdWNoYWJsZUFyZWFzWyBpIF0uZHJhdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBhcmVhID0gdGhpcy50b3VjaGFibGVBcmVhc1sgaSBdO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gR28gdGhyb3VnaCBhbGwgdG91Y2hlcyB0byBzZWUgaWYgYW55IGhpdCB0aGlzIGFyZWFcclxuXHRcdFx0XHR2YXIgdG91Y2hlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGZvciggdmFyIGsgPSAwLCBsID0gdGhpcy50b3VjaGVzLmxlbmd0aDsgayA8IGw7IGsrKyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHRvdWNoID0gdGhpcy50b3VjaGVzWyBrIF07XHJcblx0XHRcdFx0XHRpZiggdHlwZW9mIHRvdWNoID09PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFxyXG5cdFx0XHRcdFx0dmFyIHggPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YKCB0b3VjaC5jbGllbnRYICksIHkgPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25ZKCB0b3VjaC5jbGllbnRZICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyBDaGVjayB0aGF0IGl0J3MgaW4gdGhlIGJvdW5kaW5nIGJveC9jaXJjbGVcclxuXHRcdFx0XHRcdGlmKCAoIGFyZWEuY2hlY2soIHgsIHkgKSApICE9PSBmYWxzZSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmKCAhdG91Y2hlZCApXHJcblx0XHRcdFx0XHRcdFx0dG91Y2hlZCA9IHRoaXMudG91Y2hlc1sgayBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiggdG91Y2hlZCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoICFhcmVhLmFjdGl2ZSApXHJcblx0XHRcdFx0XHRcdGFyZWEudG91Y2hTdGFydFdyYXBwZXIoIHRvdWNoZWQgKTtcclxuXHRcdFx0XHRcdGFyZWEudG91Y2hNb3ZlV3JhcHBlciggdG91Y2hlZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKCBhcmVhLmFjdGl2ZSApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXJlYS50b3VjaEVuZFdyYXBwZXIoIHRvdWNoZWQgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMucmVuZGVyV3JhcHBlciApO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogU28gd2UgY2FuIGtlZXAgc2NvcGUsIGFuZCBkb24ndCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBvYmogZXZlcnkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChiYWQgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbikgXHJcblx0XHQgKi9cclxuXHRcdHJlbmRlcldyYXBwZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5yZW5kZXIoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBTdXBlcmNsYXNzIGZvciB0b3VjaGFibGUgc3R1ZmYgXHJcblx0ICovXHJcblx0dmFyIFRvdWNoYWJsZUFyZWEgPSAoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVBcmVhKCkgXHJcblx0XHR7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIGJlaW5nIHRvdWNoZWRcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoU3RhcnQgPSBudWxsO1xyXG5cdFx0XHJcblx0XHQvLyBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBiZWluZyBtb3ZlZFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hNb3ZlID0gbnVsbDtcclxuXHRcdFxyXG5cdFx0Ly8gQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgbm8gbG9uZ2VyIGJlaW5nIHRvdWNoZWRcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoRW5kID0gbnVsbDtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudHlwZSA9ICdhcmVhJztcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmlkID0gZmFsc2U7XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSB1c2VyLXNwZWNpZmllZCBjYWxsYmFjayBmb3IgdGhpcyBkaXJlY3Rpb24gYmVpbmcgdG91Y2hlZFxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnNldFRvdWNoU3RhcnQgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XHJcblx0XHRcdHRoaXMudG91Y2hTdGFydCA9IGNhbGxiYWNrO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBubyBsb25nZXIgdG91Y2hlZCBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hTdGFydFdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hTdGFydCApXHJcblx0XHRcdFx0dGhpcy50b3VjaFN0YXJ0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBNYXJrIHRoaXMgZGlyZWN0aW9uIGFzIGFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIGZvciB0aGlzIGRpcmVjdGlvbiBubyBsb25nZXIgYmVpbmcgdG91Y2hlZFxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnNldFRvdWNoTW92ZSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcclxuXHRcdFx0dGhpcy50b3VjaE1vdmUgPSBjYWxsYmFjaztcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgbW92ZWQuIE1ha2Ugc3VyZSBpdCdzIGFjdHVhbGx5IGNoYW5nZWQgYmVmb3JlIHBhc3NpbmcgdG8gZGV2ZWxvcGVyXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NYID0gMDtcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NZID0gMDtcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoTW92ZVdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hNb3ZlICYmICggZS5jbGllbnRYICE9IFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NYIHx8IGUuY2xpZW50WSAhPSBUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5sYXN0UG9zWSApIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudG91Y2hNb3ZlKCk7XHJcblx0XHRcdFx0dGhpcy5sYXN0UG9zWCA9IGUuY2xpZW50WDtcclxuXHRcdFx0XHR0aGlzLmxhc3RQb3NZID0gZS5jbGllbnRZO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgaW5hY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSB1c2VyLXNwZWNpZmllZCBjYWxsYmFjayBmb3IgdGhpcyBkaXJlY3Rpb24gbm8gbG9uZ2VyIGJlaW5nIHRvdWNoZWRcclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5zZXRUb3VjaEVuZCA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcclxuXHRcdFx0dGhpcy50b3VjaEVuZCA9IGNhbGxiYWNrO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBmaXJzdCB0b3VjaGVkIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaEVuZFdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hFbmQgKVxyXG5cdFx0XHRcdHRoaXMudG91Y2hFbmQoKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgaW5hY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLnJlbmRlcigpO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUFyZWE7XHJcblx0XHRcclxuXHR9ICkoKTtcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlRGlyZWN0aW9uID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlRGlyZWN0aW9uLCBfX3N1cGVyICk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZURpcmVjdGlvbiggb3B0aW9ucyApIFxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGkgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd4JyApO1xyXG5cdFx0XHRcdGVsc2UgaWYoIGkgPT0gJ3knIHx8IGkgPT0gJ2hlaWdodCcgfHwgaSA9PSAnd2lkdGgnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd5JyApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdH1cclxuXHRcclxuXHRcdFRvdWNoYWJsZURpcmVjdGlvbi5wcm90b3R5cGUudHlwZSA9ICdkaXJlY3Rpb24nO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdG91Y2ggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpcyBkaXJlY3Rpb24gXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZURpcmVjdGlvbi5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdHZhciBkaXN0YW5jZVgsIGRpc3RhbmNlWTtcclxuXHRcdFx0aWYoICggTWF0aC5hYnMoIHRvdWNoWCAtIHRoaXMueCApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hYID4gdGhpcy54ICkgKSAmJiAvLyBsZWZ0XHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hYIC0gKCB0aGlzLnggKyB0aGlzLndpZHRoICkgKSA8ICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSB8fCAoIHRvdWNoWCA8IHRoaXMueCArIHRoaXMud2lkdGggKSApICYmIC8vIHJpZ2h0XHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gdGhpcy55ICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFkgPiB0aGlzLnkgKSApICYmIC8vIHRvcFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWSAtICggdGhpcy55ICsgdGhpcy5oZWlnaHQgKSApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hZIDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgKSApIC8vIGJvdHRvbVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZURpcmVjdGlvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgY2FjaGVJZCA9IHRoaXMudHlwZSArICcnICsgdGhpcy5pZCArICcnICsgdGhpcy5hY3RpdmU7XHJcblx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdGlmKCAhIGNhY2hlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSB0aGlzLndpZHRoICsgMiAqIHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodCArIDIgKiB0aGlzLnN0cm9rZTtcclxuXHRcclxuXHRcdFx0XHR2YXIgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSB8fCAwLjk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoICEgdGhpcy5hY3RpdmUgKSAvLyBEaXJlY3Rpb24gY3VycmVudGx5IGJlaW5nIHRvdWNoZWRcclxuXHRcdFx0XHRcdG9wYWNpdHkgKj0gMC41O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0c3dpdGNoKCB0aGlzLmRpcmVjdGlvbiApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2FzZSAndXAnOlxyXG5cdFx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoIDAsIDAsIDAsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7ICAgXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgdGhpcy53aWR0aCwgMCApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAwLCAwLCAwLCAnICsgKCBvcGFjaXR5ICogMC41ICkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyBvcGFjaXR5ICsgJyApJyApOyAgIFxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCB0aGlzLndpZHRoLCAwICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyBvcGFjaXR5ICsgJyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAwLCAwLCAwLCAnICsgKCBvcGFjaXR5ICogMC41ICkgKyAnICknICk7ICBcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdkb3duJzpcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgMCwgdGhpcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTsgICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFx0XHJcblx0XHRcdFx0Y3R4LmZpbGxSZWN0KCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xICknO1xyXG5cdFx0XHRcdGN0eC5zdHJva2VSZWN0KCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXSA9IHN1YkNhbnZhcztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmRyYXdJbWFnZSggY2FjaGVkLCB0aGlzLngsIHRoaXMueSApO1xyXG5cdFx0XHRcdFxyXG5cdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZURpcmVjdGlvbjtcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlQnV0dG9uID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlQnV0dG9uLCBfX3N1cGVyICk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZUJ1dHRvbiggb3B0aW9ucyApIC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IgKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGkgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd4JyApO1xyXG5cdFx0XHRcdGVsc2UgaWYoIGkgPT0gJ3gnIHx8IGkgPT0gJ3JhZGl1cycgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3knICk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVCdXR0b24ucHJvdG90eXBlLnR5cGUgPSAnYnV0dG9uJztcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgaWYgdGhlIHRvdWNoIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoaXMgZGlyZWN0aW9uIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVCdXR0b24ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oIHRvdWNoWCwgdG91Y2hZICkge1xyXG5cdFx0XHRpZiggXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hYIC0gdGhpcy54ICkgPCB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSApICYmXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gdGhpcy55ICkgPCB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSApXHJcblx0XHRcdClcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBjYWNoZUlkID0gdGhpcy50eXBlICsgJycgKyB0aGlzLmlkICsgJycgKyB0aGlzLmFjdGl2ZTtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0aWYoICEgY2FjaGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSBzdWJDYW52YXMuaGVpZ2h0ID0gMiAqICggdGhpcy5yYWRpdXMgKyBjdHgubGluZVdpZHRoICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIDEsIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHR2YXIgdGV4dFNoYWRvd0NvbG9yO1xyXG5cdFx0XHRcdHN3aXRjaCggdGhpcy5iYWNrZ3JvdW5kQ29sb3IgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNhc2UgJ2JsdWUnOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDEyMywgMTgxLCAxOTcsIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyMxMDVhNzgnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjMEE0ODYxJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdncmVlbic6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMjksIDIwMSwgMzYsIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyMxMDc4MTQnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjMDg1QzBCJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdyZWQnOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDE2NSwgMzQsIDM0LCAwLjYpJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjNTIwMTAxJyApO1xyXG5cdFx0XHRcdFx0XHR0ZXh0U2hhZG93Q29sb3IgPSAnIzMzMDAwMCc7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAneWVsbG93JzpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSgyMTksIDIxNywgNTksIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyNFOEUxMEUnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjQkRCNjAwJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGl0ZSc6XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyNTUsMjU1LDI1NSwuMyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjZWVlJyApO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRpZiggdGhpcy5hY3RpdmUgKVx0XHRcdFxyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRleHRTaGFkb3dDb2xvcjtcclxuXHRcdFx0XHRlbHNlXHRcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcclxuXHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSB0ZXh0U2hhZG93Q29sb3I7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0Ly9jdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRjdHguYXJjKCBzdWJDYW52YXMud2lkdGggLyAyLCBzdWJDYW52YXMud2lkdGggLyAyLCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB0aGlzLmxhYmVsIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBUZXh0IFNoYWRvd1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRleHRTaGFkb3dDb2xvcjtcclxuXHRcdFx0XHRcdGN0eC5mb250ID0gJ2JvbGQgJyArICggdGhpcy5mb250U2l6ZSB8fCBzdWJDYW52YXMuaGVpZ2h0ICogMC4zNSApICsgJ3B4IFZlcmRhbmEnO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KCB0aGlzLmxhYmVsLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiArIDIsIHN1YkNhbnZhcy5oZWlnaHQgLyAyICsgMiApO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmZvbnRDb2xvcjtcclxuXHRcdFx0XHRcdGN0eC5mb250ID0gJ2JvbGQgJyArICggdGhpcy5mb250U2l6ZSB8fCBzdWJDYW52YXMuaGVpZ2h0ICogMC4zNSApICsgJ3B4IFZlcmRhbmEnO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cdFx0XHRcdFx0Y3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KCB0aGlzLmxhYmVsLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiwgc3ViQ2FudmFzLmhlaWdodCAvIDIgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHRoaXMueCwgdGhpcy55ICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVCdXR0b247XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0dmFyIFRvdWNoYWJsZUpveXN0aWNrID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlSm95c3RpY2ssIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlSm95c3RpY2soIG9wdGlvbnMgKSAvL3gsIHksIHJhZGl1cywgYmFja2dyb3VuZENvbG9yIClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBvcHRpb25zIClcclxuXHRcdFx0XHR0aGlzW2ldID0gb3B0aW9uc1tpXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5jdXJyZW50WCA9IHRoaXMuY3VycmVudFggfHwgdGhpcy54O1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRZID0gdGhpcy5jdXJyZW50WSB8fCB0aGlzLnk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS50eXBlID0gJ2pveXN0aWNrJztcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgaWYgdGhlIHRvdWNoIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoaXMgZGlyZWN0aW9uIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdGlmKCBcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFggLSB0aGlzLnggKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApICkgJiZcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSB0aGlzLnkgKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIClcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIGRldGFpbHMgZm9yIHRoZSBqb3lzdGljayBtb3ZlIGV2ZW50LCBzdG9yZWQgaGVyZSBzbyB3ZSdyZSBub3QgY29uc3RhbnRseSBjcmVhdGluZyBuZXcgb2JqcyBmb3IgZ2FyYmFnZS4gVGhlIG9iamVjdCBoYXMgcGFyYW1zOlxyXG5cdFx0ICogZHggLSB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGUgY3VycmVudCBqb3lzdGljayBjZW50ZXIgaXMgZnJvbSB0aGUgYmFzZSBjZW50ZXIgaW4geCBkaXJlY3Rpb25cclxuXHRcdCAqIGR5IC0gdGhlIG51bWJlciBvZiBwaXhlbHMgdGhlIGN1cnJlbnQgam95c3RpY2sgY2VudGVyIGlzIGZyb20gdGhlIGJhc2UgY2VudGVyIGluIHkgZGlyZWN0aW9uXHJcblx0XHQgKiBtYXggLSB0aGUgbWF4aW11bSBudW1iZXIgb2YgcGl4ZWxzIGR4IG9yIGR5IGNhbiBiZVxyXG5cdFx0ICogbm9ybWFsaXplZFggLSBhIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxIHJlbGF0aW5nIHRvIGhvdyBmYXIgbGVmdCBvciByaWdodCB0aGUgam95c3RpY2sgaXNcclxuXHRcdCAqIG5vcm1hbGl6ZWRZIC0gYSBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMSByZWxhdGluZyB0byBob3cgZmFyIHVwIG9yIGRvd24gdGhlIGpveXN0aWNrIGlzXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS5tb3ZlRGV0YWlscyA9IHt9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgam95c3RpY2sgaXMgbW92ZWRcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLnRvdWNoTW92ZVdyYXBwZXIgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50WCA9IEdhbWVDb250cm9sbGVyLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YKCBlLmNsaWVudFggKTtcdFxyXG5cdFx0XHR0aGlzLmN1cnJlbnRZID0gR2FtZUNvbnRyb2xsZXIubm9ybWFsaXplVG91Y2hQb3NpdGlvblkoIGUuY2xpZW50WSApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRmlyZSB0aGUgdXNlciBzcGVjaWZpZWQgY2FsbGJhY2tcclxuXHRcdFx0aWYoIHRoaXMudG91Y2hNb3ZlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCB0aGlzLm1vdmVEZXRhaWxzLmR4ICE9IHRoaXMuY3VycmVudFggLSB0aGlzLnggJiYgdGhpcy5tb3ZlRGV0YWlscy5keSAhPSB0aGlzLnkgLSB0aGlzLmN1cnJlbnRZIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLmR4ID0gdGhpcy5jdXJyZW50WCAtIHRoaXMueDsgLy8gcmV2ZXJzZSBzbyByaWdodCBpcyBwb3NpdGl2ZVxyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5keSA9IHRoaXMueSAtIHRoaXMuY3VycmVudFk7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLm1heCA9IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApO1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5ub3JtYWxpemVkWCA9IHRoaXMubW92ZURldGFpbHMuZHggLyB0aGlzLm1vdmVEZXRhaWxzLm1heDtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMubm9ybWFsaXplZFkgPSB0aGlzLm1vdmVEZXRhaWxzLmR5IC8gdGhpcy5tb3ZlRGV0YWlscy5tYXg7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaE1vdmUoIHRoaXMubW92ZURldGFpbHMgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgaW5hY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoICEgdGhpcy5pZCApIC8vIHdhaXQgdW50aWwgaWQgaXMgc2V0XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR2YXIgY2FjaGVJZCA9IHRoaXMudHlwZSArICcnICsgdGhpcy5pZCArICcnICsgdGhpcy5hY3RpdmU7XHJcblx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdGlmKCAhIGNhY2hlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHR0aGlzLnN0cm9rZSA9IHRoaXMuc3Ryb2tlIHx8IDI7XHJcblx0XHRcdFx0c3ViQ2FudmFzLndpZHRoID0gc3ViQ2FudmFzLmhlaWdodCA9IDIgKiAoIHRoaXMucmFkaXVzICsgdGhpcy5zdHJva2UgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5zdHJva2U7XHJcblx0XHRcdFx0aWYoIHRoaXMuYWN0aXZlICkgLy8gRGlyZWN0aW9uIGN1cnJlbnRseSBiZWluZyB0b3VjaGVkXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCAwLCAwLCAxLCAwLCAwLCB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMjAwLDIwMCwyMDAsLjUgKScgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDIwMCwyMDAsMjAwLC45ICknICk7XHJcblx0XHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFNUWUxJTkcgRk9SIEJVVFRPTlNcclxuXHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggMCwgMCwgMSwgMCwgMCwgdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDIwMCwyMDAsMjAwLC4yICknICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAyMDAsMjAwLDIwMCwuNCApJyApO1xyXG5cdFx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoIDAsMCwwLC40ICknO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcdFx0Ly8gQWN0dWFsIGpveXN0aWNrIHBhcnQgdGhhdCBpcyBiZWluZyBtb3ZlZFxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguYXJjKCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0Y3R4LmZpbGwoKTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEcmF3IHRoZSBiYXNlIHRoYXQgc3RheXMgc3RhdGljXHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsU3R5bGUgPSAnIzQ0NCc7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzICogMC43LCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsKCk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5zdHJva2UoKTtcclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgdGhpcy5jdXJyZW50WCAtIHRoaXMucmFkaXVzLCB0aGlzLmN1cnJlbnRZIC0gdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUpveXN0aWNrO1xyXG5cdH0gKSggVG91Y2hhYmxlQXJlYSApO1xyXG5cdFxyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVDaXJjbGUgPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVDaXJjbGUsIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlQ2lyY2xlKCBvcHRpb25zIClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBvcHRpb25zIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCBpID09ICd4JyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneCcgKTtcclxuXHRcdFx0XHRlbHNlIGlmKCBpID09ICd4JyB8fCBpID09ICdyYWRpdXMnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd5JyApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIE5vIHRvdWNoIGZvciB0aGlzIGZlbGxhIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVDaXJjbGUucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oIHRvdWNoWCwgdG91Y2hZICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVDaXJjbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdFx0Ly8gU1RZTElORyBGT1IgQlVUVE9OU1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZmlsbFN0eWxlID0gJ3JnYmEoIDAsIDAsIDAsIDAuNSApJztcclxuXHRcdFx0XHJcblx0XHRcdC8vIEFjdHVhbCBqb3lzdGljayBwYXJ0IHRoYXQgaXMgYmVpbmcgbW92ZWRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGwoKTtcclxuXHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVDaXJjbGU7XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0LyoqXHJcblx0ICogU2hpbSBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxyXG5cdCAqL1xyXG5cdCggZnVuY3Rpb24oKSB7XHJcblx0ICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuXHJcblx0XHR2YXIgbGFzdFRpbWUgPSAwO1xyXG5cdFx0dmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cdFx0Zm9yKCB2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4IClcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdH1cclxuXHQgXHJcblx0XHRpZiAoICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIClcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKCBjYWxsYmFjaywgZWxlbWVudCApIHtcclxuXHRcdFx0XHR2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHR2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KCAwLCAxNiAtICggY3VyclRpbWUgLSBsYXN0VGltZSApICk7XHJcblx0XHRcdFx0dmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCBcclxuXHRcdFx0XHRcdHRpbWVUb0NhbGwgKTtcclxuXHRcdFx0XHRsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuXHRcdFx0XHRyZXR1cm4gaWQ7XHJcblx0XHRcdH07XHJcblx0IFxyXG5cdFx0aWYgKCAhd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIClcclxuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oIGlkICkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCggaWQgKTtcclxuXHRcdFx0fTtcclxuXHR9KCkgKTtcclxufSApKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgPyBtb2R1bGUuZXhwb3J0cyA6IHdpbmRvdykiLCJcInVzZSBzdHJpY3RcIjt2YXIgZ2xvYmFscz17YnVsbGV0czpudWxsLGVuZW1pZXM6bnVsbCxwbGF5ZXI6bnVsbH0sdXBkYXRlPXJlcXVpcmUoXCIuL2dhbWUvdXBkYXRlXCIpLHByZWxvYWQ9cmVxdWlyZShcIi4vZ2FtZS9wcmVsb2FkXCIpLGNyZWF0ZT1yZXF1aXJlKFwiLi9nYW1lL2NyZWF0ZVwiKSxnYW1lPXdpbmRvdy5nYW1lPW5ldyBQaGFzZXIuR2FtZSg4MDAsNjAwLFBoYXNlci5BVVRPLFwiXCIse3ByZWxvYWQ6cHJlbG9hZCxjcmVhdGU6Y3JlYXRlLHVwZGF0ZTp1cGRhdGV9KTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByZXNldEJ1bGxldChlKXtlLmtpbGwoKX1mdW5jdGlvbiBzZXR1cEVuZW15KGUpe2UuYW5jaG9yLng9LjUsZS5hbmNob3IueT0uNSxlLmFuaW1hdGlvbnMuYWRkKFwiZXhwbG9kZVwiKX1mdW5jdGlvbiBzZXR1cEVuZW15Qm9zcyhlKXtlLmFuY2hvci54PS41LGUuYW5jaG9yLnk9LjUsZS5hbmltYXRpb25zLmFkZChcImV4cGxvZGUtc21hbGxlc3RcIil9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtpZihnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKSx0aGlzLnNwYWNlQkc9dGhpcy5hZGQudGlsZVNwcml0ZSgwLDAsODAwLDYwMCxcImJnXCIpLHRoaXMuc3BhY2VCRy5hdXRvU2Nyb2xsKDAsNzUpLGdhbWUuaW5wdXQuZ2FtZXBhZC5zdGFydCgpLFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpe3ZhciBlPXdpbmRvdy5HYW1lQ29udHJvbGxlcj1yZXF1aXJlKFwiZ2FtZS1jb250cm9sbGVyXCIpLkdhbWVDb250cm9sbGVyO2UuaW5pdCh7bGVmdDp7dHlwZTpcImpveXN0aWNrXCIsam95c3RpY2s6e3RvdWNoU3RhcnQ6ZnVuY3Rpb24oKXt9LHRvdWNoTW92ZTpmdW5jdGlvbihlKXtnYW1lLmlucHV0LmpveXN0aWNrTGVmdD1lfSx0b3VjaEVuZDpmdW5jdGlvbigpe2dhbWUuaW5wdXQuam95c3RpY2tMZWZ0PW51bGx9fX0scmlnaHQ6e3R5cGU6XCJub25lXCJ9fSl9d2luZG93LnBsYXllcj1yZXF1aXJlKFwiLi9wbGF5ZXJcIikoZ2FtZSkscGxheWVyLmluaXQoKTt2YXIgdD13aW5kb3cuYnVsbGV0cz10aGlzLmFkZC5ncm91cCgpO3QuZW5hYmxlQm9keT0hMCx0LnBoeXNpY3NCb2R5VHlwZT1QaGFzZXIuUGh5c2ljcy5BUkNBREUsdC5jcmVhdGVNdWx0aXBsZSgxMCxcImJ1bGxldHNcIixcImJ1bGxldC1ncmVlbi5wbmdcIiksdC5zZXRBbGwoXCJhbmNob3IueFwiLC41KSx0LnNldEFsbChcImFuY2hvci55XCIsMSksdC5zZXRBbGwoXCJvdXRPZkJvdW5kc0tpbGxcIiwhMCksdC5zZXRBbGwoXCJjaGVja1dvcmxkQm91bmRzXCIsITApLHdpbmRvdy5leHBsb3Npb25zPWdhbWUuYWRkLmdyb3VwKCksZXhwbG9zaW9ucy5jcmVhdGVNdWx0aXBsZSgzMCxcImV4cGxvZGVcIiksZXhwbG9zaW9ucy5mb3JFYWNoKHNldHVwRW5lbXksdGhpcyksd2luZG93Lm11c2ljPWdhbWUuYWRkLmF1ZGlvKFwic3RhZ2UtMVwiKSx3aW5kb3cuZXhwbG9zaW9uc1NtYWxsZXN0PWdhbWUuYWRkLmdyb3VwKCksZXhwbG9zaW9uc1NtYWxsZXN0LmNyZWF0ZU11bHRpcGxlKDMwLFwiZXhwbG9kZS1zbWFsbGVzdFwiKSxleHBsb3Npb25zU21hbGxlc3QuZm9yRWFjaChzZXR1cEVuZW15Qm9zcyx0aGlzKSx3aW5kb3cuYm9vbT1nYW1lLmFkZC5hdWRpbyhcImJvb21cIiksd2luZG93LmxhemVyPWdhbWUuYWRkLmF1ZGlvKFwibGF6ZXJcIiksd2luZG93LnN0YWdlMT1yZXF1aXJlKFwiLi9zY2VuZXMvc2NlbmUtMVwiKShnYW1lKSxzdGFnZTEuaW5pdCgpfTsiLCJcInVzZSBzdHJpY3RcIjttb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7aWYodC50aW1lLm5vdz5zKXt2YXIgZT1idWxsZXRzLmdldEZpcnN0RXhpc3RzKCExKTtlJiYoZS5yZXNldChpLngsaS55KzE2KSxlLmJvZHkudmVsb2NpdHkueT0tMzAwLHM9dC50aW1lLm5vdysxZTMpfWlmKHQudGltZS5ub3c+bisyMCl7dmFyIG89YnVsbGV0cy5nZXRGaXJzdEV4aXN0cyghMSk7byYmKG8ucmVzZXQoaS54KzI2LGkueSsxNiksby5ib2R5LnZlbG9jaXR5Lnk9LTMwMCxuPXQudGltZS5ub3crMWUzKX19dmFyIGksbyxzPTAsbj0wLHk9MjAwO3JldHVybntpbml0OmZ1bmN0aW9uKCl7aT10LmFkZC5zcHJpdGUoMzg0LDUwMCxcInNoaXBcIiksdC5waHlzaWNzLmVuYWJsZShpLFBoYXNlci5QaHlzaWNzLkFSQ0FERSksbz10LmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKX0sdXBkYXRlOmZ1bmN0aW9uKCl7by51cC5pc0Rvd24/by51cC5zaGlmdEtleXx8aS55PjM1MCYmKGkueS09NCk6by5kb3duLmlzRG93biYmKG8uZG93bi5zaGlmdEtleXx8KGkueSs9NCkpLG8ubGVmdC5pc0Rvd24/aS54LT00Om8ucmlnaHQuaXNEb3duJiYoaS54Kz00KSx0LmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpJiZlKCksdC5pbnB1dC5qb3lzdGlja0xlZnQ/aS5ib2R5LnZlbG9jaXR5LnNldFRvKDIwMCp0LmlucHV0LmpveXN0aWNrTGVmdC5ub3JtYWxpemVkWCx0LmlucHV0LmpveXN0aWNrTGVmdC5ub3JtYWxpemVkWSp5Ki0xKTppLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwwKX19fTsiLCJcInVzZSBzdHJpY3RcIjttb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMubG9hZC5hdGxhcyhcImJ1bGxldHNcIixcImltZy9hc3NldHMvYnVsbGV0cy5wbmdcIixcInNoZWV0cy9idWxsZXRzXCIpLHRoaXMubG9hZC5pbWFnZShcImJsdWVfYnVsbGV0XCIsXCJpbWcvYXNzZXRzL2JsdWUtYnVsbGV0LnBuZ1wiKSx0aGlzLmxvYWQuaW1hZ2UoXCJiZ1wiLFwiaW1nL2JhY2tncm91bmRzL2JnLnBuZ1wiKSx0aGlzLmxvYWQuYXRsYXMoXCJhdGxhc1wiLFwiaW1nL2VuZW15LWZpZ2h0ZXJzL2VuZW15LWZpZ2h0ZXJzLnBuZ1wiLFwic2hlZXRzL2VuZW15LWZpZ2h0ZXJzXCIpLHRoaXMubG9hZC5hdGxhcyhcImJvc3Nlc1wiLFwiaW1nL2VuZW15LWJvc3Nlcy9lbmVteS1ib3NzZXMucG5nXCIsXCJzaGVldHMvYm9zc2VzXCIpLHRoaXMubG9hZC5pbWFnZShcInNoaXBcIixcImltZy9zcGFjZV9zaGlwX2Jhc2UucG5nXCIpLHRoaXMubG9hZC5zcHJpdGVzaGVldChcImV4cGxvZGVcIixcImltZy9hc3NldHMvZXhwbG9kZS5wbmdcIiwxMjgsMTI4KSx0aGlzLmxvYWQuc3ByaXRlc2hlZXQoXCJleHBsb2RlLXNtYWxsXCIsXCJpbWcvYXNzZXRzL2V4cGxvZGUtc21hbGwucG5nXCIsMzIsMzIpLHRoaXMubG9hZC5zcHJpdGVzaGVldChcImV4cGxvZGUtc21hbGxlc3RcIixcImltZy9hc3NldHMvZXhwbG9kZS1zbWFsbGVzdC5wbmdcIiwxNiwxNiksdGhpcy5sb2FkLmF1ZGlvKFwiYm9vbVwiLFtcImF1ZGlvL2VmZmVjdHMvZXhwbG9kZS53YXZcIl0pLHRoaXMubG9hZC5hdWRpbyhcImxhemVyXCIsW1wiYXVkaW8vZWZmZWN0cy9sYXplci53YXZcIl0pLHRoaXMubG9hZC5hdWRpbyhcInN0YWdlLTFcIixbXCJhdWRpby9iYWNrZ3JvdW5kL3N0YWdlLTEubXAzXCIsXCJhdWRpby9iYWNrZ3JvdW5kL3N0YWdlLTEub2dnXCJdKX07IiwiXCJ1c2Ugc3RyaWN0XCI7bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHMsdCxvPWZ1bmN0aW9uKCl7dmFyIHM9ZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsNjAwKSx0PWUucm5kLmludGVnZXJJblJhbmdlKDAsMTApLG89YWxpZW5zLmNyZWF0ZShzLHQsXCJhdGxhc1wiLFwiYmFkLWd1eTEucG5nXCIpO28uYW5jaG9yLnNldFRvKC41LC41KSxvLmJvZHkubW92ZXM9ITAsby5ib2R5LnZlbG9jaXR5LnNldFRvKDAsMTAwKX0sbj1mdW5jdGlvbihlLHMpe2Uua2lsbCgpLHMua2lsbCgpO3ZhciB0PShzLmJvZHkueCxzLmJvZHkueSxleHBsb3Npb25zLmdldEZpcnN0RXhpc3RzKCExKSk7dC5yZXNldChzLmJvZHkueCxzLmJvZHkueSksdC5wbGF5KFwiZXhwbG9kZVwiLDMwLCExLCEwKX0saT1mdW5jdGlvbihlLHMpe3MuYm9keS54LHMuYm9keS55O3MuaGl0Q291bnQ9cy5oaXRDb3VudC0xO3ZhciB0PWV4cGxvc2lvbnNTbWFsbGVzdC5nZXRGaXJzdEV4aXN0cyghMSk7aWYodC5yZXNldChlLmJvZHkueCxlLmJvZHkueSksZS5raWxsKCksdC5wbGF5KFwiZXhwbG9kZS1zbWFsbGVzdFwiLDYwLCExLCEwKSxzLmhpdENvdW50PD0wKXt2YXIgbz1leHBsb3Npb25zLmdldEZpcnN0RXhpc3RzKCExKTtvLnJlc2V0KHMuYm9keS54LHMuYm9keS55KSxvLnBsYXkoXCJleHBsb2RlXCIsMzAsITEsITApLHMua2lsbCgpfX0sYT1mdW5jdGlvbigpe3ZhciBzPWUucm5kLmludGVnZXJJblJhbmdlKDQwLDYwMCksdD1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLDEwKTtyKHMtMzIsdCkscihzKzMyLHQpLHIocyx0KzMyKX0scj1mdW5jdGlvbih0LG8pe3ZhciBuPXMuY3JlYXRlKHQsbyxcImF0bGFzXCIsXCJyYXB0b3ItMS5wbmdcIik7bi5hbmNob3Iuc2V0VG8oLjUsLjUpLG4uYm9keS5tb3Zlcz0hMCxuLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwxNTApLGUudGltZS5ldmVudHMuYWRkKDEuMjUqUGhhc2VyLlRpbWVyLlNFQ09ORCxmdW5jdGlvbigpe24uYm9keS52ZWxvY2l0eS5zZXRUbygzNTAsMzUwKSxlLnRpbWUuZXZlbnRzLmFkZCguNjUqUGhhc2VyLlRpbWVyLlNFQ09ORCxmdW5jdGlvbigpe24uYm9keS52ZWxvY2l0eS5zZXRUbygtMzUwLDM1MCl9LG4pfSxuKX0sbD1mdW5jdGlvbigpe3ZhciBzPWUucm5kLmludGVnZXJJblJhbmdlKDQwLDYwMCksbz1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLDEwKSxuPXQuY3JlYXRlKHMsbyxcImJvc3Nlc1wiLFwiYm9zcy0xLnBuZ1wiKTtuLmFuY2hvci5zZXRUbyguNSwuNSksbi5ib2R5Lm1vdmVzPSEwLG4uYm9keS52ZWxvY2l0eS5zZXRUbygwLDcwKSxuLmhpdENvdW50PTV9O3JldHVybntpbml0OmZ1bmN0aW9uKCl7d2luZG93LmFsaWVucz1lLmFkZC5ncm91cCgpLGFsaWVucy5lbmFibGVCb2R5PSEwLGFsaWVucy5waHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFLHM9ZS5hZGQuZ3JvdXAoKSxzLmVuYWJsZUJvZHk9ITAscy5waHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFLHQ9ZS5hZGQuZ3JvdXAoKSx0LmVuYWJsZUJvZHk9ITAsdC5waHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFLGUudGltZS5ldmVudHMucmVwZWF0KDIqUGhhc2VyLlRpbWVyLlNFQ09ORCwxMDUsbyx0aGlzKSxlLnRpbWUuZXZlbnRzLnJlcGVhdCg1KlBoYXNlci5UaW1lci5TRUNPTkQsMjUsYSx0aGlzKSxlLnRpbWUuZXZlbnRzLnJlcGVhdCgxMipQaGFzZXIuVGltZXIuU0VDT05ELDEwLGwsdGhpcyl9LHVwZGF0ZTpmdW5jdGlvbigpe2UucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChidWxsZXRzLGFsaWVucyxuLG51bGwsdGhpcyksZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMscyxuLG51bGwsdGhpcyksZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsdCxpLG51bGwsdGhpcyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt9fX07IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcmVzZXRCdWxsZXQoZSl7ZS5raWxsKCl9dmFyIGJ1bGxldFRpbWU9MCxyaWdodF9idWxsZXRUaW1lPTAsbGVmdF9idWxsZXRUaW1lPTA7bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXt3aW5kb3cuYnVsbGV0cyx3aW5kb3cuY3Vyc29ycztwbGF5ZXIudXBkYXRlKCksc3RhZ2UxLnVwZGF0ZSgpfTsiXX0=
