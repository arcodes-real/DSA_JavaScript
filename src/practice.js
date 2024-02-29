// "ABCD EFGH" -> "DCBA HGFE"

function revString(str){
    let rev = ""
    for(let i = str.length-1; i>=0; i--){
        rev += str[i]
       
    }
    return rev
    
}

let input = "ABCD EFGH"
let reversed = revString(input);
let final = reversed.slice(5)+" "+reversed.slice(0,4);
console.log(final);


function check(){
    let name = "";
    let email = ""
    if(name === "" || email === ""){
        console.log("required")
        return
    }
    console.log("all done")
}
check();