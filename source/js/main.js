/* 
	external JS libraries
	comment out if not needed 
	all new libraries installed via 'npm install js-library --save-dev' need to be added here
	using require('js-library') as used when doing the npm install

*/
// //pace-js preloader
// const pace = require('pace-js')
// pace.start()

// //Barba PJAX loader
// const Barba = require('barba.js')

//jQuery (defined as a global since so many plugins look for it in the global scope)
global.jQuery = require('jquery')
//alias jQuery as $ if you want
const $ = global.jQuery

// //jQuery plugins (defined after the core jQuery requires() above)
// require('flexslider') //doesnt need to be stored in a const/var since it just modifies jQuery.fn

// //Greensock Animation 
// require('gsap')


/*
	Actual code begins here
	Ideally make separate js files for different aspects of the site in source/js
	Each module needs to require the libraries it uses, as in the above code
	Webpack will only include the libraries once into the final bundle.js
*/

$(document).ready(() => {

	$("body").append("<h2>FUCKING HELL</h2>")

})