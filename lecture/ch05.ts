// type 선언
type Animal = string | number | undefined;
let tiger :Animal = '52';

type GirfriendType = {
    readonly name : string,
    age? : number
}

const soya2 :GirfriendType = {
    name : 'soya'
}

type NameType = string;
type AgeType = number
type Person = NameType | AgeType;

type PositionX = { x : number };
type PositionY = { y : number };
type PositionType = PositionX & PositionY

let position :PositionType = { x : 10, y : 20};

// 02
type HwType = { color? : string, size : number, readonly position : number[] }
