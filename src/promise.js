//pure functions

function add(a,b){
    return a+b
}

console.log(add(5,6))

// impure functions

function withdraw(accBal, amtWit){
    accBal -= amtWit
    return accBal
}
let accountBal = 1000;
let withdrawAmt = 500;
let remainingBal = withdraw(accountBal, withdrawAmt)
let rb2 = withdraw(remainingBal, withdrawAmt)
console.log("Remaining bal : ", remainingBal)
console.log("Remaining bal : ",rb2)

//forEach

const nums = [1,2,3,4,5,6,7]

nums.forEach((n) =>{
    if(n%2 === 0){
        return;
    }
    console.log(n)
})
