// sequential digits
// i/p : [100, 300]
// o/p: [123, 234]

function sequential(low, high){
    let s = '123456789'
    let res = [];

    for(let i = 0; i<s.length; i++){
        for(let j = i+1; j<s.length; j++){
            let num = parseInt(s.substring(i, j+1));
            console.log(num);
            if(num > high) break;
            if( num >= low) res.push(num);
        }
    }
    return res.sort((a,b) => a-b);
}

const range = sequential(10,20);
console.log(range);