const GenerateSlide = (Slide) => {

    const slide = document.createElement('li');
    slide.classList.add('ele_container')
    slide.innerHTML = `
        <img class="elements" src=${Slide.cover}>
        <span>${Slide.title}</span>
        
    `;
    return slide;
}