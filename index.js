const express = require('express')
const app = express()

app.get('/', function(request, response) {
	response.send('Welcome to encoder!')
});

let requestMorseEncode = '/morseencode/:text'
let handleRequestMorseEncode = (request, response) => {
	let lettersArray = [];
	let morseCodeArray =[];
	let morseCode = {
		a: '.-',
		b: '-...',
		c: '-.-.',
		d: '-..',
		e: '.',
		f: '..-.',
		g: '--.',
		h: '....',
		i: '..',
		j: '.---',
		k: '-.-',
		l: '.-..',
		m: '--',
		n: '-.',
		o: '---',
		p: '.--.',
		q: '--.-',
		r: '.-.',
		s: '...',
		t: '-',
		u: '..-',
		v: '...-',
		w: '.--',
		v: '...-',
		x: '-..-',
		y: '-.--',
		z: '--..'
	}
	for(var i = 0; i < request.params.text.length; i++){
		if(request.params.text.charAt(i).toLowerCase() === "a"){
			morseCodeArray.push(morseCode.a)
		}
		if(request.params.text.charAt(i).toLowerCase() === "b"){
			morseCodeArray.push(morseCode.b)
		}
		if(request.params.text.charAt(i).toLowerCase() === "c"){
			morseCodeArray.push(morseCode.c)
		}
		if(request.params.text.charAt(i).toLowerCase() === "d"){
			morseCodeArray.push(morseCode.d)
		}
		if(request.params.text.charAt(i).toLowerCase() === "e"){
			morseCodeArray.push(morseCode.e)
		}
		if(request.params.text.charAt(i).toLowerCase() === "f"){
			morseCodeArray.push(morseCode.f)
		}
		if(request.params.text.charAt(i).toLowerCase() === "g"){
			morseCodeArray.push(morseCode.g)
		}
		if(request.params.text.charAt(i).toLowerCase() === "h"){
			morseCodeArray.push(morseCode.h)
		}
		if(request.params.text.charAt(i).toLowerCase() === "i"){
			morseCodeArray.push(morseCode.i)
		}
		if(request.params.text.charAt(i).toLowerCase() === "j"){
			morseCodeArray.push(morseCode.j)
		}
		if(request.params.text.charAt(i).toLowerCase() === "k"){
			morseCodeArray.push(morseCode.k)
		}
		if(request.params.text.charAt(i).toLowerCase() === "l"){
			morseCodeArray.push(morseCode.l)
		}
		if(request.params.text.charAt(i).toLowerCase() === "m"){
			morseCodeArray.push(morseCode.m)
		}
		if(request.params.text.charAt(i).toLowerCase() === "n"){
			morseCodeArray.push(morseCode.n)
		}
		if(request.params.text.charAt(i).toLowerCase() === "o"){
			morseCodeArray.push(morseCode.o)
		}
		if(request.params.text.charAt(i).toLowerCase() === "p"){
			morseCodeArray.push(morseCode.p)
		}
		if(request.params.text.charAt(i).toLowerCase() === "q"){
			morseCodeArray.push(morseCode.q)
		}
		if(request.params.text.charAt(i).toLowerCase() === "r"){
			morseCodeArray.push(morseCode.r)
		}
		if(request.params.text.charAt(i).toLowerCase() === "s"){
			morseCodeArray.push(morseCode.s)
		}
		if(request.params.text.charAt(i).toLowerCase() === "t"){
			morseCodeArray.push(morseCode.t)
		}
		if(request.params.text.charAt(i).toLowerCase() === "u"){
			morseCodeArray.push(morseCode.u)
		}
		if(request.params.text.charAt(i).toLowerCase() === "v"){
			morseCodeArray.push(morseCode.v)
		}
		if(request.params.text.charAt(i).toLowerCase() === "w"){
			morseCodeArray.push(morseCode.w)
		}
		if(request.params.text.charAt(i).toLowerCase() === "x"){
			morseCodeArray.push(morseCode.x)
		}
		if(request.params.text.charAt(i).toLowerCase() === "y"){
			morseCodeArray.push(morseCode.y)
		}
		if(request.params.text.charAt(i).toLowerCase() === "z"){
			morseCodeArray.push(morseCode.z)
		}



		lettersArray.push(request.params.text.charAt(i));
	}
	let responseA = "Word: "+ lettersArray+ " Code: " + morseCodeArray
	response.send(responseA);
}
app.get(requestMorseEncode, handleRequestMorseEncode);

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'))
