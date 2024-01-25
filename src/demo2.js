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

