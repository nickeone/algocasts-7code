// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples

//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// transform to small letters
// remove spaces and punctuations
// compare every el of string a with string and if is an element

function anagrams(stringA, stringB) {
    let strA = stringA;
    let strB = stringB;
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();
    strA = strA.replace(/[&\/\\#,+()$~%.'":*?<>{} !]/g,'');
    strB = strB.replace(/[&\/\\#,+()$~%.'":*?<>{} !]/g,'');

    for (let i = 0; i < strA.length; i++){
        let bool = false;
        for (let j = 0; j < strB.length; j++){
            if(strA[i] === strB[j]){
                bool = true;
            }
        }
        if(bool === false){
            console.log('false');
            return false;
        }
    }
    console.log('strA', strA, 'strB',strB);
    console.log('true');
    return true;
}

module.exports = anagrams;

anagrams('Hi there', 'Bye there') ;

