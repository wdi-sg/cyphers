console.log(process.argv);

var arg = process.argv;	//Store Arguments into an array
var mRef = {
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
			  z: '--..'				 //Morse code reference obj
			}

arg.shift();
arg.shift();

if (arg[0] == "s") {    // Basic Logic for Cesar, doesnt account 
						// for all shifts scenario yet.

	var inputString = arg[2];
	var shiftValue = parseInt(arg[1]);
	var outputString = "";

	for (let i=0; i<inputString.length; i++){
		let charCode = inputString.charCodeAt(i);
		if  (charCode === 32){					//Leave spaces alone
			outputString += " ";
		} else {
		let newChar = String.fromCharCode(charCode+shiftValue);
		outputString += newChar;
		}
	}

	console.log(outputString);
}

if (arg[0] == "m") {    // MORSE CODE
						// Basic logic

	var inputString = arg[1].toLowerCase();  // Just in case
	var outputString = "";

	for (let i=0; i<inputString.length; i++){
		let comparatorChar = inputString.charAt(i);
		if (comparatorChar === " "){
			outputString += " ";
		} else {
			for (let char in mRef){
				if (char === comparatorChar){
					outputString += mRef[char];
				}
			}
		}
	}
	console.log(outputString);
}