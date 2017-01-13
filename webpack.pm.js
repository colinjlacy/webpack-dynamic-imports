/**
 * Created by colinjlacy on 1/11/17.
 */
const
	base = require('./webpack.base'),
	path = require('path');

base.resolve = {
	alias: {
		Platform: path.resolve(__dirname, 'platform', 'predix-mobile')
	}
};

module.exports = base;