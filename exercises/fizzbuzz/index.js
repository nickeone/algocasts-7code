// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // console.log(i / 3  % 0);
    let str = '';
    for(let i = 1; i <= n; i++){

    // console.log('nicu', i  % 3);
        if( i % 3 === 0 & i % 5 === 0){
            console.log('fizzbuzz');
        }
        else if ( i % 3 === 0){
            console.log('fizz');
        }
        else if ( i % 5 === 0){
            console.log('buzz');
        }

        // console.log("i=", i % 3 !== 0);
        // else( i % 3 !== 0 & i % 5 !== 0 ){
        else{
            console.log(i);
        }
    }
}

fizzBuzz(15);

module.exports = fizzBuzz;
