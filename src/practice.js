// var filtered = function(arr, fn){

// }

// function filter(arr){
//     const fa = arr.filter((num) => {return num > 10} )
//     console.log(fa)
// }

// filter([10,20,20])

Array.prototype.myFilter = function(fn){
    let filtered = [];

    for(let i =0; i<this.length; i++){
        if(fn(this[i])){
            filtered.push(this[i])
        }
    }
    return filtered;
}

const arr = [10,20,30];
const res = arr.myFilter((num) => { return num > 10 });
console.log(res)