type funcType = (a :string) => number;

let myFunc4 :funcType = function() {
    return 10
}

type 회원정보 = {
    name : string,
    plusOne : ( x :number ) => number,
    changeName : () => void
}

// callback function
function myFunc5(callback){
    callback()
}

function myFunc6(){

}

myFunc5(myFunc5)

//02
type cutZeroType = (x :string) => string;
let cutZero :cutZeroType = function(x) {
    let result = x.replace(/^0+/, '');
    return result
}

function removeDash(x :string) :number{
    let result = x.replace(/-/g, "")
    return parseFloat(result)
}

type FuncType1 = (a :string) => string;
type FuncType2 = (a :string) => number;
function 만들함수(a :string, func1 :FuncType1, func2 :FuncType2){
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2)
}
