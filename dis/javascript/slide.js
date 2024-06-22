const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slides = document.querySelector(' .slider')
const ptex = document.querySelector('.text')


const para = document.querySelectorAll('.para')
let textNumber = 1;
const length2 = ptex.length;

const images = document.querySelectorAll('.image')
let slideNumber = 1;
const length = images.length;

const nextSlide = ()=>{
    slides.style.transform = `translateX(-${slideNumber*40.9}vw)`;
    slideNumber++;
}

const priveSlide = ()=>{
    slides.style.transform = `translateX(-${(slideNumber-2)*40.9}vw)`;
    slideNumber--;
}

const firstSlide = ()=>{
    slides.style.transform = `translateX(0vw)`;
    slideNumber = 1;
}

const lastSlide = ()=>{
    slides.style.transform = `translateX(-${(length-1)*40.9}vw)`;
    slideNumber = length;
}

const tnextSlide = ()=>{
    ptex.style.transform = `translateX(-${textNumber*100}vw)`;
    textNumber++;
}

const tpriveSlide = ()=>{
    ptex.style.transform = `translateX(-${(textNumber-2)*100}vw)`;
    textNumber--;
}

const tfirstSlide = ()=>{
    ptex.style.transform = `translateX(0vw)`;
    textNumber = 1;
}

const tlastSlide = ()=>{
    ptex.style.transform = `translateX(-${(length2-1)*100}vw)`;
    textNumber = length;
}



right.addEventListener('click', () =>{
    slideNumber < length ? nextSlide() : firstSlide();   
});

left.addEventListener('click', () =>{
    slideNumber > 1 ? priveSlide() : lastSlide();   
});

right.addEventListener('click', () =>{
    textNumber < length ? tnextSlide() : tfirstSlide();   
});

left.addEventListener('click', () =>{
    textNumber > 1 ? tpriveSlide() : tlastSlide();   
});