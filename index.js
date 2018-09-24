const letterToMorse = {
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

const morseToLetter = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '...-': 'v',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z'
}

const lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let encodeOrDecode = process.argv[2];
let cipherType = process.argv[3]; 
let userInput = process.argv[4].trim().toLowerCase();
let leftOrRight = process.argv[5];
let shiftBy = parseInt(process.argv[6] % 26);
let output = "";

function morse() {
  if (encodeOrDecode == "encode") {
    for (let i = 0; i < userInput.length; i++) {
      let currentChar = userInput.charAt(i);
      if (currentChar == " ") {
        output += "    "
      } else {
        output += letterToMorse[currentChar] + " ";
      }
    }
  } else {
    let wordsArray = userInput.split("    ");
    wordsArray.forEach((word) => {
      let letterArray = word.split(" ");
      letterArray.forEach((letter) => {
        output += morseToLetter[letter];
      })
      output += " ";
    })
  }
}

function caesar() {
  for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput.charAt(i);
    if (currentChar == " ") {
      output += " "
    } else {
      let newIndex;
      if (leftOrRight == "left") {
          newIndex = lettersArr.indexOf(currentChar) - shiftBy;
        if (newIndex < 0) {
          newIndex = 26 + newIndex;
        }
      }
      if (leftOrRight == "right") {
          newIndex = lettersArr.indexOf(currentChar) + shiftBy;
        if (newIndex > 25) {
          newIndex = newIndex - 26;
        }
      }
      output += lettersArr[newIndex];
    }
  }
}

if (cipherType == "morse") {
  morse();
} else {
  caesar();
}

console.log(output);
