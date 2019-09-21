// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples

//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = stringA;
    let strB = stringB;
    strA = strA.replace(/[^\w]/g,'').toLowerCase();
    strB = strB.replace(/[^\w]/g,'').toLowerCase();

    for (let i = 0; i < strA.length; i++){
        let bool = false;
        for (let j = 0; j < strB.length; j++){
            if(strA[i] === strB[j]){
                bool = true;
            }
        }
        if(bool === false || strA.length !== strB.length){
            console.log('strA', strA, 'strB',strB);
            console.log('false');
            return false;
        }
    }
    console.log('strA', strA, 'strB',strB);
    console.log('true');
    return true;
}

module.exports = anagrams;

anagrams('hello', 'llohe');
anagrams('Whoa! Hi!', 'Hi! Whoa!');
anagrams('One One', 'Two two two');
anagrams('One one', 'One one c');
anagrams('A tree, a life, a bench', 'A tree, a fence, a yard');


