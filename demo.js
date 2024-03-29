
//swapping letters
let swappingCases = "eLZERo";

let sw = swappingCases
    .split("")
    .map((ele) =>{
        return ele === ele.toUpperCase()? ele.toLowerCase() : ele.toUpperCase();
    })
    .join("");
    console.log(sw);

//inverting number sign
    let invertedNumbers = [1, -10, -20, 15, 100, -30];
    let inv = invertedNumbers.map((ele) =>{
        return -ele;
    });
    console.log(inv);

// fibinacci series
    function fibonacci(n){
        var output = [];
        if(n === 0){
            output = [0];
        }else if(n === 1){
            output = [0,1];
        }else{
            output = [0, 1];
            for(i=2; i<n; i++){
                output.push(output[output.length - 2] + output[output.length - 1]);
            }
        }
        return output;
    }
    output = fibonacci(10);
    console.log(output);

//Chekcing sum zero
//[-5, -4, -3, -2, 0, 2, 4 , 6 , 8]
//[? , ?] print the first pair whose sum is equal to zero
//[-4,4] -> output
//here array is already sorted, if it wasn't then we first need to sort it
//time complexity -> o(n^2)
function getSumPairZero(array){
    for(let number of array){     // loops through the array and stores the elements one by one in number variable
        for(j=1; j<array.length; j++){
            if(number + array[j]=== 0){
                return [number, array[j]];
            }
        }
    }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4 , 6 , 8]);           
console.log(result);

//finding duplicates in an array

var array = [2, 4, 5, 8, 6, 4, 2];
var index = 0; var newArray = [];
const length = array.length

function findDuplicates(array){
    for(i = 0; i< length -1; i++){
        for(j = i +1; j<length; j++){
            if(array[i] === array[j]){
                newArray[index] = array[i];
                index++ ;
            }
        }
    }
    return newArray;
}
const duplicates = findDuplicates(array);
console.log(duplicates);

//finding duplicates in a string
//return letters that occur more than ones in a string

var str = "Occassion";
var newStr = []; let indeX= 0;
var strArr = str.split("").map((ele) => ele.toLowerCase());

const strArrLength = strArr.length;

function findDup(strArr){
    for(i= 0; i< strArrLength-1; i++){
        for(j= i+1; j<strArrLength; j++){
            if(strArr[i] === strArr[j]){
                newStr[indeX] = strArr[i];
                indeX++;
            }
        }
    }
    return newStr;
}

const dups = findDup(strArr);
console.log(dups); 

// using the reduce() method to sum array data

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue ,0);
console.log(sum);

// printing the first 10 natural numbers from the object returned by a Generator function

function* nextNatural(){
    let naturalNumber = 1;

    while(true){
        yield naturalNumber++;
    }
}
 let gen = nextNatural(); // inside the gen object all the yielded natural numbers are getting stored

 // print the first 10 natural numbers from the gen object. i = index number

for(let i = 0; i< 10; i++){
    console.log(gen.next().value);
}

// understanding diff between yield and yield*

const array_demo = ['a','b','c'];
function* generator(arr){
    yield 1;
    yield* arr;
    yield 2;
}
for(let value of generator(array_demo)){
    console.log(value);
}

function* generator(){
    yield 'a';
    yield 'b';
    return 'result';
    yield c;
    
} 
    let it = generator();
    console.log(JSON.stringify(it.next()));
    console.log(JSON.stringify(it.next()));


// swapping numbers Technique 
var a = 10;
var b = 20;
var copy = a;
a = b;
b = copy;
console.log(a,b);


// swapping numbers Technique 2

var x = 30;
var y = 40;
[x, y] = [y, x];
console.log(x, y);

// output of the following code

var z = 10;
function buzz(){
    console.log(z);
    if(!z);
}
buzz();

// javascript object example

var obj1 = {
    name: "Archis",
    age: 23,
    city: "Chennai"
}
console.log(obj1.name);

// JS Better Practice: Using Promise.all: Promise.all will make concurrent requests to both getUser and
// getProducts instead of waiting for previous one to get resolved and make a second call




// Difference between flat() and flatMap()

// flat() : flattens nested arrays effortlessly. flat() creates a new array with all sub-array elements
//concatenated to it.

let nestedArray = [1, [2,3],[4,[5,6]]];

let flattedArray = nestedArray.flat(2);

console.log(flattedArray);

// flatMap() : first map each element via a function and then flattens the result into a new array

let StringedArray = ['Hello', 'World'];

