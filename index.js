const library = {
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
};

const morseDecipher = () =>{
	let string = process.argv[3];
	string = string.split(" ");
	let stringArray = [];
	for(var i =0; i < string.length; i++){
	    stringArray.push(string[i]);
	}

	let decrypted = "";
	let output = "";
	//loop over the string and find the current character add it into output
	//if output cannot be found in any of the library.key
	//increment the i and add the additional character to the output
	//repeat to check if output can be find in the library.key then reset it to empty
	for(let i=0; i<stringArray.length;i++){
		let currStr = stringArray[i];
		output += currStr;
		for(let key in library){
			if(library[key] == output){
				//console.log("current output: " + output);
				decrypted += key;
				output = "";
			}
		}
	}	
	console.log(decrypted);
}

const morseCipher = () =>{
	const string = process.argv[3];
	let crypted = "";
	//loop over the string and find the current character
	//replace the character with the encrypted msg
	//add msg into the crypted string
	for(let i=0; i<string.length; i++){
		let currChar = string.charAt(i);
		let output = library[currChar];
		crypted += output;
	}
	console.log(crypted);
}

const caesarCipher = () =>{
	const key = process.argv[4];
	const string = process.argv[3].toUpperCase();
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let shiftAlphabet = alphabet.substring(key) + alphabet.substring(0,key);
	let output = "";
	
	for(let i=0; i<string.length; i++){
		let currChar = string.charAt(i);
		let pos = 0;
		for(let k=0; k<alphabet.length; k++){
			if(alphabet.charAt(k) == currChar){
				pos = k;
			}
		}
		currChar = shiftAlphabet.charAt(pos);
		output += currChar;
	}
	console.log(output);
}

const caesarDecipher = () =>{
	const key = process.argv[4];
	const string = process.argv[3].toUpperCase();
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let shiftAlphabet = alphabet.substring(key) + alphabet.substring(0,key);
	let output = "";
	
	for(let i=0; i<string.length; i++){
		let currChar = string.charAt(i);
		let pos = 0;
		for(let k=0; k<shiftAlphabet.length; k++){
			if(shiftAlphabet.charAt(k) == currChar){
				pos = k;
			}
		}
		currChar = alphabet.charAt(pos);
		output += currChar;
	}
	console.log(output);	
}

if(process.argv[2] === "morseCipher"){
	console.log("Welcome to morseEncoder(cipher)");
	console.log(process.argv[3]);
	morseCipher();
}
else if(process.argv[2] === "morseDecipher"){
	console.log("Welcome to morseEncoder(decipher)");
	morseDecipher();
}
else if(process.argv[2] === "caesarCipher"){
	console.log("Welcome to caesarEncoder(cipher)");
	caesarCipher();
}
else if(process.argv[2] === "caesarDecipher"){
	console.log("Welcome to caesarEncoder(decipher)");
	caesarDecipher();
}