//custom push

Array.prototype.myPush = function(...elements){
    for(let element of elements){
        this[this.length] = element
    }
    return this.length;
};

const arr = [1,2,3];
arr.myPush(4,5,6);
console.log(arr);

// CUSTOM LAST()

Array.prototype.last = function(){
    // if(this.length === 0){
    //     return -1;
    // }else{
    //     return this[this.length-1];
    // }

    return this.length===0? -1: this[this.length - 1];
    
}

const A = [1,2,3,5,6];
console.log(A.last());
