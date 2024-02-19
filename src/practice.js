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

