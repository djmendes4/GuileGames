var Models = {
	// LINEAR SPARKLINES
	//  - Takes an svg element ('rect') and creates a series of linear sparks
	// - Specific to the welcome screen
	linearSparklines: function (element) {
		'use strict';
		var svgns = 'http://www.w3.org/2000/svg';
		this.parent = element.self;

		this.create = function () {
			var newSVGLine = document.createElementNS(svgns, 'line');

			newSVGLine.setAttribute('x1', '');
		};
	},
	guileGames: function (element) {
		'use strict';
		var parent = element.self,
			svgns = 'http://www.w3.org/2000/svg',
			newSVG = document.createElementNS(svgns, 'svg'),
			newPath = document.createElementNS(svgns, 'path');

		newPath.setAttribute('d', Models.paths.guileGamesLogo);

		newSVG.appendChild(newPath);
		newSVG.setAttribute('width', 500);
		newSVG.setAttribute('height', 500);
		newSVG.setAttribute('viewbox', '0 0 1000 1333.1993');
		newSVG.setAttribute('preserveAspectRatio', 'xMidYMid meet');

		parent.appendChild(newSVG);
	},
	paths: {
		guileGamesLogo: 'M 75,1033.1994 0,83.199409 c 0,0 300,25.000001 500,-83.199409 200,108.19941 500,83.199409 500,83.199409 L 925,1033.1994 c 0,0 -125,50.0001 -225,125 -100,75 -200,175 -200,175 0,0 -100,-100 -200,-175 -100,-75 -225,-125 -225,-125 z m 800,-49.99999 70,-840 c 0,0 -270,-10 -445,-59.999999 C 325,133.19941 55,143.19941 55,143.19941 l 70,840 375,284.99999 z m -715,-35 -70,-760 395,0 0,95 -285,0 50,600 130,100 35,0 0,-290 -90,-60 0,-125 160,110 0,579.99999 z m 355,-330 160,-110 0,125 -90,60 0,290 35,0 130,-100 c 4.23834,-197.86204 50,-600 50,-600 l -285,0 0,-95 395,0 -70,760 -325,249.99999 z'
	}
};
