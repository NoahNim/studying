// make a set for each string
// loop through t
// check if sSet does not have elenent and tSet does. if sSet does have not have it return the element
var findTheDifference = function(s, t) {
    let sSet = new Set(s.split(''));
    let tSet = new Set(t.split(''));
    
    if (s.length == 1 && t.length === 2){
        return t[t.length - 1];
    }
    
    for (let i = 0; i < t.length; i++){
        if (!sSet.has(t[i]) && tSet.has(t[i])) return t[i];
    }
};