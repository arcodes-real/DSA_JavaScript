// String Anagram
// 'hello' -> 'llheo'

// Anagram conditions
// first -> length check (for both strings)
// second -> calculate frequency of letter of first string
// third ->  decrement the value of each item by 1

function isAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }

    // count frequency of letter of string1

    let counter ={};
    for(let letter of string1){
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter);
    }
    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        console.log(counter[items])
        counter[items] -= 1;
        console.log("break")
        console.log(counter[items]);
        
    }
    return true;
}
const check = isAnagram("hello","lllho");
console.log(check);



// reversed String

function reversedString(str){
    let reversedString = "";
    for (let i = str.length - 1; i>=0; i--){
        reversedString += str[i];
    }
    return reversedString;
}
console.log(reversedString("Archis"));

// swapping letter
// lowerCase to upperCase and vice versa

let swappingCases = "eLZERo";

let sw = swappingCases.split("").map((item) =>{
    return item === item.toUpperCase()? item.toLowerCase() : item.toUpperCase();
}).join("");
console.log(sw);

// two sum

function twoSum(numArray, target){
    for(let j = 0; j<numArray.length; j++){
        for(let i = j+1; i<numArray.length; i++){
            if(numArray[j] + numArray[i] === target){
                return [j,i];
            }
        }

    }
}
const result = twoSum([2,5,5,10], 10);
console.log(result);


// palindrome number 
// 121 -> 121 // true
// -121 -> 121- //false

function palindrome(num){
    let numToStr = num.toString();
    let rev ="";
    for(let i= numToStr.length-1; i>=0; i--){
        rev += numToStr[i];
    }
    let revToNum = Number(rev);
    if(revToNum === num){
        return true;
    }else{
        return false;
    }
}
const pRes = palindrome(-121);
console.log(pRes);

// Objects are reference type -> Non-primitive Data type

let a = {};
let b = {};
console.log(a === b); // false
console.log(a == b);  // false
console.log(typeof(a) === typeof(b)); // true
console.log(typeof(a) == typeof(b));  // true
let x = {key:1};
let y = {key:1};
console.log(x.key === y.key); // true
console.log(x.key == y.key); //true













// const topics = ["cooking", "cat", "history" ];

// const [first] = topics;

// console.log(first);

// const radius = 5;
// var sphere ={
//     radius: 10,
//     diameter:() =>{
//         return (this.radius * 2);
//     }
// }
// console.log(sphere.diameter());

// console.log(null == undefined);
// console.log(null === undefined);

// // Array Destructuring

// const numbers = [1, 2, 3];
// const [firstN, secondN, thridN] = numbers;

// console.log(firstN);
// console.log(secondN);
// console.log(thridN);

// // Object Destructuring

// const person = {fName:"Archisman", lName: "Datta", age: 23 };
// const {fName, lName, age} = person;

// console.log(fName);
// console.log(lName);
// console.log(age);

// // Declaring 3 variables in a single line in JS

// var firstName = "Archisman", lastName = "Datta", years = 23;

// console.log(`My name is ${firstName} ${lastName}. I am ${years} years old!`)














// Write a program that prints the numbers from 1 to 100. But for multiples of three,
//  print "Archisman" instead of the number, and for multiples of five, print "Datta". 
//  For numbers that are multiples of both three and five, print "Archisman Datta".

// function ArchismanDatta(i){
//     for(let i =1; i<= 100; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("Archisman Datta");
//         } else if(i % 3 === 0){
//             console.log("Archisman");
//         }else if(i % 5 === 0){
//             console.log("Datta");
//         }else{
//             console.log(i);
//         }
//     }
// }
// const result = ArchismanDatta(5);
// console.log(result);


//Hi Archisman Datta, how are you doing?
// Write a program that remove the Vowels from the given string above and reverse the words in the remaining string and print the final string.

function removeVowelAndReverse(str){
    // remove the vowels
    const vowels = /[aeiou]/gi;
    const stringWithoutVowels = str.replace(vowels, '');
    // console.log(stringWithoutVowels);

    // reverse the word in the remaining string

    const words = stringWithoutVowels.split(' ');
    // console.log(words);
    const reversedWords = words.reverse();

    // join the words into final string

    const finalString = reversedWords.join(' ');

    console.log(finalString);

}

const inputString = "Hi Archisman Datta, how are you doing?";
removeVowelAndReverse(inputString);



// converting an array of objects to a single object

var array = [
    { key: 'k1', value: 'v1' },
    { key: 'k2', value: 'v2' },
    { key: 'k3', value: 'v3' }
];

let mappedArr = array.map((item) => ({ [item.key] : item.value }));
let arrObj = Object.assign({}, ...mappedArr);
console.log(arrObj);