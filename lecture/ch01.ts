// Declare Variable
let firstName :string= 'kim';
let nameArr :string[] = ['kim', 'park'];
let obj :{ name? : string } = {name : 'kim'};
let fruit :string | number = 'apple';

type MyType = string | number;
let animal :MyType = 123;

function myFunction12(x :number) :number{
    return x * 2
}

type Member = [number, boolean];
let john :Member = [123, true];

type Members = {
    [key :string] : string
}

let kiha :Members = {age : '28'}

class User {
    name :string;
    constructor(name :string){
        this.name = name;
        
    }
}