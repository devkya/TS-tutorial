// interface
type RecType = {
    color : string,
    width : number,
}
interface Square {
    color : string,
    width : number,
}

let rectangle :RecType= {
    color : 'red',
    width : 100
}

// instance 장점 : extends 가능함
interface Student {
    name : string
}
interface Teacher extends Student {
    age : number,
}

let student :Student= { name : 'kim'}
let teacher1 :Teacher = { name : 'jung', age : 32 }

// 숙제1
interface Product {
    brand : string,
    serialNumber : number,
    model : string[],
}

let 상품 :Product= { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

// 숙제2
interface Cart {
    product : string,
    price : number,
}

let 장바구니 :Cart[]= [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

interface Cart2 extends Cart {
    card : boolean
}

// 숙제3 
interface MathObj {
    plus : (x :number, y :number) => number,
    minus : (x :number, y :number) => number,
}
let hw3 :MathObj= {
    plus : (x, y) => { return x + y },
    minus : (x, y) => { return x - y },
}