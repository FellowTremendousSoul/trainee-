const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      slides = document.querySelectorAll('.img');

/*
let index = 0;

const activeSlide = n => {
     console.log(n);
    for(slide of slides) {
        slide.classList.remove('big');
    }
    slides[n].classList.add('big');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    }else{
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    }else{
        index--;
        activeSlide(index);
    }
}


slides.forEach((item, index) => {
    item.addEventListener('click', () =>{
        activeSlide(index);
    })
});


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);*/


 let index = 0;

function Slide(arrow) {
    removeBig();
    switch (arrow) {
         case 'next':
            if(index == slides.length - 1) {
                index = 0;
                slides[index].classList.add('big');
            }else{
                index++;
                slides[index].classList.add('big');
            }
             break;
         case 'prev':
            if(index == 0) {
                index = slides.length - 1;
                slides[index].classList.add('big');
            }else{
                index--;
                slides[index].classList.add('big');
            }
             break;
     } 
}

function removeBig(){
    slides.forEach((item, i) => {
    slides[i].classList.remove('big');})
};

slides.forEach((item, index) => {
    item.addEventListener('click', () =>{
        removeBig();
        slides[index].classList.add('big');
    })
});


next.onclick = function(){
    Slide('next');
};
prev.onclick =function(){
    Slide('prev'); 
};
