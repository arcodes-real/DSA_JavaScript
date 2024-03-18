let c = 30;
function outer(){
    let a  = 10;
    console.log(a, this.b, c);
}
const objRef = {
    b : 20
};
outer.call(objRef)