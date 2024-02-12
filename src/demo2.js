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

// call vs bind

// call

function greet(message){
    console.log(message + ", "+ this.name);
}

const bird ={
    name: "Hen"
};
greet.call(bird, "Hello");

// bind

function greet2(message){
    console.log(message +", "+ this.name);
}

const animal = {
    name : "lion"
}

const objGreet2 = greet2.bind(animal);
objGreet2("Hello");

// when a new function is created with the bind method, the new function's context is permanently set to the 
// properties of the object to which it is binded

const Bird = {
    name: "Hen"
};

const Animal = {
    name: "lion"
}

function show(){
    console.log(this.name);
}

const objShow = show.bind(Bird);
objShow.call(Animal);

// LC-2966: Divide Array into arrays with max difference
// Divide the array into one or more arrays of size 3 satisfying the following conditions:
// Each element of nums should be in exactly one array.
// The difference between any two elements in one array is less than or equal to k.
// nums is of size n, n is a multiple of 3
// i/p: nums=[1,3,4,8,7,9,3,5,1] k = 2
// o/p: [[1,1,3],[3,4,5],[7,8,9]]

const divideArray = (nums, k)=>{
    nums.sort((a,b) => a-b);

    let result = [];
    for(let i =2; i<nums.length; i += 3){
        if(nums[i] - nums[i-2] > k){
            return [];
        }
        result.push([nums[i-2],nums[i-1],nums[i]]);
    }
    return result;
}

const resArrays = divideArray([1,3,4,8,7,9,3,5,1], 2);
console.log(resArrays);


// sequential digits
// i/p : [100, 300]
// o/p: [123, 234]
// return a sorted array of such numbers whose digits are sequential and is in the range [low,high]

var sequentialDigits = function(low, high){
    let s = '1234567890';
    let res = [];

    for(let i = 0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++){
            let num = parseInt(s.substring(i, j+1));
            console.log(num);
            if(num > high) break;
            if (num >= low) res.push(num);
        }
    }
    return res.sort((a,b) => a-b);
}
let finalRes = sequentialDigits(1000,13000);
console.log(finalRes);

// protypal inheritance

const utility = {
    marks: 30,
    increment: function(){
        this.marks++
    },
    decrement: function(){
        this.marks--;
    }
}

const obj = Object.create(utility);
obj.name = "Archisman";
obj.age = 23;
obj.increment();
obj.decrement();
console.log(obj);

// object immutability - making multiple but not all object properties immutable

const user = {
    name: 'Archisman',
    adhaar: 1234567,
    phn: 6350089281
};

Object.defineProperties(user, {
    name:{
        writable: false
    },
    adhaar:{
        writable: false
    }
});

// Object.freeze(user);

user.name = "nsd";
user.adhaar = 736432;
user.phn = 9609714365;
console.log(user);

// .map() vs .forEach() perf/speed check

const ARR = [1,2,3,4,5];

// const opStart = performance.now();
const forEachStart = performance.now();
ARR.forEach((ele) => (ele+ele)*100000);
const forEachEnd = performance.now();
console.log(`Speed [forEach] : ${forEachEnd - forEachStart} milliseconds`);

const mapStart = performance.now();
ARR.map((ele) => (ele+ele)*100000);
const mapEnd = performance.now();
console.log(`Speed [map] : ${mapEnd - mapStart} milliseconds`);
// const opEnd = performance.now();
// console.log(`Speed [Op] : ${opEnd - opStart} milliseconds`);

// closure and lexical scoping in Javascript
// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/
var x = 10;

function outer(){
    var a = 20;
    function inner(){
        var b = 30;
        console.log(x+a+b);
    }
    inner();
    a++;
    console.log(a);
}
outer();

// output: 60 21

// converting a nested array to 1-D array -flat()
// flat() returns a new array
// o/p - [1,2,3,4,5,6,7,8]

var arrToConvert = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const cA = (arrToConvert.flat(4));
console.log(cA);
console.log(cA === arrToConvert);

// APPLYING flat() on non-array objects

const arrayLike = {
    length : 3,
    0: [1,2],
    1: {length:2, 0:1, 1:2},
    2: 5,
    3: 3
}
console.log(Array.prototype.flat.call(arrayLike));