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

//how to not execute the other operations inside a function, if the 'if' block runs

function check(){
    let name =""
    let email =""
    if(name === "" || email === ""){
        console.log("required")
        return
    }
    console.log("All Set!")
}
check()

// to prevent a function from running all other operations, if the 'if block' runs, we can use a
// return statement within the 'if block', this will exit the function early if the condition is met

// reverse "ABCD EFGH" to "DCBA HGFE"

function revInSameOrder(str){
    let rev  = "";
    for(let i = str.length-1; i>=0; i--){
        rev += str[i]
    }
    return rev
}
const input = "ABCD EFGH"
const revres = revInSameOrder(input);
const final = revres.slice(5)+" "+revres.slice(0,4);
console.log(final)

// REST API: Capital City
// https://jsonmock.hackerrank.com/api/countries?name=${country}
async function getCapitalCity(country){
    await fetch(`https://jsonmock.hackerrank.com/api/countries?name=${country}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.data.length === 0){
            console.log("No data available")
        }
        else{
            data.data.map((item) => console.log(item.capital))
        }
    })
    .catch((err) =>{
        console.log("Error", err)
    })
}
getCapitalCity("Portugal")

// Diverse Deputation
function binomialCoefficient(n, k) {
    // Calculate binomial coefficient (n choose k)
    let res = 1;
    for (let i = 0; i < k; i++) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

function diverseDeputation(m, w) {
    // Calculate the number of ways to select 2 men out of m and 1 woman out of w
    let menWays = binomialCoefficient(m, 2) * w;
    // Calculate the number of ways to select 2 women out of w and 1 man out of m
    let womenWays = binomialCoefficient(w, 2) * m;
    
    // Return the total number of diverse deputations
    return menWays + womenWays;
}

// Example usage:
const m = 3;
const w = 9;
console.log(diverseDeputation(m, w)); // Output: 135

// primitive data types in JS are immutable, Non primitive are mutable
let string = "hello"
string.length = 10
console.log(string.length)
console.log(string)
// o/p : 5 hello


// when accessing variables inside a function, JavaScript follows a mechanism called variable scope resolution, which involves traversing the scope chain to find the value of variables. When a variable is not found in the current scope, JavaScript looks for it in the outer scope, and so on, until it reaches the global scope (window object in the case of browsers).

// In your example, c is declared in the global scope, outside the outer function. When outer is called, and it tries to access the value of c, JavaScript looks for c in the outer scope of the outer function. Since c is not declared within outer, JavaScript continues to look for it in the next outer scope, which is the global scope. Therefore, it can access the value of c from the global scope.

// This behavior is not affected by the context (this) in which the function is called because variable resolution happens based on lexical scope (where variables are declared in the code) rather than the runtime context (this).

let cc = 30;
function outerr(){
    let a  = 10;
    console.log(a, this.b, cc);
}
const objRef = {  
    b : 20
};
outerr.call(objRef)
// o/p : 10 20 30


// 1) the password must be 8 or more characters long
// 2) it must contain characters from all categories : uppercase, lowercase, digits and special characters
// 3) it must contain no more than 20% of special characters
// 4) it cannot contain spaces, periods or commas
// 5) it cannot contain 3 or more sequential characters

function passwordValidator(password){

    // check for length
    if(password.length < 8){
        return false
    }
    // check for 3 or more sequential characters
    // check for spaces, periods and commas
    for(let j = 0; j<password.length; j++){
        let char = password[j]

        if((char === ',') || (char === '.') || (char === ' ')){
            return false;
        }
    }

    // check for uppercase, lowercase, digits and special character

        // regular expressions to check for upper and lower case
        // const upperCaseRegex = /[A-Z]/;
        // const lowerCaseRegex = /[a-z]/;
        // return upperCaseRegex.test(password) && lowerCaseRegex.test(password)

        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasDigits = false;
        let SpecialChar = 0;
        for(let i = 0; i<password.length; i++){
            let char = password[i]

            if(char >= 'A' && char <= 'Z'){
                hasUpperCase =true
            }
            else if(char >= 'a' && char <= 'z'){
                hasLowerCase = true
            }
            else if(!isNaN(parseInt(char))){
                hasDigits = true;
            }
            else{
                SpecialChar++
            }
        }
        // make sure pwd doesn't contain more than 20% of special characters
            console.log(SpecialChar)
           let totalCount = password.length;
           console.log(totalCount)
           let specialCharPercentage = (SpecialChar/totalCount)*100
           console.log(specialCharPercentage)

        // check if 3 or more characters are not sequential
            for(let l = 0; l <password.length-2; l++){
                if((password.charCodeAt(l)+1 === password.charCodeAt(l+1)) &&
                    (password.charCodeAt(l+1)+1 === password.charCodeAt(l+2))){
                        return false
                    }
            }

           if(hasUpperCase && hasLowerCase && hasDigits && specialCharPercentage <= 20){
            return true;
        }else{
            return false;
        }

        
}
console.log(passwordValidator("Password@2"));

// writing a custom method using object prototype called satisfies, which would return true if 
// a particular string property exists in an object

Object.prototype.satisfies = function(property){
    return typeof this === 'object' && this !== null && typeof property === 'string' && this.hasOwnProperty(property)
}

const testCase = {
    name : "archis",
    age : 23
}
testCase.satisfies("age")


//find the longest word in a sentence

function findLongestWord(sentence){
    let wordsArr = sentence.split(" ")
    let longestWord = ""

    for(let i=0; i<wordsArr.length; i++){
        if(wordsArr[i].length > longestWord.length){
            longestWord = wordsArr[i]
        }
    }
    return longestWord
}

console.log(findLongestWord("I am Archisman Datta"))

// if a promise returns a reject, in that case obviously the catch block will be executed, but 
// if with that catch block any then block is chained, that too will get executed

function job(){
    return new Promise(function (resolve, reject){
        reject()
    })
}

const promise = job();

promise.then(function(){
    console.log('Success 1')
}).then(function(){
    console.log('Success 2')
}).then(function(){
    console.log('Success 3')
}).catch(function(){
    console.log('Error 1')
}).then(function(){
    console.log('Success 4')
})

//o/p : Error 1
    //  Success 4

// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same
function isSameFreq(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false
    }

    let arrfreq1 = {};
    let arrfreq2 = {};

    for(let num of arr1){
        arrfreq1[num] = (arrfreq1[num] || 0) + 1
        }
    // console.log(arrfreq1)
    for(let num of arr2){
        arrfreq2[num] = (arrfreq2[num] || 0) + 1
        }
    // console.log(arrfreq2)

    for(let key in arrfreq1){
        if(!key*key in arrfreq2) return false;
        if(arrfreq1[key] !== arrfreq2[key*key]) return false
    }
    return true
}
console.log(isSameFreq([1,2,2],[1,4,4]))

// polyfill for array.protoype.reduce() method

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++){
        accumulator = callback(accumulator, this[i])
    }
    return accumulator
}
const arr = [1,2,3,4,5]
let sum = arr.myReduce((acc, curr) => acc+curr,0)
console.log(sum)

// polyfill for String.prototype.reverse()

String.prototype.reverse = function(){
    let reversed = ""
    for(let i = this.length-1; i>=0; i--){
        reversed += this[i]
    }
    return reversed
}
console.log("hello world".reverse()) // o/p: dlrow olleh

// reversing a string will keeping the words in same order

function reverseStr(str){
    let reversed = "";
    let finalReversed = ""
    for(let i = str.length-1; i>=0; i--){
        reversed += str[i]
    }
    let splitRev = reversed.split(" ")
    for(let i = splitRev.length-1; i>=0; i--){
        finalReversed += splitRev[i]+" "
    }
    return finalReversed
}
console.log(reverseStr("hello world India Archis"))