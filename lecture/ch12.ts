// Narrowing
function myFunc10(a :string | undefined){
    if ( a && typeof a === 'string') {

    } 
}

// in 키워드로 narrowing
type FishType = { swim :string}
type BirdType = { fly :string }
function myFunc11(animal :FishType | BirdType){
    if ( 'swim' in animal ) {
        animal.swim
    }
}

let currentDate = new Date()
if (currentDate instanceof Date){

}

// literal type으로 narrowing
type Car2 = { wheel : '4개', color : string }
type Bike = { wheel : '2개', color : string }
function myFunc12(x :Car2 | Bike){
    if ( x.wheel === '4개' ){}
}

// never
// never vs void
// return이 없어야 함
// endpoint가 없어야함 => 1. throw new Error() 2. while (true)
// never type은 코드를 이상하게 짰을 때 return 되는 경우가 있음
function myFunc13(params :string){
    if (typeof params === 'string') {
        console.log(params)
    } else {
        console.log(params) // params type : never => 있을 수 없음
    }
}

let myFunc14 = function() {
    throw new Error()
}