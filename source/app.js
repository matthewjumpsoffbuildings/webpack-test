//
require('./scss/main.scss')


global.jQuery = require('jquery')
require('gsap')
const $ = global.jQuery

const m = require('./js/module')
const Barba = require('barba.js')


const flexslider = require('flexslider')


$(document).ready(() => {
	console.log("jquery works")

	$('.flexslider').flexslider()

	TweenLite.to("h1", 2.5, {color:"#FF0000", fontSize:"10vw", ease: Expo.easeInOut})
})

console.log(m)

