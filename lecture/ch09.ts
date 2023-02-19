class Person {
    name :string;
    age :number;
    constructor(name :string, age :number) {
        this.name = name;
    }
    titlePrint(){
        console.log(`${this.name}님 접속하였습니다.`);
    }
}

class Car {
    model : string;
    price : number;
    constructor(model :string, price :number) {
        this.model = model;
        this.price = price;
    }

    tax() :number{
        return this.price / 10
    }
}

class Word {
    s :string[];
    n :number[];
    constructor(...params){
        let strArr :string[] = [];
        let numArr :number[] = [];
        params.forEach((param) => {
          if (typeof param === 'string'){
            strArr.push(param);
          }
          else { numArr.push(param)}
        })
        this.s = strArr;
        this.n = numArr;
    }
}