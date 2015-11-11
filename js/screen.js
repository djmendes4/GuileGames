/*Document created by Dillon Mendes on June 27th, 2015 */
/*jslint devel: true */

var Element = function (shape) {
	'use strict';
	var svgns = 'http://www.w3.org/2000/svg';
	this.self = document.createElementNS(svgns, shape);

	this.setParent = function (parent) {
		this.parent = parent || null;
	};

	this.setID = function (id) {
		this.id = id || null;
		this.self.setAttribute('id', this.id);
	};

	this.setClass = function (className) {
		this.className = className || null;
		this.self.setAttribute('class', this.className);
	};

	this.setWidth = function (width) {
		this.width = width || null;
		this.self.setAttribute('width', this.width);
	};

	this.setHeight = function (height) {
		this.height = height || null;
		this.self.setAttribute('height', this.height);
	};

	this.setX = function (x) {
		this.x = x;
		this.self.setAttribute('x', this.x);
	};

	this.setY = function (y) {
		this.y = y;
		this.self.setAttribute('y', this.y);
	};

	this.setX1 = function (x1) {
		this.x1 = x1;
		this.self.setAttribute('x1', this.x1);
	};

	this.setY1 = function (y1) {
		this.y1 = y1;
		this.self.setAttribute('y1', this.y1);
	};

	this.setX2 = function (x2) {
		this.x2 = x2;
		this.self.setAttribute('x2', this.x2);
	};

	this.setY2 = function (y2) {
		this.y2 = y2;
		this.self.setAttribute('y2', this.y2);
	};

	this.draw = function () {
		this.parent.appendChild(this.self);
	};
};

var PresetScreen = {
	game: function () {
		'use strict';
		var screen = new Element('svg');
		screen.setParent(document.getElementById('GuileGames'));
		screen.setID('gameScreen');

		screen.background = PresetLayer.background();
		screen.self.appendChild(screen.background.self);

		screen.draw();
		return screen;
	},
	welcome: function () {
		'use strict';
		var screen = new Element('svg');
		screen.setParent(gameScreen.self);
		screen.setID('welcomeScreen');
		screen.setWidth('100%');
		screen.setHeight('100%');

		screen.background = PresetLayer.background();
		screen.self.appendChild(screen.background.self);

		screen.background[0] = new Element('rect');
		screen.background[0].setWidth('100%');
		screen.background[0].setHeight('100%');
		screen.background.self.appendChild(screen.background[0].self);

		screen.object = new Element('g');
		screen.object.setClass('object');
		screen.self.appendChild(screen.object.self);

		screen.object[0] = new Element('rect');
		screen.object[0].setWidth('100%');
		screen.object[0].setHeight('100%');
		screen.object.self.appendChild(screen.object[0].self);

		screen.draw();
		return screen;
	},
	menu: function () {
		'use strict';
		var screen = new Element('svg');
		screen.setParent(gameScreen.self);
		screen.setID('menuScreen');
		screen.setWidth('100%');
		screen.setHeight(460);
		screen.setY(120);

		screen.background = PresetLayer.background();
		screen.self.appendChild(screen.background.self);

		screen.background[0] = new Element('rect');
		screen.background[0].setWidth('100%');
		screen.background[0].setHeight('100%');
		screen.background.self.appendChild(screen.background[0].self);

		screen.background[1] = new Element('line');
		screen.background[1].setX1(0);
		screen.background[1].setY1(0);
		screen.background[1].setX2('100%');
		screen.background[1].setY2(0);
		screen.background.self.appendChild(screen.background[1].self);

		screen.background[2] = new Element('line');
		screen.background[2].setX1(0);
		screen.background[2].setY1('100%');
		screen.background[2].setX2('100%');
		screen.background[2].setY2('100%');
		screen.background.self.appendChild(screen.background[2].self);

		screen.draw();
		return screen;
	}
};

var PresetLayer = {
	background: function () {
		'use strict';
		var layer = new Element('g');
		layer.setClass('background');
		return layer;
	}
};

var Game = {
	Environment: {
		// This function takes an 'svg' or 'g' element and creates a grid with a specified number of cellWidth, cellHeight, and cellBorderWidth.
		// Dependencies: fullscreen(), parent(), width(), height()
		createGrid: function (screen) {
			'use strict';
			var svgns = 'http://www.w3.org/2000/svg';

			this.parent = screen.self;
			this.width = screen.self.getBoundingClientRect().width;
			this.height = screen.self.getBoundingClientRect().height;

			this.cells = [];
			this.cellTones
			this.cellWidth = 20;
			this.cellHeight = 20;
			this.cellStroke = 1;

			this.calculate = function () {
				this.columns = Math.ceil(this.width / this.cellWidth);
				this.rows = Math.ceil(this.height / this.cellHeight);
				// console.log('Grid Dimensions: ' + this.columns + ' x ' + this.rows + ' = ' + (this.columns * this.rows));

				this.xAdjust = Math.floor(((this.columns * this.cellWidth) - (this.width)) / 2);
				this.yAdjust = Math.floor(((this.rows * this.cellHeight) - (this.height)) / 2);
				// console.log('xAdjust: ' + this.xAdjust + ' || yAdjust: ' + this.yAdjust);
			};

			this.generate = function () {
				var x = 0,
					y = 0,
					newSVGRect = {};

				for (x = 0; x < this.columns; x += 1) {
					this.cells[x] = [];
					for (y = 0; y < this.rows; y += 1) {
						newSVGRect = document.createElementNS(svgns, 'rect');
						newSVGRect.setAttribute('id', x + ',' + y);
						newSVGRect.setAttribute('class', 'cell t' + Math.round(Math.random() * 4));
						newSVGRect.setAttribute('x', (x * this.cellWidth - this.xAdjust + 0.5));
						newSVGRect.setAttribute('y', (y * this.cellHeight - this.yAdjust + 0.5));
						newSVGRect.setAttribute('width', this.cellWidth);
						newSVGRect.setAttribute('height', this.cellHeight);

						this.parent.appendChild(newSVGRect);

						this.cells[x][y] = newSVGRect;
					}
				}
			};

			this.calculate();
			this.generate();
		}
	},
	Screen: {

	}
};
