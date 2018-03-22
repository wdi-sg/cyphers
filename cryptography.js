const morseCodeMap = {
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
    z: '--..',
    ' ': ' ',
}

const morseCodeMapReversed = {};

function setupReverseMap () {
    for (let letter in morseCodeMap) {
        morseCodeMapReversed[morseCodeMap[letter]] = letter;
    };
};

function decode (encodedString) {
    let arrayOfWords = encodedString;
    return arrayOfWords.map(function(letter){
        return (morseCodeMapReversed[letter] + ' ');
    }).join('').trim();
}

function encode (stringToEncode) {
    let result = '';
    for (let i = 0; i < stringToEncode.length; i++) {
        result += (morseCodeMap[stringToEncode.charAt(i)] + ' ');
    }
    return result.trim();
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function applyCaesar(translation, stringToEncode) {
    let result = '', currentChar = '', pos = 0;
    for (let i = 0; i < stringToEncode.length; i++) {
        currentChar = stringToEncode.charAt(i);
        if (currentChar === ' ') {
            result += currentChar;
        } else {
            pos = ((alphabet.indexOf(currentChar) + parseInt(translation)) % 26);
            result += alphabet.charAt(pos);
        };
    };
    return result;
}



let input = process.argv.slice(3).join(' ');
switch (process.argv[2]) {
    
    case 'encodeMorse':
        console.log(encode(process.argv.slice(3).join(' ')));
        break;
    case 'decodeMorse':
        setupReverseMap();
        let tmp = process.argv.slice(3);
        console.log(decode(tmp));
        break;
    case 'applyCaesar':
        let tmp2 = process.argv[3];
        console.log(applyCaesar(tmp2, process.argv.slice(4).join(' ')));
        break;
    default:
        console.log('Huh?');
        break;
}