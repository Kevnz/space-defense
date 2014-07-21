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
  pad1 = game.input.gamepad.pad1;
  var GameController = window.GameController = require('game-controller').GameController;
  console.log(GameController);
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
        lazer.play();
      }
    }
    if (game.time.now > left_bulletTime + 20) {
      var left_bullet = bullets.getFirstExists(false);
      if (left_bullet) {
        left_bullet.reset(player.x + 26, player.y + 16);
        left_bullet.body.velocity.y = -300;
        left_bulletTime = game.time.now + 1000;
        lazer.play();
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
  this.load.image('ship', 'img/space_ship_base.png');
  this.load.spritesheet('explode', 'img/assets/explode.png', 128, 128);
  this.load.audio('boom', ['audio/effects/explode.wav']);
  this.load.audio('lazer', ['audio/effects/lazer.wav']);
  this.load.audio('stage-1', ['audio/background/stage-1.mp3', 'audio/background/stage-1.ogg']);
};


},{}],6:[function(require,module,exports){
"use strict";
module.exports = function(game) {
  var raptors;
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
    window.boom.play();
    var x = alien.body.x,
        y = alien.body.y;
    var explosion = explosions.getFirstExists(false);
    explosion.reset(alien.body.x, alien.body.y);
    explosion.play('explode', 30, false, true);
  };
  var spawnRaptor = function() {
    var x = game.rnd.integerInRange(40, 600),
        y = game.rnd.integerInRange(0, 10);
    var _alien = raptors.create(x, y, 'atlas', 'raptor-1.png');
    _alien.anchor.setTo(0.5, 0.5);
    _alien.body.moves = true;
    _alien.body.velocity.setTo(0, 150);
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
      music.play('', 0, 1, true);
      game.time.events.repeat(Phaser.Timer.SECOND * 2, 105, spawn, this);
      game.time.events.repeat(Phaser.Timer.SECOND * 8, 20, spawnRaptor, this);
    },
    update: function() {
      game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
      game.physics.arcade.overlap(bullets, raptors, collisionHandler, null, this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXNvbVxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvSXNvbS9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL25vZGVfbW9kdWxlcy9nYW1lLWNvbnRyb2xsZXIvZ2FtZWNvbnRyb2xsZXIuanMiLCJDOlxcVXNlcnNcXElzb21cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lLmpzIiwiQzpcXFVzZXJzXFxJc29tXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxcY3JlYXRlLmpzIiwiQzpcXFVzZXJzXFxJc29tXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxccGxheWVyLmpzIiwiQzpcXFVzZXJzXFxJc29tXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxccHJlbG9hZC5qcyIsIkM6XFxVc2Vyc1xcSXNvbVxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHNjZW5lc1xcc2NlbmUtMS5qcyIsIkM6XFxVc2Vyc1xcSXNvbVxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHVwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUUsS0FBSSxDQUFDLENBQUM7QUFDM0UsQ0FBQSxTQUFJLFFBQVEsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFFLFFBQU8sQ0FBRSxpQkFBZ0IsQ0FBRSxLQUFJLENBQUUsS0FBSSxDQUFDLENBQUM7S0FDNUU7QUFDRCxDQUFBLFVBQU8sQ0FBRSxVQUFVLENBQUUsR0FFcEI7Q0FBQSxFQUNELENBQUE7Q0FDRCxDQUFBO0NBQUE7OztBQ3hERDtBQUFJLENBQUosRUFBSSxDQUFBLFVBQVUsRUFBRyxFQUFDLENBQUM7Q0FDbEIsT0FBUyxZQUFXLENBQUUsTUFBTSxDQUFFO0FBRTNCLENBQUEsT0FBTSxLQUFLLEVBQUUsQ0FBQztDQUVqQjtBQUFBLENBQUEsQUFBQztBQUdNLENBQUosRUFBSSxDQUFBLGdCQUFnQixFQUFHLEVBQUM7QUFBRSxDQUFBLGtCQUFlLEVBQUcsRUFBQyxDQUFDO0FBRWxELENBQUEsS0FBTSxRQUFRLEVBQUksVUFBVSxDQUFFO0FBQ3RCLENBQUosSUFBSSxDQUFBLE9BQU8sRUFBRyxDQUFBLE1BQU0sUUFBUSxDQUFDO0FBR3pCLENBQUosSUFBSSxDQUFBLE9BQU8sRUFBRyxDQUFBLE1BQU0sUUFBUSxDQUFDO0FBSTdCLENBQUEsT0FBTSxPQUFPLEVBQUUsQ0FBQztBQUVaLENBQUEsT0FBTSxPQUFPLEVBQUUsQ0FBQztDQUV2QixDQUFDO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIEhlbHBlcnMgXHJcbiAqL1xyXG4oIGZ1bmN0aW9uKGV4cG9ydHMpIHtcclxuXHR2YXIgX19zbGljZSA9IFtdLnNsaWNlO1xyXG5cdHZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcclxuXHR2YXIgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XHJcblx0LyogJC5leHRlbmQgZnVuY3Rpb25hbGl0eSAqL1xyXG5cdGZ1bmN0aW9uIGV4dGVuZCggdGFyZ2V0LCBzcmMgKVxyXG5cdHtcclxuXHRcdHZhciBvcHRpb25zLCBuYW1lLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXHJcblx0XHRcdGkgPSAxLFxyXG5cdFx0XHRsZW5ndGggPSAyLFxyXG5cdFx0XHRkZWVwID0gdHJ1ZTtcclxuXHRcclxuXHRcdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cclxuXHRcdGlmKCB0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIiApXHJcblx0XHR7XHJcblx0XHRcdGRlZXAgPSB0YXJnZXQ7XHJcblx0XHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcclxuXHRcdFx0aSA9IDI7XHJcblx0XHR9XHJcblx0XHJcblx0XHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcoIHBvc3NpYmxlIGluIGRlZXAgY29weSApXHJcblx0XHRpZiggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJyApXHJcblx0XHR7XHJcblx0XHRcdHRhcmdldCA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xyXG5cdFx0aWYoIG9wdGlvbnMgPSBzcmMgKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XHJcblx0XHRcdGZvciggbmFtZSBpbiBvcHRpb25zIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcclxuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcclxuXHRcclxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXHJcblx0XHRcdFx0aWYoIHRhcmdldCA9PT0gY29weSApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xyXG5cdFx0XHRcdGlmKCBkZWVwICYmKCB0eXBlb2YgY29weSA9PSAnb2JqZWN0JyB8fCggY29weUlzQXJyYXkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoICBjb3B5ICApID09PSAnW29iamVjdCBBcnJheV0nICkgKSApIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmKCBjb3B5SXNBcnJheSApIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoICBzcmMgICkgPT09ICdbb2JqZWN0IEFycmF5XScgPyBzcmMgOiBbXTtcclxuXHRcclxuXHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0XHRlbHNlIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiB0eXBlb2Ygc3JjID09ICdvYmplY3QnID8gc3JjIDoge307XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cclxuXHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZCggY2xvbmUsIGNvcHkgKTtcclxuXHRcclxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcclxuXHRcdFx0XHR9IFxyXG5cdFx0XHRcdGVsc2UgaWYoIHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJyApIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxuXHRcclxuXHQvLyBNYWtlIGF2YWlsYWJsZSB0byB3aW5kb3dcclxuXHRleHBvcnRzLkdhbWVDb250cm9sbGVyID0ge1xyXG5cdFx0XHJcblx0XHQvLyBEZWZhdWx0IG9wdGlvbnMsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdGxlZnQ6IHsgXHJcblx0XHRcdFx0dHlwZTogJ2RwYWQnLCBcclxuXHRcdFx0XHRwb3NpdGlvbjogeyBsZWZ0OiAnMTMlJywgYm90dG9tOiAnMjIlJyB9LFxyXG5cdFx0XHRcdGRwYWQ6IHtcclxuXHRcdFx0XHRcdHVwOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM4ICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOCApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzggKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxlZnQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzcgKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM3ICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzNyApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZG93bjoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyLFxyXG5cdFx0XHRcdFx0XHR0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCA0MCApO1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgNDAgKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDQwICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRyaWdodDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE1JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzclJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyLFxyXG5cdFx0XHRcdFx0XHR0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzOSApO1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzkgKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM5ICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGpveXN0aWNrOiB7XHJcblx0XHRcdFx0XHRyYWRpdXM6IDYwLFxyXG5cdFx0XHRcdFx0dG91Y2hNb3ZlOiBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coIGUgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHJpZ2h0OiB7IFxyXG5cdFx0XHRcdHR5cGU6ICdidXR0b25zJywgXHJcblx0XHRcdFx0cG9zaXRpb246IHsgcmlnaHQ6ICcxNyUnLCBib3R0b206ICcyOCUnIH0sIFxyXG5cdFx0XHRcdGJ1dHRvbnM6IFtcclxuXHRcdFx0XHRcdHsgb2Zmc2V0OiB7IHg6ICctMTMlJywgeTogMCB9LCBsYWJlbDogJ1gnLCByYWRpdXM6ICc3JScsIHN0cm9rZTogMiwgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsIGZvbnRDb2xvcjogJyNmZmYnLCB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gQmx1ZSBpcyBjdXJyZW50bHkgbWFwcGVkIHRvIHVwIGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzOCApO1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM4ICk7XHJcblx0XHRcdFx0XHR9LCB0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM4ICk7XHRcclxuXHRcdFx0XHRcdH0gfSxcclxuXHRcdFx0XHRcdHsgb2Zmc2V0OiB7IHg6IDAsIHk6ICctMTElJyB9LCBsYWJlbDogJ1knLCByYWRpdXM6ICc3JScsIHN0cm9rZTogMiwgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JywgZm9udENvbG9yOiAnI2ZmZicgfSxcclxuXHRcdFx0XHRcdHsgb2Zmc2V0OiB7IHg6ICcxMyUnLCB5OiAwIH0sIGxhYmVsOiAnQicsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCBmb250Q29sb3I6ICcjZmZmJywgdG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdC8vIFJlZCBpcyBjdXJyZW50bHkgbWFwcGVkIHRvIGRvd24gYnV0dG9uLCBhbmQgc3BhY2UgYnV0dG9uXHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDMyICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzIgKTtcclxuXHRcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgNDAgKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCA0MCApO1xyXG5cdFx0XHRcdFx0fSwgdG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzMiApO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCA0MCApO1xyXG5cdFx0XHRcdFx0fSB9LFxyXG5cdFx0XHRcdFx0eyBvZmZzZXQ6IHsgeDogMCwgeTogJzExJScgfSwgbGFiZWw6ICdBJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJywgZm9udENvbG9yOiAnI2ZmZicsIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBHcmVlbiBpcyBjdXJyZW50bHkgbWFwcGVkIHRvIHVwIGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzOCApO1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM4ICk7XHJcblx0XHRcdFx0XHR9LCB0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM4ICk7XHRcclxuXHRcdFx0XHRcdH0gIH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGRwYWQ6IHtcclxuXHRcdFx0XHRcdHVwOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsZWZ0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkb3duOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRyaWdodDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE1JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzclJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRqb3lzdGljazoge1xyXG5cdFx0XHRcdFx0cmFkaXVzOiA2MCxcclxuXHRcdFx0XHRcdHRvdWNoTW92ZTogZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCBlICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaFJhZGl1czogNDVcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIEFyZWFzIChvYmplY3RzKSBvbiB0aGUgc2NyZWVuIHRoYXQgY2FuIGJlIHRvdWNoZWRcclxuXHRcdHRvdWNoYWJsZUFyZWFzOiBbXSxcclxuXHRcdFxyXG5cdFx0Ly8gTXVsdGktdG91Y2hcclxuXHRcdHRvdWNoZXM6IFtdLFxyXG5cdFx0XHJcblx0XHQvLyBIZWF2eSBzcHJpdGVzICh3aXRoIGdyYWRpZW50cykgYXJlIGNhY2hlZCBhcyBhIGNhbnZhcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXHJcblx0XHRjYWNoZWRTcHJpdGVzOiB7fSxcclxuXHRcdFxyXG5cdFx0cGF1c2VkOiBmYWxzZSxcclxuXHRcdFxyXG5cdFx0aW5pdDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGVyZSdzIG5vIHRvdWNoIHN1cHBvcnRcclxuXHRcdFx0aWYoICEgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHJcblx0XHJcblx0XHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyBhbmQgc3BlY2lmaWVkIG9wdGlvbnNcclxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0XHRcdGV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRpb25zICk7XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIEdyYWIgdGhlIGNhbnZhcyBpZiBvbmUgd2Fzbid0IHBhc3NlZFxyXG5cdFx0XHR2YXIgZWxlO1xyXG5cdFx0XHRpZiggIXRoaXMub3B0aW9ucy5jYW52YXMgfHwgISggZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIHRoaXMub3B0aW9ucy5jYW52YXMgKSApIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2NhbnZhcycgKVswXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKCBlbGUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmNhbnZhcyA9IGVsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5vcHRpb25zLmN0eCA9IHRoaXMub3B0aW9ucy5jYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQ3JlYXRlIGEgY2FudmFzIHRoYXQgZ29lcyBkaXJlY3RseSBvbiB0b3Agb2YgdGhlIGdhbWUgY2FudmFzXHJcblx0XHRcdHRoaXMuY3JlYXRlT3ZlcmxheUNhbnZhcygpO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDcmVhdGVzIHRoZSBjYW52YXMgdGhhdCBzaXRzIG9uIHRvcCBvZiB0aGUgZ2FtZSdzIGNhbnZhcyBhbmQgaG9sZHMgZ2FtZSBjb250cm9scyBcclxuXHRcdCAqL1xyXG5cdFx0Y3JlYXRlT3ZlcmxheUNhbnZhczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFNjYWxlIHRvIHNhbWUgc2l6ZSBhcyBvcmlnaW5hbCBjYW52YXNcclxuXHRcdFx0dGhpcy5yZXNpemUoIHRydWUgKTtcclxuXHRcdFx0XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYm9keScgKVswXS5hcHBlbmRDaGlsZCggdGhpcy5jYW52YXMgKTtcclxuXHRcdFx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIFdhaXQgZm9yIGFueSBvdGhlciBldmVudHMgdG8gZmluaXNoXHJcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7IEdhbWVDb250cm9sbGVyLnJlc2l6ZS5jYWxsKCBfdGhpcyApOyB9LCAxICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBTZXQgdGhlIHRvdWNoIGV2ZW50cyBmb3IgdGhpcyBuZXcgY2FudmFzXHJcblx0XHRcdHRoaXMuc2V0VG91Y2hFdmVudHMoKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIExvYWQgaW4gdGhlIGluaXRpYWwgVUkgZWxlbWVudHNcclxuXHRcdFx0dGhpcy5sb2FkU2lkZSggJ2xlZnQnICk7XHJcblx0XHRcdHRoaXMubG9hZFNpZGUoICdyaWdodCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFN0YXJ0cyB1cCB0aGUgcmVuZGVyaW5nIC8gZHJhd2luZ1xyXG5cdFx0XHR0aGlzLnJlbmRlcigpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoICEgdGhpcy50b3VjaGVzIHx8IHRoaXMudG91Y2hlcy5sZW5ndGggPT0gMCApXHJcblx0XHRcdFx0dGhpcy5wYXVzZWQgPSB0cnVlOyAvLyBwYXVzZSB1bnRpbCBhIHRvdWNoIGV2ZW50XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRwaXhlbFJhdGlvOiAxLFxyXG5cdFx0cmVzaXplOiBmdW5jdGlvbiggZmlyc3RUaW1lICkge1xyXG5cdFx0XHQvLyBTY2FsZSB0byBzYW1lIHNpemUgYXMgb3JpZ2luYWwgY2FudmFzXHJcblx0XHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5vcHRpb25zLmNhbnZhcy53aWR0aDtcclxuXHRcdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5oZWlnaHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBHZXQgaW4gb24gdGhpcyByZXRpbmEgYWN0aW9uXHJcblx0XHRcdGlmKCB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLndpZHRoICYmIHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUuaGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUuaGVpZ2h0LmluZGV4T2YoICdweCcgKSAhPT0gLTEgKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS53aWR0aDtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLmhlaWdodDtcclxuXHRcdFx0XHR0aGlzLnBpeGVsUmF0aW8gPSB0aGlzLmNhbnZhcy53aWR0aCAvIHBhcnNlSW50KCB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0XHRcdHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLm9wdGlvbnMuY2FudmFzLm9mZnNldExlZnQgKyAncHgnO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSB0aGlzLm9wdGlvbnMuY2FudmFzLm9mZnNldFRvcCArICdweCc7XHJcblx0XHRcdHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSggJ3N0eWxlJywgdGhpcy5jYW52YXMuZ2V0QXR0cmlidXRlKCAnc3R5bGUnICkgKycgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTsnICk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiggIWZpcnN0VGltZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBSZW1vdmUgYWxsIGN1cnJlbnQgYnV0dG9uc1xyXG5cdFx0XHRcdHRoaXMudG91Y2hhYmxlQXJlYXMgPSBbXTtcclxuXHRcdFx0XHQvLyBDbGVhciBvdXQgdGhlIGNhY2hlZCBzcHJpdGVzXHJcblx0XHRcdFx0dGhpcy5jYWNoZWRTcHJpdGVzID0gW107XHJcblx0XHRcdFx0Ly8gUmVsb2FkIGluIHRoZSBpbml0aWFsIFVJIGVsZW1lbnRzXHJcblx0XHRcdFx0dGhpcy5yZWxvYWRTaWRlKCAnbGVmdCcgKTtcclxuXHRcdFx0XHR0aGlzLnJlbG9hZFNpZGUoICdyaWdodCcgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBzY2FsZWQgcGl4ZWxzLiBHaXZlbiB0aGUgdmFsdWUgcGFzc2VkXHJcblx0XHQgKiBAcGFyYW0ge2ludC9zdHJpbmd9IHZhbHVlIC0gZWl0aGVyIGFuIGludGVnZXIgZm9yICMgb2YgcGl4ZWxzLCBvciAneCUnIGZvciByZWxhdGl2ZVxyXG5cdFx0ICogQHBhcmFtIHtjaGFyfSBheGlzIC0geCwgeVxyXG5cdFx0ICovXHJcblx0XHRnZXRQaXhlbHM6IGZ1bmN0aW9uKCB2YWx1ZSwgYXhpcyApXHJcblx0XHR7XHJcblx0XHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRyZXR1cm4gMFxyXG5cdFx0XHRlbHNlIGlmKCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIClcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdGVsc2UgLy8gYSBwZXJjZW50YWdlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggYXhpcyA9PSAneCcgKVxyXG5cdFx0XHRcdFx0cmV0dXJuICggcGFyc2VJbnQoIHZhbHVlICkgLyAxMDAgKSAqIHRoaXMuY2FudmFzLndpZHRoO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiAoIHBhcnNlSW50KCB2YWx1ZSApIC8gMTAwICkgKiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogU2ltdWxhdGVzIGEga2V5IHByZXNzXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gJ2Rvd24nLCAndXAnXHJcblx0XHQgKiBAcGFyYW0ge2NoYXJ9IGNoYXJhY3RlclxyXG5cdFx0ICovXHJcblx0XHRzaW11bGF0ZUtleUV2ZW50OiBmdW5jdGlvbiggZXZlbnROYW1lLCBrZXlDb2RlICkge1xyXG5cdFx0XHRpZiggdHlwZW9mIHdpbmRvdy5vbmtleWRvd24gPT09ICd1bmRlZmluZWQnICkgLy8gTm8ga2V5Ym9hcmQsIGNhbid0IHNpbXVsYXRlLi4uXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQvKiBJZiB0aGV5IGhhdmUgalF1ZXJ5LCB1c2UgaXQgYmVjYXVzZSBpdCB3b3JrcyBiZXR0ZXIgZm9yIG1vYmlsZSBzYWZhcmkgKi9cclxuXHRcdFx0aWYoIGpRdWVyeSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgcHJlc3MgPSBqUXVlcnkuRXZlbnQoICdrZXknICsgZXZlbnROYW1lICk7XHJcblx0XHRcdFx0cHJlc3MuY3RybEtleSA9IGZhbHNlO1xyXG5cdFx0XHRcdHByZXNzLndoaWNoID0ga2V5Q29kZTtcclxuXHRcdFx0XHQkKCBkb2N1bWVudCApLnRyaWdnZXIoIHByZXNzICk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdHZhciBvRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0tleWJvYXJkRXZlbnQnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBDaHJvbWl1bSBIYWNrXHJcblx0XHRcdGlmKCBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgIT09IC0xIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb0V2ZW50LCAna2V5Q29kZScsIHtcclxuXHRcdFx0XHRcdGdldCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5rZXlDb2RlVmFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcdCBcclxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG9FdmVudCwgJ3doaWNoJywge1xyXG5cdFx0XHRcdFx0Z2V0IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmtleUNvZGVWYWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGlmKCBvRXZlbnQuaW5pdEtleWJvYXJkRXZlbnQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b0V2ZW50LmluaXRLZXlib2FyZEV2ZW50KCAna2V5JyArIGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBrZXlDb2RlLCBrZXlDb2RlICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b0V2ZW50LmluaXRLZXlFdmVudCggJ2tleScgKyBldmVudE5hbWUsIHRydWUsIHRydWUsIGRvY3VtZW50LmRlZmF1bHRWaWV3LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwga2V5Q29kZSwga2V5Q29kZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0b0V2ZW50LmtleUNvZGVWYWwgPSBrZXlDb2RlO1xyXG5cdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzZXRUb3VjaEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHZhciB0b3VjaFN0YXJ0ID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0aWYoIF90aGlzLnBhdXNlZCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMucGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFxyXG5cdFx0XHRcdC8vIE1pY3Jvc29mdCBhbHdheXMgaGFzIHRvIGhhdmUgdGhlaXIgb3duIHN0dWZmLi4uXHJcblx0XHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiBlLmNsaWVudFggJiYgZS5wb2ludGVyVHlwZSA9PSBlLk1TUE9JTlRFUl9UWVBFX1RPVUNIIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzWyBlLnBvaW50ZXJJZCBdID0geyBjbGllbnRYOiBlLmNsaWVudFgsIGNsaWVudFk6IGUuY2xpZW50WSB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlcyA9IGUudG91Y2hlcyB8fCBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHJcblx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydCwgZmFsc2UgKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciB0b3VjaEVuZCA9IGZ1bmN0aW9uKCBlICkge1x0XHRcdFxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiBlLnBvaW50ZXJUeXBlID09IGUuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRlbGV0ZSBfdGhpcy50b3VjaGVzWyBlLnBvaW50ZXJJZCBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzID0gZS50b3VjaGVzIHx8IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiggIWUudG91Y2hlcyB8fCBlLnRvdWNoZXMubGVuZ3RoID09IDAgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIERyYXcgb25jZSBtb3JlIHRvIHJlbW92ZSB0aGUgdG91Y2ggYXJlYVxyXG5cdFx0XHRcdFx0X3RoaXMucmVuZGVyKCk7XHJcblx0XHRcdFx0XHRfdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hFbmQgKTtcclxuXHRcclxuXHRcdFx0dmFyIHRvdWNoTW92ZSA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmIGUuY2xpZW50WCAmJiBlLnBvaW50ZXJUeXBlID09IGUuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXNbIGUucG9pbnRlcklkIF0gPSB7IGNsaWVudFg6IGUuY2xpZW50WCwgY2xpZW50WTogZS5jbGllbnRZIH07XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXMgPSBlLnRvdWNoZXMgfHwgW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlICk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJEb3duJywgdG91Y2hTdGFydCApO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJVcCcsIHRvdWNoRW5kICk7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlck1vdmUnLCB0b3VjaE1vdmUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGRzIHRoZSBhcmVhIHRvIGEgbGlzdCBvZiB0b3VjaGFibGUgYXJlYXMsIGRyYXdzXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHByb3BlcnRpZXM6IHgsIHksIHdpZHRoLCBoZWlnaHQsIHRvdWNoU3RhcnQsIHRvdWNoRW5kLCB0b3VjaE1vdmVcclxuXHRcdCAqL1xyXG5cdFx0YWRkVG91Y2hhYmxlRGlyZWN0aW9uOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBkaXJlY3Rpb24gPSBuZXcgVG91Y2hhYmxlRGlyZWN0aW9uKCBvcHRpb25zICk7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXJlY3Rpb24uaWQgPSB0aGlzLnRvdWNoYWJsZUFyZWFzLnB1c2goIGRpcmVjdGlvbiApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGRzIHRoZSBjaXJjdWxhciBhcmVhIHRvIGEgbGlzdCBvZiB0b3VjaGFibGUgYXJlYXMsIGRyYXdzXHRcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHdpdGggcHJvcGVydGllczogeCwgeSwgd2lkdGgsIGhlaWdodCwgdG91Y2hTdGFydCwgdG91Y2hFbmQsIHRvdWNoTW92ZVxyXG5cdFx0ICovXHJcblx0XHRhZGRKb3lzdGljazogZnVuY3Rpb24oIG9wdGlvbnMgKSB7IC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IsIHRvdWNoU3RhcnQsIHRvdWNoRW5kICkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGpveXN0aWNrID0gbmV3IFRvdWNoYWJsZUpveXN0aWNrKCBvcHRpb25zICk7XHJcblx0XHRcdFxyXG5cdFx0XHRqb3lzdGljay5pZCA9IHRoaXMudG91Y2hhYmxlQXJlYXMucHVzaCggam95c3RpY2sgKTtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEFkZHMgdGhlIGNpcmN1bGFyIGFyZWEgdG8gYSBsaXN0IG9mIHRvdWNoYWJsZSBhcmVhcywgZHJhd3NcdCBcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHdpdGggcHJvcGVydGllczogeCwgeSwgd2lkdGgsIGhlaWdodCwgdG91Y2hTdGFydCwgdG91Y2hFbmQsIHRvdWNoTW92ZVxyXG5cdFx0ICovXHJcblx0XHRhZGRCdXR0b246IGZ1bmN0aW9uKCBvcHRpb25zICkgeyAvL3gsIHksIHJhZGl1cywgYmFja2dyb3VuZENvbG9yLCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCApIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBidXR0b24gPSBuZXcgVG91Y2hhYmxlQnV0dG9uKCBvcHRpb25zICk7XHJcblx0XHRcdFxyXG5cdFx0XHRidXR0b24uaWQgPSB0aGlzLnRvdWNoYWJsZUFyZWFzLnB1c2goIGJ1dHRvbiApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0YWRkVG91Y2hhYmxlQXJlYTogZnVuY3Rpb24oIGNoZWNrLCBjYWxsYmFjayApIHtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxvYWRCdXR0b25zOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0dmFyIGJ1dHRvbnMgPSB0aGlzLm9wdGlvbnNbIHNpZGUgXS5idXR0b25zO1xyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRmb3IoIHZhciBpID0gMCwgaiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgajsgaSsrIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBwb3NYID0gdGhpcy5nZXRQb3NpdGlvblgoIHNpZGUgKTtcclxuXHRcdFx0XHR2YXIgcG9zWSA9IHRoaXMuZ2V0UG9zaXRpb25ZKCBzaWRlICk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0YnV0dG9uc1tpXS54ID0gcG9zWCArIHRoaXMuZ2V0UGl4ZWxzKCBidXR0b25zW2ldLm9mZnNldC54LCAneScgKTtcclxuXHRcdFx0XHRidXR0b25zW2ldLnkgPSBwb3NZICsgdGhpcy5nZXRQaXhlbHMoIGJ1dHRvbnNbaV0ub2Zmc2V0LnksICd5JyApO1xyXG5cdFxyXG5cdFx0XHRcdHRoaXMuYWRkQnV0dG9uKCBidXR0b25zW2ldICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxvYWREUGFkOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0dmFyIGRwYWQgPSB0aGlzLm9wdGlvbnNbIHNpZGUgXS5kcGFkIHx8IHt9O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQ2VudGVyZWQgdmFsdWUgaXMgYXQgdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb25cclxuXHRcdFx0XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcG9zWCA9IHRoaXMuZ2V0UG9zaXRpb25YKCBzaWRlICk7XHJcblx0XHRcdHZhciBwb3NZID0gdGhpcy5nZXRQb3NpdGlvblkoIHNpZGUgKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBJZiB0aGV5IGhhdmUgYWxsIDQgZGlyZWN0aW9ucywgYWRkIGEgY2lyY2xlIHRvIHRoZSBjZW50ZXIgZm9yIGxvb2tzXHJcblx0XHRcdGlmKCBkcGFkLnVwICYmIGRwYWQubGVmdCAmJiBkcGFkLmRvd24gJiYgZHBhZC5yaWdodCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdHg6IHBvc1gsXHJcblx0XHRcdFx0XHR5OiBwb3NZLFxyXG5cdFx0XHRcdFx0cmFkaXVzOiBkcGFkLnJpZ2h0LmhlaWdodFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgY2VudGVyID0gbmV3IFRvdWNoYWJsZUNpcmNsZSggb3B0aW9ucyApOyBcclxuXHRcdFx0XHR0aGlzLnRvdWNoYWJsZUFyZWFzLnB1c2goIGNlbnRlciApO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdC8vIFVwIGFycm93XHJcblx0XHRcdGlmKCBkcGFkLnVwICE9PSBmYWxzZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkcGFkLnVwLnggPSBwb3NYIC0gdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAud2lkdGgsICd5JyApIC8gMjtcclxuXHRcdFx0XHRkcGFkLnVwLnkgPSBwb3NZIC0gKCB0aGlzLmdldFBpeGVscyggZHBhZC51cC5oZWlnaHQsICd5JyApICsgIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQuaGVpZ2h0LCAneScgKSAvIDIgKTtcclxuXHRcdFx0XHRkcGFkLnVwLmRpcmVjdGlvbiA9ICd1cCc7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQudXAgKTtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHQvLyBMZWZ0IGFycm93XHJcblx0XHRcdGlmKCBkcGFkLmxlZnQgIT09IGZhbHNlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRwYWQubGVmdC54ID0gcG9zWCAtICggdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC53aWR0aCwgJ3knICkgKyB0aGlzLmdldFBpeGVscyggZHBhZC51cC53aWR0aCwgJ3knICkgLyAyICk7XHJcblx0XHRcdFx0ZHBhZC5sZWZ0LnkgPSBwb3NZIC0gKCB0aGlzLmdldFBpeGVscyggZHBhZC5sZWZ0LmhlaWdodCwgJ3knICkgLyAyICk7XHJcblx0XHRcdFx0ZHBhZC5sZWZ0LmRpcmVjdGlvbiA9ICdsZWZ0JztcclxuXHRcdFx0XHR0aGlzLmFkZFRvdWNoYWJsZURpcmVjdGlvbiggZHBhZC5sZWZ0ICk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0Ly8gRG93biBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC5kb3duICE9PSBmYWxzZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkcGFkLmRvd24ueCA9IHBvc1ggLSB0aGlzLmdldFBpeGVscyggZHBhZC5kb3duLndpZHRoLCAneScgKSAvIDI7XHJcblx0XHRcdFx0ZHBhZC5kb3duLnkgPSBwb3NZICsgKCB0aGlzLmdldFBpeGVscyggZHBhZC5sZWZ0LmhlaWdodCwgJ3knICkgLyAyICk7XHJcblx0XHRcdFx0ZHBhZC5kb3duLmRpcmVjdGlvbiA9ICdkb3duJztcclxuXHRcdFx0XHR0aGlzLmFkZFRvdWNoYWJsZURpcmVjdGlvbiggZHBhZC5kb3duICk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vIFJpZ2h0IGFycm93XHJcblx0XHRcdGlmKCBkcGFkLnJpZ2h0ICE9PSBmYWxzZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkcGFkLnJpZ2h0LnggPSBwb3NYICsgKCB0aGlzLmdldFBpeGVscyggZHBhZC51cC53aWR0aCwgJ3knICkgLyAyICk7XHJcblx0XHRcdFx0ZHBhZC5yaWdodC55ID0gcG9zWSAtIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnJpZ2h0LmhlaWdodCwgJ3knICkgLyAyO1xyXG5cdFx0XHRcdGRwYWQucmlnaHQuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuXHRcdFx0XHR0aGlzLmFkZFRvdWNoYWJsZURpcmVjdGlvbiggZHBhZC5yaWdodCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZEpveXN0aWNrOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0dmFyIGpveXN0aWNrID0gdGhpcy5vcHRpb25zWyBzaWRlIF0uam95c3RpY2s7XHJcblx0XHRcdGpveXN0aWNrLnggPSB0aGlzLmdldFBvc2l0aW9uWCggc2lkZSApO1xyXG5cdFx0XHRqb3lzdGljay55ID0gdGhpcy5nZXRQb3NpdGlvblkoIHNpZGUgKTtcclxuXHRcclxuXHRcdFx0dGhpcy5hZGRKb3lzdGljayggam95c3RpY2sgKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogVXNlZCBmb3IgcmVzaXppbmcuIEN1cnJlbnRseSBpcyBqdXN0IGFuIGFsaWFzIGZvciBsb2FkU2lkZVxyXG5cdFx0ICovXHJcblx0XHRyZWxvYWRTaWRlOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0Ly8gTG9hZCBpbiBuZXcgb25lc1xyXG5cdFx0XHR0aGlzLmxvYWRTaWRlKCBzaWRlICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkU2lkZTogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdGlmKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS50eXBlID09PSAnZHBhZCcgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5sb2FkRFBhZCggc2lkZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnR5cGUgPT09ICdqb3lzdGljaycgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5sb2FkSm95c3RpY2soIHNpZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS50eXBlID09PSAnYnV0dG9ucycgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5sb2FkQnV0dG9ucyggc2lkZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIE5vcm1hbGl6ZSB0b3VjaCBwb3NpdGlvbnMgYnkgdGhlIGxlZnQgYW5kIHRvcCBvZmZzZXRzXHJcblx0XHQgKiBAcGFyYW0ge2ludH0geFxyXG5cdFx0ICovXHJcblx0XHRub3JtYWxpemVUb3VjaFBvc2l0aW9uWDogZnVuY3Rpb24oIHggKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gKCB4IC0gR2FtZUNvbnRyb2xsZXIub3B0aW9ucy5jYW52YXMub2Zmc2V0TGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCApICogKCB0aGlzLnBpeGVsUmF0aW8gKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogTm9ybWFsaXplIHRvdWNoIHBvc2l0aW9ucyBieSB0aGUgbGVmdCBhbmQgdG9wIG9mZnNldHNcclxuXHRcdCAqIEBwYXJhbSB7aW50fSB5XHJcblx0XHQgKi9cclxuXHRcdG5vcm1hbGl6ZVRvdWNoUG9zaXRpb25ZOiBmdW5jdGlvbiggeSApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAoIHkgLSBHYW1lQ29udHJvbGxlci5vcHRpb25zLmNhbnZhcy5vZmZzZXRUb3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCApICogKCB0aGlzLnBpeGVsUmF0aW8gKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgeCBwb3NpdGlvbiB3aGVuIGdpdmVuICMgb2YgcGl4ZWxzIGZyb20gcmlnaHQgKGJhc2VkIG9uIGNhbnZhcyBzaXplKVxyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHJpZ2h0IFxyXG5cdFx0ICovXHJcblx0XHRnZXRYRnJvbVJpZ2h0OiBmdW5jdGlvbiggcmlnaHQgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNhbnZhcy53aWR0aCAtIHJpZ2h0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIHkgcG9zaXRpb24gd2hlbiBnaXZlbiAjIG9mIHBpeGVscyBmcm9tIGJvdHRvbSAoYmFzZWQgb24gY2FudmFzIHNpemUpXHJcblx0XHQgKiBAcGFyYW0ge2ludH0gcmlnaHQgXHJcblx0XHQgKi9cclxuXHRcdGdldFlGcm9tQm90dG9tOiBmdW5jdGlvbiggYm90dG9tICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gYm90dG9tO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBHcmFicyB0aGUgeCBwb3NpdGlvbiBvZiBlaXRoZXIgdGhlIGxlZnQgb3IgcmlnaHQgc2lkZS9jb250cm9sc1xyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHNpZGUgLSAnbGVmdCcsICdyaWdodCcgXHJcblx0XHQgKi9cclxuXHRcdGdldFBvc2l0aW9uWDogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdGlmKCB0eXBlb2YgdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24ubGVmdCAhPT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBpeGVscyggdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24ubGVmdCwgJ3gnICk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRYRnJvbVJpZ2h0KCB0aGlzLmdldFBpeGVscyggdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24ucmlnaHQsICd4JyApICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEdyYWJzIHRoZSB5IHBvc2l0aW9uIG9mIGVpdGhlciB0aGUgbGVmdCBvciByaWdodCBzaWRlL2NvbnRyb2xzXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc2lkZSAtICdsZWZ0JywgJ3JpZ2h0JyBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UG9zaXRpb25ZOiBmdW5jdGlvbiggc2lkZSApIHtcclxuXHRcdFx0aWYoIHR5cGVvZiB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi50b3AgIT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQaXhlbHMoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLnRvcCwgJ3knICk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRZRnJvbUJvdHRvbSggdGhpcy5nZXRQaXhlbHMoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLmJvdHRvbSwgJ3knICkgKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0XHRcdHRoaXMuY3R4LmNsZWFyUmVjdCggMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQvLyBXaGVuIG5vIHRvdWNoIGV2ZW50cyBhcmUgaGFwcGVuaW5nLCB0aGlzIGVuYWJsZXMgJ3BhdXNlZCcgbW9kZSwgd2hpY2ggb25seSBza2lwcyB0aGlzIHNtYWxsIHBhcnQuXHJcblx0XHRcdC8vIFNraXBwaW5nIHRoZSBjbGVhclJlY3QgYW5kIGRyYXcoKXMgd291bGQgYmUgbmljZSwgYnV0IGl0IG1lc3NlcyB3aXRoIHRoZSB0cmFuc3BhcmVudCBncmFkaWVudHNcclxuXHRcdFx0aWYoICEgdGhpcy5wYXVzZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGNhY2hlSWQgPSAndG91Y2gtY2lyY2xlJztcclxuXHRcdFx0XHR2YXIgY2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdO1xyXG5cdFx0XHRcdGlmKCAhIGNhY2hlZCAmJiB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdFx0dmFyIGN0eCA9IHN1YkNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSAyICogdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzO1xyXG5cdFx0XHRcdFx0c3ViQ2FudmFzLmhlaWdodCA9IDIgKiB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXM7XHJcblx0XHRcclxuXHRcdFx0XHRcdHZhciBjZW50ZXIgPSB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXM7XHJcblx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIGNlbnRlciwgY2VudGVyLCAxLCBjZW50ZXIsIGNlbnRlciwgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzICk7IC8vIDEwID0gZW5kIHJhZGl1c1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMjAwLCAyMDAsIDIwMCwgMSApJyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMjAwLCAyMDAsIDIwMCwgMCApJyApO1xyXG5cdFx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFx0XHRcdFx0Y3R4LmFyYyggY2VudGVyLCBjZW50ZXIsIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRcdFx0Y3R4LmZpbGwoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXSA9IHN1YkNhbnZhcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gRHJhdyB0aGUgY3VycmVudCB0b3VjaCBwb3NpdGlvbnMgaWYgYW55XHJcblx0XHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGogPSB0aGlzLnRvdWNoZXMubGVuZ3RoOyBpIDwgajsgaSsrIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgdG91Y2ggPSB0aGlzLnRvdWNoZXNbIGkgXTtcclxuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdG91Y2ggPT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR2YXIgeCA9IHRoaXMubm9ybWFsaXplVG91Y2hQb3NpdGlvblgoIHRvdWNoLmNsaWVudFggKSwgeSA9IHRoaXMubm9ybWFsaXplVG91Y2hQb3NpdGlvblkoIHRvdWNoLmNsaWVudFkgKTtcclxuXHRcdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZSggY2FjaGVkLCB4IC0gdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLCB5IC0gdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IoIHZhciBpID0gMCwgaiA9IHRoaXMudG91Y2hhYmxlQXJlYXMubGVuZ3RoOyBpIDwgajsgaSsrIClcclxuXHRcdFx0e1x0XHJcblx0XHRcdFx0dGhpcy50b3VjaGFibGVBcmVhc1sgaSBdLmRyYXcoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgYXJlYSA9IHRoaXMudG91Y2hhYmxlQXJlYXNbIGkgXTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdC8vIEdvIHRocm91Z2ggYWxsIHRvdWNoZXMgdG8gc2VlIGlmIGFueSBoaXQgdGhpcyBhcmVhXHJcblx0XHRcdFx0dmFyIHRvdWNoZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRmb3IoIHZhciBrID0gMCwgbCA9IHRoaXMudG91Y2hlcy5sZW5ndGg7IGsgPCBsOyBrKysgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciB0b3VjaCA9IHRoaXMudG91Y2hlc1sgayBdO1xyXG5cdFx0XHRcdFx0aWYoIHR5cGVvZiB0b3VjaCA9PT0gJ3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcclxuXHRcdFx0XHRcdHZhciB4ID0gdGhpcy5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWCggdG91Y2guY2xpZW50WCApLCB5ID0gdGhpcy5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWSggdG91Y2guY2xpZW50WSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgdGhhdCBpdCdzIGluIHRoZSBib3VuZGluZyBib3gvY2lyY2xlXHJcblx0XHRcdFx0XHRpZiggKCBhcmVhLmNoZWNrKCB4LCB5ICkgKSAhPT0gZmFsc2UgKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiggIXRvdWNoZWQgKVxyXG5cdFx0XHRcdFx0XHRcdHRvdWNoZWQgPSB0aGlzLnRvdWNoZXNbIGsgXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoIHRvdWNoZWQgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmKCAhYXJlYS5hY3RpdmUgKVxyXG5cdFx0XHRcdFx0XHRhcmVhLnRvdWNoU3RhcnRXcmFwcGVyKCB0b3VjaGVkICk7XHJcblx0XHRcdFx0XHRhcmVhLnRvdWNoTW92ZVdyYXBwZXIoIHRvdWNoZWQgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiggYXJlYS5hY3RpdmUgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGFyZWEudG91Y2hFbmRXcmFwcGVyKCB0b3VjaGVkICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlbmRlcldyYXBwZXIgKTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIFNvIHdlIGNhbiBrZWVwIHNjb3BlLCBhbmQgZG9uJ3QgaGF2ZSB0byBjcmVhdGUgYSBuZXcgb2JqIGV2ZXJ5IHJlcXVlc3RBbmltYXRpb25GcmFtZSAoYmFkIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24pIFxyXG5cdFx0ICovXHJcblx0XHRyZW5kZXJXcmFwcGVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIucmVuZGVyKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogU3VwZXJjbGFzcyBmb3IgdG91Y2hhYmxlIHN0dWZmIFxyXG5cdCAqL1xyXG5cdHZhciBUb3VjaGFibGVBcmVhID0gKCBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlQXJlYSgpIFxyXG5cdFx0e1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBiZWluZyB0b3VjaGVkXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaFN0YXJ0ID0gbnVsbDtcclxuXHRcdFxyXG5cdFx0Ly8gQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgYmVpbmcgbW92ZWRcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoTW92ZSA9IG51bGw7XHJcblx0XHRcclxuXHRcdC8vIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIG5vIGxvbmdlciBiZWluZyB0b3VjaGVkXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaEVuZCA9IG51bGw7XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnR5cGUgPSAnYXJlYSc7XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5pZCA9IGZhbHNlO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgZm9yIHRoaXMgZGlyZWN0aW9uIGJlaW5nIHRvdWNoZWRcclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5zZXRUb3VjaFN0YXJ0ID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xyXG5cdFx0XHR0aGlzLnRvdWNoU3RhcnQgPSBjYWxsYmFjaztcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgbm8gbG9uZ2VyIHRvdWNoZWQgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoU3RhcnRXcmFwcGVyID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdC8vIEZpcmUgdGhlIHVzZXIgc3BlY2lmaWVkIGNhbGxiYWNrXHJcblx0XHRcdGlmKCB0aGlzLnRvdWNoU3RhcnQgKVxyXG5cdFx0XHRcdHRoaXMudG91Y2hTdGFydCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBhY3RpdmVcclxuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSB1c2VyLXNwZWNpZmllZCBjYWxsYmFjayBmb3IgdGhpcyBkaXJlY3Rpb24gbm8gbG9uZ2VyIGJlaW5nIHRvdWNoZWRcclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5zZXRUb3VjaE1vdmUgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XHJcblx0XHRcdHRoaXMudG91Y2hNb3ZlID0gY2FsbGJhY2s7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIG1vdmVkLiBNYWtlIHN1cmUgaXQncyBhY3R1YWxseSBjaGFuZ2VkIGJlZm9yZSBwYXNzaW5nIHRvIGRldmVsb3BlclxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5sYXN0UG9zWCA9IDA7XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5sYXN0UG9zWSA9IDA7XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaE1vdmVXcmFwcGVyID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdC8vIEZpcmUgdGhlIHVzZXIgc3BlY2lmaWVkIGNhbGxiYWNrXHJcblx0XHRcdGlmKCB0aGlzLnRvdWNoTW92ZSAmJiAoIGUuY2xpZW50WCAhPSBUb3VjaGFibGVBcmVhLnByb3RvdHlwZS5sYXN0UG9zWCB8fCBlLmNsaWVudFkgIT0gVG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1kgKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnRvdWNoTW92ZSgpO1xyXG5cdFx0XHRcdHRoaXMubGFzdFBvc1ggPSBlLmNsaWVudFg7XHJcblx0XHRcdFx0dGhpcy5sYXN0UG9zWSA9IGUuY2xpZW50WTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBNYXJrIHRoaXMgZGlyZWN0aW9uIGFzIGluYWN0aXZlXHJcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgZm9yIHRoaXMgZGlyZWN0aW9uIG5vIGxvbmdlciBiZWluZyB0b3VjaGVkXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuc2V0VG91Y2hFbmQgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XHJcblx0XHRcdHRoaXMudG91Y2hFbmQgPSBjYWxsYmFjaztcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgZmlyc3QgdG91Y2hlZCBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hFbmRXcmFwcGVyID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdC8vIEZpcmUgdGhlIHVzZXIgc3BlY2lmaWVkIGNhbGxiYWNrXHJcblx0XHRcdGlmKCB0aGlzLnRvdWNoRW5kIClcclxuXHRcdFx0XHR0aGlzLnRvdWNoRW5kKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBNYXJrIHRoaXMgZGlyZWN0aW9uIGFzIGluYWN0aXZlXHJcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5yZW5kZXIoKTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVBcmVhO1xyXG5cdFx0XHJcblx0fSApKCk7XHJcblx0XHJcblx0dmFyIFRvdWNoYWJsZURpcmVjdGlvbiA9ICggZnVuY3Rpb24oIF9fc3VwZXIgKSB7XHJcblx0XHRfX2V4dGVuZHMoIFRvdWNoYWJsZURpcmVjdGlvbiwgX19zdXBlciApO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVEaXJlY3Rpb24oIG9wdGlvbnMgKSBcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBvcHRpb25zIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCBpID09ICd4JyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneCcgKTtcclxuXHRcdFx0XHRlbHNlIGlmKCBpID09ICd5JyB8fCBpID09ICdoZWlnaHQnIHx8IGkgPT0gJ3dpZHRoJyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneScgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gb3B0aW9uc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHR9XHJcblx0XHJcblx0XHRUb3VjaGFibGVEaXJlY3Rpb24ucHJvdG90eXBlLnR5cGUgPSAnZGlyZWN0aW9uJztcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgaWYgdGhlIHRvdWNoIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoaXMgZGlyZWN0aW9uIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVEaXJlY3Rpb24ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oIHRvdWNoWCwgdG91Y2hZICkge1xyXG5cdFx0XHR2YXIgZGlzdGFuY2VYLCBkaXN0YW5jZVk7XHJcblx0XHRcdGlmKCAoIE1hdGguYWJzKCB0b3VjaFggLSB0aGlzLnggKSA8ICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSB8fCAoIHRvdWNoWCA+IHRoaXMueCApICkgJiYgLy8gbGVmdFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWCAtICggdGhpcy54ICsgdGhpcy53aWR0aCApICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFggPCB0aGlzLnggKyB0aGlzLndpZHRoICkgKSAmJiAvLyByaWdodFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWSAtIHRoaXMueSApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hZID4gdGhpcy55ICkgKSAmJiAvLyB0b3BcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSAoIHRoaXMueSArIHRoaXMuaGVpZ2h0ICkgKSA8ICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSB8fCAoIHRvdWNoWSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICkgKSAvLyBib3R0b21cclxuXHRcdFx0KVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVEaXJlY3Rpb24ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGNhY2hlSWQgPSB0aGlzLnR5cGUgKyAnJyArIHRoaXMuaWQgKyAnJyArIHRoaXMuYWN0aXZlO1xyXG5cdFx0XHR2YXIgY2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdO1xyXG5cdFx0XHRpZiggISBjYWNoZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFx0dmFyIGN0eCA9IHN1YkNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFx0c3ViQ2FudmFzLndpZHRoID0gdGhpcy53aWR0aCArIDIgKiB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRzdWJDYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAyICogdGhpcy5zdHJva2U7XHJcblx0XHJcblx0XHRcdFx0dmFyIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHkgfHwgMC45O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCAhIHRoaXMuYWN0aXZlICkgLy8gRGlyZWN0aW9uIGN1cnJlbnRseSBiZWluZyB0b3VjaGVkXHJcblx0XHRcdFx0XHRvcGFjaXR5ICo9IDAuNTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdHN3aXRjaCggdGhpcy5kaXJlY3Rpb24gKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNhc2UgJ3VwJzpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCAwLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAwLCAwLCAwLCAnICsgKCBvcGFjaXR5ICogMC41ICkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyBvcGFjaXR5ICsgJyApJyApOyAgIFxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoIDAsIDAsIHRoaXMud2lkdGgsIDAgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArICggb3BhY2l0eSAqIDAuNSApICsgJyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAwLCAwLCAwLCAnICsgb3BhY2l0eSArICcgKScgKTsgICBcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgdGhpcy53aWR0aCwgMCApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAwLCAwLCAwLCAnICsgb3BhY2l0eSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArICggb3BhY2l0eSAqIDAuNSApICsgJyApJyApOyAgXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnZG93bic6XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoIDAsIDAsIDAsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyBvcGFjaXR5ICsgJyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAwLCAwLCAwLCAnICsgKCBvcGFjaXR5ICogMC41ICkgKyAnICknICk7ICAgXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdFxyXG5cdFx0XHRcdGN0eC5maWxsUmVjdCggMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5zdHJva2U7XHJcblx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMSApJztcclxuXHRcdFx0XHRjdHguc3Ryb2tlUmVjdCggMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgdGhpcy54LCB0aGlzLnkgKTtcclxuXHRcdFx0XHRcclxuXHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVEaXJlY3Rpb247XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0dmFyIFRvdWNoYWJsZUJ1dHRvbiA9ICggZnVuY3Rpb24oIF9fc3VwZXIgKSB7XHJcblx0XHRfX2V4dGVuZHMoIFRvdWNoYWJsZUJ1dHRvbiwgX19zdXBlciApO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVCdXR0b24oIG9wdGlvbnMgKSAvL3gsIHksIHJhZGl1cywgYmFja2dyb3VuZENvbG9yIClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBvcHRpb25zIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCBpID09ICd4JyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneCcgKTtcclxuXHRcdFx0XHRlbHNlIGlmKCBpID09ICd4JyB8fCBpID09ICdyYWRpdXMnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd5JyApO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlQnV0dG9uLnByb3RvdHlwZS50eXBlID0gJ2J1dHRvbic7XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2tzIGlmIHRoZSB0b3VjaCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGlzIGRpcmVjdGlvbiBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQnV0dG9uLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCB0b3VjaFgsIHRvdWNoWSApIHtcclxuXHRcdFx0aWYoIFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWCAtIHRoaXMueCApIDwgdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgKSAmJlxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWSAtIHRoaXMueSApIDwgdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUJ1dHRvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgY2FjaGVJZCA9IHRoaXMudHlwZSArICcnICsgdGhpcy5pZCArICcnICsgdGhpcy5hY3RpdmU7XHJcblx0XHRcdHZhciBjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF07XHJcblx0XHRcdGlmKCAhIGNhY2hlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHR2YXIgY3R4ID0gc3ViQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5zdHJva2U7XHJcblx0XHRcdFx0c3ViQ2FudmFzLndpZHRoID0gc3ViQ2FudmFzLmhlaWdodCA9IDIgKiAoIHRoaXMucmFkaXVzICsgY3R4LmxpbmVXaWR0aCApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzLCAxLCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzICk7XHJcblx0XHRcdFx0dmFyIHRleHRTaGFkb3dDb2xvcjtcclxuXHRcdFx0XHRzd2l0Y2goIHRoaXMuYmFja2dyb3VuZENvbG9yIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjYXNlICdibHVlJzpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSgxMjMsIDE4MSwgMTk3LCAwLjYpJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjMTA1YTc4JyApO1xyXG5cdFx0XHRcdFx0XHR0ZXh0U2hhZG93Q29sb3IgPSAnIzBBNDg2MSc7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnZ3JlZW4nOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDI5LCAyMDEsIDM2LCAwLjYpJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjMTA3ODE0JyApO1xyXG5cdFx0XHRcdFx0XHR0ZXh0U2hhZG93Q29sb3IgPSAnIzA4NUMwQic7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVkJzpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSgxNjUsIDM0LCAzNCwgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnIzUyMDEwMScgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyMzMzAwMDAnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3llbGxvdyc6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMjE5LCAyMTcsIDU5LCAwLjYpJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICcjRThFMTBFJyApO1xyXG5cdFx0XHRcdFx0XHR0ZXh0U2hhZG93Q29sb3IgPSAnI0JEQjYwMCc7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hpdGUnOlxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMjU1LDI1NSwyNTUsLjMgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnI2VlZScgKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIHRoaXMuYWN0aXZlIClcdFx0XHRcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSB0ZXh0U2hhZG93Q29sb3I7XHJcblx0XHRcdFx0ZWxzZVx0XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHJcblx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gdGV4dFNoYWRvd0NvbG9yO1x0XHRcdFxyXG5cdFx0XHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdC8vY3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0Y3R4LmFyYyggc3ViQ2FudmFzLndpZHRoIC8gMiwgc3ViQ2FudmFzLndpZHRoIC8gMiwgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHRcdGN0eC5zdHJva2UoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiggdGhpcy5sYWJlbCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gVGV4dCBTaGFkb3dcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSB0ZXh0U2hhZG93Q29sb3I7XHJcblx0XHRcdFx0XHRjdHguZm9udCA9ICdib2xkICcgKyAoIHRoaXMuZm9udFNpemUgfHwgc3ViQ2FudmFzLmhlaWdodCAqIDAuMzUgKSArICdweCBWZXJkYW5hJztcclxuXHRcdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuXHRcdFx0XHRcdGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHRcdFx0XHRcdGN0eC5maWxsVGV4dCggdGhpcy5sYWJlbCwgc3ViQ2FudmFzLmhlaWdodCAvIDIgKyAyLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiArIDIgKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5mb250Q29sb3I7XHJcblx0XHRcdFx0XHRjdHguZm9udCA9ICdib2xkICcgKyAoIHRoaXMuZm9udFNpemUgfHwgc3ViQ2FudmFzLmhlaWdodCAqIDAuMzUgKSArICdweCBWZXJkYW5hJztcclxuXHRcdFx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuXHRcdFx0XHRcdGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHRcdFx0XHRcdGN0eC5maWxsVGV4dCggdGhpcy5sYWJlbCwgc3ViQ2FudmFzLmhlaWdodCAvIDIsIHN1YkNhbnZhcy5oZWlnaHQgLyAyICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXSA9IHN1YkNhbnZhcztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmRyYXdJbWFnZSggY2FjaGVkLCB0aGlzLngsIHRoaXMueSApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlQnV0dG9uO1xyXG5cdH0gKSggVG91Y2hhYmxlQXJlYSApO1xyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVKb3lzdGljayA9ICggZnVuY3Rpb24oIF9fc3VwZXIgKSB7XHJcblx0XHRfX2V4dGVuZHMoIFRvdWNoYWJsZUpveXN0aWNrLCBfX3N1cGVyICk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZUpveXN0aWNrKCBvcHRpb25zICkgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciApXHJcblx0XHR7XHJcblx0XHRcdGZvciggdmFyIGkgaW4gb3B0aW9ucyApXHJcblx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuY3VycmVudFggPSB0aGlzLmN1cnJlbnRYIHx8IHRoaXMueDtcclxuXHRcdFx0dGhpcy5jdXJyZW50WSA9IHRoaXMuY3VycmVudFkgfHwgdGhpcy55O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUudHlwZSA9ICdqb3lzdGljayc7XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2tzIGlmIHRoZSB0b3VjaCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGlzIGRpcmVjdGlvbiBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oIHRvdWNoWCwgdG91Y2hZICkge1xyXG5cdFx0XHRpZiggXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hYIC0gdGhpcy54ICkgPCB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSApICYmXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gdGhpcy55ICkgPCB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSApXHJcblx0XHRcdClcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBkZXRhaWxzIGZvciB0aGUgam95c3RpY2sgbW92ZSBldmVudCwgc3RvcmVkIGhlcmUgc28gd2UncmUgbm90IGNvbnN0YW50bHkgY3JlYXRpbmcgbmV3IG9ianMgZm9yIGdhcmJhZ2UuIFRoZSBvYmplY3QgaGFzIHBhcmFtczpcclxuXHRcdCAqIGR4IC0gdGhlIG51bWJlciBvZiBwaXhlbHMgdGhlIGN1cnJlbnQgam95c3RpY2sgY2VudGVyIGlzIGZyb20gdGhlIGJhc2UgY2VudGVyIGluIHggZGlyZWN0aW9uXHJcblx0XHQgKiBkeSAtIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoZSBjdXJyZW50IGpveXN0aWNrIGNlbnRlciBpcyBmcm9tIHRoZSBiYXNlIGNlbnRlciBpbiB5IGRpcmVjdGlvblxyXG5cdFx0ICogbWF4IC0gdGhlIG1heGltdW0gbnVtYmVyIG9mIHBpeGVscyBkeCBvciBkeSBjYW4gYmVcclxuXHRcdCAqIG5vcm1hbGl6ZWRYIC0gYSBudW1iZXIgYmV0d2VlbiAtMSBhbmQgMSByZWxhdGluZyB0byBob3cgZmFyIGxlZnQgb3IgcmlnaHQgdGhlIGpveXN0aWNrIGlzXHJcblx0XHQgKiBub3JtYWxpemVkWSAtIGEgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEgcmVsYXRpbmcgdG8gaG93IGZhciB1cCBvciBkb3duIHRoZSBqb3lzdGljayBpc1xyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUubW92ZURldGFpbHMgPSB7fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGpveXN0aWNrIGlzIG1vdmVkXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS50b3VjaE1vdmVXcmFwcGVyID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudFggPSBHYW1lQ29udHJvbGxlci5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWCggZS5jbGllbnRYICk7XHRcclxuXHRcdFx0dGhpcy5jdXJyZW50WSA9IEdhbWVDb250cm9sbGVyLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25ZKCBlLmNsaWVudFkgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIEZpcmUgdGhlIHVzZXIgc3BlY2lmaWVkIGNhbGxiYWNrXHJcblx0XHRcdGlmKCB0aGlzLnRvdWNoTW92ZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggdGhpcy5tb3ZlRGV0YWlscy5keCAhPSB0aGlzLmN1cnJlbnRYIC0gdGhpcy54ICYmIHRoaXMubW92ZURldGFpbHMuZHkgIT0gdGhpcy55IC0gdGhpcy5jdXJyZW50WSApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5keCA9IHRoaXMuY3VycmVudFggLSB0aGlzLng7IC8vIHJldmVyc2Ugc28gcmlnaHQgaXMgcG9zaXRpdmVcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMuZHkgPSB0aGlzLnkgLSB0aGlzLmN1cnJlbnRZO1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5tYXggPSB0aGlzLnJhZGl1cyArICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKTtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMubm9ybWFsaXplZFggPSB0aGlzLm1vdmVEZXRhaWxzLmR4IC8gdGhpcy5tb3ZlRGV0YWlscy5tYXg7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLm5vcm1hbGl6ZWRZID0gdGhpcy5tb3ZlRGV0YWlscy5keSAvIHRoaXMubW92ZURldGFpbHMubWF4O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hNb3ZlKCB0aGlzLm1vdmVEZXRhaWxzICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBNYXJrIHRoaXMgZGlyZWN0aW9uIGFzIGluYWN0aXZlXHJcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCAhIHRoaXMuaWQgKSAvLyB3YWl0IHVudGlsIGlkIGlzIHNldFxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dmFyIGNhY2hlSWQgPSB0aGlzLnR5cGUgKyAnJyArIHRoaXMuaWQgKyAnJyArIHRoaXMuYWN0aXZlO1xyXG5cdFx0XHR2YXIgY2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdO1xyXG5cdFx0XHRpZiggISBjYWNoZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFx0dGhpcy5zdHJva2UgPSB0aGlzLnN0cm9rZSB8fCAyO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IHN1YkNhbnZhcy5oZWlnaHQgPSAyICogKCB0aGlzLnJhZGl1cyArIHRoaXMuc3Ryb2tlICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGN0eCA9IHN1YkNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdGlmKCB0aGlzLmFjdGl2ZSApIC8vIERpcmVjdGlvbiBjdXJyZW50bHkgYmVpbmcgdG91Y2hlZFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggMCwgMCwgMSwgMCwgMCwgdGhpcy5yYWRpdXMgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDIwMCwyMDAsMjAwLC41ICknICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAyMDAsMjAwLDIwMCwuOSApJyApO1xyXG5cdFx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBTVFlMSU5HIEZPUiBCVVRUT05TXHJcblx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIDAsIDAsIDEsIDAsIDAsIHRoaXMucmFkaXVzICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyMDAsMjAwLDIwMCwuMiApJyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMjAwLDIwMCwyMDAsLjQgKScgKTtcclxuXHRcdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCAwLDAsMCwuNCApJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFx0XHRcdC8vIEFjdHVhbCBqb3lzdGljayBwYXJ0IHRoYXQgaXMgYmVpbmcgbW92ZWRcclxuXHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0Y3R4LmFyYyggdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXSA9IHN1YkNhbnZhcztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRHJhdyB0aGUgYmFzZSB0aGF0IHN0YXlzIHN0YXRpY1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZmlsbFN0eWxlID0gJyM0NDQnO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cyAqIDAuNywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZmlsbCgpO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguc3Ryb2tlKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHRoaXMuY3VycmVudFggLSB0aGlzLnJhZGl1cywgdGhpcy5jdXJyZW50WSAtIHRoaXMucmFkaXVzICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBUb3VjaGFibGVKb3lzdGljaztcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlQ2lyY2xlID0gKCBmdW5jdGlvbiggX19zdXBlciApIHtcclxuXHRcdF9fZXh0ZW5kcyggVG91Y2hhYmxlQ2lyY2xlLCBfX3N1cGVyICk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZUNpcmNsZSggb3B0aW9ucyApXHJcblx0XHR7XHJcblx0XHRcdGZvciggdmFyIGkgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggaSA9PSAneCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3gnICk7XHJcblx0XHRcdFx0ZWxzZSBpZiggaSA9PSAneCcgfHwgaSA9PSAncmFkaXVzJyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneScgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gb3B0aW9uc1tpXTtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBObyB0b3VjaCBmb3IgdGhpcyBmZWxsYSBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQ2lyY2xlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCB0b3VjaFgsIHRvdWNoWSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlQ2lyY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0XHRcdC8vIFNUWUxJTkcgRk9SIEJVVFRPTlNcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKCAwLCAwLCAwLCAwLjUgKSc7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBBY3R1YWwgam95c3RpY2sgcGFydCB0aGF0IGlzIGJlaW5nIG1vdmVkXHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsKCk7XHJcblx0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlQ2lyY2xlO1xyXG5cdH0gKSggVG91Y2hhYmxlQXJlYSApO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFNoaW0gZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSBcclxuXHQgKi9cclxuXHQoIGZ1bmN0aW9uKCkge1xyXG5cdCAgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVyblxyXG5cdFx0dmFyIGxhc3RUaW1lID0gMDtcclxuXHRcdHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcclxuXHRcdGZvciggdmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCApXHJcblx0XHR7XHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHR9XHJcblx0IFxyXG5cdFx0aWYgKCAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSApXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiggY2FsbGJhY2ssIGVsZW1lbnQgKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0dmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCggMCwgMTYgLSAoIGN1cnJUaW1lIC0gbGFzdFRpbWUgKSApO1xyXG5cdFx0XHRcdHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgXHJcblx0XHRcdFx0XHR0aW1lVG9DYWxsICk7XHJcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcblx0XHRcdFx0cmV0dXJuIGlkO1xyXG5cdFx0XHR9O1xyXG5cdCBcclxuXHRcdGlmICggIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSApXHJcblx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKCBpZCApIHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQoIGlkICk7XHJcblx0XHRcdH07XHJcblx0fSgpICk7XHJcbn0gKSh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiID8gbW9kdWxlLmV4cG9ydHMgOiB3aW5kb3cpIiwidmFyIGdsb2JhbHMgPSB7XHJcbiAgICBidWxsZXRzOiBudWxsLFxyXG4gICAgZW5lbWllczogbnVsbCxcclxuICAgIHBsYXllcjogbnVsbFxyXG59XHJcbnZhciB1cGRhdGUgPSByZXF1aXJlKCcuL2dhbWUvdXBkYXRlJyk7XHJcbnZhciBwcmVsb2FkID0gcmVxdWlyZSgnLi9nYW1lL3ByZWxvYWQnKSA7XHJcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL2dhbWUvY3JlYXRlJyk7XHJcbiBcclxudmFyIGdhbWUgPSB3aW5kb3cuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICcnLCB7IHByZWxvYWQ6IHByZWxvYWQsIGNyZWF0ZTogY3JlYXRlLCB1cGRhdGU6IHVwZGF0ZSB9KTtcclxuIiwiIGZ1bmN0aW9uIHJlc2V0QnVsbGV0IChidWxsZXQpIHtcclxuXHJcbiAgICBidWxsZXQua2lsbCgpO1xyXG5cclxufVxyXG47XHJcbmZ1bmN0aW9uIHNldHVwRW5lbXkgKGVuZW15KSB7XHJcblxyXG4gICAgZW5lbXkuYW5jaG9yLnggPSAwLjU7XHJcbiAgICBlbmVteS5hbmNob3IueSA9IDAuNTtcclxuICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdleHBsb2RlJyk7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAgICBmdW5jdGlvbigpe1xyXG5cclxuICAgIGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xyXG5cclxuICAgIHRoaXMuc3BhY2VCRyA9ICB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDgwMCwgNjAwLCAnYmcnKTsgIFxyXG4gICAgdGhpcy5zcGFjZUJHLmF1dG9TY3JvbGwoMCwgNzUpOyBcclxuXHJcblxyXG4gICAgZ2FtZS5pbnB1dC5nYW1lcGFkLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gVG8gbGlzdGVuIHRvIGJ1dHRvbnMgZnJvbSBhIHNwZWNpZmljIHBhZCBsaXN0ZW4gZGlyZWN0bHkgb24gdGhhdCBwYWQgZ2FtZS5pbnB1dC5nYW1lcGFkLnBhZFgsIHdoZXJlIFggPSBwYWQgMS00XHJcbiAgICBwYWQxID0gZ2FtZS5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcblxyXG4gICAgXHJcbiAgICB2YXIgR2FtZUNvbnRyb2xsZXIgPSB3aW5kb3cuR2FtZUNvbnRyb2xsZXIgPSByZXF1aXJlKCdnYW1lLWNvbnRyb2xsZXInKS5HYW1lQ29udHJvbGxlcjtcclxuICAgIGNvbnNvbGUubG9nKEdhbWVDb250cm9sbGVyKTtcclxuICAgIEdhbWVDb250cm9sbGVyLmluaXQoe1xyXG4gICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2pveXN0aWNrJyxcclxuICAgICAgICAgICAgam95c3RpY2s6IHtcclxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IG5lZWQgdGhpcywgYnV0IHRoZSBldmVudCBpcyBoZXJlIGlmIHlvdSB3YW50IGl0LlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogZnVuY3Rpb24oam95c3RpY2tfZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuaW5wdXQuam95c3RpY2tMZWZ0ID0gam95c3RpY2tfZGV0YWlscztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBub3QgdXNpbmcgYW55dGhpbmcgb24gdGhlIHJpZ2h0IGZvciB0aGlzIGRlbW8sIGJ1dCB5b3UgY2FuIGFkZCBidXR0b25zLCBldGMuXHJcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXVzdGluaGFsbG9jay9odG1sNS12aXJ0dWFsLWdhbWUtY29udHJvbGxlci8gZm9yIGV4YW1wbGVzLlxyXG4gICAgICAgICAgICB0eXBlOiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cucGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKShnYW1lKTtcclxuICAgIHBsYXllci5pbml0KCk7XHJcbiAgICB2YXIgYnVsbGV0cyA9IHdpbmRvdy5idWxsZXRzID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuXHJcbiAgICBidWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG5cclxuICAgIGJ1bGxldHMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG5cclxuICAgIGJ1bGxldHMuY3JlYXRlTXVsdGlwbGUoMTAsICdidWxsZXRzJywgJ2J1bGxldC1ncmVlbi5wbmcnKTtcclxuICAgIGJ1bGxldHMuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnYW5jaG9yLnknLCAxKTtcclxuICAgIGJ1bGxldHMuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcclxuICAgIGJ1bGxldHMuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHdpbmRvdy5leHBsb3Npb25zID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIGV4cGxvc2lvbnMuY3JlYXRlTXVsdGlwbGUoMzAsICdleHBsb2RlJyk7XHJcbiAgICBleHBsb3Npb25zLmZvckVhY2goc2V0dXBFbmVteSwgdGhpcyk7XHJcbiAgICB3aW5kb3cubXVzaWMgPSBnYW1lLmFkZC5hdWRpbygnc3RhZ2UtMScpO1xyXG4gICAgd2luZG93LmJvb20gPSBnYW1lLmFkZC5hdWRpbygnYm9vbScpO1xyXG4gICAgd2luZG93LmxhemVyID0gZ2FtZS5hZGQuYXVkaW8oJ2xhemVyJyk7XHJcblxyXG4gICAgXHJcbiAgICB3aW5kb3cuc3RhZ2UxID0gcmVxdWlyZSgnLi9zY2VuZXMvc2NlbmUtMScpKGdhbWUpO1xyXG4gICAgc3RhZ2UxLmluaXQoKTtcclxufVxyXG5cclxuICIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHR2YXIgcGxheWVyLCBjdXJzb3JzO1xyXG5cdHZhciByaWdodF9idWxsZXRUaW1lID0gMCwgbGVmdF9idWxsZXRUaW1lID0gMDsgXHJcbiAgICB2YXIgcGxheWVyU3BlZWQgPSAyMDA7IC8vZHVubm9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmlyZUJ1bGxldCAoKSB7IFxyXG4gICAgICAgICAgICBpZiAoIGdhbWUudGltZS5ub3cgPiByaWdodF9idWxsZXRUaW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRfYnVsbGV0ID0gYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRfYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBBbmQgZmlyZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X2J1bGxldC5yZXNldChwbGF5ZXIueCwgcGxheWVyLnkgKyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfYnVsbGV0VGltZSA9IGdhbWUudGltZS5ub3cgKyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhemVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGdhbWUudGltZS5ub3cgPiBsZWZ0X2J1bGxldFRpbWUgKyAyMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnRfYnVsbGV0ID0gYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdF9idWxsZXQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIEFuZCBmaXJlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9idWxsZXQucmVzZXQocGxheWVyLnggKyAyNiwgcGxheWVyLnkgKyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9idWxsZXQuYm9keS52ZWxvY2l0eS55ID0gLTMwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2J1bGxldFRpbWUgPSBnYW1lLnRpbWUubm93ICsgMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICBsYXplci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0IDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRwbGF5ZXIgPSBnYW1lLmFkZC5zcHJpdGUoKDQwMCAtIDE2KSwgNTAwLCAnc2hpcCcpO1xyXG4gICAgXHRcdGdhbWUucGh5c2ljcy5lbmFibGUocGxheWVyLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xyXG4gICAgXHRcdGN1cnNvcnMgPSAgZ2FtZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vS0VZQk9BUkQgTU9WRU1FTlRcclxuXHQgICAgICAgIGlmIChjdXJzb3JzLnVwLmlzRG93bilcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICAvLyAgSWYgdGhlIHNoaWZ0IGtleSBpcyBhbHNvIHByZXNzZWQgdGhlbiB0aGUgd29ybGQgaXMgcm90YXRlZFxyXG5cdCAgICAgICAgICAgIGlmIChjdXJzb3JzLnVwLnNoaWZ0S2V5KVxyXG5cdCAgICAgICAgICAgIHtcclxuXHQgICAgICAgICAgICAgICAgLy9nYW1lLndvcmxkLnJvdGF0aW9uICs9IDAuMDU7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIGVsc2VcclxuXHQgICAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgICAgIGlmKHBsYXllci55ID4gMzUwKSBwbGF5ZXIueSAtPSA0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIGVsc2UgaWYgKGN1cnNvcnMuZG93bi5pc0Rvd24pXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgaWYgKGN1cnNvcnMuZG93bi5zaGlmdEtleSlcclxuXHQgICAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiAtPSAwLjA1O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBlbHNlXHJcblx0ICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICBwbGF5ZXIueSArPSA0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIGlmIChjdXJzb3JzLmxlZnQuaXNEb3duKVxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIHBsYXllci54IC09IDQ7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBlbHNlIGlmIChjdXJzb3JzLnJpZ2h0LmlzRG93bilcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgIHBsYXllci54ICs9IDQ7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBpZiAoZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKSlcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICBmaXJlQnVsbGV0KCkgO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vR0FNRVBBRCBTVVBQT1JUXHJcbiAgICAgICAgICAgIGlmIChnYW1lLmlucHV0LmpveXN0aWNrTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0aGUgdWZvIHVzaW5nIHRoZSBqb3lzdGljaydzIG5vcm1hbGl6ZWRYIGFuZCBZIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIHJhbmdlIGZyb20gLTEgdG8gMS5cclxuICAgICAgICAgICAgICAgIHBsYXllci5ib2R5LnZlbG9jaXR5LnNldFRvKGdhbWUuaW5wdXQuam95c3RpY2tMZWZ0Lm5vcm1hbGl6ZWRYICogMjAwLCBnYW1lLmlucHV0LmpveXN0aWNrTGVmdC5ub3JtYWxpemVkWSAqIHBsYXllclNwZWVkICogLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICAgIHRoaXMubG9hZC5hdGxhcygnYnVsbGV0cycsICdpbWcvYXNzZXRzL2J1bGxldHMucG5nJywgJ3NoZWV0cy9idWxsZXRzJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JsdWVfYnVsbGV0JywgJ2ltZy9hc3NldHMvYmx1ZS1idWxsZXQucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnJywgJ2ltZy9iYWNrZ3JvdW5kcy9iZy5wbmcnKTsgXHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2F0bGFzJywgJ2ltZy9lbmVteS1maWdodGVycy9lbmVteS1maWdodGVycy5wbmcnLCAnc2hlZXRzL2VuZW15LWZpZ2h0ZXJzJyk7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NoaXAnLCAnaW1nL3NwYWNlX3NoaXBfYmFzZS5wbmcnKTtcclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9kZScsICdpbWcvYXNzZXRzL2V4cGxvZGUucG5nJywgMTI4LCAxMjgpO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdib29tJywgWydhdWRpby9lZmZlY3RzL2V4cGxvZGUud2F2J10pO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdsYXplcicsIFsnYXVkaW8vZWZmZWN0cy9sYXplci53YXYnXSk7XHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3N0YWdlLTEnLCBbJ2F1ZGlvL2JhY2tncm91bmQvc3RhZ2UtMS5tcDMnLCAnYXVkaW8vYmFja2dyb3VuZC9zdGFnZS0xLm9nZyddKTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoZ2FtZSkge1xyXG5cdHZhciByYXB0b3JzO1xyXG4gICAgdmFyIHNwYXduID0gZnVuY3Rpb24gKCkgeyBcclxuXHJcbiAgICAgICAgdmFyIHggPSBnYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg0MCwgNjAwKSAgLCB5ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMCwgMTApO1xyXG4gICAgICAgIHZhciBfYWxpZW4gPSBhbGllbnMuY3JlYXRlKHgsIHksICdhdGxhcycsICdiYWQtZ3V5MS5wbmcnKTtcclxuICAgICAgICBfYWxpZW4uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuIFxyXG4gICAgICAgIF9hbGllbi5ib2R5Lm1vdmVzID0gdHJ1ZTtcclxuICAgICAgICBfYWxpZW4uYm9keS52ZWxvY2l0eS5zZXRUbygwLCAxMDApIDsgXHJcbiAgICB9O1xyXG5cclxuXHR2YXIgY29sbGlzaW9uSGFuZGxlciA9IGZ1bmN0aW9uICAoYnVsbGV0LCBhbGllbikge1xyXG5cclxuXHQgICAgYnVsbGV0LmtpbGwoKTtcclxuXHQgICAgYWxpZW4ua2lsbCgpO1xyXG5cdCAgICB3aW5kb3cuYm9vbS5wbGF5KCk7XHJcblx0ICAgIHZhciB4ID0gYWxpZW4uYm9keS54LCB5ID1hbGllbi5ib2R5LnlcclxuXHQgICAgdmFyIGV4cGxvc2lvbiA9IGV4cGxvc2lvbnMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG5cdCAgICBleHBsb3Npb24ucmVzZXQoYWxpZW4uYm9keS54LCBhbGllbi5ib2R5LnkpO1xyXG5cdCAgICBleHBsb3Npb24ucGxheSgnZXhwbG9kZScsIDMwLCBmYWxzZSwgdHJ1ZSk7XHJcblx0fTtcclxuXHJcbiAgICB2YXIgc3Bhd25SYXB0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcdHZhciB4ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsIDYwMCkgICwgeSA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsIDEwKTtcclxuICAgICAgICB2YXIgX2FsaWVuID0gcmFwdG9ycy5jcmVhdGUoeCwgeSwgJ2F0bGFzJywgJ3JhcHRvci0xLnBuZycpO1xyXG4gICAgICAgIF9hbGllbi5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gXHJcbiAgICAgICAgX2FsaWVuLmJvZHkubW92ZXMgPSB0cnVlO1xyXG4gICAgICAgIF9hbGllbi5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDE1MCkgOyBcclxuICAgIH1cclxuXHR2YXIgZW5lbXlGYWN0b3J5O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR3aW5kb3cuYWxpZW5zID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIFx0XHRhbGllbnMuZW5hYmxlQm9keSA9IHRydWU7XHJcbiAgICBcdFx0YWxpZW5zLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuICAgIFx0XHRyYXB0b3JzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIFx0XHRyYXB0b3JzLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG4gICAgXHRcdHJhcHRvcnMucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xyXG5cdFx0ICAgIG11c2ljLnBsYXkoJycsIDAsIDEsIHRydWUpO1xyXG5cclxuICAgIFx0XHRnYW1lLnRpbWUuZXZlbnRzLnJlcGVhdChQaGFzZXIuVGltZXIuU0VDT05EICogMiwgMTA1LCBzcGF3biwgdGhpcyk7XHJcblxyXG4gICAgXHRcdGdhbWUudGltZS5ldmVudHMucmVwZWF0KFBoYXNlci5UaW1lci5TRUNPTkQgKiA4LCAyMCwgc3Bhd25SYXB0b3IsIHRoaXMpO1xyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZSA6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Ly9nYW1lIGxvb3AgZm9yIHRoZSBzdGFnZVxyXG5cdFx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoYnVsbGV0cywgYWxpZW5zLCBjb2xsaXNpb25IYW5kbGVyLCBudWxsLCB0aGlzKTtcclxuXHRcdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsIHJhcHRvcnMsIGNvbGxpc2lvbkhhbmRsZXIsIG51bGwsIHRoaXMpO1xyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG59IiwidmFyIGJ1bGxldFRpbWUgPSAwO1xyXG4gZnVuY3Rpb24gcmVzZXRCdWxsZXQgKGJ1bGxldCkge1xyXG5cclxuICAgIGJ1bGxldC5raWxsKCk7XHJcblxyXG59O1xyXG5cclxuIFxyXG4gICAgdmFyIHJpZ2h0X2J1bGxldFRpbWUgPSAwLCBsZWZ0X2J1bGxldFRpbWUgPSAwOyBcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBidWxsZXRzID0gd2luZG93LmJ1bGxldHM7XHJcblxyXG4gICAgXHJcbiAgICB2YXIgY3Vyc29ycyA9IHdpbmRvdy5jdXJzb3JzOyBcclxuXHJcblxyXG5cclxuICAgIHBsYXllci51cGRhdGUoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGN1cnNvcnMpO1xyXG4gICAgICAgIHN0YWdlMS51cGRhdGUoKTtcclxuICAgICAgICBcclxufTtcclxuIl19
