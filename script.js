'use strict'


let inp = document.querySelector('input')
let opc = document.querySelector('.opacity')
let img = document.querySelector('.img')
inp.oninput = function(){
	// opc.style.opacity = +inp.value * 0.01;
	img.style.opacity = +inp.value * 0.01;
	console.log(inp.value)
}