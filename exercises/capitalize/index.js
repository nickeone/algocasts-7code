// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let strToArr = str.split("");
    strToArr[0] = strToArr[0].toUpperCase();
    for(let i = 1; i < strToArr.length; i++){
        if(strToArr[i-1] === " "){
            console.log("white space");
            strToArr[i] = strToArr[i].toUpperCase()
        }
    }
    return strToArr.join("");
}

capitalize('nicu is fine');

module.exports = capitalize;
