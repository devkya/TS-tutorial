// 함수에 타입 지정하는 법 & void 타입
function myFunction1(x) {
    return x * 2;
}
myFunction(3);
// return 값이 없을 때, void 사용
function myFunction(x) {
    x * 2;
}
var arrowFnction = function (x) {
    return x ^ 2;
};
function myFunction4(x) {
    console.log(x + 3);
}
// H/W
// 01
function printName(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log('이름이 없습니다.');
    }
}
// 02
function countVar(x) {
    return x.toString().length;
}
// 03
function isMarried(money, house, 매력) {
    var houseScore = house ? 500 : 0;
    var 매력점수 = 매력 === '상' ? 100 : 0;
    var result = money + houseScore + 매력점수;
    console.log(result);
    return result;
}
isMarried(100, true, '중');
