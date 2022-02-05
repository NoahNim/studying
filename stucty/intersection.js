//Function takes two arrays
//Finds indices that are in both arrays
//make 2 hashmaps
//loop through each array at the sae time and put each element in
// each hashmaps
// check if element is in either hashmap and push it to the
// matching elements array

const intersection = (a, b) => {
    let hashmap1 = [];
    let hashmap2 = {};
    let matchArray = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] in hashmap2) {
            matchArray.push(a[i])
        }
        else {
            hashmap1[a[i]] = a[i];
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (b[i] in hashmap1) {
            matchArray.push(b[i])
        }
        else {
            hashmap2[b[i]] = b[i];
        }
    }

    return matchArray;
};

