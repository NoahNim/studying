// make variables letterCount and newString and currentLetter
// loop through s
// make the immediate first letter the currentLetter
// increment letterCount by one until it hits a new letter
// push the letterCount and then last letter before new letter into the new string
// once loop is done return joined newString
// try to make these as simple as possible

const compress = (s) => {
    let letterCount = 1;
    let newString = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i + 1];

        if (curr === next) {
            letterCount++;
        }

        else if (letterCount > 1) {
            newString.push(`${letterCount}${curr}`)
            letterCount = 1;
        }

        else {
            newString.push(curr);
        }
    }

    return newString.join('');
};
