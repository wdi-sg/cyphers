var argument = process.argv[2];
var word = process.argv[3];
if (argument === "morse") {
  var encryption = {
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

  var res = "";
  for (var i = 0; i < word.length; i++) {
    res += encryption[word.charAt(i)];
  }
  console.log("Morse encryption: " + res);
}

else if (argument == "cc") {
  var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var word = word.toUpperCase();
  var res = "";
  for (var i = 0; i < word.length; i++) {
    // get new char code
    var newCharCode = word.charCodeAt(i) - 3;

    if (newCharCode < 65) {
      newCharCode = 90 - (65-newCharCode) + 1;
      res += String.fromCharCode(newCharCode);
    }
    else {
      res += String.fromCharCode(newCharCode);
    }
  }
  console.log(res);

}
else {
  console.log("invalid input");
}
