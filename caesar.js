function caesarEncode(input, shift) {
    let newString = '';
    if (shift < 0) {
        shift += 26;
    }
    for (letter of input) {
        // Check for alphabets
        // Check for capital A to Z                                        or    // Check for small a to z
        if ( ( (letter).charCodeAt() >= 65 && (letter).charCodeAt() <= 90) || ( (letter).charCodeAt() >= 97 && (letter).charCodeAt() <= 122 ) ) {
            // Checking if the captial letter is lesser than the value of the shift                   or            // Check if small letter is lesser than the value of the shift
            if ( ( (letter).charCodeAt() >= 65 && (letter).charCodeAt() <= 25 - parseInt(shift) + 65) || ( (letter).charCodeAt() >= 97 && (letter).charCodeAt() <= 25 - parseInt(shift) + 97) ) {
                newString += String.fromCharCode((letter).charCodeAt() + parseInt(shift));
            } else {
                newString += String.fromCharCode((letter).charCodeAt() -26 + parseInt(shift));
                }
        } else {
        // If its not a letter
            newString += letter;
        }
    } return newString;
}

console.log(caesarEncode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23));