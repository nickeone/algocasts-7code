// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = '';
    let str = n.toString();
    for( let nr of str){
        reversed = nr + reversed;
    }
    console.log(Number(reversed));
    if(n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

reverseInt(1224);
module.exports = reverseInt;
