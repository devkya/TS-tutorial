// 타입 확정하기 Narrowing & Assertion
// typeof
function myFunc1(x) {
    if (typeof x === 'string') {
        console.log(x + '1');
        return x + '1';
    }
    else {
        return x + 1;
    }
}
myFunc1('123');
// in
// instanceof ...
// assertion
// 남발하면 안됨 => 
function myFunc2(x) {
    var arr = [];
    arr[0] = x;
}
// H/W
// 01
function cleanFnc(x) {
    var cleanData = [];
    x.forEach(function (d) {
        if (typeof d === 'string') {
            cleanData.push(parseFloat(d));
        }
        else {
            cleanData.push(d);
        }
    });
    return cleanData;
}
var teacher = { 'subject': ['basketball'] };
function lastSubject(subject) {
    if (Array.isArray(subject.subject)) {
        return subject.subject[subject.subject.length - 1];
    }
    else {
        return subject.subject;
    }
}
lastSubject(teacher);
