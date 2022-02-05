const anagrams = (s1, s2) => {
    let hashMap1 = {};
    let hashMap2 = {};

    if (s1.length !== s2.length) return false;

    for (let i = 0; i < s1.length; i++) {
        let currLetter = s1[i];

        if (currLetter in hashMap1) {
            hashMap1[currLetter] += 1;
        }
        else {
            hashMap1[currLetter] = 1;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        let currLetter = s2[i];

        if (currLetter in hashMap2) {
            hashMap2[currLetter] += 1;
        }
        else {
            hashMap2[currLetter] = 1;
        }
    }

    for (letter in hashMap1) {
        if (letter in hashMap2 && hashMap1[letter] === hashMap2[letter]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};
