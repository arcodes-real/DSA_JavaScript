const fetchData = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        let dumData = response.json()
        console.log(dumData)
    })
    .catch((err) =>{
        console.log("Error:", err)
    })
}

fetchData();







































// const fib = (n, memo) => {
//     memo = memo || {}

//     if (memo[n]) return memo[n]

//     if (n <= 1) return 1
//     return memo[n] = fib(n-1, memo) + fib(n-2, memo)
// }

// const res = fib(9)
// console.log(res)