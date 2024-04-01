// var a = 1;
// function data(){
//     if(!a){
//         var a =10;
//     }
//     console.log(a);
// }
// data();
// console.log(a);

const user = {
    department :{
        address :{
            country : "India"
        }
    }
}

// const {department : {address :{country:country}}} = user
// console.log(country)

const country = user?.department?.address?.country;
console.log(country)