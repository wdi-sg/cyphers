let morse = {
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


function morseDecode(input) {
  // Do your stuff here
  let sentence = []
  let values = Object.values(morse);
  let keys = Object.keys(morse);
  let arrWords = input.split('    ');

  for(let b=0; b<arrWords.length; b++) {
    let arrLetter = arrWords[b].split(' ');

    for(let i=0; i<arrLetter.length; i++) {
      for(let a=0; a<values.length; a++) {
        if(arrLetter[i]==values[a]) {
          arrLetter.splice(i, 1, keys[a]);
        }
      }
    }

    sentence.push(arrLetter.join('').toUpperCase());
  }
  
  return sentence.join('');
}

function caesarEncode(input, shift) {
  // Do your stuff here
  let sign = Math.sign(shift);
  let num = Math.abs(shift);
  let words = input.split(' ');
  let sentence = [];
  
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  for(let a=0; a<words.length; a++) {
    let arrLetters = words[a].split(''); 

    for(let b=0; b<arrLetters.length; b++) {
      if(sign == -1) { 
        for(let i=0; i<letters.length; i++) {
          if(arrLetters[b] == letters[i]) {
            if(i - num < 0) {
              arrLetters.splice(b, 1, letters[26-((num-i)%26)]);
              break;
            } else {
              arrLetters.splice(b, 1, letters[i-num]);
              break ;
            }
          }
        }
      } else if (sign == 1) {
        for(let i=0; i<letters.length; i++) {
          if(arrLetters[b] == letters[i]) {
            if(num + i > 25) {
              arrLetters.splice(b, 1, letters[(num-(26-i))%26]);
              break;
            } else {
              arrLetters.splice(b, 1, letters[num+i]);
              break ;
            }
          }
        }
      }
    }

    sentence.push(arrLetters.join(''))
  }
  

  return sentence.join(' ');
}

module.exports = {
  morseDecode,
  caesarEncode
}