const MORSE_CODE_KEY = {
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

function morseEncode(input) {
  // CHANGE THE INPUT TO ALL LOWER CASE
  // SINCE MORSE CODE DONT DIFFERENTIATE
  // BETWEEN CAPITAL LETTERS AND SMALL LETTERS
  let messageArray = input.toLowerCase().split(' ');

  // EMPTY ARRAY TO HOLD OUR FINAL RESULT
  let result = [];


  // WE ITERATE THROUGH OUR MESSAGE ARRAY, SO IF
  // INPUT RECEIVED WAS HELLO WORLD, messageArray
  // WILL BE = ['hello', 'world'];
  for (let i = 0; i < messageArray.length; i++) {

    // empty holder array to hold our intermediate reults
    let holder = [];

    // interate through the individual words, so
    // if input was 'hello world', we are iterating
    // through 'hello' individually
    for (let j = 0; j < messageArray[i].length; j++) {

      // MORSE_CODE_KEY is defined on top (its just an object)
      // and we are getting the corresponding (morse code)VALUE of the alphabet
      let character = MORSE_CODE_KEY[messageArray[i][j]];

      // push it into our holder array
      holder.push(character);
    }

    // PUSHING INTO RESULT AT THIS POINT WILL BE 1 COMPLETED WORD
    // WE DO .join(' ') TO INCLUDE A SPACE BETWEEN INDIVIDUAL CHARACTERS
    result.push(holder.join(' '));
  }

  // RETURN THE RESULT. WE DO .join('   ') TO INCLUDE 3 SPACES BETWEEN EACH WORD
  return result.join('   ');
}


function morseDecode(input) {
  // separate morse code words are split with 3 spaces
  let morseArray = input.split('   ');
  let result = [];

  // looping through the WORDS
  for (let i = 0; i < morseArray.length; i++) {
    // getting the individual characters
    let morseCodeBlock = morseArray[i].split(' ');

    // empty holder to hold the individual characters for each word
    let holder = [];

    // looping through the characters in each word
    for (let j = 0; j < morseCodeBlock.length; j++) {
      // the individual character
      let individualMorseCode = morseCodeBlock[j];

      // looping through the morse code object
      // to find the corresponding key/value pair
      for (let keys in MORSE_CODE_KEY) {
        if (individualMorseCode === MORSE_CODE_KEY[keys]) {
            holder.push(keys);
            break;
        }
      }
    }

    // join the word without spaces ['h','e','l','l','o'] => 'hello';
    result.push(holder.join(''));
  }

  // join the array of words with single space ['hello', 'world'] => 'hello world';
  return result.join(' ');
}

function caesarEncode(input, shift) {
  // ENSURE THAT THE SHIFT VALUE PASSED IN IS AN INTEGER
  let checkForNaN = parseInt(shift);

  if ( isNaN(checkForNaN) ) {
    return "Invalid Parameters";
  }

  // ==============================================
  // ASCII keycode for capital letters is 65 to 90;
  // ==============================================

  // CONVERT EVERYTHING TO UPPER CASE LETTERS AND SPLIT
  // THE WORDS INTO AN ARRAY
  let upcasedMessage = input.toUpperCase().split(' ');
  let result = [];

  // ITERATE THROUGH THE WORDS
  for (let i = 0; i < upcasedMessage.length; i++) {
    let holder = [];

    // ITERATE THROUGH THE INDIVIDUAL CHARACTERS
    for (let j = 0; j < upcasedMessage[i].length; j++) {
      // GET THE ASCII KEYCODE OF THE CHARACTER
      let keyCode = upcasedMessage[i].charCodeAt(j);

      // APPLY THE SHIFT ON THE CHARACTER
      let newPosition = keyCode + checkForNaN;

      // CHECK IF IT IS OUTSIDE THE RANGE
      if (newPosition < 65) {
        newPosition += 26;
      } else if (newPosition > 90) {
        newPosition -= 26;
      }

      // GET THE CORRESPONDING NEW CHARACTER AND PUSH INTO
      // THE HOLDER ARRAY
      let newCharacter = String.fromCharCode(newPosition);
      holder.push(newCharacter);
    }

    // JOIN THE HOLDER ARRAY AND PUSH INTO RESULTS ARRAY
    result.push(holder.join(''));
  }

  // JOIN THE WORDS AND RETURN AS STRING RESULT
  return result.join(' ');
}

module.exports = {
  morseEncode,
  morseDecode,
  caesarEncode
}
