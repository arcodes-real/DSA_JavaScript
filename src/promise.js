// Promise.all()

// const promise1 = Promise.resolve(3);
// const promise2 = 7999;
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve('foo')
//     }, 1000)
// })

// Promise.all([promise1, promise2, promise3]).then((value) =>{
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })

// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]).catch(err => console.log(err));

// const resolvedPromiseArray = [Promise.resolve(33), Promise.resolve(44)];

//  const p = Promise.all(resolvedPromiseArray);
// console.log(p);

// const user1 = {
//     username : "test",
//     followers : 0
// }

// const user2 = user1;
// user2.followers = ++user1.followers
// console.log(user2)


// 1) the password must be 8 or more characters long
// 2) it must contain characters from all categories : uppercase, lowercase, digits and special characters
// 3) it must contain no more than 20% of special characters
// 4) it cannot contain spaces, periods or commas
// 5) it cannot contain 3 or more sequential characters

function passwordValidator(password){

    // check for length
    if(password.length < 8){
        return false
    }
    // check for 3 or more sequential characters
    // check for spaces, periods and commas
    for(let j = 0; j<password.length; j++){
        let char = password[j]

        if((char === ',') || (char === '.') || (char === ' ')){
            return false;
        }
    }

    // check for uppercase, lowercase, digits and special character

        // regular expressions to check for upper and lower case
        // const upperCaseRegex = /[A-Z]/;
        // const lowerCaseRegex = /[a-z]/;
        // return upperCaseRegex.test(password) && lowerCaseRegex.test(password)

        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasDigits = false;
        let SpecialChar = 0;
        for(let i = 0; i<password.length; i++){
            let char = password[i]

            if(char >= 'A' && char <= 'Z'){
                hasUpperCase =true
            }
            else if(char >= 'a' && char <= 'z'){
                hasLowerCase = true
            }
            else if(!isNaN(parseInt(char))){
                hasDigits = true;
            }
            else{
                SpecialChar++
            }
        }
        // make sure pwd doesn't contain more than 20% of special characters
            console.log(SpecialChar)
           let totalCount = password.length;
           console.log(totalCount)
           let specialCharPercentage = (SpecialChar/totalCount)*100
           console.log(specialCharPercentage)

        // check if 3 or more characters are not sequential
            for(let l = 0; l <password.length-2; l++){
                if((password.charCodeAt(l)+1 === password.charCodeAt(l+1)) &&
                    (password.charCodeAt(l+1)+1 === password.charCodeAt(l+2))){
                        return false
                    }
            }

           if(hasUpperCase && hasLowerCase && hasDigits && specialCharPercentage <= 20){
            return true;
        }else{
            return false;
        }

        
}
console.log(passwordValidator("Password@2"));

