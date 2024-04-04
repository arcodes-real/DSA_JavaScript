// max number in a array without using any built-in methods

// const arr = [1,2,4,3,7,5,8,90,1000]

function findMax(arr){
    if(arr.length === 0){
        return undefined
    }
// assign the first element of the array to max
    let max = arr[0];

    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([1,2,4,3,7,5,8,90,1000]))



