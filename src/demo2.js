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

// higher order function

function randomNumGen(){
    return Math.floor(Math.random() * 1000);
}

function idGen(name, rand){
    return name +"-"+ rand;
}
const userId = idGen("Archis", randomNumGen());
console.log(userId);

// function

function left(){
    console.log("Left");
}
function right(){
    console.log("Right");
}

left() || right();



// creating my custom push

Array.prototype.myPush = function(...elements){
    for(let element of elements){
        this[this.length] = element;
    }
    return this.length;
};
const A = [1,2,3];
A.myPush(4,5,6);
console.log(A);

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

function isPowerOfTwo(n){
    if( n === 0 ) return false;

    while(n > 0){
        if( n === 1 ) return true;
        if( n % 2 !== 0) break;
        n /= 2;
    }
    return false;
}

const isRes = isPowerOfTwo(32);
console.log(isRes);


// CUSTOM LAST()

Array.prototype.last = function(){
    // if(this.length === 0){
    //     return -1;
    // }else{
    //     return this[this.length-1];
    // }

    return this.length===0? -1: this[this.length - 1];
    
}

const AR = [1,2,3,5,6];
console.log(AR.last());

// closures in javascript

function displayCandy(){
    let candy = ["jellybeans"];
    
    function addCandy(candyName){
        candy.push(candyName)
    }

    addCandy("gumdrops")
    console.log(candy)
}
displayCandy();

// function concept
function sayHello(){
    return true
}

if(sayHello()){console.log("Success")} 
else {console.log("Fail")}

// bind

const bikeDetails = {
    displayDetails : function(registrationNum, brandName){
        return this.name +","+ "Bike details : "+  registrationNum + brandName
    }
}

const customer1 = {
    name : "Archisman"
}

const customer1Bike = bikeDetails.displayDetails.bind(customer1, "KA010011", "Haya Busa");
console.log(customer1Bike())

// creating a custom Array.prototype.filter()

Array.prototype.myFilter = function(fn){
    let filtered = [];

    for(let i = 0; i < this.length; i++){
        if(fn(this[i],i)){
            filtered.push(this[i]);
        }
    }
    return filtered
}

const toBeFilterArray = [10,20,30];
const filterArray = toBeFilterArray.myFilter((num,index) => {return (num > 10 && index > 0)});
console.log(filterArray);

// method chaining

const myObj = {
    value : 0,

    increment : function(){
        this.value++;
        return this
    },

    double : function(){
        this.value *= 2;
        return this
    },

    getValue : function(){
        return this.value
    }
}

const res = myObj.increment().double().double().getValue();
console.log(res)

// difference between call() and apply()

const person ={
    bioData : function(city, country){
        console.log(this.firstName +" "+ this.lastName +","+ city +","+ country) 
    }
}
const person1 = {
    firstName : "Archisman",
    lastName : "Datta"
}

// incase of apply()
person.bioData.apply(person1, ["Chennai", "India"]);

// incase of call()

person.bioData.call(person1, "Chennai", "India");

// fetchData

const fetchData = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {data.map((item) => console.log(item.title))})
    .catch((err) =>{
        console.log("Error:", err)
    })
}
// fetchData();
//IIFE
// Encapsulation. IIFE provides encapsulation, allowing you to create private scopes for variables and functions. ...
// Avoiding Global Pollution. By encapsulating code within IIFE, you avoid polluting the global namespace. ...
// Immediate Execution. IIFE executes code immediately after declaration. ...
// Data Privacy.
let a = 10;

(function(){
    let a = 20;
    console.log(a)
})();

console.log(a);

// currying

function multiply(a,b){
    return a*b
}

function currying(fn){
    return function(a){
        return function(b){
            return fn(a,b)
        }
    }
}

const curriedFunc = currying(multiply);
console.log(curriedFunc(2)(3))
