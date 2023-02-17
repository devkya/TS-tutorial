let member :number | string = 123;
let members :(number | string)[] = [1, 2, '3'];
let soya :{name : string | number } = { name : 'hyun'}

let com :any;
com = 123;
com = [];

//
let comm :unknown;
comm = 123;
comm = {};

// union type은 새로운 타입임 string != string | number
// 연산 되지 않음
let age :string = '123';
age + 1;

// H/W
// #01
let user :string = 'kim';
let agee :undefined | number = undefined;
let married :boolean = false;
let soyaya :(string|undefined|number|boolean)[] = [user, agee, married]

// #02
type School = {
    score : (number|boolean)[],
    teacher : string,
    friend : string | string[]
}

let school :School = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}

school.score[4] = false;
school.friend = ['Lee', school.teacher]