let flattendStringArray = StringedArray.flatMap((word) =>
    word.split('')
);

console.log(flattendStringArray);

// declaring variable in the global scope

var a = 5;

function myFunc(num){
    // return num;
    console.log(num);
}

// myFunc(a);
const resultt = myFunc;
console.log(resultt);

// conceptual
console.log(false == []);
console.log(false == ![]);


// conceptual
const arr1 = "john".split('');
const arr2 = arr1.reverse();
console.log(arr1);
const arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1);

console.log(arr1.length+ " "+arr1.slice(-1));
console.log(arr2.length+ " "+arr2.slice(-1));

// reverse string

function reversedString(str){
    let reversedString = ""; // keep an empty string to store the reversed string
    for(let i = str.length - 1; i >= 0; i--){
        reversedString += str[i];
    }
    return reversedString;
}
console.log(reversedString("ARCHIS"));

// closures and lexical scoping in JS

var x = 10;

function foo(){
    var y = 20;

    function bar(){
        var z = 15;
        
        return x + y + z;
    }
    return bar;
}
const add = foo();
add();

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number();

  // pythagoras theorem
    function pythagorasCheck(a, b, c){
    if(((a*a) === ((b*b) + (c*c))) || ((b*b) === ((a*a) + (c*c))) || ((c*c) === ((a*a)+(b*b)))){
        console.log("possible");
    }else{
        console.log("Not possible");
    }
  }
  pythagorasCheck(5,12,13);

 // checking whether a right angled triangle is possible or not, given three sides
 function isRightAngled(a, b, c){

    // sort the sides in ascending order
    const sides = [a, b, c].sort((x,y) => x - y);
    const [side1, side2, hypotenuse] = sides;

    // check if it's a valid trianlge(sum of the two sides should be greater than the hypotenuse)
    if(side1 + side2 <= hypotenuse){
        console.log("not a valid triangle");
    }

    // pythagoras theorem

    return ((side1*side1 + side2*side2) === hypotenuse*hypotenuse);
}
if (isRightAngled(12, 13, 5)) {
    console.log("It's a right-angled triangle.");
  } else {
    console.log("It's not a right-angled triangle.");
  }

  // constructor function
 function superhero(hero){
    this.hero = hero;

    // return {hero: "B"}; if explicitly returned, then this will be returned everytime
  }

  const hero1 = new superhero("A");
  console.log(hero1.hero);

  // converting an object to an array of objects
  // input -> {a:1, b:2, c:3}
  // output -> [{a:1}, {b:2}, {c:3}]

  const Input = {a:1, b:2, c:3};
  const Output = Object.keys(Input).map((key) =>({[key]:Input[key]}));
  console.log(Output);
 

  // continue statement

  for(let i =1; i<5; i++){
    if(i === 3) continue;
    console.log(i);
  }

  // IIFE
  (function(){
    let a = b = 5;
  })();
  console.log(b);

  // understanding of this keyword

  var dataObj = {
        data: [1, 2, 3],
        processData: function(){
            this.data.forEach((num)=>{
                console.log(num * this.multiplier);
            })
        },
        multiplier: 2
  };
  dataObj.processData();

  // property vs variable

  const object = {
    message: "Hello World",
    getMessage(){
        const message = "Hello Earth";
        console.log(this.message);
    }
  }
  object.getMessage(); // Hello World

  // Cat name

  function Pet(name) {
    this.name = name;
  
    this.getName = () => this.name;
  }
  
  const cat = new Pet('Fluffy');
  
  console.log(cat.getName()); // Fluffy
  
  const { getName } = cat;
  console.log(getName());     // Fluffy

 // Greeting and Farewell

 const GFObj ={
    message: "World",

    greet: function(){
        return `Hello, ${this.message}!`
    },

    farewell:()=>{
        return `Goodbye, ${this.message}!`
    }
 }

 console.log(GFObj.greet());
 console.log(GFObj.farewell());

 // this inside an arrow function always equals to this of the outer scope, here outer scope is the global/window scope

// tricky length

var length1 = 4;
function callback(){
    console.log(this.length1);
}

const objecT = {
    length: 5,
    method(callback){
        callback(); // regular function call, will point to property value of the window object
        callback.call(objecT); // calling function with respect to the object, will point to the property value of the objecT
    }
};

objecT.method(callback);

// split method accepts regular expression

const mixed_string = "2,3;4";
const sorted_array = mixed_string.split(/[,;]/);
console.log(sorted_array);

// making multiple properties of an object immutable

