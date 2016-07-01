'use strict';

var fs = require('fs');
var stripJson = require('strip-json-comments');

var configuration = exports = module.exports = {
	data: {},
	load: function (name, cfgFile, cb) {
		var data = fs.readFileSync(cfgFile, { encoding: 'utf8' });
		if (!data) {
			cb(new Error('Failed to load config file' + cfgFile));
		}
		try {
			var jData = stripJson(data);
			configuration.data[name] = JSON.parse(jData);
		} catch (err) {
			cb(err);
		}
		return configuration;
	}
};
