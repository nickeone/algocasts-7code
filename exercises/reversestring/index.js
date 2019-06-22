// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// SOLUTION 1

// function reverse(str) {
//     var reversed = '';
//
//     for (let char of str) {
//         reversed =  char + reversed;
//         console.log(reversed);
//
//     }
//     return reversed;
// }
// SOLUTION 2

// function reverse(str) {
//     var reversed = '';
//     for(var i = str.length-1; i >= 0; i--){
//         reversed += str[i]
//     }
//     return reversed;
// }

// SOLUTION 3

function reverse(str) {
    return str.split('').reduce( (accumulator, currentValue) => {
        console.log(accumulator);
        return currentValue + accumulator}, '');
}



reverse('nicu');
module.exports = reverse;