var user1 = {
    name: "Archisman",
    adhar_number: 112345863529,
    phn_number: 6350089281
};


Object.defineProperties(user1,
    {
        name:{
            writable: false
        },
        
        adhar_number:{
            writable: false
        }
        
    });

    user1.name = "Datta";
    user1.adhar_number = 123;
    console.log(user1);


// two sum
// i/p -> numsArray = [2,5,5,10] ,target = 10
// o/p -> [1,2] //return the index

function twoSum(numsArray, target){
    for(let j = 0; j<numsArray.length; j++){
        for(let i = j+1; i<numsArray.length; i++){
            if(numsArray[j] + numsArray[i] === target){
                return [j, i];
            }
        }
    }
}
const sumRes = twoSum([2,5,5,10], 10);
console.log(sumRes);

// You are given two non-empty arrays representing two non-negative integers. The digits are stored in 
// reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as
// a array.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function addTwoNumbers(l1, l2){
    let jl1 = l1.join("");
    let rl1 = "";
    for(let i = jl1.length-1; i>=0; i--){
        rl1 += jl1[i];
    }

    let jl2 = l2.join("");
    let rl2 = "";
    for(let j = jl2.length-1; j>=0; j--){
        rl2 += jl2[j];
    }

    let sum = parseInt(rl1) + parseInt(rl2);
    let sumStr = String(sum);
    let rSumStr = "";
    for(let k = sumStr.length-1; k>=0; k--){
        rSumStr += sumStr[k];
    }
    let arr = rSumStr.split("").map((ele)=>{
        return Number(ele);
    })
    console.log(arr);
}
addTwoNumbers([0],[0]);

// palindrome number
// 121 -> 121 [true]
// 123321 -> 123321 [true]
// -121 -> 121- [false]

// without using pointers

function palindrome(x){
    let xToStr = x.toString();
    let revX = "";
    for (let i = xToStr.length-1; i>=0; i--){
        revX += xToStr[i];
    }
    let revXtoNum = Number(revX);
    if(revXtoNum === x){
        return true;
    }else{
        return false;
    }
}
let pRes = palindrome(121);
console.log(pRes);

// using pointers

var isPalindrome = function(num){
    let numToStr = num.toString();

    let left = 0;
    let right = numToStr.length - 1;

    while(right > left){
        if(numToStr[left] === numToStr[right]){
            return true;
            left++;
            right--;
        }else{
            return false;
        }
    }
}

let Pres = isPalindrome(121);
console.log("Palindrom ",Pres);

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to 
// go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

function reverseDigit(num){
    if(num < 0){
        num *= -1;
        let numToString = num.toString();
        let revNum = "";
        for(let i = numToString.length-1; i>=0; i--){
            revNum += numToString[i];
        }
        let toNum = Number(revNum);
        if(toNum >= Math.pow(-2,31) && toNum <= (Math.pow(2,31)-1)){
            return (-1*toNum);
        }else{
            return 0;
        }
    }else{
        let numToString = num.toString();
        let revNum = "";
        for(let i = numToString.length-1; i>=0; i--){
            revNum += numToString[i];
        }
        let toNum = Number(revNum);
        if(toNum >= Math.pow(-2,31) && toNum <= (Math.pow(2,31)-1)){
            return toNum;
        }else{
            return 0;
        }
    }
}
const revRes = reverseDigit(-1230);
console.log(revRes);

// maximum number in an array

function findMax(arr){
    let sortedArray = arr.sort(function(a,b){return a-b});
    let maxNum = sortedArray[sortedArray.length-1];
    console.log(maxNum) ;
}
findMax([20, 10, 20, 4, 100]);

// merging two arrays
// a1 = [1,2,4]; a2 = [1,3,4]
// merged = [1,1,2,3,4,4];
function mergeArrays(array1, array2){
    let mergedArray = array1.concat(array2);
    let mergedSortedArray = mergedArray.sort(function(a,b){return a-b});
    console.log(mergedSortedArray);
}
mergeArrays([1,2,4],[1,3,4]);

// technique 2

let arry1 = [1,2,4];
let arry2 = [1,3,4];
for(let i = 0; i<arry2.length; i++){
    arry1.push(arry2[i]);
}
console.log(arry1.sort(function(a,b){return a-b}));

function manipulateArr(arr){
    arr.push(5);
    arr = [1]
    return arr
}

let list  = [1,2,3,4];
manipulateArr(list);
console.log(list);

list = manipulateArr(list)
console.log(list)