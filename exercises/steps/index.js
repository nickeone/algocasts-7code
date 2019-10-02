// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let str = "";
//     let bool = false;
//
//     for (let i = 1; i <= n; i++){
//         if(i <= n){
//             str += "#";
//             // console.log(str);
//         }
//
//
//         if(n >= i){
//             // console.log('nicu');
//             str += "0";
//         }
//
//
//         console.log(str);
//     }
// }
//
// steps(4);

function steps(n) {
    for (let i = 0; i < n; i++){
        let str = "";
        for (let j = 0; j < n; j++){
            if(j <= i ){
                str += "#";
            }else{
                str += " "
            }
        }
        console.log(str);
    }
}

steps(4);
module.exports = steps;
