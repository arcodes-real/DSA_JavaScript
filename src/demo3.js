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

// extracting subarrays
function subArray(arr){
    let subarrays = [];
    for(let s = 0; s<arr.length-1; s++){
        for(let l =s+1; l<=arr.length; l++){
             let subarray = arr.slice(s,l)
             subarrays.push(subarray)
        }
    }
    return subarrays;

    }
console.log(subArray([-2,1,-3,4,-1,2,1,-5,4]))

// Maximum subarray sum : Kadane's Algorithm
function maxSubarraySum(arr){
    let maxi = -Infinity;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(sum > maxi){
            maxi = sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return maxi
    
}
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]))



