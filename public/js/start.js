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
  var GameController = window.GameController = require('game-controller').GameController;
  console.log(GameController);
  GameController.init({
    left: {
      type: 'joystick',
      joystick: {
        touchStart: function() {},
        touchMove: function(joystick_details) {},
        touchEnd: function() {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXNvbVxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvSXNvbS9Qcm9qZWN0cy9zcGFjZS1kZWZlbnNlL25vZGVfbW9kdWxlcy9nYW1lLWNvbnRyb2xsZXIvZ2FtZWNvbnRyb2xsZXIuanMiLCJDOlxcVXNlcnNcXElzb21cXFByb2plY3RzXFxzcGFjZS1kZWZlbnNlXFxwdWJsaWNcXGpzXFxnYW1lLmpzIiwiQzpcXFVzZXJzXFxJc29tXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxcY3JlYXRlLmpzIiwiQzpcXFVzZXJzXFxJc29tXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxccGxheWVyLmpzIiwiQzpcXFVzZXJzXFxJc29tXFxQcm9qZWN0c1xcc3BhY2UtZGVmZW5zZVxccHVibGljXFxqc1xcZ2FtZVxccHJlbG9hZC5qcyIsIkM6XFxVc2Vyc1xcSXNvbVxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHNjZW5lc1xcc2NlbmUtMS5qcyIsIkM6XFxVc2Vyc1xcSXNvbVxcUHJvamVjdHNcXHNwYWNlLWRlZmVuc2VcXHB1YmxpY1xcanNcXGdhbWVcXHVwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtDQUFBOzs7QUN4REQ7QUFBSSxDQUFKLEVBQUksQ0FBQSxVQUFVLEVBQUcsRUFBQyxDQUFDO0NBQ2xCLE9BQVMsWUFBVyxDQUFFLE1BQU0sQ0FBRTtBQUUzQixDQUFBLE9BQU0sS0FBSyxFQUFFLENBQUM7Q0FFakI7QUFBQSxDQUFBLEFBQUM7QUFHTSxDQUFKLEVBQUksQ0FBQSxnQkFBZ0IsRUFBRyxFQUFDO0FBQUUsQ0FBQSxrQkFBZSxFQUFHLEVBQUMsQ0FBQztBQUVsRCxDQUFBLEtBQU0sUUFBUSxFQUFJLFVBQVUsQ0FBRTtBQUN0QixDQUFKLElBQUksQ0FBQSxPQUFPLEVBQUcsQ0FBQSxNQUFNLFFBQVEsQ0FBQztBQUd6QixDQUFKLElBQUksQ0FBQSxPQUFPLEVBQUcsQ0FBQSxNQUFNLFFBQVEsQ0FBQztBQUk3QixDQUFBLE9BQU0sT0FBTyxFQUFFLENBQUM7QUFFWixDQUFBLE9BQU0sT0FBTyxFQUFFLENBQUM7Q0FFdkIsQ0FBQztDQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBIZWxwZXJzIFxyXG4gKi9cclxuKCBmdW5jdGlvbihleHBvcnRzKSB7XHJcblx0dmFyIF9fc2xpY2UgPSBbXS5zbGljZTtcclxuXHR2YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XHJcblx0dmFyIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xyXG5cdC8qICQuZXh0ZW5kIGZ1bmN0aW9uYWxpdHkgKi9cclxuXHRmdW5jdGlvbiBleHRlbmQoIHRhcmdldCwgc3JjIClcclxuXHR7XHJcblx0XHR2YXIgb3B0aW9ucywgbmFtZSwgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxyXG5cdFx0XHRpID0gMSxcclxuXHRcdFx0bGVuZ3RoID0gMixcclxuXHRcdFx0ZGVlcCA9IHRydWU7XHJcblx0XHJcblx0XHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXHJcblx0XHRpZiggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKVxyXG5cdFx0e1xyXG5cdFx0XHRkZWVwID0gdGFyZ2V0O1xyXG5cdFx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XHJcblx0XHRcdGkgPSAyO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0Ly8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nKCBwb3NzaWJsZSBpbiBkZWVwIGNvcHkgKVxyXG5cdFx0aWYoIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIXR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicgKVxyXG5cdFx0e1xyXG5cdFx0XHR0YXJnZXQgPSB7fTtcclxuXHRcdH1cclxuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcclxuXHRcdGlmKCBvcHRpb25zID0gc3JjIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxyXG5cdFx0XHRmb3IoIG5hbWUgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XHJcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XHJcblx0XHJcblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxyXG5cdFx0XHRcdGlmKCB0YXJnZXQgPT09IGNvcHkgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcclxuXHRcdFx0XHRpZiggZGVlcCAmJiggdHlwZW9mIGNvcHkgPT0gJ29iamVjdCcgfHwoIGNvcHlJc0FycmF5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCAgY29weSAgKSA9PT0gJ1tvYmplY3QgQXJyYXldJyApICkgKSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiggY29weUlzQXJyYXkgKSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCAgc3JjICApID09PSAnW29iamVjdCBBcnJheV0nID8gc3JjIDogW107XHJcblx0XHJcblx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgdHlwZW9mIHNyYyA9PSAnb2JqZWN0JyA/IHNyYyA6IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXHJcblx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoIGNsb25lLCBjb3B5ICk7XHJcblx0XHJcblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXHJcblx0XHRcdFx0fSBcclxuXHRcdFx0XHRlbHNlIGlmKCB0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcgKSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRhcmdldDtcclxuXHR9XHJcblx0XHJcblx0Ly8gTWFrZSBhdmFpbGFibGUgdG8gd2luZG93XHJcblx0ZXhwb3J0cy5HYW1lQ29udHJvbGxlciA9IHtcclxuXHRcdFxyXG5cdFx0Ly8gRGVmYXVsdCBvcHRpb25zLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRsZWZ0OiB7IFxyXG5cdFx0XHRcdHR5cGU6ICdkcGFkJywgXHJcblx0XHRcdFx0cG9zaXRpb246IHsgbGVmdDogJzEzJScsIGJvdHRvbTogJzIyJScgfSxcclxuXHRcdFx0XHRkcGFkOiB7XHJcblx0XHRcdFx0XHR1cDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyLFxyXG5cdFx0XHRcdFx0XHR0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzOCApO1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgMzggKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICd1cCcsIDM4ICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsZWZ0OiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnNyUnLFxyXG5cdFx0XHRcdFx0XHRzdHJva2U6IDIsXHJcblx0XHRcdFx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDM3ICk7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzNyApO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b3VjaEVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzcgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICc3JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzE1JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgNDAgKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDQwICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCA0MCApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cmlnaHQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMixcclxuXHRcdFx0XHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzkgKTtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDM5ICk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOSApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRqb3lzdGljazoge1xyXG5cdFx0XHRcdFx0cmFkaXVzOiA2MCxcclxuXHRcdFx0XHRcdHRvdWNoTW92ZTogZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCBlICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyaWdodDogeyBcclxuXHRcdFx0XHR0eXBlOiAnYnV0dG9ucycsIFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7IHJpZ2h0OiAnMTclJywgYm90dG9tOiAnMjglJyB9LCBcclxuXHRcdFx0XHRidXR0b25zOiBbXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAnLTEzJScsIHk6IDAgfSwgbGFiZWw6ICdYJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLCBmb250Q29sb3I6ICcjZmZmJywgdG91Y2hTdGFydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdC8vIEJsdWUgaXMgY3VycmVudGx5IG1hcHBlZCB0byB1cCBidXR0b25cclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzggKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOCApO1xyXG5cdFx0XHRcdFx0fSwgdG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOCApO1x0XHJcblx0XHRcdFx0XHR9IH0sXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAwLCB5OiAnLTExJScgfSwgbGFiZWw6ICdZJywgcmFkaXVzOiAnNyUnLCBzdHJva2U6IDIsIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsIGZvbnRDb2xvcjogJyNmZmYnIH0sXHJcblx0XHRcdFx0XHR7IG9mZnNldDogeyB4OiAnMTMlJywgeTogMCB9LCBsYWJlbDogJ0InLCByYWRpdXM6ICc3JScsIHN0cm9rZTogMiwgYmFja2dyb3VuZENvbG9yOiAncmVkJywgZm9udENvbG9yOiAnI2ZmZicsIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBSZWQgaXMgY3VycmVudGx5IG1hcHBlZCB0byBkb3duIGJ1dHRvbiwgYW5kIHNwYWNlIGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAncHJlc3MnLCAzMiApO1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAnZG93bicsIDMyICk7XHJcblx0XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdwcmVzcycsIDQwICk7XHJcblx0XHRcdFx0XHRcdEdhbWVDb250cm9sbGVyLnNpbXVsYXRlS2V5RXZlbnQoICdkb3duJywgNDAgKTtcclxuXHRcdFx0XHRcdH0sIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgMzIgKTtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3VwJywgNDAgKTtcclxuXHRcdFx0XHRcdH0gfSxcclxuXHRcdFx0XHRcdHsgb2Zmc2V0OiB7IHg6IDAsIHk6ICcxMSUnIH0sIGxhYmVsOiAnQScsIHJhZGl1czogJzclJywgc3Ryb2tlOiAyLCBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsIGZvbnRDb2xvcjogJyNmZmYnLCB0b3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gR3JlZW4gaXMgY3VycmVudGx5IG1hcHBlZCB0byB1cCBidXR0b25cclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ3ByZXNzJywgMzggKTtcclxuXHRcdFx0XHRcdFx0R2FtZUNvbnRyb2xsZXIuc2ltdWxhdGVLZXlFdmVudCggJ2Rvd24nLCAzOCApO1xyXG5cdFx0XHRcdFx0fSwgdG91Y2hFbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRHYW1lQ29udHJvbGxlci5zaW11bGF0ZUtleUV2ZW50KCAndXAnLCAzOCApO1x0XHJcblx0XHRcdFx0XHR9ICB9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRkcGFkOiB7XHJcblx0XHRcdFx0XHR1cDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bGVmdDoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE1JScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzclJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZG93bjoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzclJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUlJyxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cmlnaHQ6IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNSUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc3JScsXHJcblx0XHRcdFx0XHRcdHN0cm9rZTogMlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0am95c3RpY2s6IHtcclxuXHRcdFx0XHRcdHJhZGl1czogNjAsXHJcblx0XHRcdFx0XHR0b3VjaE1vdmU6IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyggZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hSYWRpdXM6IDQ1XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyBBcmVhcyAob2JqZWN0cykgb24gdGhlIHNjcmVlbiB0aGF0IGNhbiBiZSB0b3VjaGVkXHJcblx0XHR0b3VjaGFibGVBcmVhczogW10sXHJcblx0XHRcclxuXHRcdC8vIE11bHRpLXRvdWNoXHJcblx0XHR0b3VjaGVzOiBbXSxcclxuXHRcdFxyXG5cdFx0Ly8gSGVhdnkgc3ByaXRlcyAod2l0aCBncmFkaWVudHMpIGFyZSBjYWNoZWQgYXMgYSBjYW52YXMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxyXG5cdFx0Y2FjaGVkU3ByaXRlczoge30sXHJcblx0XHRcclxuXHRcdHBhdXNlZDogZmFsc2UsXHJcblx0XHRcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlcmUncyBubyB0b3VjaCBzdXBwb3J0XHJcblx0XHRcdGlmKCAhICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFxyXG5cdFxyXG5cdFx0XHQvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgYW5kIHNwZWNpZmllZCBvcHRpb25zXHJcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0XHRleHRlbmQoIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1x0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBHcmFiIHRoZSBjYW52YXMgaWYgb25lIHdhc24ndCBwYXNzZWRcclxuXHRcdFx0dmFyIGVsZTtcclxuXHRcdFx0aWYoICF0aGlzLm9wdGlvbnMuY2FudmFzIHx8ICEoIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCB0aGlzLm9wdGlvbnMuY2FudmFzICkgKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdjYW52YXMnIClbMF07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiggZWxlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jYW52YXMgPSBlbGU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMub3B0aW9ucy5jdHggPSB0aGlzLm9wdGlvbnMuY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENyZWF0ZSBhIGNhbnZhcyB0aGF0IGdvZXMgZGlyZWN0bHkgb24gdG9wIG9mIHRoZSBnYW1lIGNhbnZhc1xyXG5cdFx0XHR0aGlzLmNyZWF0ZU92ZXJsYXlDYW52YXMoKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ3JlYXRlcyB0aGUgY2FudmFzIHRoYXQgc2l0cyBvbiB0b3Agb2YgdGhlIGdhbWUncyBjYW52YXMgYW5kIGhvbGRzIGdhbWUgY29udHJvbHMgXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZU92ZXJsYXlDYW52YXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBTY2FsZSB0byBzYW1lIHNpemUgYXMgb3JpZ2luYWwgY2FudmFzXHJcblx0XHRcdHRoaXMucmVzaXplKCB0cnVlICk7XHJcblx0XHRcdFxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2JvZHknIClbMF0uYXBwZW5kQ2hpbGQoIHRoaXMuY2FudmFzICk7XHJcblx0XHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBXYWl0IGZvciBhbnkgb3RoZXIgZXZlbnRzIHRvIGZpbmlzaFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBHYW1lQ29udHJvbGxlci5yZXNpemUuY2FsbCggX3RoaXMgKTsgfSwgMSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gU2V0IHRoZSB0b3VjaCBldmVudHMgZm9yIHRoaXMgbmV3IGNhbnZhc1xyXG5cdFx0XHR0aGlzLnNldFRvdWNoRXZlbnRzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBMb2FkIGluIHRoZSBpbml0aWFsIFVJIGVsZW1lbnRzXHJcblx0XHRcdHRoaXMubG9hZFNpZGUoICdsZWZ0JyApO1xyXG5cdFx0XHR0aGlzLmxvYWRTaWRlKCAncmlnaHQnICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBTdGFydHMgdXAgdGhlIHJlbmRlcmluZyAvIGRyYXdpbmdcclxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCAhIHRoaXMudG91Y2hlcyB8fCB0aGlzLnRvdWNoZXMubGVuZ3RoID09IDAgKVxyXG5cdFx0XHRcdHRoaXMucGF1c2VkID0gdHJ1ZTsgLy8gcGF1c2UgdW50aWwgYSB0b3VjaCBldmVudFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0cGl4ZWxSYXRpbzogMSxcclxuXHRcdHJlc2l6ZTogZnVuY3Rpb24oIGZpcnN0VGltZSApIHtcclxuXHRcdFx0Ly8gU2NhbGUgdG8gc2FtZSBzaXplIGFzIG9yaWdpbmFsIGNhbnZhc1xyXG5cdFx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMub3B0aW9ucy5jYW52YXMud2lkdGg7XHJcblx0XHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMub3B0aW9ucy5jYW52YXMuaGVpZ2h0O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gR2V0IGluIG9uIHRoaXMgcmV0aW5hIGFjdGlvblxyXG5cdFx0XHRpZiggdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS53aWR0aCAmJiB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLmhlaWdodCAmJiB0aGlzLm9wdGlvbnMuY2FudmFzLnN0eWxlLmhlaWdodC5pbmRleE9mKCAncHgnICkgIT09IC0xICkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMub3B0aW9ucy5jYW52YXMuc3R5bGUud2lkdGg7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5zdHlsZS5oZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5waXhlbFJhdGlvID0gdGhpcy5jYW52YXMud2lkdGggLyBwYXJzZUludCggdGhpcy5jYW52YXMuc3R5bGUud2lkdGggKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gdGhpcy5vcHRpb25zLmNhbnZhcy5vZmZzZXRMZWZ0ICsgJ3B4JztcclxuXHRcdFx0dGhpcy5jYW52YXMuc3R5bGUudG9wID0gdGhpcy5vcHRpb25zLmNhbnZhcy5vZmZzZXRUb3AgKyAncHgnO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoICdzdHlsZScsIHRoaXMuY2FudmFzLmdldEF0dHJpYnV0ZSggJ3N0eWxlJyApICsnIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7JyApO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoICFmaXJzdFRpbWUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBjdXJyZW50IGJ1dHRvbnNcclxuXHRcdFx0XHR0aGlzLnRvdWNoYWJsZUFyZWFzID0gW107XHJcblx0XHRcdFx0Ly8gQ2xlYXIgb3V0IHRoZSBjYWNoZWQgc3ByaXRlc1xyXG5cdFx0XHRcdHRoaXMuY2FjaGVkU3ByaXRlcyA9IFtdO1xyXG5cdFx0XHRcdC8vIFJlbG9hZCBpbiB0aGUgaW5pdGlhbCBVSSBlbGVtZW50c1xyXG5cdFx0XHRcdHRoaXMucmVsb2FkU2lkZSggJ2xlZnQnICk7XHJcblx0XHRcdFx0dGhpcy5yZWxvYWRTaWRlKCAncmlnaHQnICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgc2NhbGVkIHBpeGVscy4gR2l2ZW4gdGhlIHZhbHVlIHBhc3NlZFxyXG5cdFx0ICogQHBhcmFtIHtpbnQvc3RyaW5nfSB2YWx1ZSAtIGVpdGhlciBhbiBpbnRlZ2VyIGZvciAjIG9mIHBpeGVscywgb3IgJ3glJyBmb3IgcmVsYXRpdmVcclxuXHRcdCAqIEBwYXJhbSB7Y2hhcn0gYXhpcyAtIHgsIHlcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UGl4ZWxzOiBmdW5jdGlvbiggdmFsdWUsIGF4aXMgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiggdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0cmV0dXJuIDBcclxuXHRcdFx0ZWxzZSBpZiggdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyApXHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHRlbHNlIC8vIGEgcGVyY2VudGFnZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGF4aXMgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHJldHVybiAoIHBhcnNlSW50KCB2YWx1ZSApIC8gMTAwICkgKiB0aGlzLmNhbnZhcy53aWR0aDtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gKCBwYXJzZUludCggdmFsdWUgKSAvIDEwMCApICogdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNpbXVsYXRlcyBhIGtleSBwcmVzc1xyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtICdkb3duJywgJ3VwJ1xyXG5cdFx0ICogQHBhcmFtIHtjaGFyfSBjaGFyYWN0ZXJcclxuXHRcdCAqL1xyXG5cdFx0c2ltdWxhdGVLZXlFdmVudDogZnVuY3Rpb24oIGV2ZW50TmFtZSwga2V5Q29kZSApIHtcclxuXHRcdFx0aWYoIHR5cGVvZiB3aW5kb3cub25rZXlkb3duID09PSAndW5kZWZpbmVkJyApIC8vIE5vIGtleWJvYXJkLCBjYW4ndCBzaW11bGF0ZS4uLlxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0LyogSWYgdGhleSBoYXZlIGpRdWVyeSwgdXNlIGl0IGJlY2F1c2UgaXQgd29ya3MgYmV0dGVyIGZvciBtb2JpbGUgc2FmYXJpICovXHJcblx0XHRcdGlmKCBqUXVlcnkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHByZXNzID0galF1ZXJ5LkV2ZW50KCAna2V5JyArIGV2ZW50TmFtZSApO1xyXG5cdFx0XHRcdHByZXNzLmN0cmxLZXkgPSBmYWxzZTtcclxuXHRcdFx0XHRwcmVzcy53aGljaCA9IGtleUNvZGU7XHJcblx0XHRcdFx0JCggZG9jdW1lbnQgKS50cmlnZ2VyKCBwcmVzcyApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR2YXIgb0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdLZXlib2FyZEV2ZW50JyApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQ2hyb21pdW0gSGFja1xyXG5cdFx0XHRpZiggbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpICE9PSAtMSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG9FdmVudCwgJ2tleUNvZGUnLCB7XHJcblx0XHRcdFx0XHRnZXQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMua2V5Q29kZVZhbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHQgXHJcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBvRXZlbnQsICd3aGljaCcsIHtcclxuXHRcdFx0XHRcdGdldCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5rZXlDb2RlVmFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiggb0V2ZW50LmluaXRLZXlib2FyZEV2ZW50IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9FdmVudC5pbml0S2V5Ym9hcmRFdmVudCggJ2tleScgKyBldmVudE5hbWUsIHRydWUsIHRydWUsIGRvY3VtZW50LmRlZmF1bHRWaWV3LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwga2V5Q29kZSwga2V5Q29kZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9FdmVudC5pbml0S2V5RXZlbnQoICdrZXknICsgZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBkb2N1bWVudC5kZWZhdWx0VmlldywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGtleUNvZGUsIGtleUNvZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdG9FdmVudC5rZXlDb2RlVmFsID0ga2V5Q29kZTtcclxuXHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0c2V0VG91Y2hFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHR2YXIgdG91Y2hTdGFydCA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGlmKCBfdGhpcy5wYXVzZWQgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcclxuXHRcdFx0XHQvLyBNaWNyb3NvZnQgYWx3YXlzIGhhcyB0byBoYXZlIHRoZWlyIG93biBzdHVmZi4uLlxyXG5cdFx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5jbGllbnRYICYmIGUucG9pbnRlclR5cGUgPT0gZS5NU1BPSU5URVJfVFlQRV9UT1VDSCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlc1sgZS5wb2ludGVySWQgXSA9IHsgY2xpZW50WDogZS5jbGllbnRYLCBjbGllbnRZOiBlLmNsaWVudFkgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdF90aGlzLnRvdWNoZXMgPSBlLnRvdWNoZXMgfHwgW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFxyXG5cdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQsIGZhbHNlICk7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgdG91Y2hFbmQgPSBmdW5jdGlvbiggZSApIHtcdFx0XHRcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5wb2ludGVyVHlwZSA9PSBlLk1TUE9JTlRFUl9UWVBFX1RPVUNIIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkZWxldGUgX3RoaXMudG91Y2hlc1sgZS5wb2ludGVySWQgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0X3RoaXMudG91Y2hlcyA9IGUudG91Y2hlcyB8fCBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoICFlLnRvdWNoZXMgfHwgZS50b3VjaGVzLmxlbmd0aCA9PSAwIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBEcmF3IG9uY2UgbW9yZSB0byByZW1vdmUgdGhlIHRvdWNoIGFyZWFcclxuXHRcdFx0XHRcdF90aGlzLnJlbmRlcigpO1xyXG5cdFx0XHRcdFx0X3RoaXMucGF1c2VkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoRW5kICk7XHJcblx0XHJcblx0XHRcdHZhciB0b3VjaE1vdmUgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiBlLmNsaWVudFggJiYgZS5wb2ludGVyVHlwZSA9PSBlLk1TUE9JTlRFUl9UWVBFX1RPVUNIIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzWyBlLnBvaW50ZXJJZCBdID0geyBjbGllbnRYOiBlLmNsaWVudFgsIGNsaWVudFk6IGUuY2xpZW50WSB9O1x0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRfdGhpcy50b3VjaGVzID0gZS50b3VjaGVzIHx8IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNoTW92ZSApO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyRG93bicsIHRvdWNoU3RhcnQgKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyVXAnLCB0b3VjaEVuZCApO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyB0aGUgYXJlYSB0byBhIGxpc3Qgb2YgdG91Y2hhYmxlIGFyZWFzLCBkcmF3c1xyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCBwcm9wZXJ0aWVzOiB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCwgdG91Y2hNb3ZlXHJcblx0XHQgKi9cclxuXHRcdGFkZFRvdWNoYWJsZURpcmVjdGlvbjogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgZGlyZWN0aW9uID0gbmV3IFRvdWNoYWJsZURpcmVjdGlvbiggb3B0aW9ucyApO1xyXG5cdFx0XHRcclxuXHRcdFx0ZGlyZWN0aW9uLmlkID0gdGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBkaXJlY3Rpb24gKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkcyB0aGUgY2lyY3VsYXIgYXJlYSB0byBhIGxpc3Qgb2YgdG91Y2hhYmxlIGFyZWFzLCBkcmF3c1x0XHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHByb3BlcnRpZXM6IHgsIHksIHdpZHRoLCBoZWlnaHQsIHRvdWNoU3RhcnQsIHRvdWNoRW5kLCB0b3VjaE1vdmVcclxuXHRcdCAqL1xyXG5cdFx0YWRkSm95c3RpY2s6IGZ1bmN0aW9uKCBvcHRpb25zICkgeyAvL3gsIHksIHJhZGl1cywgYmFja2dyb3VuZENvbG9yLCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCApIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBqb3lzdGljayA9IG5ldyBUb3VjaGFibGVKb3lzdGljayggb3B0aW9ucyApO1xyXG5cdFx0XHRcclxuXHRcdFx0am95c3RpY2suaWQgPSB0aGlzLnRvdWNoYWJsZUFyZWFzLnB1c2goIGpveXN0aWNrICk7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGRzIHRoZSBjaXJjdWxhciBhcmVhIHRvIGEgbGlzdCBvZiB0b3VjaGFibGUgYXJlYXMsIGRyYXdzXHQgXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHByb3BlcnRpZXM6IHgsIHksIHdpZHRoLCBoZWlnaHQsIHRvdWNoU3RhcnQsIHRvdWNoRW5kLCB0b3VjaE1vdmVcclxuXHRcdCAqL1xyXG5cdFx0YWRkQnV0dG9uOiBmdW5jdGlvbiggb3B0aW9ucyApIHsgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciwgdG91Y2hTdGFydCwgdG91Y2hFbmQgKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgYnV0dG9uID0gbmV3IFRvdWNoYWJsZUJ1dHRvbiggb3B0aW9ucyApO1xyXG5cdFx0XHRcclxuXHRcdFx0YnV0dG9uLmlkID0gdGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBidXR0b24gKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGFkZFRvdWNoYWJsZUFyZWE6IGZ1bmN0aW9uKCBjaGVjaywgY2FsbGJhY2sgKSB7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkQnV0dG9uczogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdHZhciBidXR0b25zID0gdGhpcy5vcHRpb25zWyBzaWRlIF0uYnV0dG9ucztcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGogPSBidXR0b25zLmxlbmd0aDsgaSA8IGo7IGkrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgcG9zWCA9IHRoaXMuZ2V0UG9zaXRpb25YKCBzaWRlICk7XHJcblx0XHRcdFx0dmFyIHBvc1kgPSB0aGlzLmdldFBvc2l0aW9uWSggc2lkZSApO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGJ1dHRvbnNbaV0ueCA9IHBvc1ggKyB0aGlzLmdldFBpeGVscyggYnV0dG9uc1tpXS5vZmZzZXQueCwgJ3knICk7XHJcblx0XHRcdFx0YnV0dG9uc1tpXS55ID0gcG9zWSArIHRoaXMuZ2V0UGl4ZWxzKCBidXR0b25zW2ldLm9mZnNldC55LCAneScgKTtcclxuXHRcclxuXHRcdFx0XHR0aGlzLmFkZEJ1dHRvbiggYnV0dG9uc1tpXSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkRFBhZDogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdHZhciBkcGFkID0gdGhpcy5vcHRpb25zWyBzaWRlIF0uZHBhZCB8fCB7fTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENlbnRlcmVkIHZhbHVlIGlzIGF0IHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uXHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHBvc1ggPSB0aGlzLmdldFBvc2l0aW9uWCggc2lkZSApO1xyXG5cdFx0XHR2YXIgcG9zWSA9IHRoaXMuZ2V0UG9zaXRpb25ZKCBzaWRlICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gSWYgdGhleSBoYXZlIGFsbCA0IGRpcmVjdGlvbnMsIGFkZCBhIGNpcmNsZSB0byB0aGUgY2VudGVyIGZvciBsb29rc1xyXG5cdFx0XHRpZiggZHBhZC51cCAmJiBkcGFkLmxlZnQgJiYgZHBhZC5kb3duICYmIGRwYWQucmlnaHQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHR4OiBwb3NYLFxyXG5cdFx0XHRcdFx0eTogcG9zWSxcclxuXHRcdFx0XHRcdHJhZGl1czogZHBhZC5yaWdodC5oZWlnaHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGNlbnRlciA9IG5ldyBUb3VjaGFibGVDaXJjbGUoIG9wdGlvbnMgKTsgXHJcblx0XHRcdFx0dGhpcy50b3VjaGFibGVBcmVhcy5wdXNoKCBjZW50ZXIgKTtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHQvLyBVcCBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC51cCAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC51cC54ID0gcG9zWCAtIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLnVwLndpZHRoLCAneScgKSAvIDI7XHJcblx0XHRcdFx0ZHBhZC51cC55ID0gcG9zWSAtICggdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAuaGVpZ2h0LCAneScgKSArICB0aGlzLmdldFBpeGVscyggZHBhZC5sZWZ0LmhlaWdodCwgJ3knICkgLyAyICk7XHJcblx0XHRcdFx0ZHBhZC51cC5kaXJlY3Rpb24gPSAndXAnO1xyXG5cdFx0XHRcdHRoaXMuYWRkVG91Y2hhYmxlRGlyZWN0aW9uKCBkcGFkLnVwICk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0Ly8gTGVmdCBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC5sZWZ0ICE9PSBmYWxzZSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkcGFkLmxlZnQueCA9IHBvc1ggLSAoIHRoaXMuZ2V0UGl4ZWxzKCBkcGFkLmxlZnQud2lkdGgsICd5JyApICsgdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAud2lkdGgsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQubGVmdC55ID0gcG9zWSAtICggdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC5oZWlnaHQsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQubGVmdC5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQubGVmdCApO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdC8vIERvd24gYXJyb3dcclxuXHRcdFx0aWYoIGRwYWQuZG93biAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC5kb3duLnggPSBwb3NYIC0gdGhpcy5nZXRQaXhlbHMoIGRwYWQuZG93bi53aWR0aCwgJ3knICkgLyAyO1xyXG5cdFx0XHRcdGRwYWQuZG93bi55ID0gcG9zWSArICggdGhpcy5nZXRQaXhlbHMoIGRwYWQubGVmdC5oZWlnaHQsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQuZG93bi5kaXJlY3Rpb24gPSAnZG93bic7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQuZG93biApO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSaWdodCBhcnJvd1xyXG5cdFx0XHRpZiggZHBhZC5yaWdodCAhPT0gZmFsc2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZHBhZC5yaWdodC54ID0gcG9zWCArICggdGhpcy5nZXRQaXhlbHMoIGRwYWQudXAud2lkdGgsICd5JyApIC8gMiApO1xyXG5cdFx0XHRcdGRwYWQucmlnaHQueSA9IHBvc1kgLSB0aGlzLmdldFBpeGVscyggZHBhZC5yaWdodC5oZWlnaHQsICd5JyApIC8gMjtcclxuXHRcdFx0XHRkcGFkLnJpZ2h0LmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcblx0XHRcdFx0dGhpcy5hZGRUb3VjaGFibGVEaXJlY3Rpb24oIGRwYWQucmlnaHQgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxvYWRKb3lzdGljazogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdHZhciBqb3lzdGljayA9IHRoaXMub3B0aW9uc1sgc2lkZSBdLmpveXN0aWNrO1xyXG5cdFx0XHRqb3lzdGljay54ID0gdGhpcy5nZXRQb3NpdGlvblgoIHNpZGUgKTtcclxuXHRcdFx0am95c3RpY2sueSA9IHRoaXMuZ2V0UG9zaXRpb25ZKCBzaWRlICk7XHJcblx0XHJcblx0XHRcdHRoaXMuYWRkSm95c3RpY2soIGpveXN0aWNrICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFVzZWQgZm9yIHJlc2l6aW5nLiBDdXJyZW50bHkgaXMganVzdCBhbiBhbGlhcyBmb3IgbG9hZFNpZGVcclxuXHRcdCAqL1xyXG5cdFx0cmVsb2FkU2lkZTogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdC8vIExvYWQgaW4gbmV3IG9uZXNcclxuXHRcdFx0dGhpcy5sb2FkU2lkZSggc2lkZSApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZFNpZGU6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHRpZiggdGhpcy5vcHRpb25zWyBzaWRlIF0udHlwZSA9PT0gJ2RwYWQnIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZERQYWQoIHNpZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS50eXBlID09PSAnam95c3RpY2snIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZEpveXN0aWNrKCBzaWRlICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiggdGhpcy5vcHRpb25zWyBzaWRlIF0udHlwZSA9PT0gJ2J1dHRvbnMnIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZEJ1dHRvbnMoIHNpZGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBOb3JtYWxpemUgdG91Y2ggcG9zaXRpb25zIGJ5IHRoZSBsZWZ0IGFuZCB0b3Agb2Zmc2V0c1xyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHhcclxuXHRcdCAqL1xyXG5cdFx0bm9ybWFsaXplVG91Y2hQb3NpdGlvblg6IGZ1bmN0aW9uKCB4IClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICggeCAtIEdhbWVDb250cm9sbGVyLm9wdGlvbnMuY2FudmFzLm9mZnNldExlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKSAqICggdGhpcy5waXhlbFJhdGlvICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIE5vcm1hbGl6ZSB0b3VjaCBwb3NpdGlvbnMgYnkgdGhlIGxlZnQgYW5kIHRvcCBvZmZzZXRzXHJcblx0XHQgKiBAcGFyYW0ge2ludH0geVxyXG5cdFx0ICovXHJcblx0XHRub3JtYWxpemVUb3VjaFBvc2l0aW9uWTogZnVuY3Rpb24oIHkgKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gKCB5IC0gR2FtZUNvbnRyb2xsZXIub3B0aW9ucy5jYW52YXMub2Zmc2V0VG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKSAqICggdGhpcy5waXhlbFJhdGlvICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIHggcG9zaXRpb24gd2hlbiBnaXZlbiAjIG9mIHBpeGVscyBmcm9tIHJpZ2h0IChiYXNlZCBvbiBjYW52YXMgc2l6ZSlcclxuXHRcdCAqIEBwYXJhbSB7aW50fSByaWdodCBcclxuXHRcdCAqL1xyXG5cdFx0Z2V0WEZyb21SaWdodDogZnVuY3Rpb24oIHJpZ2h0ICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jYW52YXMud2lkdGggLSByaWdodDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB5IHBvc2l0aW9uIHdoZW4gZ2l2ZW4gIyBvZiBwaXhlbHMgZnJvbSBib3R0b20gKGJhc2VkIG9uIGNhbnZhcyBzaXplKVxyXG5cdFx0ICogQHBhcmFtIHtpbnR9IHJpZ2h0IFxyXG5cdFx0ICovXHJcblx0XHRnZXRZRnJvbUJvdHRvbTogZnVuY3Rpb24oIGJvdHRvbSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodCAtIGJvdHRvbTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogR3JhYnMgdGhlIHggcG9zaXRpb24gb2YgZWl0aGVyIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGUvY29udHJvbHNcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzaWRlIC0gJ2xlZnQnLCAncmlnaHQnIFxyXG5cdFx0ICovXHJcblx0XHRnZXRQb3NpdGlvblg6IGZ1bmN0aW9uKCBzaWRlICkge1xyXG5cdFx0XHRpZiggdHlwZW9mIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLmxlZnQgIT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQaXhlbHMoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLmxlZnQsICd4JyApO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0WEZyb21SaWdodCggdGhpcy5nZXRQaXhlbHMoIHRoaXMub3B0aW9uc1sgc2lkZSBdLnBvc2l0aW9uLnJpZ2h0LCAneCcgKSApO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBHcmFicyB0aGUgeSBwb3NpdGlvbiBvZiBlaXRoZXIgdGhlIGxlZnQgb3IgcmlnaHQgc2lkZS9jb250cm9sc1xyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHNpZGUgLSAnbGVmdCcsICdyaWdodCcgXHJcblx0XHQgKi9cclxuXHRcdGdldFBvc2l0aW9uWTogZnVuY3Rpb24oIHNpZGUgKSB7XHJcblx0XHRcdGlmKCB0eXBlb2YgdGhpcy5vcHRpb25zWyBzaWRlIF0ucG9zaXRpb24udG9wICE9PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi50b3AsICd5JyApO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0WUZyb21Cb3R0b20oIHRoaXMuZ2V0UGl4ZWxzKCB0aGlzLm9wdGlvbnNbIHNpZGUgXS5wb3NpdGlvbi5ib3R0b20sICd5JyApICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0XHR0aGlzLmN0eC5jbGVhclJlY3QoIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly8gV2hlbiBubyB0b3VjaCBldmVudHMgYXJlIGhhcHBlbmluZywgdGhpcyBlbmFibGVzICdwYXVzZWQnIG1vZGUsIHdoaWNoIG9ubHkgc2tpcHMgdGhpcyBzbWFsbCBwYXJ0LlxyXG5cdFx0XHQvLyBTa2lwcGluZyB0aGUgY2xlYXJSZWN0IGFuZCBkcmF3KClzIHdvdWxkIGJlIG5pY2UsIGJ1dCBpdCBtZXNzZXMgd2l0aCB0aGUgdHJhbnNwYXJlbnQgZ3JhZGllbnRzXHJcblx0XHRcdGlmKCAhIHRoaXMucGF1c2VkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjYWNoZUlkID0gJ3RvdWNoLWNpcmNsZSc7XHJcblx0XHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0XHRpZiggISBjYWNoZWQgJiYgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgc3ViQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHRcdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdFx0c3ViQ2FudmFzLndpZHRoID0gMiAqIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cztcclxuXHRcdFx0XHRcdHN1YkNhbnZhcy5oZWlnaHQgPSAyICogdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzO1xyXG5cdFx0XHJcblx0XHRcdFx0XHR2YXIgY2VudGVyID0gdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzO1xyXG5cdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCBjZW50ZXIsIGNlbnRlciwgMSwgY2VudGVyLCBjZW50ZXIsIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyApOyAvLyAxMCA9IGVuZCByYWRpdXNcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDIwMCwgMjAwLCAyMDAsIDEgKScgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDIwMCwgMjAwLCAyMDAsIDAgKScgKTtcclxuXHRcdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdFx0XHRcdGN0eC5hcmMoIGNlbnRlciwgY2VudGVyLCB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIERyYXcgdGhlIGN1cnJlbnQgdG91Y2ggcG9zaXRpb25zIGlmIGFueVxyXG5cdFx0XHRcdGZvciggdmFyIGkgPSAwLCBqID0gdGhpcy50b3VjaGVzLmxlbmd0aDsgaSA8IGo7IGkrKyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHRvdWNoID0gdGhpcy50b3VjaGVzWyBpIF07XHJcblx0XHRcdFx0XHRpZiggdHlwZW9mIHRvdWNoID09PSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0dmFyIHggPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25YKCB0b3VjaC5jbGllbnRYICksIHkgPSB0aGlzLm5vcm1hbGl6ZVRvdWNoUG9zaXRpb25ZKCB0b3VjaC5jbGllbnRZICk7XHJcblx0XHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgeCAtIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cywgeSAtIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGogPSB0aGlzLnRvdWNoYWJsZUFyZWFzLmxlbmd0aDsgaSA8IGo7IGkrKyApXHJcblx0XHRcdHtcdFxyXG5cdFx0XHRcdHRoaXMudG91Y2hhYmxlQXJlYXNbIGkgXS5kcmF3KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGFyZWEgPSB0aGlzLnRvdWNoYWJsZUFyZWFzWyBpIF07XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGFsbCB0b3VjaGVzIHRvIHNlZSBpZiBhbnkgaGl0IHRoaXMgYXJlYVxyXG5cdFx0XHRcdHZhciB0b3VjaGVkID0gZmFsc2U7XHJcblx0XHRcdFx0Zm9yKCB2YXIgayA9IDAsIGwgPSB0aGlzLnRvdWNoZXMubGVuZ3RoOyBrIDwgbDsgaysrIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgdG91Y2ggPSB0aGlzLnRvdWNoZXNbIGsgXTtcclxuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdG91Y2ggPT09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHJcblx0XHRcdFx0XHR2YXIgeCA9IHRoaXMubm9ybWFsaXplVG91Y2hQb3NpdGlvblgoIHRvdWNoLmNsaWVudFggKSwgeSA9IHRoaXMubm9ybWFsaXplVG91Y2hQb3NpdGlvblkoIHRvdWNoLmNsaWVudFkgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIENoZWNrIHRoYXQgaXQncyBpbiB0aGUgYm91bmRpbmcgYm94L2NpcmNsZVxyXG5cdFx0XHRcdFx0aWYoICggYXJlYS5jaGVjayggeCwgeSApICkgIT09IGZhbHNlIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYoICF0b3VjaGVkIClcclxuXHRcdFx0XHRcdFx0XHR0b3VjaGVkID0gdGhpcy50b3VjaGVzWyBrIF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKCB0b3VjaGVkIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiggIWFyZWEuYWN0aXZlIClcclxuXHRcdFx0XHRcdFx0YXJlYS50b3VjaFN0YXJ0V3JhcHBlciggdG91Y2hlZCApO1xyXG5cdFx0XHRcdFx0YXJlYS50b3VjaE1vdmVXcmFwcGVyKCB0b3VjaGVkICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoIGFyZWEuYWN0aXZlIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhcmVhLnRvdWNoRW5kV3JhcHBlciggdG91Y2hlZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5yZW5kZXJXcmFwcGVyICk7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTbyB3ZSBjYW4ga2VlcCBzY29wZSwgYW5kIGRvbid0IGhhdmUgdG8gY3JlYXRlIGEgbmV3IG9iaiBldmVyeSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKGJhZCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uKSBcclxuXHRcdCAqL1xyXG5cdFx0cmVuZGVyV3JhcHBlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFN1cGVyY2xhc3MgZm9yIHRvdWNoYWJsZSBzdHVmZiBcclxuXHQgKi9cclxuXHR2YXIgVG91Y2hhYmxlQXJlYSA9ICggZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFRvdWNoYWJsZUFyZWEoKSBcclxuXHRcdHtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gQ2FsbGVkIHdoZW4gdGhpcyBkaXJlY3Rpb24gaXMgYmVpbmcgdG91Y2hlZFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hTdGFydCA9IG51bGw7XHJcblx0XHRcclxuXHRcdC8vIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIGJlaW5nIG1vdmVkXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaE1vdmUgPSBudWxsO1xyXG5cdFx0XHJcblx0XHQvLyBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBubyBsb25nZXIgYmVpbmcgdG91Y2hlZFxyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hFbmQgPSBudWxsO1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50eXBlID0gJ2FyZWEnO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuaWQgPSBmYWxzZTtcclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIGZvciB0aGlzIGRpcmVjdGlvbiBiZWluZyB0b3VjaGVkXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuc2V0VG91Y2hTdGFydCA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcclxuXHRcdFx0dGhpcy50b3VjaFN0YXJ0ID0gY2FsbGJhY2s7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIG5vIGxvbmdlciB0b3VjaGVkIFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVBcmVhLnByb3RvdHlwZS50b3VjaFN0YXJ0V3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaFN0YXJ0IClcclxuXHRcdFx0XHR0aGlzLnRvdWNoU3RhcnQoKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIE1hcmsgdGhpcyBkaXJlY3Rpb24gYXMgYWN0aXZlXHJcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgZm9yIHRoaXMgZGlyZWN0aW9uIG5vIGxvbmdlciBiZWluZyB0b3VjaGVkXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUuc2V0VG91Y2hNb3ZlID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xyXG5cdFx0XHR0aGlzLnRvdWNoTW92ZSA9IGNhbGxiYWNrO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsZWQgd2hlbiB0aGlzIGRpcmVjdGlvbiBpcyBtb3ZlZC4gTWFrZSBzdXJlIGl0J3MgYWN0dWFsbHkgY2hhbmdlZCBiZWZvcmUgcGFzc2luZyB0byBkZXZlbG9wZXJcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1ggPSAwO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1kgPSAwO1xyXG5cdFx0VG91Y2hhYmxlQXJlYS5wcm90b3R5cGUudG91Y2hNb3ZlV3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaE1vdmUgJiYgKCBlLmNsaWVudFggIT0gVG91Y2hhYmxlQXJlYS5wcm90b3R5cGUubGFzdFBvc1ggfHwgZS5jbGllbnRZICE9IFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLmxhc3RQb3NZICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy50b3VjaE1vdmUoKTtcclxuXHRcdFx0XHR0aGlzLmxhc3RQb3NYID0gZS5jbGllbnRYO1xyXG5cdFx0XHRcdHRoaXMubGFzdFBvc1kgPSBlLmNsaWVudFk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBpbmFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHVzZXItc3BlY2lmaWVkIGNhbGxiYWNrIGZvciB0aGlzIGRpcmVjdGlvbiBubyBsb25nZXIgYmVpbmcgdG91Y2hlZFxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnNldFRvdWNoRW5kID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xyXG5cdFx0XHR0aGlzLnRvdWNoRW5kID0gY2FsbGJhY2s7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxlZCB3aGVuIHRoaXMgZGlyZWN0aW9uIGlzIGZpcnN0IHRvdWNoZWQgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUFyZWEucHJvdG90eXBlLnRvdWNoRW5kV3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaEVuZCApXHJcblx0XHRcdFx0dGhpcy50b3VjaEVuZCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBpbmFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIucmVuZGVyKCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlQXJlYTtcclxuXHRcdFxyXG5cdH0gKSgpO1xyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVEaXJlY3Rpb24gPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVEaXJlY3Rpb24sIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlRGlyZWN0aW9uKCBvcHRpb25zICkgXHJcblx0XHR7XHJcblx0XHRcdGZvciggdmFyIGkgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggaSA9PSAneCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3gnICk7XHJcblx0XHRcdFx0ZWxzZSBpZiggaSA9PSAneScgfHwgaSA9PSAnaGVpZ2h0JyB8fCBpID09ICd3aWR0aCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3knICk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0VG91Y2hhYmxlRGlyZWN0aW9uLnByb3RvdHlwZS50eXBlID0gJ2RpcmVjdGlvbic7XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2tzIGlmIHRoZSB0b3VjaCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGlzIGRpcmVjdGlvbiBcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlRGlyZWN0aW9uLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCB0b3VjaFgsIHRvdWNoWSApIHtcclxuXHRcdFx0dmFyIGRpc3RhbmNlWCwgZGlzdGFuY2VZO1xyXG5cdFx0XHRpZiggKCBNYXRoLmFicyggdG91Y2hYIC0gdGhpcy54ICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFggPiB0aGlzLnggKSApICYmIC8vIGxlZnRcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFggLSAoIHRoaXMueCArIHRoaXMud2lkdGggKSApIDwgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIHx8ICggdG91Y2hYIDwgdGhpcy54ICsgdGhpcy53aWR0aCApICkgJiYgLy8gcmlnaHRcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSB0aGlzLnkgKSA8ICggR2FtZUNvbnRyb2xsZXIub3B0aW9ucy50b3VjaFJhZGl1cyAvIDIgKSB8fCAoIHRvdWNoWSA+IHRoaXMueSApICkgJiYgLy8gdG9wXHJcblx0XHRcdFx0KCBNYXRoLmFicyggdG91Y2hZIC0gKCB0aGlzLnkgKyB0aGlzLmhlaWdodCApICkgPCAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgfHwgKCB0b3VjaFkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCApICkgLy8gYm90dG9tXHJcblx0XHRcdClcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlRGlyZWN0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBjYWNoZUlkID0gdGhpcy50eXBlICsgJycgKyB0aGlzLmlkICsgJycgKyB0aGlzLmFjdGl2ZTtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0aWYoICEgY2FjaGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGggKyAyICogdGhpcy5zdHJva2U7XHJcblx0XHRcdFx0c3ViQ2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMiAqIHRoaXMuc3Ryb2tlO1xyXG5cdFxyXG5cdFx0XHRcdHZhciBvcGFjaXR5ID0gdGhpcy5vcGFjaXR5IHx8IDAuOTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiggISB0aGlzLmFjdGl2ZSApIC8vIERpcmVjdGlvbiBjdXJyZW50bHkgYmVpbmcgdG91Y2hlZFxyXG5cdFx0XHRcdFx0b3BhY2l0eSAqPSAwLjU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRzd2l0Y2goIHRoaXMuZGlyZWN0aW9uIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjYXNlICd1cCc6XHJcblx0XHRcdFx0XHRcdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCggMCwgMCwgMCwgdGhpcy5oZWlnaHQgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArICggb3BhY2l0eSAqIDAuNSApICsgJyApJyApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDEsICdyZ2JhKCAwLCAwLCAwLCAnICsgb3BhY2l0eSArICcgKScgKTsgICBcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCB0aGlzLndpZHRoLCAwICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7ICAgXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxyXG5cdFx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoIDAsIDAsIHRoaXMud2lkdGgsIDAgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMCwgMCwgMCwgJyArIG9wYWNpdHkgKyAnICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDAsIDAsIDAsICcgKyAoIG9wYWNpdHkgKiAwLjUgKSArICcgKScgKTsgIFxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KCAwLCAwLCAwLCB0aGlzLmhlaWdodCApO1xyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAwLCAwLCAwLCAnICsgb3BhY2l0eSArICcgKScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMCwgMCwgMCwgJyArICggb3BhY2l0eSAqIDAuNSApICsgJyApJyApOyAgIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcclxuXHRcdFx0XHRjdHguZmlsbFJlY3QoIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjEgKSc7XHJcblx0XHRcdFx0Y3R4LnN0cm9rZVJlY3QoIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdID0gc3ViQ2FudmFzO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZHJhd0ltYWdlKCBjYWNoZWQsIHRoaXMueCwgdGhpcy55ICk7XHJcblx0XHRcdFx0XHJcblx0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlRGlyZWN0aW9uO1xyXG5cdH0gKSggVG91Y2hhYmxlQXJlYSApO1xyXG5cdFxyXG5cdHZhciBUb3VjaGFibGVCdXR0b24gPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVCdXR0b24sIF9fc3VwZXIgKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gVG91Y2hhYmxlQnV0dG9uKCBvcHRpb25zICkgLy94LCB5LCByYWRpdXMsIGJhY2tncm91bmRDb2xvciApXHJcblx0XHR7XHJcblx0XHRcdGZvciggdmFyIGkgaW4gb3B0aW9ucyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiggaSA9PSAneCcgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3gnICk7XHJcblx0XHRcdFx0ZWxzZSBpZiggaSA9PSAneCcgfHwgaSA9PSAncmFkaXVzJyApXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGl4ZWxzKCBvcHRpb25zW2ldLCAneScgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzW2ldID0gb3B0aW9uc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUJ1dHRvbi5wcm90b3R5cGUudHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdG91Y2ggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpcyBkaXJlY3Rpb24gXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUJ1dHRvbi5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdGlmKCBcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFggLSB0aGlzLnggKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApICkgJiZcclxuXHRcdFx0XHQoIE1hdGguYWJzKCB0b3VjaFkgLSB0aGlzLnkgKSA8IHRoaXMucmFkaXVzICsgKCBHYW1lQ29udHJvbGxlci5vcHRpb25zLnRvdWNoUmFkaXVzIC8gMiApIClcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVCdXR0b24ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGNhY2hlSWQgPSB0aGlzLnR5cGUgKyAnJyArIHRoaXMuaWQgKyAnJyArIHRoaXMuYWN0aXZlO1xyXG5cdFx0XHR2YXIgY2FjaGVkID0gR2FtZUNvbnRyb2xsZXIuY2FjaGVkU3ByaXRlc1sgY2FjaGVJZCBdO1xyXG5cdFx0XHRpZiggISBjYWNoZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHN1YkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblx0XHRcdFx0dmFyIGN0eCA9IHN1YkNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcblx0XHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlO1xyXG5cdFx0XHRcdHN1YkNhbnZhcy53aWR0aCA9IHN1YkNhbnZhcy5oZWlnaHQgPSAyICogKCB0aGlzLnJhZGl1cyArIGN0eC5saW5lV2lkdGggKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgMSwgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcdHZhciB0ZXh0U2hhZG93Q29sb3I7XHJcblx0XHRcdFx0c3dpdGNoKCB0aGlzLmJhY2tncm91bmRDb2xvciApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2FzZSAnYmx1ZSc6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMTIzLCAxODEsIDE5NywgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnIzEwNWE3OCcgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyMwQTQ4NjEnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2dyZWVuJzpcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSgyOSwgMjAxLCAzNiwgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnIzEwNzgxNCcgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyMwODVDMEInO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JlZCc6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoMTY1LCAzNCwgMzQsIDAuNiknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyM1MjAxMDEnICk7XHJcblx0XHRcdFx0XHRcdHRleHRTaGFkb3dDb2xvciA9ICcjMzMwMDAwJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd5ZWxsb3cnOlxyXG5cdFx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKDIxOSwgMjE3LCA1OSwgMC42KScgKTtcclxuXHRcdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAnI0U4RTEwRScgKTtcclxuXHRcdFx0XHRcdFx0dGV4dFNoYWRvd0NvbG9yID0gJyNCREI2MDAnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doaXRlJzpcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMCwgJ3JnYmEoIDI1NSwyNTUsMjU1LC4zICknICk7XHJcblx0XHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJyNlZWUnICk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB0aGlzLmFjdGl2ZSApXHRcdFx0XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdGV4dFNoYWRvd0NvbG9yO1xyXG5cdFx0XHRcdGVsc2VcdFxyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFxyXG5cdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IHRleHRTaGFkb3dDb2xvcjtcdFx0XHRcclxuXHRcdFxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHQvL2N0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRcdGN0eC5hcmMoIHN1YkNhbnZhcy53aWR0aCAvIDIsIHN1YkNhbnZhcy53aWR0aCAvIDIsIHRoaXMucmFkaXVzLCAwICwgMiAqIE1hdGguUEksIGZhbHNlICk7XHJcblx0XHRcdFx0Y3R4LmZpbGwoKTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIHRoaXMubGFiZWwgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFRleHQgU2hhZG93XHJcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gdGV4dFNoYWRvd0NvbG9yO1xyXG5cdFx0XHRcdFx0Y3R4LmZvbnQgPSAnYm9sZCAnICsgKCB0aGlzLmZvbnRTaXplIHx8IHN1YkNhbnZhcy5oZWlnaHQgKiAwLjM1ICkgKyAncHggVmVyZGFuYSc7XHJcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHRcdFx0XHRjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcblx0XHRcdFx0XHRjdHguZmlsbFRleHQoIHRoaXMubGFiZWwsIHN1YkNhbnZhcy5oZWlnaHQgLyAyICsgMiwgc3ViQ2FudmFzLmhlaWdodCAvIDIgKyAyICk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuZm9udENvbG9yO1xyXG5cdFx0XHRcdFx0Y3R4LmZvbnQgPSAnYm9sZCAnICsgKCB0aGlzLmZvbnRTaXplIHx8IHN1YkNhbnZhcy5oZWlnaHQgKiAwLjM1ICkgKyAncHggVmVyZGFuYSc7XHJcblx0XHRcdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHRcdFx0XHRjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcblx0XHRcdFx0XHRjdHguZmlsbFRleHQoIHRoaXMubGFiZWwsIHN1YkNhbnZhcy5oZWlnaHQgLyAyLCBzdWJDYW52YXMuaGVpZ2h0IC8gMiApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5kcmF3SW1hZ2UoIGNhY2hlZCwgdGhpcy54LCB0aGlzLnkgKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUJ1dHRvbjtcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHR2YXIgVG91Y2hhYmxlSm95c3RpY2sgPSAoIGZ1bmN0aW9uKCBfX3N1cGVyICkge1xyXG5cdFx0X19leHRlbmRzKCBUb3VjaGFibGVKb3lzdGljaywgX19zdXBlciApO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVKb3lzdGljayggb3B0aW9ucyApIC8veCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3IgKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHRcdHRoaXNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmN1cnJlbnRYID0gdGhpcy5jdXJyZW50WCB8fCB0aGlzLng7XHJcblx0XHRcdHRoaXMuY3VycmVudFkgPSB0aGlzLmN1cnJlbnRZIHx8IHRoaXMueTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLnR5cGUgPSAnam95c3RpY2snO1xyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdG91Y2ggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpcyBkaXJlY3Rpb24gXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUpveXN0aWNrLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCB0b3VjaFgsIHRvdWNoWSApIHtcclxuXHRcdFx0aWYoIFxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWCAtIHRoaXMueCApIDwgdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgKSAmJlxyXG5cdFx0XHRcdCggTWF0aC5hYnMoIHRvdWNoWSAtIHRoaXMueSApIDwgdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICkgKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogZGV0YWlscyBmb3IgdGhlIGpveXN0aWNrIG1vdmUgZXZlbnQsIHN0b3JlZCBoZXJlIHNvIHdlJ3JlIG5vdCBjb25zdGFudGx5IGNyZWF0aW5nIG5ldyBvYmpzIGZvciBnYXJiYWdlLiBUaGUgb2JqZWN0IGhhcyBwYXJhbXM6XHJcblx0XHQgKiBkeCAtIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoZSBjdXJyZW50IGpveXN0aWNrIGNlbnRlciBpcyBmcm9tIHRoZSBiYXNlIGNlbnRlciBpbiB4IGRpcmVjdGlvblxyXG5cdFx0ICogZHkgLSB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGUgY3VycmVudCBqb3lzdGljayBjZW50ZXIgaXMgZnJvbSB0aGUgYmFzZSBjZW50ZXIgaW4geSBkaXJlY3Rpb25cclxuXHRcdCAqIG1heCAtIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwaXhlbHMgZHggb3IgZHkgY2FuIGJlXHJcblx0XHQgKiBub3JtYWxpemVkWCAtIGEgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEgcmVsYXRpbmcgdG8gaG93IGZhciBsZWZ0IG9yIHJpZ2h0IHRoZSBqb3lzdGljayBpc1xyXG5cdFx0ICogbm9ybWFsaXplZFkgLSBhIG51bWJlciBiZXR3ZWVuIC0xIGFuZCAxIHJlbGF0aW5nIHRvIGhvdyBmYXIgdXAgb3IgZG93biB0aGUgam95c3RpY2sgaXNcclxuXHRcdCAqL1xyXG5cdFx0VG91Y2hhYmxlSm95c3RpY2sucHJvdG90eXBlLm1vdmVEZXRhaWxzID0ge307XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsbGVkIHdoZW4gdGhpcyBqb3lzdGljayBpcyBtb3ZlZFxyXG5cdFx0ICovXHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUudG91Y2hNb3ZlV3JhcHBlciA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRYID0gR2FtZUNvbnRyb2xsZXIubm9ybWFsaXplVG91Y2hQb3NpdGlvblgoIGUuY2xpZW50WCApO1x0XHJcblx0XHRcdHRoaXMuY3VycmVudFkgPSBHYW1lQ29udHJvbGxlci5ub3JtYWxpemVUb3VjaFBvc2l0aW9uWSggZS5jbGllbnRZICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBGaXJlIHRoZSB1c2VyIHNwZWNpZmllZCBjYWxsYmFja1xyXG5cdFx0XHRpZiggdGhpcy50b3VjaE1vdmUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIHRoaXMubW92ZURldGFpbHMuZHggIT0gdGhpcy5jdXJyZW50WCAtIHRoaXMueCAmJiB0aGlzLm1vdmVEZXRhaWxzLmR5ICE9IHRoaXMueSAtIHRoaXMuY3VycmVudFkgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMuZHggPSB0aGlzLmN1cnJlbnRYIC0gdGhpcy54OyAvLyByZXZlcnNlIHNvIHJpZ2h0IGlzIHBvc2l0aXZlXHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLmR5ID0gdGhpcy55IC0gdGhpcy5jdXJyZW50WTtcclxuXHRcdFx0XHRcdHRoaXMubW92ZURldGFpbHMubWF4ID0gdGhpcy5yYWRpdXMgKyAoIEdhbWVDb250cm9sbGVyLm9wdGlvbnMudG91Y2hSYWRpdXMgLyAyICk7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVEZXRhaWxzLm5vcm1hbGl6ZWRYID0gdGhpcy5tb3ZlRGV0YWlscy5keCAvIHRoaXMubW92ZURldGFpbHMubWF4O1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlRGV0YWlscy5ub3JtYWxpemVkWSA9IHRoaXMubW92ZURldGFpbHMuZHkgLyB0aGlzLm1vdmVEZXRhaWxzLm1heDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoTW92ZSggdGhpcy5tb3ZlRGV0YWlscyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTWFyayB0aGlzIGRpcmVjdGlvbiBhcyBpbmFjdGl2ZVxyXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRUb3VjaGFibGVKb3lzdGljay5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiggISB0aGlzLmlkICkgLy8gd2FpdCB1bnRpbCBpZCBpcyBzZXRcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdHZhciBjYWNoZUlkID0gdGhpcy50eXBlICsgJycgKyB0aGlzLmlkICsgJycgKyB0aGlzLmFjdGl2ZTtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IEdhbWVDb250cm9sbGVyLmNhY2hlZFNwcml0ZXNbIGNhY2hlSWQgXTtcclxuXHRcdFx0aWYoICEgY2FjaGVkIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cdFx0XHRcdHRoaXMuc3Ryb2tlID0gdGhpcy5zdHJva2UgfHwgMjtcclxuXHRcdFx0XHRzdWJDYW52YXMud2lkdGggPSBzdWJDYW52YXMuaGVpZ2h0ID0gMiAqICggdGhpcy5yYWRpdXMgKyB0aGlzLnN0cm9rZSApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBjdHggPSBzdWJDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG5cdFx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZTtcclxuXHRcdFx0XHRpZiggdGhpcy5hY3RpdmUgKSAvLyBEaXJlY3Rpb24gY3VycmVudGx5IGJlaW5nIHRvdWNoZWRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIDAsIDAsIDEsIDAsIDAsIHRoaXMucmFkaXVzICk7XHJcblx0XHRcdFx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoIDAsICdyZ2JhKCAyMDAsMjAwLDIwMCwuNSApJyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAxLCAncmdiYSggMjAwLDIwMCwyMDAsLjkgKScgKTtcclxuXHRcdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gU1RZTElORyBGT1IgQlVUVE9OU1xyXG5cdFx0XHRcdFx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KCAwLCAwLCAxLCAwLCAwLCB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKCAwLCAncmdiYSggMjAwLDIwMCwyMDAsLjIgKScgKTtcclxuXHRcdFx0XHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCggMSwgJ3JnYmEoIDIwMCwyMDAsMjAwLC40ICknICk7XHJcblx0XHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSggMCwwLDAsLjQgKSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdFx0XHQvLyBBY3R1YWwgam95c3RpY2sgcGFydCB0aGF0IGlzIGJlaW5nIG1vdmVkXHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eC5hcmMoIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHRcdGN0eC5zdHJva2UoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYWNoZWQgPSBHYW1lQ29udHJvbGxlci5jYWNoZWRTcHJpdGVzWyBjYWNoZUlkIF0gPSBzdWJDYW52YXM7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vIERyYXcgdGhlIGJhc2UgdGhhdCBzdGF5cyBzdGF0aWNcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGxTdHlsZSA9ICcjNDQ0JztcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMgKiAwLjcsIDAgLCAyICogTWF0aC5QSSwgZmFsc2UgKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmZpbGwoKTtcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0R2FtZUNvbnRyb2xsZXIuY3R4LmRyYXdJbWFnZSggY2FjaGVkLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5yYWRpdXMsIHRoaXMuY3VycmVudFkgLSB0aGlzLnJhZGl1cyApO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVG91Y2hhYmxlSm95c3RpY2s7XHJcblx0fSApKCBUb3VjaGFibGVBcmVhICk7XHJcblx0XHJcblx0XHJcblx0dmFyIFRvdWNoYWJsZUNpcmNsZSA9ICggZnVuY3Rpb24oIF9fc3VwZXIgKSB7XHJcblx0XHRfX2V4dGVuZHMoIFRvdWNoYWJsZUNpcmNsZSwgX19zdXBlciApO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBUb3VjaGFibGVDaXJjbGUoIG9wdGlvbnMgKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIHZhciBpIGluIG9wdGlvbnMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIGkgPT0gJ3gnIClcclxuXHRcdFx0XHRcdHRoaXNbaV0gPSBHYW1lQ29udHJvbGxlci5nZXRQaXhlbHMoIG9wdGlvbnNbaV0sICd4JyApO1xyXG5cdFx0XHRcdGVsc2UgaWYoIGkgPT0gJ3gnIHx8IGkgPT0gJ3JhZGl1cycgKVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IEdhbWVDb250cm9sbGVyLmdldFBpeGVscyggb3B0aW9uc1tpXSwgJ3knICk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpc1tpXSA9IG9wdGlvbnNbaV07XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0dGhpcy5kcmF3KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogTm8gdG91Y2ggZm9yIHRoaXMgZmVsbGEgXHJcblx0XHQgKi9cclxuXHRcdFRvdWNoYWJsZUNpcmNsZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiggdG91Y2hYLCB0b3VjaFkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdFRvdWNoYWJsZUNpcmNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0XHQvLyBTVFlMSU5HIEZPUiBCVVRUT05TXHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5maWxsU3R5bGUgPSAncmdiYSggMCwgMCwgMCwgMC41ICknO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gQWN0dWFsIGpveXN0aWNrIHBhcnQgdGhhdCBpcyBiZWluZyBtb3ZlZFxyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdEdhbWVDb250cm9sbGVyLmN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCAsIDIgKiBNYXRoLlBJLCBmYWxzZSApO1xyXG5cdFx0XHRHYW1lQ29udHJvbGxlci5jdHguZmlsbCgpO1xyXG5cdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFRvdWNoYWJsZUNpcmNsZTtcclxuXHR9ICkoIFRvdWNoYWJsZUFyZWEgKTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBTaGltIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHJcblx0ICovXHJcblx0KCBmdW5jdGlvbigpIHtcclxuXHQgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm5cclxuXHRcdHZhciBsYXN0VGltZSA9IDA7XHJcblx0XHR2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XHJcblx0XHRmb3IoIHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3ggKVxyXG5cdFx0e1xyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0fVxyXG5cdCBcclxuXHRcdGlmICggIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKVxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBlbGVtZW50ICkge1xyXG5cdFx0XHRcdHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoIDAsIDE2IC0gKCBjdXJyVGltZSAtIGxhc3RUaW1lICkgKTtcclxuXHRcdFx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxyXG5cdFx0XHRcdFx0dGltZVRvQ2FsbCApO1xyXG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG5cdFx0XHRcdHJldHVybiBpZDtcclxuXHRcdFx0fTtcclxuXHQgXHJcblx0XHRpZiAoICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgKVxyXG5cdFx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiggaWQgKSB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCBpZCApO1xyXG5cdFx0XHR9O1xyXG5cdH0oKSApO1xyXG59ICkodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiA/IG1vZHVsZS5leHBvcnRzIDogd2luZG93KSIsInZhciBnbG9iYWxzID0ge1xyXG4gICAgYnVsbGV0czogbnVsbCxcclxuICAgIGVuZW1pZXM6IG51bGwsXHJcbiAgICBwbGF5ZXI6IG51bGxcclxufVxyXG52YXIgdXBkYXRlID0gcmVxdWlyZSgnLi9nYW1lL3VwZGF0ZScpO1xyXG52YXIgcHJlbG9hZCA9IHJlcXVpcmUoJy4vZ2FtZS9wcmVsb2FkJykgO1xyXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9nYW1lL2NyZWF0ZScpO1xyXG4gXHJcbnZhciBnYW1lID0gd2luZG93LmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA2MDAsIFBoYXNlci5BVVRPLCAnJywgeyBwcmVsb2FkOiBwcmVsb2FkLCBjcmVhdGU6IGNyZWF0ZSwgdXBkYXRlOiB1cGRhdGUgfSk7XHJcbiIsIiBmdW5jdGlvbiByZXNldEJ1bGxldCAoYnVsbGV0KSB7XHJcblxyXG4gICAgYnVsbGV0LmtpbGwoKTtcclxuXHJcbn1cclxuO1xyXG5mdW5jdGlvbiBzZXR1cEVuZW15IChlbmVteSkge1xyXG5cclxuICAgIGVuZW15LmFuY2hvci54ID0gMC41O1xyXG4gICAgZW5lbXkuYW5jaG9yLnkgPSAwLjU7XHJcbiAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnZXhwbG9kZScpO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gICAgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcclxuXHJcbiAgICB0aGlzLnNwYWNlQkcgPSAgdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDYwMCwgJ2JnJyk7ICBcclxuICAgIHRoaXMuc3BhY2VCRy5hdXRvU2Nyb2xsKDAsIDc1KTsgXHJcbiAgICB2YXIgR2FtZUNvbnRyb2xsZXIgPSB3aW5kb3cuR2FtZUNvbnRyb2xsZXIgPSByZXF1aXJlKCdnYW1lLWNvbnRyb2xsZXInKS5HYW1lQ29udHJvbGxlcjtcclxuICAgIGNvbnNvbGUubG9nKEdhbWVDb250cm9sbGVyKTtcclxuICAgIEdhbWVDb250cm9sbGVyLmluaXQoe1xyXG4gICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2pveXN0aWNrJyxcclxuICAgICAgICAgICAgam95c3RpY2s6IHtcclxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IG5lZWQgdGhpcywgYnV0IHRoZSBldmVudCBpcyBoZXJlIGlmIHlvdSB3YW50IGl0LlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogZnVuY3Rpb24oam95c3RpY2tfZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQgPSBqb3lzdGlja19kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvdWNoRW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2dhbWUuaW5wdXQuam95c3RpY2tMZWZ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgLy8gV2UncmUgbm90IHVzaW5nIGFueXRoaW5nIG9uIHRoZSByaWdodCBmb3IgdGhpcyBkZW1vLCBidXQgeW91IGNhbiBhZGQgYnV0dG9ucywgZXRjLlxyXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2F1c3RpbmhhbGxvY2svaHRtbDUtdmlydHVhbC1nYW1lLWNvbnRyb2xsZXIvIGZvciBleGFtcGxlcy5cclxuICAgICAgICAgICAgdHlwZTogJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LnBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykoZ2FtZSk7XHJcbiAgICBwbGF5ZXIuaW5pdCgpO1xyXG4gICAgdmFyIGJ1bGxldHMgPSB3aW5kb3cuYnVsbGV0cyA9IHRoaXMuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcclxuXHJcbiAgICBidWxsZXRzLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuXHJcbiAgICBidWxsZXRzLmNyZWF0ZU11bHRpcGxlKDEwLCAnYnVsbGV0cycsICdidWxsZXQtZ3JlZW4ucG5nJyk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xyXG4gICAgYnVsbGV0cy5zZXRBbGwoJ2FuY2hvci55JywgMSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XHJcbiAgICBidWxsZXRzLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICB3aW5kb3cuZXhwbG9zaW9ucyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBleHBsb3Npb25zLmNyZWF0ZU11bHRpcGxlKDMwLCAnZXhwbG9kZScpO1xyXG4gICAgZXhwbG9zaW9ucy5mb3JFYWNoKHNldHVwRW5lbXksIHRoaXMpO1xyXG4gICAgd2luZG93Lm11c2ljID0gZ2FtZS5hZGQuYXVkaW8oJ3N0YWdlLTEnKTtcclxuICAgIHdpbmRvdy5ib29tID0gZ2FtZS5hZGQuYXVkaW8oJ2Jvb20nKTtcclxuICAgIHdpbmRvdy5sYXplciA9IGdhbWUuYWRkLmF1ZGlvKCdsYXplcicpO1xyXG5cclxuICAgIFxyXG4gICAgd2luZG93LnN0YWdlMSA9IHJlcXVpcmUoJy4vc2NlbmVzL3NjZW5lLTEnKShnYW1lKTtcclxuICAgIHN0YWdlMS5pbml0KCk7XHJcbn1cclxuXHJcbiAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChnYW1lKSB7XHJcblx0dmFyIHBsYXllciwgY3Vyc29ycztcclxuXHR2YXIgcmlnaHRfYnVsbGV0VGltZSA9IDAsIGxlZnRfYnVsbGV0VGltZSA9IDA7IFxyXG4gICAgdmFyIHBsYXllclNwZWVkID0gMjAwOyAvL2R1bm5vXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVCdWxsZXQgKCkgeyBcclxuICAgICAgICAgICAgaWYgKCBnYW1lLnRpbWUubm93ID4gcmlnaHRfYnVsbGV0VGltZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0X2J1bGxldCA9IGJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0X2J1bGxldClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgQW5kIGZpcmUgaXRcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9idWxsZXQucmVzZXQocGxheWVyLngsIHBsYXllci55ICsgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X2J1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAtMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X2J1bGxldFRpbWUgPSBnYW1lLnRpbWUubm93ICsgMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICBsYXplci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBnYW1lLnRpbWUubm93ID4gbGVmdF9idWxsZXRUaW1lICsgMjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0X2J1bGxldCA9IGJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRfYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBBbmQgZmlyZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LnJlc2V0KHBsYXllci54ICsgMjYsIHBsYXllci55ICsgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IC0zMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9idWxsZXRUaW1lID0gZ2FtZS50aW1lLm5vdyArIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdCA6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cGxheWVyID0gZ2FtZS5hZGQuc3ByaXRlKCg0MDAgLSAxNiksIDUwMCwgJ3NoaXAnKTtcclxuICAgIFx0XHRnYW1lLnBoeXNpY3MuZW5hYmxlKHBsYXllciwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcclxuICAgIFx0XHRjdXJzb3JzID0gIGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0tFWUJPQVJEIE1PVkVNRU5UXHJcblx0ICAgICAgICBpZiAoY3Vyc29ycy51cC5pc0Rvd24pXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgLy8gIElmIHRoZSBzaGlmdCBrZXkgaXMgYWxzbyBwcmVzc2VkIHRoZW4gdGhlIHdvcmxkIGlzIHJvdGF0ZWRcclxuXHQgICAgICAgICAgICBpZiAoY3Vyc29ycy51cC5zaGlmdEtleSlcclxuXHQgICAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgICAgIC8vZ2FtZS53b3JsZC5yb3RhdGlvbiArPSAwLjA1O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBlbHNlXHJcblx0ICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICBpZihwbGF5ZXIueSA+IDM1MCkgcGxheWVyLnkgLT0gNDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBlbHNlIGlmIChjdXJzb3JzLmRvd24uaXNEb3duKVxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIGlmIChjdXJzb3JzLmRvd24uc2hpZnRLZXkpXHJcblx0ICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICAvL2dhbWUud29ybGQucm90YXRpb24gLT0gMC4wNTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgZWxzZVxyXG5cdCAgICAgICAgICAgIHtcclxuXHQgICAgICAgICAgICAgICAgcGxheWVyLnkgKz0gNDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICBwbGF5ZXIueCAtPSA0O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICBwbGF5ZXIueCArPSA0O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgaWYgKGdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUikpXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgZmlyZUJ1bGxldCgpIDtcclxuXHQgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvL0dBTUVQQUQgU1VQUE9SVFxyXG4gICAgICAgICAgICBpZiAoZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgdGhlIHVmbyB1c2luZyB0aGUgam95c3RpY2sncyBub3JtYWxpemVkWCBhbmQgWSB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCByYW5nZSBmcm9tIC0xIHRvIDEuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYm9keS52ZWxvY2l0eS5zZXRUbyhnYW1lLmlucHV0LmpveXN0aWNrTGVmdC5ub3JtYWxpemVkWCAqIDIwMCwgZ2FtZS5pbnB1dC5qb3lzdGlja0xlZnQubm9ybWFsaXplZFkgKiBwbGF5ZXJTcGVlZCAqIC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgICB0aGlzLmxvYWQuYXRsYXMoJ2J1bGxldHMnLCAnaW1nL2Fzc2V0cy9idWxsZXRzLnBuZycsICdzaGVldHMvYnVsbGV0cycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdibHVlX2J1bGxldCcsICdpbWcvYXNzZXRzL2JsdWUtYnVsbGV0LnBuZycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiZycsICdpbWcvYmFja2dyb3VuZHMvYmcucG5nJyk7IFxyXG4gICAgdGhpcy5sb2FkLmF0bGFzKCdhdGxhcycsICdpbWcvZW5lbXktZmlnaHRlcnMvZW5lbXktZmlnaHRlcnMucG5nJywgJ3NoZWV0cy9lbmVteS1maWdodGVycycpO1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzaGlwJywgJ2ltZy9zcGFjZV9zaGlwX2Jhc2UucG5nJyk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2V4cGxvZGUnLCAnaW1nL2Fzc2V0cy9leHBsb2RlLnBuZycsIDEyOCwgMTI4KTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygnYm9vbScsIFsnYXVkaW8vZWZmZWN0cy9leHBsb2RlLndhdiddKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygnbGF6ZXInLCBbJ2F1ZGlvL2VmZmVjdHMvbGF6ZXIud2F2J10pO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdzdGFnZS0xJywgWydhdWRpby9iYWNrZ3JvdW5kL3N0YWdlLTEubXAzJywgJ2F1ZGlvL2JhY2tncm91bmQvc3RhZ2UtMS5vZ2cnXSk7XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAgZnVuY3Rpb24gKGdhbWUpIHtcclxuXHR2YXIgcmFwdG9ycztcclxuICAgIHZhciBzcGF3biA9IGZ1bmN0aW9uICgpIHsgXHJcblxyXG4gICAgICAgIHZhciB4ID0gZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNDAsIDYwMCkgICwgeSA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsIDEwKTtcclxuICAgICAgICB2YXIgX2FsaWVuID0gYWxpZW5zLmNyZWF0ZSh4LCB5LCAnYXRsYXMnLCAnYmFkLWd1eTEucG5nJyk7XHJcbiAgICAgICAgX2FsaWVuLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiBcclxuICAgICAgICBfYWxpZW4uYm9keS5tb3ZlcyA9IHRydWU7XHJcbiAgICAgICAgX2FsaWVuLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgMTAwKSA7IFxyXG4gICAgfTtcclxuXHJcblx0dmFyIGNvbGxpc2lvbkhhbmRsZXIgPSBmdW5jdGlvbiAgKGJ1bGxldCwgYWxpZW4pIHtcclxuXHJcblx0ICAgIGJ1bGxldC5raWxsKCk7XHJcblx0ICAgIGFsaWVuLmtpbGwoKTtcclxuXHQgICAgd2luZG93LmJvb20ucGxheSgpO1xyXG5cdCAgICB2YXIgeCA9IGFsaWVuLmJvZHkueCwgeSA9YWxpZW4uYm9keS55XHJcblx0ICAgIHZhciBleHBsb3Npb24gPSBleHBsb3Npb25zLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcclxuXHQgICAgZXhwbG9zaW9uLnJlc2V0KGFsaWVuLmJvZHkueCwgYWxpZW4uYm9keS55KTtcclxuXHQgICAgZXhwbG9zaW9uLnBsYXkoJ2V4cGxvZGUnLCAzMCwgZmFsc2UsIHRydWUpO1xyXG5cdH07XHJcblxyXG4gICAgdmFyIHNwYXduUmFwdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXHR2YXIgeCA9IGdhbWUucm5kLmludGVnZXJJblJhbmdlKDQwLCA2MDApICAsIHkgPSBnYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLCAxMCk7XHJcbiAgICAgICAgdmFyIF9hbGllbiA9IHJhcHRvcnMuY3JlYXRlKHgsIHksICdhdGxhcycsICdyYXB0b3ItMS5wbmcnKTtcclxuICAgICAgICBfYWxpZW4uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuIFxyXG4gICAgICAgIF9hbGllbi5ib2R5Lm1vdmVzID0gdHJ1ZTtcclxuICAgICAgICBfYWxpZW4uYm9keS52ZWxvY2l0eS5zZXRUbygwLCAxNTApIDsgXHJcbiAgICB9XHJcblx0dmFyIGVuZW15RmFjdG9yeTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0d2luZG93LmFsaWVucyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBcdFx0YWxpZW5zLmVuYWJsZUJvZHkgPSB0cnVlO1xyXG4gICAgXHRcdGFsaWVucy5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XHJcbiAgICBcdFx0cmFwdG9ycyA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICBcdFx0cmFwdG9ycy5lbmFibGVCb2R5ID0gdHJ1ZTtcclxuICAgIFx0XHRyYXB0b3JzLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcclxuXHRcdCAgICBtdXNpYy5wbGF5KCcnLCAwLCAxLCB0cnVlKTtcclxuXHJcbiAgICBcdFx0Z2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDIsIDEwNSwgc3Bhd24sIHRoaXMpO1xyXG5cclxuICAgIFx0XHRnYW1lLnRpbWUuZXZlbnRzLnJlcGVhdChQaGFzZXIuVGltZXIuU0VDT05EICogOCwgMjAsIHNwYXduUmFwdG9yLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHR1cGRhdGUgOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdC8vZ2FtZSBsb29wIGZvciB0aGUgc3RhZ2VcclxuXHRcdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKGJ1bGxldHMsIGFsaWVucywgY29sbGlzaW9uSGFuZGxlciwgbnVsbCwgdGhpcyk7XHJcblx0XHRcdGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChidWxsZXRzLCByYXB0b3JzLCBjb2xsaXNpb25IYW5kbGVyLCBudWxsLCB0aGlzKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufSIsInZhciBidWxsZXRUaW1lID0gMDtcclxuIGZ1bmN0aW9uIHJlc2V0QnVsbGV0IChidWxsZXQpIHtcclxuXHJcbiAgICBidWxsZXQua2lsbCgpO1xyXG5cclxufTtcclxuXHJcbiBcclxuICAgIHZhciByaWdodF9idWxsZXRUaW1lID0gMCwgbGVmdF9idWxsZXRUaW1lID0gMDsgXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYnVsbGV0cyA9IHdpbmRvdy5idWxsZXRzO1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGN1cnNvcnMgPSB3aW5kb3cuY3Vyc29yczsgXHJcblxyXG5cclxuXHJcbiAgICBwbGF5ZXIudXBkYXRlKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJzb3JzKTtcclxuICAgICAgICBzdGFnZTEudXBkYXRlKCk7XHJcbiAgICAgICAgXHJcbn07XHJcbiJdfQ==
