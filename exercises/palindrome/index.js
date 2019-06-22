// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// SOLUTION 1

// function palindrome(str) {
//     let reversed = '';
//     for(let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }
//     if(str === reversed){
//         return true;
//     }else {
//         return false;
//     }
// }

// SOLUTION 2

// function palindrome(str) {
//     for(let i = 0; i < str.length; i++) {
//         // console.log(str[i] + ' !== ' + str[str.length-1-i]);
//         if(str[i] !== str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

// SOLUTION 3
//
// function palindrome(str) {
//    let reversed = str.split('').reverse().join('');
//    console.log('res',reversed);
//    return reversed === str;
// }

// SOLUTION 4

function palindrome(str) {
    return str.split('').every((char, i) =>{
        return char === str[str.length-i-1];
    })

}

console.log(palindrome('alla'));

module.exports = palindrome;
