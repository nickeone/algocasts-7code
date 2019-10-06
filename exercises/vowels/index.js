// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let lower = str.toLowerCase();
    console.log(lower);
    let strVowels = '';
    let vowels = "aeiou";
    for(let i = 0; i < lower.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(lower[i] === vowels[j]){
                strVowels += (str[i]);
            }
        }
    }
    console.log('nr: ', strVowels.length);
    return strVowels.length;
}

vowels("IE Nicu is here");
module.exports = vowels;
