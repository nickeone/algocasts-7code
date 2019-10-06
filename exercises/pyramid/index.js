// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'     col === 1
//   pyramid(2)
//       ' # '
//       '###'    col === 3
//   pyramid(3)
//       '  #  '  0 1 # 3 4  row === 0 => # =     2         center  === 2 => n-1 === row+2
//       ' ### '  1 # # # 4  row === 1 => # =   1 2 3
//       '#####'  # # # # #  row === 2 => # = 0 1 2 3 4
//                  col === 5

//   pyramid(4)                                             center 3
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######' col === 7

//   pyramid(5)                                          center 4
//       '    #    '  0 1 2 3 # 5 6 7 8
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########' col === 9


// col = 11 ; 0 1 2 3 4 # 6 7 8 9 10

//
// function pyramid(n) {
//     const mid = n - 1;
//     for(let row = 0; row < n; row++){
//         let str = "";
//         // console.log('row');
//         for(let col = 0; col < n * 2 - 1; col++){
//             // console.log('col');
//             if(mid - row <= col && mid + row >= col){
//                 // console.log('1if');
//                 str += "#";
//             }else{
//                 str += " ";
//             }
//         }
//         console.log(str);
//     }
// }

function pyramid(n, row = 0,  str = '') {
    let mid = n - 1;
    if(row === n){
        return;
    }
    if(str.length === n * 2 - 1){
        console.log(str);
        return pyramid(n, row + 1, str = '')
    }
    if(mid - row <= str.length && mid + row >= str.length){
        str += "#";
    }else{
        str += " ";
    }
    pyramid(n, row, str);
}

pyramid(5);

module.exports = pyramid;
