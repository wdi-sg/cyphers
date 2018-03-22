const letterToCipher = {
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

const ciperToLetter = {
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

let encodeOrDecode = process.argv[2];
let userInput = process.argv[3];
let output = "";

if (encodeOrDecode == "encode") {
  for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput.charAt(i);
    if (currentChar == " ") {
      output += "    "
    } else {
      output += letterToCipher[currentChar] + " ";
    }
  }
} else {
  let wordsArray = userInput.split("    ");
  wordsArray.forEach((word) => {
    let letterArray = word.split(" ");
    letterArray.forEach((letter) => {
      output += ciperToLetter[letter];
    })
    output += " ";
  })
}

console.log(output);
