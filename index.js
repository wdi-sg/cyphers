var typeOfCode = process.argv[2];
var message = process.argv[3];
message = message.split(" ");

console.log(message);

var morseCode = {
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

var decodedMessage = [];

if (typeOfCode === "morse"){
	for (var i=0; i<message.length; i++){
		//match morse code with input
		for(var thing in morseCode){
			if(morseCode[thing]===message[i]){
				// console.log(message[i]);
				console.log(morseCode[thing]);
				console.log(thing);
				
				// console.log(decodedMessage);
				decodedMessage.push(thing);
				console.log(decodedMessage);
			}
		}

		//return matched alpha
		decodedMessage = decodedMessage.join(" ");
		console.log(decodedMessage);
	}

}

// if(typeOfCode === "caesar"){
// 	console.log(message, "inside caesar");
// }

