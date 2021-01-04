const str2chars = str => [...str];            // convert a string to an array of chars
const isAlpha = char => char.match(/[a-z]/); // char is in the alphabet

const palindrome = testString => {
    let sanitizedStringAsCharArray = str2chars(testString.toLowerCase()).filter(x => isAlpha(x));
    let reversed = [].concat(sanitizedStringAsCharArray).reverse();
    return sanitizedStringAsCharArray.every((val, i) => val === reversed[i]);
}

document.writeln(palindrome("Amore, Roma!")
    && palindrome("Madam, I'm Adam!")
    && palindrome("Never odd or even.")
    && !palindrome("Amore")
);