// let sum = a => b => (typeof b === "undefined"? a: sum(a+b));
// console.log(sum(2)());
// console.log(sum(2)(3));
// console.log(sum(2)());








































// const fib = (n, memo) => {
//     memo = memo || {}

//     if (memo[n]) return memo[n]

//     if (n <= 1) return 1
//     return memo[n] = fib(n-1, memo) + fib(n-2, memo)
// }

// const res = fib(9)
// console.log(res)