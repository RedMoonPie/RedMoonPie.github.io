const GenerateSlide = (Slide) => {

    const slide = document.createElement('li');
    slide.classList.add('ele_container')
    slide.innerHTML = `
        <img class="elements" src=${Slide.cover}>
        <span class="slide_title" >${Slide.title}</span>
        
    `;
    return slide;
}