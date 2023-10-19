// optimized code using pointer, array needs to be sorted
//[-5, -4, -3, -2, 0, 2, 4 , 6 , 8]
//[? , ?] print the first pair whose sum is equal to zero
//[-4,4] -> output
//here array is already sorted, if it wasn't then we first need to sort it
//logic: we will take the extreme left number and the extreme right number and sum them
//if sum > 0, then we will shift the right pointer towards left by one index,i.e, right--
//if sum < 0, then we will shift the left pointer left towards right by one index,i.e, left++

function findSumPair(array){
    left = 0;  //holding the leftmost number's index
    right = array.length - 1; //holding the rightmost number's index

    while(left < right){
        sum = array[left] + array[right] ;
        if(sum === 0){
            return [array[left] , array[right]];
        }else if(sum >= 0){
            right--;
        }else if(sum <= 0){
            left++; 
        }

        }
    }

    const sumPair = findSumPair([-5, -4, -3, -2, 0, 2, 4 , 6 , 8]);
    console.log(sumPair);


    //time complexity -> O(n)