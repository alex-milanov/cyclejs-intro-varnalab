'use strict';

const fse = require('fs-extra');
const path = require('path');

const paths = {
	'dist/fonts': 'node_modules/font-awesome/fonts',
	'dist/assets': 'src/assets',
	'dist/lib/reveal.js/lib': 'node_modules/reveal.js/lib',
	'dist/lib/reveal.js/plugin': 'node_modules/reveal.js/plugin'
};

Object.keys(paths).forEach(
	p => fse.copySync(
		path.resolve(__dirname, '..', paths[p]),
		path.resolve(__dirname, '..', p)
	)
);
