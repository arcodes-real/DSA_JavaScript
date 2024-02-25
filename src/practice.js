Array.prototype.myPush = function(...elements){
    for(let element of elements){
        this[this.length] = element
    }
    return this.length;
}

Array.prototype.myFilter = function(fn){
    let filtered = [];

    for(let i = 0; i<this.length; i++){
        if(fn(this[i],i)){
            filtered.push(this[i])
        }
    }
    return filtered
}

const arr = [1,2,3,4];
const filteredArr = arr.myFilter((num,index) => {return index === 1})
console.log(filteredArr)