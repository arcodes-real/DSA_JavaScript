// function subArray(arr){
//     let subarrays = [];
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i+1; j<= arr.length; j++){
//             let subarray = arr.slice(i,j)
//             subarrays.push(subarray)
//         }
//     }
//     return subarrays
// }
// console.log(subArray([1,-2,3,4,5,-2,-1,3]))
const people = [
    {
        name:"Archis",
        age: 24
    },
    {
        name:"Deshna",
        age: 22
    }
    ]
const employee = [...people];
// employee[0].name = "Archis Datta";
console.log(employee[1] === people[1]);