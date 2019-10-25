// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let arr = [0,1];
//     for (let i = 0; i < n - 1; i++){
//         arr.push(arr[i] + arr[i+1]);
//     }
//     console.log(arr);
//     return arr[n];
// }
//
// fib(4);


function fib( n, i = 0, arr = [0,1] ) {
    if( i === n-1){
        return arr[arr.length-1];
    }
    arr.push(arr[i] + arr[i+1]);
    fib(n, i + 1, arr);

    // console.log("i", i);
    console.log('nicu', arr[n]);
    // console.log("i", i);
    // console.log('arr', arr);
    // console.log(arr[i] + arr[i+1]);
}

// function fib(num){
//     var a = 1, b = 0, temp;
//     while (num >= 0){
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }
//     return b;
// }
// fib(39);

// function fib (n){
//     if(n < 2){
//         return n;
//     }
//     console.log(fib(n-1) + fib(n - 2));
//     return fib(n-1) + fib( n-2);
// }
//
fib(39);

module.exports = fib;
