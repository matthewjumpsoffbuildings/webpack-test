/**
 * Require Browsersync along with webpack and middleware for it
 */
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);

var LOCAL_HOST = "webpack-test.dev"




const watching = bundler.watch({}, 
(err, stats) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(stats.toString({
		chunks: false,  // Makes the build much quieter
		colors: true    // Shows colors in the console
	}))
})


browserSync.init({
	open: 'external',
    host: LOCAL_HOST,
    proxy: LOCAL_HOST,
    files: ['*.html', 'dist/**']
});
