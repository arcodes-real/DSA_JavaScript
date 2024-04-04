// reverse polyfill

// function reverseStr(str){
//     let reversed = "";
//     for(let i = str.length-1; i>=0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(reverseStr("hello world"))

// String.prototype.myReverse = function(){
//     // const letters = this.split('')
//     let reversed = ""
//     for(let i = this.length-1; i>=0; i--){
//         reversed += this[i]
//     }
//     return reversed
// }
// console.log("hello world".myReverse());

for(let i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i)},0)}