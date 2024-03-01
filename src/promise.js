// Promise.all()

const promise1 = Promise.resolve(3);
const promise2 = 7999;
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('foo')
    }, 1000)
})

Promise.all([promise1, promise2, promise3]).then((value) =>{
    console.log(value)
}).catch((err) =>{
    console.log(err)
})

// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]).catch(err => console.log(err));