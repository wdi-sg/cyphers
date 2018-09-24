if (process.argv.length > 3) {
  const program = process.argv[2];
  if (program === "morse") {
    // MORSE CODE
    const input = process.argv[3];
    const words = input.split("    ");
    let sentence = "";

    // morse code
    const morseCode = {
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

    const decryptCode = (code) => {
      for (key in morseCode) {
        // console.log(key);
        if (morseCode[key] === code) {
          return key;
        }
      }
      return '*';
    }
    console.log(words);
    // decryptCode(input);
    words.forEach((word) => {
      let letters = word.split(" ");
      for (i=0; i<letters.length; i++) {
        sentence += decryptCode(letters[i]);
      }
      sentence += " ";
    })
    console.log(sentence);
  } else if (program === "ciper") {
    // CAESAR CIPER decryt
    const input = process.argv[3]
    let sentence = "";
    let shift = parseInt(process.argv[4]) + 26; // assume shift right 3 characters

    // shift = shift + 26;
    for (i=0; i<input.length; i++) {
      let char = input[i];

      // check for alphabets
      if (char.match(/[a-z]/i)) {
        // console.log(char);

        let codeNum = char.charCodeAt(0);

        // uppercase
        if (codeNum <= 90) {
          // console.log(((codeNum - 65 + shift) % 26));
          char = String.fromCharCode(((codeNum - 65 + shift) % 26) + 65);
        } // lowercase
         else if (codeNum <= 122) {
          char = String.fromCharCode(((codeNum - 97 + shift) % 26) + 97);
        }
      }
      // console.log(char);
      sentence += char;
    }
    console.log(sentence);
  }



}
