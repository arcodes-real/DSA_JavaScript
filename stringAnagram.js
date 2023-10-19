// //String Anagram
// //'hello' -> 'llheo'

// //Anagram conditions
// //length check (for both strings)




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