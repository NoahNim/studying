// make a set for each string
// loop through t
// check if sSet does not have elenent and tSet does. if sSet does have not have it return the element
var findTheDifference = function(s, t) {
    let sSet = new Set(s.split(''));
    let tSet = new Set(t.split(''));
    
    for (let i = 0; i < t.length; i++){
        if (!sSet.has(t[i]) && tSet.has(t[i])) return t[i];
    }
};