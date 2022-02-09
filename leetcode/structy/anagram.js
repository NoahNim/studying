const anagrams = (s1, s2) => {
    let s1count = [];

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i].includes(s2[j]) && !(s1count.includes(s1[i]))) s1count.push(s1[i])
        }
    }

    if (s1count.length === s2.length) return true;
    else return false;
};