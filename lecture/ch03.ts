// 함수에 타입 지정하는 법 & void 타입
function myFunction1(x :number) :number{
    return x * 2;
}

myFunction(3);

// return 값이 없을 때, void 사용
function myFunction(x : number) :void{
    x * 2;
}

let arrowFnction = (x :number) :number => {
    return x ^ 2;
}


// H/W
// 01
function printName(name? :string){
    if (name) { console.log(`안녕하세요 ${name}`); }
    else { console.log('이름이 없습니다.')}
    
}

// 02
function countVar(x :number | string) :number{
    return x.toString().length
}

// 03
function isMarried(money :number, house :boolean, 매력 :string) :number{
    let houseScore :number = house ? 500 : 0;
    let 매력점수 :number = 매력 === '상' ? 100 : 0;
    let result :number = money + houseScore + 매력점수
    console.log(result)
    return result
}

isMarried(100, true, '중')