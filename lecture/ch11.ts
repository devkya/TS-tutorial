// rest parameter, destructuring
// 숙제1
function foundMax(...rest :number[]) :number{
    let maxNum :number= Math.max(...rest)
    console.log(maxNum);
    return maxNum
};

foundMax(1,2,3,4, 10, 6);

// 숙제2
type UserType = {user : string, comment : number[] , admin : boolean}
let hw :UserType= { user : 'kim', comment : [3,5,4], admin : false } 
function Hw22 ({user, comment, admin} :UserType) :void{
    console.log(user, comment, admin)
}

Hw22(hw)

// 숙제3
type ArrType = (number | string | boolean)[]
function Hw33 ([a, b, c] :ArrType) :void{
    console.log(a, b, c)
}
Hw33([40, 'wine', false])