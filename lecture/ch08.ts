// 타입스크립트로 HTML 변경과 조작
let title = document.querySelector('#title');

// 방법1
if (title != null){
    title.innerHTML = '반가워요!';
}

// 방법2
if (title instanceof Element){
    title.innerHTML = '반가워요!';
}

if (title?.innerHTML){
    title.innerHTML = '반가워요!';
}

let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement){
    link.href = 'http://kakao.com';
}

let btn = document.querySelector('#button');
if (btn instanceof HTMLButtonElement){
    btn.addEventListener('click', function() {})
}


// 숙제1
let chgBtn = document.querySelector('#chgBtn');
function chgFunc() :void{
    let chgImg = document.querySelector('#image')
    if (chgImg instanceof HTMLImageElement){
        chgImg.src = 'asset/image/test2.jpeg'
    }
}
if (chgBtn instanceof HTMLButtonElement){
    chgBtn.addEventListener('click', chgFunc)
}

// 숙제2
let links = document.querySelectorAll('.naver')
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement){
        link.href = 'https://kakao.com'
    }
})