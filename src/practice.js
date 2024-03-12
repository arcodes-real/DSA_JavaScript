// function fizzBuzz(n) {
//     // Write your code here
    
//     for(let i = 1; i<=n; i++){
//         if(i%3 === 0 && i%5 === 0){
//             console.log("FizzBuzz")
//         }
//         else if(i % 3 === 0){
//             console.log("Fizz")
//         }
//         else if(i%5 === 0){
//             console.log("Buzz")
//         }
//         else{
//            console.log(i)
//         }
//     }
    

// }
// const res = fizzBuzz(15);
// console.log(res)

// let x = 1;
// for(let i = 1; i<=128; i+=i){
//     x += x
// }
// console.log(x);


// function reverse(str){
//     let revStr = "";
//     for(let i = str.length-1; i>=0; i--){
//         revStr += str[i]
//     }
//     return revStr
// }
// const input = reverse("ABCD EFGH");
// const finalRev = input.slice(5)+" "+input.slice(0,4);
// console.log(finalRev)

// async function getWeather(city){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f5cb74925f27a069b7a88525d31f7256`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) =>{
//         console.log(err)
//     })
// }
// getWeather("alipurduar");

