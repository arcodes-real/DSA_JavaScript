// print duplicates of an array
// i/p = [0,0,1,1,1,2,2,3,4,4,5];
// o/p = [0,1,2,4]

function readDuplicates(arr){
    let arrayOfDups = [];
    // let arrayofUniques = [];
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                arrayOfDups.push(arr[i]);
                i++;
                j++;
            }
        }
    }
    console.log(arrayOfDups);
}
readDuplicates([0,0,1,1,1,2,2,3,4,4,5]);

// boolean data type vs boolean method

let bool1 = false;

let bool2 = new Boolean(false);
console.log(typeof bool2); // object. creating boolean value with new keyword makes it an object.
//object is a truthy value. Avoid using new keyword 

if(bool1){
    console.log("First Block");
}

if(bool2){
    console.log("Second Block");
}

// finding the maximum and minimum in a array

function findMaxMin(arr){
    let sortedArray = arr.sort(function(a,b){return a-b});
    let maxNum = sortedArray[sortedArray.length - 1];
    let minNum = sortedArray[0];
    console.log(maxNum);
    console.log(minNum);
}
findMaxMin([20,5,100,-2]);

// converting an array of objects to a single object

var array = [
    { key: 'k1', value: 'v1' },
    { key: 'k2', value: 'v2' },
    { key: 'k3', value: 'v3' }
];

let mapped = array.map((item) => ({ [item.key] : item.value} ));
let newObj = Object.assign({}, ...mapped);
console.log(newObj);

// null vs undefined

console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined); // true coz null and undefined both are falsy values