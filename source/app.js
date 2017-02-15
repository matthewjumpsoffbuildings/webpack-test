//
require('./scss/main.scss')

require('gsap')

const m = require('./js/module')
const $ = require('jquery')
const Barba = require('barba.js')


$(document).ready(() => {
	console.log("jquery works")

	console.log(Barba)

	TweenLite.to("h1", 2.5, {color:"#FF0000", fontSize:"10vw", ease: Expo.easeInOut})
})

console.log(m)

