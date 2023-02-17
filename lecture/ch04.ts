// 타입 확정하기 Narrowing & Assertion
// typeof
function myFunc1(x :number | string){
    if (typeof x === 'string'){
        console.log(x + '1')
        return x + '1'
    }
    else { return x + 1}
}

myFunc1('123')

// in
// instanceof ...

// assertion
// 남발하면 안됨 => 
function myFunc2(x :number | string){
    let arr :number[] = [];
    arr[0] = x as number;
}

// H/W
// 01
function cleanFnc(x :(number|string)[]){
    let cleanData :number[] = [];

    x.forEach((d) => {
        if (typeof d === 'string'){
            cleanData.push(parseFloat(d))
        }
        else{
            cleanData.push(d)
        }
    })
    return cleanData
}

type Subject = {
    subject : string | string[]
}

let teacher :Subject = {'subject' : ['basketball']}

function lastSubject(subject :Subject) :string{
    if (Array.isArray(subject.subject)){
        return subject.subject[subject.subject.length - 1]
    }
    else {
        return subject.subject
    }
}

lastSubject(teacher)